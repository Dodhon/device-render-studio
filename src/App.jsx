import React, { useCallback, useEffect, useRef, useState } from "react";
import { Camera, Check, Download, Image, MousePointer2, Video } from "lucide-react";
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
    <main className="app">
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
    </main>
  );
}

export default App;
