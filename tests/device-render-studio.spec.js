import { expect, test } from "@playwright/test";

const PNG_BUFFER = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAEAAAAB4CAIAAADbxRsTAAAAtklEQVR4nO3ZQQqAIBBAwfn/X7qHggVtYrOQUFDgTWcQRtANMwAAAAAAAAAA4L8qXkT9b92r6HOs/nH7T6v3mN7nh2Zg+PcGwOzLcDSVzw3Au3pIAIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIg+JXPZ1r6mZqL9atn2mtz2beV2wL5Qv8dbAERERERERERERERERERERERERERERERERERERERERERERH4C8xMDDF1Iq44AAAAASUVORK5CYII=",
  "base64",
);

async function makeWebmFixture(page) {
  const bytes = await page.evaluate(async () => {
    const canvas = document.createElement("canvas");
    canvas.width = 96;
    canvas.height = 208;
    const context = canvas.getContext("2d");
    const stream = canvas.captureStream(12);
    const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp8")
      ? "video/webm;codecs=vp8"
      : "video/webm";
    const recorder = new MediaRecorder(stream, { mimeType });
    const chunks = [];

    recorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) chunks.push(event.data);
    });

    const stopped = new Promise((resolve) => {
      recorder.addEventListener("stop", resolve, { once: true });
    });

    recorder.start();

    for (let frame = 0; frame < 10; frame += 1) {
      const gradient = context.createLinearGradient(0, 0, 96, 208);
      gradient.addColorStop(0, frame % 2 === 0 ? "#087bff" : "#0f172a");
      gradient.addColorStop(1, frame % 2 === 0 ? "#f97316" : "#22c55e");
      context.fillStyle = gradient;
      context.fillRect(0, 0, 96, 208);
      context.fillStyle = "rgba(255,255,255,0.86)";
      context.fillRect(16 + frame * 3, 42, 36, 36);
      await new Promise((resolve) => setTimeout(resolve, 70));
    }

    recorder.stop();
    await stopped;
    stream.getTracks().forEach((track) => track.stop());

    const blob = new Blob(chunks, { type: mimeType });
    return Array.from(new Uint8Array(await blob.arrayBuffer()));
  });

  return Buffer.from(bytes);
}

async function measureViewport(page) {
  return page.evaluate(() => {
    const canvas = document.querySelector(".render-canvas").getBoundingClientRect();
    const shell = document.querySelector(".viewport-shell").getBoundingClientRect();

    return {
      canvas: {
        x: canvas.x,
        y: canvas.y,
        width: canvas.width,
        height: canvas.height,
      },
      shell: {
        x: shell.x,
        y: shell.y,
        width: shell.width,
        height: shell.height,
      },
    };
  });
}

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Device Render Studio");
  await expect(page.getByText("Device Render Studio")).toBeVisible();
  await expect(page.locator(".render-canvas")).toBeVisible();
});

test("maps uploaded image and playing video files onto the device screen", async ({ page }) => {
  const fileInput = page.locator('input[type="file"]');

  await fileInput.setInputFiles({
    name: "screen.png",
    mimeType: "image/png",
    buffer: PNG_BUFFER,
  });

  await expect(page.getByText("screen.png")).toBeVisible();
  await expect(page.getByText("Image ready")).toBeVisible();
  await expect(page.locator(".viewport-host")).toHaveAttribute("data-screen-kind", "image");

  const videoBuffer = await makeWebmFixture(page);

  await fileInput.setInputFiles({
    name: "motion.webm",
    mimeType: "video/webm",
    buffer: videoBuffer,
  });

  await expect(page.getByText("motion.webm")).toBeVisible();
  await expect(page.getByText("Video playing")).toBeVisible();
  await expect(page.locator(".viewport-host")).toHaveAttribute("data-screen-kind", "video");
});

test("hovering toolbar controls does not shift the render viewport", async ({ page }) => {
  const before = await measureViewport(page);

  await page.getByRole("button", { name: /import/i }).hover();
  const afterImportHover = await measureViewport(page);
  await page.getByRole("button", { name: /export png/i }).hover();
  const afterExportHover = await measureViewport(page);

  expect(afterImportHover).toEqual(before);
  expect(afterExportHover).toEqual(before);
});
