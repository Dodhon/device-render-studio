import { expect, test } from "@playwright/test";

async function makePngFixture(page) {
  const bytes = await page.evaluate(async () => {
    const canvas = document.createElement("canvas");
    canvas.width = 360;
    canvas.height = 780;
    const context = canvas.getContext("2d");

    context.fillStyle = "#ff0033";
    context.fillRect(0, 0, 360, 260);
    context.fillStyle = "#00c853";
    context.fillRect(0, 260, 360, 260);
    context.fillStyle = "#2962ff";
    context.fillRect(0, 520, 360, 260);
    context.fillStyle = "#ffffff";
    context.font = "700 64px sans-serif";
    context.fillText("APP", 112, 150);
    context.fillText("ON", 134, 430);
    context.fillText("SCREEN", 54, 690);

    const response = await fetch(canvas.toDataURL("image/png"));
    return Array.from(new Uint8Array(await response.arrayBuffer()));
  });

  return Buffer.from(bytes);
}

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

async function canvasSignature(page) {
  await page.waitForTimeout(140);

  return page.evaluate(() => {
    const canvas = document.querySelector(".render-canvas");
    const sample = document.createElement("canvas");
    const context = sample.getContext("2d", { willReadFrequently: true });
    sample.width = 80;
    sample.height = 80;
    context.drawImage(canvas, 0, 0, sample.width, sample.height);

    const data = context.getImageData(0, 0, sample.width, sample.height).data;
    let hash = 2166136261;

    for (let index = 0; index < data.length; index += 4) {
      hash ^= data[index];
      hash = Math.imul(hash, 16777619);
      hash ^= data[index + 1];
      hash = Math.imul(hash, 16777619);
      hash ^= data[index + 2];
      hash = Math.imul(hash, 16777619);
    }

    return hash >>> 0;
  });
}

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Device Render Studio");
  await expect(page.getByText("Device Render Studio")).toBeVisible();
  await expect(page.locator(".render-canvas")).toBeVisible();
  await expect(page.locator(".viewport-host")).toHaveAttribute(
    "data-model-source",
    "iphone-17-pro-glb",
    { timeout: 15_000 },
  );
});

test("serves the credited iPhone GLB model", async ({ page }) => {
  const response = await page.request.get("/models/iphone-17-pro.glb");
  const body = await response.body();

  expect(response.ok()).toBeTruthy();
  expect(body.length).toBeGreaterThan(1_000_000);
});

test("maps uploaded image and playing video files onto the device screen", async ({ page }) => {
  const fileInput = page.locator('input[type="file"]');
  const defaultSignature = await canvasSignature(page);
  const imageBuffer = await makePngFixture(page);

  await fileInput.setInputFiles({
    name: "screen.png",
    mimeType: "image/png",
    buffer: imageBuffer,
  });

  await expect(page.getByText("screen.png")).toBeVisible();
  await expect(page.getByText("Image ready")).toBeVisible();
  await expect(page.locator(".viewport-host")).toHaveAttribute("data-screen-kind", "image");
  await expect
    .poll(() => canvasSignature(page), {
      timeout: 5_000,
      message: "uploaded image should alter the visible render",
    })
    .not.toBe(defaultSignature);

  const videoBuffer = await makeWebmFixture(page);

  await fileInput.setInputFiles({
    name: "motion.webm",
    mimeType: "video/webm",
    buffer: videoBuffer,
  });

  await expect(page.getByText("motion.webm")).toBeVisible();
  await expect(page.getByText("Video playing")).toBeVisible();
  await expect(page.locator(".viewport-host")).toHaveAttribute("data-screen-kind", "video");

  const videoSignatures = [
    await canvasSignature(page),
    await canvasSignature(page),
    await canvasSignature(page),
  ];
  expect(new Set(videoSignatures).size).toBeGreaterThan(1);
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
