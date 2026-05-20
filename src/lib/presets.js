export const ANGLE_PRESETS = [
  { id: "front", label: "Front" },
  { id: "hero", label: "Hero" },
  { id: "isometric", label: "Isometric" },
  { id: "orbit", label: "Orbit" },
];

export const MATERIAL_PRESETS = [
  {
    id: "glass",
    label: "iPhone-style Glass",
    body: "#11151c",
    edge: "#1f2730",
    metalness: 0.78,
    roughness: 0.26,
  },
  {
    id: "matte",
    label: "Matte Black",
    body: "#151719",
    edge: "#25282b",
    metalness: 0.35,
    roughness: 0.72,
  },
  {
    id: "silver",
    label: "Silver",
    body: "#d9dee2",
    edge: "#f5f7f8",
    metalness: 0.62,
    roughness: 0.34,
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
