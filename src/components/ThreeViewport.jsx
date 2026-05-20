import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  BACKGROUND_PRESETS,
  MATERIAL_PRESETS,
} from "../lib/presets.js";

const SCREEN_WIDTH = 2.42;
const SCREEN_HEIGHT = 5.24;
const IPHONE_MODEL_URL = `${import.meta.env.BASE_URL}models/iphone-17-pro.glb`;
const IPHONE_MODEL_SCALE = 38;

const CAMERA_PRESETS = {
  front: {
    rotation: new THREE.Euler(0, 0, 0),
    camera: new THREE.Vector3(0, 0.16, 10.8),
  },
  hero: {
    rotation: new THREE.Euler(-0.16, 0.42, -0.06),
    camera: new THREE.Vector3(3.2, 1.8, 11.8),
  },
  isometric: {
    rotation: new THREE.Euler(-0.36, 0.64, -0.08),
    camera: new THREE.Vector3(4.5, 2.8, 12.2),
  },
  orbit: {
    rotation: new THREE.Euler(-0.12, -0.66, 0.04),
    camera: new THREE.Vector3(-3.6, 1.8, 11.8),
  },
};

function roundedRectShape(width, height, radius) {
  const x = -width / 2;
  const y = -height / 2;
  const shape = new THREE.Shape();

  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius,
    y + height,
  );
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);

  return shape;
}

function createRoundedBoxGeometry(width, height, depth, radius) {
  const geometry = new THREE.ExtrudeGeometry(roundedRectShape(width, height, radius), {
    depth,
    bevelEnabled: true,
    bevelSegments: 9,
    bevelSize: 0.05,
    bevelThickness: 0.035,
    curveSegments: 18,
  });
  geometry.center();
  return geometry;
}

function createRoundedPlaneGeometry(width, height, radius) {
  const geometry = new THREE.ShapeGeometry(
    roundedRectShape(width, height, radius),
    24,
  );
  const position = geometry.attributes.position;
  const uvs = [];

  for (let index = 0; index < position.count; index += 1) {
    const x = position.getX(index);
    const y = position.getY(index);
    uvs.push((x + width / 2) / width, (y + height / 2) / height);
  }

  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  return geometry;
}

function makeDefaultScreenTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 900;
  canvas.height = 1950;
  const context = canvas.getContext("2d");

  const background = context.createLinearGradient(0, 0, 900, 1950);
  background.addColorStop(0, "#0f172a");
  background.addColorStop(0.54, "#0e7490");
  background.addColorStop(1, "#e2e8f0");
  context.fillStyle = background;
  context.fillRect(0, 0, 900, 1950);

  context.fillStyle = "rgba(255, 255, 255, 0.18)";
  for (let i = 0; i < 6; i += 1) {
    context.beginPath();
    context.roundRect(90, 520 + i * 170, 720, 116, 34);
    context.fill();
  }

  context.fillStyle = "#ffffff";
  context.font = "700 72px Inter, system-ui, sans-serif";
  context.fillText("Mockup", 96, 330);
  context.font = "500 34px Inter, system-ui, sans-serif";
  context.fillText("Drop in an image or video", 96, 392);

  context.fillStyle = "rgba(255, 255, 255, 0.9)";
  context.beginPath();
  context.roundRect(96, 1560, 708, 180, 44);
  context.fill();
  context.fillStyle = "#0f172a";
  context.font = "700 42px Inter, system-ui, sans-serif";
  context.fillText("Ready to render", 146, 1660);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function applyCoverCrop(texture, imageWidth, imageHeight) {
  const targetAspect = SCREEN_WIDTH / SCREEN_HEIGHT;
  const imageAspect = imageWidth / imageHeight;

  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.offset.set(0, 0);
  texture.repeat.set(1, 1);

  if (imageAspect > targetAspect) {
    const visibleWidth = targetAspect / imageAspect;
    texture.repeat.x = visibleWidth;
    texture.offset.x = (1 - visibleWidth) / 2;
  } else {
    const visibleHeight = imageAspect / targetAspect;
    texture.repeat.y = visibleHeight;
    texture.offset.y = (1 - visibleHeight) / 2;
  }

  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 12;
  texture.needsUpdate = true;
}

function disposeMaterialResources(material, seenMaterials = new Set()) {
  const materials = Array.isArray(material) ? material : [material];

  materials.forEach((item) => {
    if (!item || seenMaterials.has(item)) return;
    seenMaterials.add(item);
    if (item.map) item.map.dispose();
    item.dispose();
  });
}

