import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Box,
  Camera,
  Check,
  CheckCircle2,
  Download,
  Image,
  ImageUp,
  MousePointer2,
  PlayCircle,
  SlidersHorizontal,
  Video,
  Wand2,
} from "lucide-react";
import Inspector from "./components/Inspector.jsx";
import ThreeViewport from "./components/ThreeViewport.jsx";
import Toolbar from "./components/Toolbar.jsx";
import { ANGLE_PRESETS, INITIAL_SETTINGS } from "./lib/presets.js";

function PresetRail({ activeAngle, renderMode, onPreset }) {
  const RenderModeIcon = renderMode === "video" ? Video : Image;

  return (
    <div className="preset-rail" aria-label="Angle presets">
      <div className="rail-status">
        <span className="ready-dot" />
        <div>
          <strong>Ready</strong>
          <span>Realtime preview</span>
        </div>
      </div>

      <div className="preset-list">
        {ANGLE_PRESETS.map((preset) => (
          <button
            key={preset.id}
            type="button"
            className={preset.id === activeAngle ? "preset-tile selected" : "preset-tile"}
            onClick={() => onPreset(preset.id)}
          >
            <span className="preset-glyph">
              <Camera size={16} />
            </span>
            <span>{preset.label}</span>
          </button>
        ))}
      </div>

      <div className="rail-meta">
        <span>
          <RenderModeIcon size={15} />
          {renderMode === "video" ? "Video" : "Image"}
        </span>
        <span>
          <Download size={15} />
          PNG
        </span>
      </div>
    </div>
  );
}

function getToolbarStatus(screenMedia, playbackState) {
  if (!screenMedia) return "Ready";
  if (screenMedia.kind === "image") return "Image ready";
  if (playbackState === "playing") return "Video playing";
  if (playbackState === "error") return "Video issue";
  if (playbackState === "paused") return "Video paused";
  return "Video loading";
}

function LandingNav() {
  return (
    <header className="landing-nav">
      <a className="landing-brand" href="#top" aria-label="Device Render Studio home">
        <span className="landing-brand-mark" aria-hidden="true">
          <Box size={20} strokeWidth={2.2} />
        </span>
        <strong>Device Render Studio</strong>
      </a>
      <nav className="landing-links" aria-label="Landing page">
        <a href="#product">Product</a>
        <a href="#workflow">Workflow</a>
        <a href="#features">Features</a>
        <a href="#launch">Pricing</a>
      </nav>
      <a className="nav-cta" href="#studio">
        Open Studio
      </a>
    </header>
  );
}

