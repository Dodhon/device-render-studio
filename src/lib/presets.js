export const ANGLE_PRESETS = [
  { id: "front", label: "Front" },
  { id: "hero", label: "Hero" },
  { id: "isometric", label: "Isometric" },
  { id: "orbit", label: "Orbit" },
];

export const MATERIAL_PRESETS = [
  {
    id: "glass",
    label: "Black Titanium",
    body: "#161a20",
    edge: "#2d343d",
    metalness: 0.82,
    roughness: 0.2,
  },
  {
    id: "matte",
    label: "Deep Graphite",
    body: "#101317",
    edge: "#242a31",
    metalness: 0.66,
    roughness: 0.38,
  },
  {
    id: "silver",
    label: "Natural Titanium",
    body: "#d6d0c8",
    edge: "#f2ece4",
    metalness: 0.74,
    roughness: 0.24,
  },
];

export const BACKGROUND_PRESETS = [
  {
    id: "studio",
    label: "Studio",
    swatch: "#eef3f7",
    clear: "#edf3f7",
    floor: "#dfe8ef",
  },
  {
    id: "sky",
    label: "Sky",
    swatch: "#dff7ff",
    clear: "#e5f9ff",
    floor: "#d1eff8",
  },
  {
    id: "paper",
    label: "Paper",
    swatch: "#f7f8f9",
    clear: "#f8fafb",
    floor: "#e8edf1",
  },
  {
    id: "graphite",
    label: "Graphite",
    swatch: "#202830",
    clear: "#161c23",
    floor: "#10151b",
  },
  {
    id: "coral",
    label: "Coral",
    swatch: "#fff0ec",
    clear: "#fff3ef",
    floor: "#f3d9d2",
  },
];

export const INITIAL_SETTINGS = {
  angle: "hero",
  material: "glass",
  background: "studio",
  reflection: 62,
  depth: 48,
  shadow: 58,
  lighting: 72,
  autoSpin: false,
};