function disposeSceneResources(scene) {
  const seenGeometries = new Set();
  const seenMaterials = new Set();

  scene.traverse((object) => {
    if (object.geometry && !seenGeometries.has(object.geometry)) {
      seenGeometries.add(object.geometry);
      object.geometry.dispose();
    }

    if (object.material) {
      disposeMaterialResources(object.material, seenMaterials);
    }

    object.userData?.replacedMaterials?.forEach((material) => {
      disposeMaterialResources(material, seenMaterials);
    });
  });
}

function replaceImportedMaterial(model, object, material) {
  if (object.material && object.material !== material) {
    model.userData.replacedMaterials ??= new Set();
    const materials = Array.isArray(object.material)
      ? object.material
      : [object.material];
    materials.forEach((item) => model.userData.replacedMaterials.add(item));
  }

  object.material = material;
}

function normalizeImportedDisplayUvs(geometry) {
  const position = geometry.attributes.position;
  if (!position) return;

  geometry.computeBoundingBox();
  const { min, max } = geometry.boundingBox;
  const width = max.x - min.x || 1;
  const height = max.y - min.y || 1;
  const uvs = [];

  for (let index = 0; index < position.count; index += 1) {
    const x = position.getX(index);
    const y = position.getY(index);
    uvs.push((x - min.x) / width, (y - min.y) / height);
  }

  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.attributes.uv.needsUpdate = true;
}

function addImportedScreenCutouts(model) {
  const cutoutMaterial = new THREE.MeshBasicMaterial({
    color: "#050507",
    side: THREE.DoubleSide,
    toneMapped: false,
  });

  const island = new THREE.Mesh(
    createRoundedPlaneGeometry(0.0102, 0.0034, 0.0017),
    cutoutMaterial,
  );
  island.name = "Screen island fill";
  island.position.set(-0.0036, 0.06715, 0.00474);
  island.renderOrder = 5;

  const camera = new THREE.Mesh(
    new THREE.CircleGeometry(0.0019, 48),
    cutoutMaterial,
  );
  camera.name = "Screen camera fill";
  camera.position.set(0.00735, 0.06715, 0.00475);
  camera.renderOrder = 5;

  model.add(island, camera);
}

function installImportedPhoneModel(model, materials) {
  model.name = "iPhone 17 Pro GLB";
  model.scale.setScalar(IPHONE_MODEL_SCALE);

  model.traverse((object) => {
    if (!object.isMesh) return;

    object.castShadow = true;
    object.receiveShadow = true;

    const materialNames = Array.isArray(object.material)
      ? object.material.map((material) => material?.name).filter(Boolean)
      : [object.material?.name].filter(Boolean);

    if (object.name === "Cube004_2" || materialNames.includes("Display")) {
      normalizeImportedDisplayUvs(object.geometry);
      replaceImportedMaterial(model, object, materials.screen);
      object.renderOrder = 2;
      return;
    }

    if (materialNames.includes("Glass")) {
      replaceImportedMaterial(model, object, materials.glass);
      object.renderOrder = 3;
    }
  });

  addImportedScreenCutouts(model);
}

