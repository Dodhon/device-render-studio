# Device Render Studio

An original Rotato-style MVP for creating polished 3D device mockups in the browser.

This project does not copy Rotato branding, proprietary UI, or device model assets. The current device is generated procedurally with Three.js geometry.

Live demo: https://dodhon.github.io/device-render-studio/

## Features

- Real-time Three.js device renderer
- Procedural smartphone body, screen, glass, side buttons, and camera details
- Screenshot upload mapped onto the screen as a texture
- Camera angle presets and pointer-drag orbiting
- Device material, lighting, reflection, shadow, and background controls
- PNG export from the WebGL canvas

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Build

```bash
npm run build
```
