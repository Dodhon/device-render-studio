import {
  Aperture,
  Camera,
  CircleDot,
  Layers,
  Palette,
  Play,
  SlidersHorizontal,
  Smartphone,
} from "lucide-react";
import React from "react";
import {
  ANGLE_PRESETS,
  BACKGROUND_PRESETS,
  MATERIAL_PRESETS,
} from "../lib/presets.js";

function Section({ icon: Icon, title, children }) {
  return (
    <section className="inspector-section">
      <div className="section-title">
        <Icon size={16} />
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function SegmentedControl({ label, value, options, onChange }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <span className="segmented">
        {options.map((option) => (
          <button
            className={option.id === value ? "selected" : ""}
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
          >
            {option.label}
          </button>
        ))}
      </span>
    </label>
  );
}

function RangeControl({ label, value, min = 0, max = 100, onChange }) {
  return (
    <label className="field range-field">
      <span className="field-row">
        <span className="field-label">{label}</span>
        <span className="value-readout">{value}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

function ToggleControl({ label, icon: Icon, checked, onChange }) {
  return (
    <button
      className={checked ? "toggle-control active" : "toggle-control"}
      type="button"
      aria-pressed={checked}
      onClick={() => onChange(!checked)}
    >
      <span>
        <Icon size={16} />
        {label}
      </span>
      <span className="toggle-track" aria-hidden="true">
        <span />
      </span>
    </button>
  );
}

function SwatchControl({ value, onChange }) {
  return (
    <div className="field">
      <span className="field-label">Background</span>
      <div className="swatches">
        {BACKGROUND_PRESETS.map((preset) => (
          <button
            className={preset.id === value ? "swatch selected" : "swatch"}
            key={preset.id}
            type="button"
            title={preset.label}
            aria-label={preset.label}
            onClick={() => onChange(preset.id)}
          >
            <span style={{ background: preset.swatch }} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Inspector({ settings, onSettingChange }) {
  return (
    <aside className="inspector" aria-label="Scene inspector">
      <Section icon={Smartphone} title="Device">
        <SegmentedControl
          label="Finish"
          value={settings.material}
          options={MATERIAL_PRESETS}
          onChange={(value) => onSettingChange("material", value)}
        />
      </Section>

      <Section icon={Camera} title="Camera">
        <SegmentedControl
          label="Angle"
          value={settings.angle}
          options={ANGLE_PRESETS}
          onChange={(value) => onSettingChange("angle", value)}
        />
        <RangeControl
          label="Depth"
          value={settings.depth}
          onChange={(value) => onSettingChange("depth", value)}
        />
      </Section>

      <Section icon={Aperture} title="Lighting">
        <RangeControl
          label="Reflection"
          value={settings.reflection}
          onChange={(value) => onSettingChange("reflection", value)}
        />
        <RangeControl
          label="Shadow"
          value={settings.shadow}
          onChange={(value) => onSettingChange("shadow", value)}
        />
        <RangeControl
          label="Key Light"
          value={settings.lighting}
          onChange={(value) => onSettingChange("lighting", value)}
        />
        <ToggleControl
          label="Auto Spin"
          icon={Play}
          checked={settings.autoSpin}
          onChange={(value) => onSettingChange("autoSpin", value)}
        />
      </Section>

      <Section icon={Palette} title="Background">
        <SwatchControl
          value={settings.background}
          onChange={(value) => onSettingChange("background", value)}
        />
      </Section>

      <Section icon={SlidersHorizontal} title="Render">
        <div className="render-stats">
          <span>
            <Layers size={15} />
            WebGL
          </span>
          <span>
            <CircleDot size={15} />
            PNG
          </span>
        </div>
      </Section>
    </aside>
  );
}
