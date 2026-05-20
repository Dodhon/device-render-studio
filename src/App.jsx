import React, { useRef, useState } from "react";
import { Camera, Check, Download, Image, MousePointer2 } from "lucide-react";
import Inspector from "./components/Inspector.jsx";
import ThreeViewport from "./components/ThreeViewport.jsx";
import Toolbar from "./components/Toolbar.jsx";
import { ANGLE_PRESETS, INITIAL_SETTINGS } from "./lib/presets.js";

function PresetRail({ activeAngle, onPreset }) {
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
          <Image size={15} />
          1920 x 1080
        </span>
        <span>
          <Download size={15} />
          PNG
        </span>
      </div>
    </div>
  );
}

function App() {
  const [screenImage, setScreenImage] = useState(null);
  const [screenLabel, setScreenLabel] = useState("Demo screen");
  const [settings, setSettings] = useState(INITIAL_SETTINGS);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const viewportRef = useRef(null);

  const updateSetting = (key, value) => {
    setSettings((current) => ({ ...current, [key]: value }));
  };

  const handleUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setScreenImage(reader.result);
      setScreenLabel(file.name);
    };
    reader.readAsDataURL(file);
  };

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
              screenImage={screenImage}
              settings={settings}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
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
            onPreset={(value) => updateSetting("angle", value)}
          />
        </section>

        <Inspector settings={settings} onSettingChange={updateSetting} />
      </div>
    </main>
  );
}

export default App;