function makePhone() {
  const group = new THREE.Group();

  const bodyMaterial = new THREE.MeshPhysicalMaterial({
    color: "#161a20",
    clearcoat: 0.92,
    clearcoatRoughness: 0.22,
    metalness: 0.82,
    roughness: 0.2,
  });
  const edgeMaterial = new THREE.MeshPhysicalMaterial({
    color: "#2d343d",
    clearcoat: 0.72,
    clearcoatRoughness: 0.18,
    metalness: 0.88,
    roughness: 0.18,
  });
  const darkGlassMaterial = new THREE.MeshPhysicalMaterial({
    color: "#05070b",
    clearcoat: 1,
    clearcoatRoughness: 0.045,
    metalness: 0,
    roughness: 0.08,
  });
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: "#ffffff",
    transparent: true,
    opacity: 0.16,
    depthWrite: false,
    clearcoat: 1,
    clearcoatRoughness: 0.04,
    metalness: 0,
    roughness: 0.05,
    side: THREE.DoubleSide,
  });

  const body = new THREE.Mesh(
    createRoundedBoxGeometry(2.82, 5.78, 0.32, 0.44),
    bodyMaterial,
  );
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);

  const frontBezel = new THREE.Mesh(
    createRoundedPlaneGeometry(2.62, 5.5, 0.34),
    darkGlassMaterial,
  );
  frontBezel.position.z = 0.224;
  frontBezel.castShadow = true;

  const metalRim = new THREE.Mesh(
    createRoundedPlaneGeometry(2.74, 5.66, 0.4),
    edgeMaterial,
  );
  metalRim.position.z = 0.218;
  metalRim.castShadow = true;
  group.add(metalRim);
  group.add(frontBezel);

  const screenMaterial = new THREE.MeshBasicMaterial({
    map: makeDefaultScreenTexture(),
    side: THREE.DoubleSide,
    toneMapped: false,
  });
  const screen = new THREE.Mesh(
    createRoundedPlaneGeometry(SCREEN_WIDTH, SCREEN_HEIGHT, 0.27),
    screenMaterial,
  );
  screen.position.z = 0.236;
  screen.castShadow = false;
  group.add(screen);

  const glass = new THREE.Mesh(
    createRoundedPlaneGeometry(SCREEN_WIDTH, SCREEN_HEIGHT, 0.27),
    glassMaterial,
  );
  glass.position.z = 0.245;
  group.add(glass);

  const islandMaterial = new THREE.MeshPhysicalMaterial({
    color: "#020306",
    clearcoat: 1,
    clearcoatRoughness: 0.03,
    metalness: 0,
    roughness: 0.04,
  });
  const dynamicIsland = new THREE.Mesh(
    createRoundedBoxGeometry(0.66, 0.19, 0.035, 0.095),
    islandMaterial,
  );
  dynamicIsland.position.set(0, 2.36, 0.272);
  dynamicIsland.castShadow = true;
  group.add(dynamicIsland);

  const lensMaterial = new THREE.MeshPhysicalMaterial({
    color: "#070a0f",
    clearcoat: 1,
    clearcoatRoughness: 0.02,
    roughness: 0.1,
    metalness: 0.08,
  });

  const selfieLens = new THREE.Mesh(
    new THREE.CylinderGeometry(0.038, 0.038, 0.014, 36),
    lensMaterial,
  );
  selfieLens.rotation.x = Math.PI / 2;
  selfieLens.position.set(0.22, 2.36, 0.294);
  group.add(selfieLens);

  const speaker = new THREE.Mesh(
    createRoundedPlaneGeometry(0.34, 0.032, 0.016),
    new THREE.MeshBasicMaterial({ color: "#1b222c", transparent: true, opacity: 0.86 }),
  );
  speaker.position.set(-0.08, 2.36, 0.296);
  group.add(speaker);

  const homeIndicator = new THREE.Mesh(
    createRoundedPlaneGeometry(0.58, 0.035, 0.017),
    new THREE.MeshBasicMaterial({ color: "#ffffff", transparent: true, opacity: 0.76 }),
  );
  homeIndicator.position.set(0, -2.34, 0.278);
  group.add(homeIndicator);

  const glassGlint = new THREE.Mesh(
    createRoundedPlaneGeometry(0.08, 4.4, 0.04),
    new THREE.MeshBasicMaterial({ color: "#ffffff", transparent: true, opacity: 0.14 }),
  );
  glassGlint.position.set(-0.94, 0.12, 0.282);
  glassGlint.rotation.z = -0.08;
  group.add(glassGlint);

  const buttonMaterial = edgeMaterial.clone();
  [
    [-1.45, 1.45, 0.22],
    [-1.45, 0.86, 0.34],
    [-1.45, 0.38, 0.34],
    [1.45, 0.78, 0.48],
  ].forEach(([x, y, h]) => {
    const button = new THREE.Mesh(
      new THREE.BoxGeometry(0.045, h, 0.072),
      buttonMaterial,
    );
    button.position.set(x, y, 0.015);
    button.castShadow = true;
    group.add(button);
  });

  return {
    group,
    materials: {
      body: bodyMaterial,
      edge: edgeMaterial,
      glass: glassMaterial,
      screen: screenMaterial,
    },
  };
}

