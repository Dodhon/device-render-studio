import {
  Box,
  Download,
  ImageUp,
  PanelRight,
  Rotate3D,
  Sparkles,
} from "lucide-react";
import React from "react";

export default function Toolbar({
  screenLabel,
  statusLabel,
  onUpload,
  onExport,
  onReset,
  fileInputRef,
}) {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-mark" aria-hidden="true">
          <Box size={18} strokeWidth={2.2} />
        </div>
        <div>
          <strong>Device Render Studio</strong>
          <span>{screenLabel}</span>
        </div>
      </div>

      <div className="toolbar-center" aria-label="Scene tools">
        <button className="icon-button" type="button" onClick={onReset}>
          <Rotate3D size={17} />
          <span>Reset</span>
        </button>
        <div className="toolbar-divider" />
        <span className="status-pill">
          <Sparkles size={15} />
          {statusLabel}
        </span>
        <span className="status-pill subtle">
          <PanelRight size={15} />
          Scene
        </span>
      </div>

      <div className="toolbar-actions">
        <input
          ref={fileInputRef}
          className="visually-hidden"
          type="file"
          accept="image/*,video/*"
          onChange={onUpload}
        />
        <button
          className="button secondary"
          type="button"
          onClick={() => fileInputRef.current?.click()}
        >
          <ImageUp size={17} />
          Import
        </button>
        <button className="button primary" type="button" onClick={onExport}>
          <Download size={17} />
          Export PNG
        </button>
      </div>
    </header>
  );
}