function HeroStudioPreview({
  screenMedia,
  settings,
  onDragStart,
  onDragEnd,
  onMediaError,
  onMediaReady,
  onPlaybackStateChange,
}) {
  return (
    <div className="hero-product" id="product" aria-label="Product preview">
      <div className="browser-frame">
        <div className="browser-top">
          <span className="traffic red" />
          <span className="traffic yellow" />
          <span className="traffic green" />
          <span className="browser-url">studio.devicerender.app</span>
          <span className="browser-action">
            <Download size={15} />
          </span>
        </div>
        <div className="preview-workbench">
          <aside className="preview-sidebar dark">
            <strong>Content</strong>
            <div className="upload-target">
              <ImageUp size={18} />
              <span>Drop screenshot or video</span>
            </div>
            <div className="preview-field">
              <span>Scene</span>
              <strong>Soft Studio</strong>
            </div>
            <div className="preview-field">
              <span>Angle</span>
              <strong>{ANGLE_PRESETS.find((preset) => preset.id === settings.angle)?.label}</strong>
            </div>
          </aside>
          <div className="preview-canvas">
            <ThreeViewport
              screenMedia={screenMedia}
              settings={settings}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
              onMediaError={onMediaError}
              onMediaReady={onMediaReady}
              onPlaybackStateChange={onPlaybackStateChange}
            />
          </div>
          <aside className="preview-sidebar">
            <strong>Device</strong>
            <div className="preview-device-row">
              <span className="device-thumb" />
              <div>
                <span>iPhone 17 Pro</span>
                <small>Graphite</small>
              </div>
            </div>
            <div className="preview-light-grid">
              <span className="selected">Soft</span>
              <span>Natural</span>
              <span>High Key</span>
              <span>Dramatic</span>
            </div>
            <button className="preview-export" type="button">
              <Download size={15} />
              Export PNG
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Hero({
  screenMedia,
  settings,
  onDragStart,
  onDragEnd,
  onMediaError,
  onMediaReady,
  onPlaybackStateChange,
}) {
  return (
    <section className="hero-section" aria-label="Device Render Studio landing">
      <div className="hero-copy">
        <h1>Create app mockups that look ready to ship</h1>
        <p>
          Drop in a screenshot or video, adjust the scene, and export crisp
          device renders for launch pages, ads, app stores, and socials.
        </p>
        <div className="hero-actions">
          <a className="hero-button primary-action" href="#studio">
            <ArrowUpRight size={18} />
            Open Studio
          </a>
          <a className="hero-button secondary-action" href="#workflow">
            <PlayCircle size={18} />
            See workflow
          </a>
        </div>
        <div className="hero-proof" aria-label="Product proof">
          <span>
            <CheckCircle2 size={16} />
            Browser-based
          </span>
          <span>
            <CheckCircle2 size={16} />
            Image and video screens
          </span>
          <span>
            <CheckCircle2 size={16} />
            PNG export
          </span>
        </div>
      </div>

      <HeroStudioPreview
        screenMedia={screenMedia}
        settings={settings}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onMediaError={onMediaError}
        onMediaReady={onMediaReady}
        onPlaybackStateChange={onPlaybackStateChange}
      />
    </section>
  );
}

function WorkflowSection() {
  const steps = [
    {
      title: "Import",
      text: "Upload a screenshot or short product video.",
      icon: ImageUp,
    },
    {
      title: "Adjust",
      text: "Choose angles, lighting, device finish, and background.",
      icon: SlidersHorizontal,
    },
    {
      title: "Export",
      text: "Download a polished PNG render from the canvas.",
      icon: Download,
    },
  ];

  return (
    <section className="workflow-band" id="workflow" aria-label="Simple workflow">
      <h2>A simple workflow</h2>
      <div className="workflow-list">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <article className="workflow-step" key={step.title}>
              <span className="step-icon">
                <Icon size={21} />
              </span>
              <span className="step-count">Step {index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "Screenshots and videos",
      text: "Map static images or moving screen captures onto the device display.",
      icon: PlayCircle,
    },
    {
      title: "Real 3D devices",
      text: "Orbit the model, change angles, and tune depth without opening Blender.",
      icon: Box,
    },
    {
      title: "Lighting presets",
      text: "Use reflection, shadow, key light, and background controls from one panel.",
      icon: Wand2,
    },
    {
      title: "Fast PNG export",
      text: "Capture the current scene for websites, launch posts, and app store assets.",
      icon: Image,
    },
  ];

  return (
    <section className="feature-section" id="features" aria-label="Product features">
      <div className="feature-copy">
        <h2>Built for product visuals that need to convert</h2>
        <p>
          The goal is not a full 3D suite. It is a focused render workflow that
          helps teams turn raw app screens into polished marketing assets.
        </p>
      </div>
      <div className="feature-grid">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article className="feature-card" key={feature.title}>
              <span className="feature-icon">
                <Icon size={20} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function LaunchSection() {
  return (
    <section className="launch-section" id="launch" aria-label="Launch pricing">
      <div>
        <h2>Launch pricing</h2>
        <p>
          Early access will start with a simple creator plan before team
          libraries, templates, and cloud rendering.
        </p>
      </div>
      <form className="waitlist-form">
        <label className="visually-hidden" htmlFor="waitlist-email">
          Email address
        </label>
        <input id="waitlist-email" type="email" placeholder="you@company.com" />
        <button type="button">Join waitlist</button>
      </form>
    </section>
  );
}

function App() {
  const [screenMedia, setScreenMedia] = useState(null);
  const [screenLabel, setScreenLabel] = useState("Demo screen");
  const [playbackState, setPlaybackState] = useState("ready");
  const [settings, setSettings] = useState(INITIAL_SETTINGS);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const viewportRef = useRef(null);

  const updateSetting = (key, value) => {
    setSettings((current) => ({ ...current, [key]: value }));
  };

  useEffect(() => {
    return () => {
      if (screenMedia?.url?.startsWith("blob:")) {
        URL.revokeObjectURL(screenMedia.url);
      }
    };
  }, [screenMedia]);

  const handleUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const kind = file.type.startsWith("video/")
      ? "video"
      : file.type.startsWith("image/")
        ? "image"
        : null;

    if (!kind) {
      event.target.value = "";
      return;
    }

    setScreenMedia({
      kind,
      mimeType: file.type,
      name: file.name,
      url: URL.createObjectURL(file),
    });
    setScreenLabel(file.name);
    setPlaybackState(kind === "video" ? "loading" : "ready");
    event.target.value = "";
  };

  const handleMediaReady = useCallback(() => {
    setPlaybackState("ready");
  }, []);

  const handleMediaError = useCallback(() => {
    setPlaybackState("error");
  }, []);

  const handlePlaybackStateChange = useCallback((state) => {
    setPlaybackState(state);
  }, []);

  const handleDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleExport = () => {
    const dataUrl = viewportRef.current?.exportPng();
    if (!dataUrl) return;

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "device-render-studio.png";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleReset = () => {
    setSettings(INITIAL_SETTINGS);
    viewportRef.current?.resetView();
  };

  return (
    <main className="app" id="top">
      <LandingNav />
      <Hero
        screenMedia={screenMedia}
        settings={settings}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onMediaError={handleMediaError}
        onMediaReady={handleMediaReady}
        onPlaybackStateChange={handlePlaybackStateChange}
      />
      <WorkflowSection />
      <FeaturesSection />
      <LaunchSection />

      <section className="studio-product" id="studio" aria-label="Device Render Studio app">
        <Toolbar
          screenLabel={screenLabel}
          statusLabel={getToolbarStatus(screenMedia, playbackState)}
          onUpload={handleUpload}
          onExport={handleExport}
          onReset={handleReset}
          fileInputRef={fileInputRef}
        />

        <div className="workspace">
          <section className="stage-area" aria-label="3D render workspace">
            <div className="viewport-shell">
              <ThreeViewport
                ref={viewportRef}
                screenMedia={screenMedia}
                settings={settings}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onMediaError={handleMediaError}
                onMediaReady={handleMediaReady}
                onPlaybackStateChange={handlePlaybackStateChange}
              />
              <div className="canvas-hud top-left">
                <Check size={15} />
                <span>Scene</span>
              </div>
              <div className={isDragging ? "canvas-hud bottom-left active" : "canvas-hud bottom-left"}>
                <MousePointer2 size={15} />
                <span>{isDragging ? "Orbiting" : "Drag to orbit"}</span>
              </div>
            </div>

            <PresetRail
              activeAngle={settings.angle}
              renderMode={screenMedia?.kind ?? "image"}
              onPreset={(value) => updateSetting("angle", value)}
            />
          </section>

          <Inspector settings={settings} onSettingChange={updateSetting} />
        </div>
      </section>
    </main>
  );
}

export default App;