const ThreeViewport = forwardRef(function ThreeViewport(
  {
    screenMedia,
    settings,
    onDragStart,
    onDragEnd,
    onMediaError,
    onMediaReady,
    onPlaybackStateChange,
  },
  ref,
) {
  const hostRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const phoneRef = useRef(null);
  const materialsRef = useRef(null);
  const lightsRef = useRef(null);
  const floorRef = useRef(null);
  const targetRotationRef = useRef(new THREE.Euler());
  const targetCameraRef = useRef(new THREE.Vector3());
  const settingsRef = useRef(settings);
  const dragRef = useRef({ active: false, x: 0, y: 0 });
  const [modelSource, setModelSource] = useState("procedural");

  useImperativeHandle(ref, () => ({
    exportPng() {
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current) {
        return null;
      }
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      return rendererRef.current.domElement.toDataURL("image/png");
    },
    resetView() {
      const preset = CAMERA_PRESETS[settingsRef.current.angle];
      targetRotationRef.current.copy(preset.rotation);
      targetCameraRef.current.copy(preset.camera);
    },
  }));

  useEffect(() => {
    settingsRef.current = settings;
  }, [settings]);

  useEffect(() => {
    const host = hostRef.current;
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      preserveDrawingBuffer: true,
    });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    const { group, materials } = makePhone();
    const ambient = new THREE.HemisphereLight("#ffffff", "#a8b8c6", 1.8);
    const key = new THREE.DirectionalLight("#ffffff", 4.6);
    const rim = new THREE.DirectionalLight("#bdefff", 2.2);
    const fill = new THREE.PointLight("#ffffff", 1.2, 12);
    const floorMaterial = new THREE.ShadowMaterial({
      color: "#1f2937",
      opacity: 0.18,
    });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), floorMaterial);
    let disposed = false;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.className = "render-canvas";
    renderer.domElement.setAttribute("aria-label", "3D device render");
    host.appendChild(renderer.domElement);

    key.position.set(3.8, 4.8, 4.8);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    rim.position.set(-4.2, 2.6, 3.4);
    fill.position.set(0, 2.2, 4.5);

    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2.74;
    floor.receiveShadow = true;

    group.position.y = 0.02;
    group.scale.setScalar(0.9);
    group.userData.proceduralChildren = [...group.children];
    scene.add(ambient, key, rim, fill, group, floor);

    const modelLoader = new GLTFLoader();
    modelLoader.load(
      IPHONE_MODEL_URL,
      (gltf) => {
        if (disposed) {
          disposeSceneResources(gltf.scene);
          return;
        }

        installImportedPhoneModel(gltf.scene, materials);
        group.userData.proceduralChildren.forEach((child) => {
          child.visible = false;
        });
        group.add(gltf.scene);
        setModelSource("iphone-17-pro-glb");
      },
      undefined,
      () => {
        if (!disposed) setModelSource("procedural-fallback");
      },
    );

    const initialPreset = CAMERA_PRESETS[settings.angle];
    group.rotation.copy(initialPreset.rotation);
    camera.position.copy(initialPreset.camera);
    targetRotationRef.current.copy(initialPreset.rotation);
    targetCameraRef.current.copy(initialPreset.camera);
    camera.lookAt(0, 0, 0);

    rendererRef.current = renderer;
    sceneRef.current = scene;
    cameraRef.current = camera;
    phoneRef.current = group;
    materialsRef.current = materials;
    lightsRef.current = { ambient, key, rim, fill };
    floorRef.current = floor;

    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    const onPointerDown = (event) => {
      dragRef.current = { active: true, x: event.clientX, y: event.clientY };
      renderer.domElement.setPointerCapture(event.pointerId);
      onDragStart?.();
    };

    const onPointerMove = (event) => {
      if (!dragRef.current.active) return;
      const dx = event.clientX - dragRef.current.x;
      const dy = event.clientY - dragRef.current.y;
      dragRef.current.x = event.clientX;
      dragRef.current.y = event.clientY;
      targetRotationRef.current.y += dx * 0.009;
      targetRotationRef.current.x = THREE.MathUtils.clamp(
        targetRotationRef.current.x + dy * 0.006,
        -0.82,
        0.52,
      );
    };

    const onPointerUp = (event) => {
      dragRef.current.active = false;
      renderer.domElement.releasePointerCapture(event.pointerId);
      onDragEnd?.();
    };

    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerup", onPointerUp);
    renderer.domElement.addEventListener("pointercancel", onPointerUp);
    renderer.domElement.style.touchAction = "none";

    let animationFrame = 0;
    const animate = () => {
      const activeSettings = settingsRef.current;

      if (activeSettings.autoSpin && !dragRef.current.active) {
        targetRotationRef.current.y += 0.006;
      }

      group.rotation.x += (targetRotationRef.current.x - group.rotation.x) * 0.08;
      group.rotation.y += (targetRotationRef.current.y - group.rotation.y) * 0.08;
      group.rotation.z += (targetRotationRef.current.z - group.rotation.z) * 0.08;
      camera.position.lerp(targetCameraRef.current, 0.045);
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("pointerup", onPointerUp);
      renderer.domElement.removeEventListener("pointercancel", onPointerUp);
      host.removeChild(renderer.domElement);
      renderer.dispose();
      disposeSceneResources(scene);
    };
  }, [onDragEnd, onDragStart]);

  useEffect(() => {
    const preset = CAMERA_PRESETS[settings.angle];
    targetRotationRef.current.copy(preset.rotation);
    const depthOffset = (settings.depth - 50) / 100;
    targetCameraRef.current.copy(preset.camera).multiplyScalar(1 - depthOffset * 0.08);
  }, [settings.angle, settings.depth]);

  useEffect(() => {
    const materials = materialsRef.current;
    const lights = lightsRef.current;
    const scene = sceneRef.current;
    const renderer = rendererRef.current;
    const floor = floorRef.current;
    if (!materials || !lights || !scene || !renderer || !floor) return;

    const material = MATERIAL_PRESETS.find((item) => item.id === settings.material);
    const background =
      BACKGROUND_PRESETS.find((item) => item.id === settings.background) ??
      BACKGROUND_PRESETS[0];

    materials.body.color.set(material.body);
    materials.body.metalness = material.metalness;
    materials.body.roughness = material.roughness;
    materials.edge.color.set(material.edge);
    materials.glass.opacity = 0.1 + settings.reflection / 420;
    materials.glass.clearcoatRoughness = Math.max(
      0.02,
      0.18 - settings.reflection / 700,
    );

    lights.key.intensity = 1.5 + settings.lighting / 18;
    lights.rim.intensity = 0.4 + settings.reflection / 34;
    lights.fill.intensity = 0.55 + settings.lighting / 110;
    floor.material.opacity = 0.06 + settings.shadow / 320;
    floor.material.needsUpdate = true;

    const clear = new THREE.Color(background.clear);
    scene.background = clear;
    renderer.setClearColor(clear, 1);
  }, [
    settings.background,
    settings.lighting,
    settings.material,
    settings.reflection,
    settings.shadow,
  ]);

  useEffect(() => {
    const screenMaterial = materialsRef.current?.screen;
    if (!screenMaterial) return undefined;

    let cancelled = false;
    let videoElement = null;

    const setTexture = (texture, width, height) => {
      if (cancelled) {
        texture.dispose();
        return;
      }

      applyCoverCrop(texture, width, height);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;

      if (screenMaterial.map) screenMaterial.map.dispose();
      screenMaterial.map = texture;
      screenMaterial.needsUpdate = true;
    };

    if (!screenMedia) {
      setTexture(makeDefaultScreenTexture(), 900, 1950);
      onMediaReady?.();
      return () => {
        cancelled = true;
      };
    }

    if (screenMedia.kind === "image") {
      const loader = new THREE.TextureLoader();
      loader.load(
        screenMedia.url,
        (texture) => {
          const image = texture.image;
          setTexture(
            texture,
            image.naturalWidth || image.width,
            image.naturalHeight || image.height,
          );
          onMediaReady?.();
        },
        undefined,
        () => onMediaError?.(),
      );

      return () => {
        cancelled = true;
      };
    }

    videoElement = document.createElement("video");
    videoElement.src = screenMedia.url;
    videoElement.crossOrigin = "anonymous";
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.playsInline = true;
    videoElement.autoplay = true;
    videoElement.preload = "auto";

    const setVideoTexture = () => {
      const width = videoElement.videoWidth || 1080;
      const height = videoElement.videoHeight || 1920;
      const texture = new THREE.VideoTexture(videoElement);
      texture.generateMipmaps = false;
      setTexture(texture, width, height);

      videoElement.play().catch(() => {
        onPlaybackStateChange?.("paused");
      });
    };

    const handlePlaying = () => onPlaybackStateChange?.("playing");
    const handlePause = () => {
      if (!cancelled) onPlaybackStateChange?.("paused");
    };
    const handleError = () => onMediaError?.();

    videoElement.addEventListener("loadedmetadata", setVideoTexture, { once: true });
    videoElement.addEventListener("playing", handlePlaying);
    videoElement.addEventListener("pause", handlePause);
    videoElement.addEventListener("error", handleError);
    videoElement.load();

    return () => {
      cancelled = true;
      videoElement.removeEventListener("loadedmetadata", setVideoTexture);
      videoElement.removeEventListener("playing", handlePlaying);
      videoElement.removeEventListener("pause", handlePause);
      videoElement.removeEventListener("error", handleError);
      videoElement.pause();
      videoElement.removeAttribute("src");
      videoElement.load();
    };
  }, [
    onMediaError,
    onMediaReady,
    onPlaybackStateChange,
    screenMedia,
  ]);

  return (
    <div
      className="viewport-host"
      data-model-source={modelSource}
      data-screen-kind={screenMedia?.kind ?? "default"}
      ref={hostRef}
    />
  );
});

export default ThreeViewport;
