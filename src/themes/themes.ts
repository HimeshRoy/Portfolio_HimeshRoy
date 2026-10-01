import type { ThemeDefinition } from "./types";

export const themes: Record<string, ThemeDefinition> = {
  monsoon: {
    name: "monsoon",
    label: "Monsoon",
    tokens: {
      background: "#07151b",
      foreground: "#e6f7f8",
      primary: "#3ba7c9",
      secondary: "#5b7f89",
      accent: "#7dd3fc",
      muted: "#8da9b0",
      border: "#21414a",
      backgroundSecondary: "#0b2028",
      surface: "rgba(16, 43, 52, 0.62)",
      surfaceHover: "rgba(22, 57, 68, 0.78)",
      glow: "rgba(125, 211, 252, 0.22)",
    },
  },

  "cherry-blossom": {
    name: "cherry-blossom",
    label: "Cherry Blossom",
    tokens: {
      background: "#fff7fb",
      foreground: "#3b2633",
      primary: "#ec4899",
      secondary: "#a855f7",
      accent: "#f9a8d4",
      muted: "#9d8a95",
      border: "#f3d5e3",
      backgroundSecondary: "#fff0f7",
      surface: "rgba(255, 255, 255, 0.68)",
      surfaceHover: "rgba(255, 240, 247, 0.9)",
      glow: "rgba(236, 72, 153, 0.18)",
    },
  },

  summer: {
    name: "summer",
    label: "Summer",
    tokens: {
      background: "#fffaf0",
      foreground: "#3f2d1d",
      primary: "#f59e0b",
      secondary: "#f97316",
      accent: "#facc15",
      muted: "#92745a",
      border: "#f5d9a6",
      backgroundSecondary: "#fff3d6",
      surface: "rgba(255, 250, 240, 0.72)",
      surfaceHover: "rgba(255, 243, 214, 0.92)",
      glow: "rgba(250, 204, 21, 0.2)",
    },
  },

  winter: {
    name: "winter",
    label: "Winter",
    tokens: {
      background: "#f4f8fc",
      foreground: "#172554",
      primary: "#3b82f6",
      secondary: "#64748b",
      accent: "#bae6fd",
      muted: "#718096",
      border: "#dbeafe",
      backgroundSecondary: "#eaf3fb",
      surface: "rgba(255, 255, 255, 0.72)",
      surfaceHover: "rgba(234, 243, 251, 0.92)",
      glow: "rgba(186, 230, 253, 0.35)",
    },
  },

  nature: {
    name: "nature",
    label: "Nature",
    tokens: {
      background: "#f3f7f0",
      foreground: "#1f3524",
      primary: "#3f7d3a",
      secondary: "#668c5c",
      accent: "#84cc16",
      muted: "#708070",
      border: "#d4dfce",
      backgroundSecondary: "#e8f0e3",
      surface: "rgba(243, 247, 240, 0.72)",
      surfaceHover: "rgba(232, 240, 227, 0.94)",
      glow: "rgba(132, 204, 22, 0.18)",
    },
  },

  tech: {
    name: "tech",
    label: "Tech",
    tokens: {
      background: "#080b12",
      foreground: "#e5e7eb",
      primary: "#22d3ee",
      secondary: "#6366f1",
      accent: "#a855f7",
      muted: "#94a3b8",
      border: "#1e293b",
      backgroundSecondary: "#0d111c",
      surface: "rgba(15, 23, 42, 0.72)",
      surfaceHover: "rgba(30, 41, 59, 0.88)",
      glow: "rgba(34, 211, 238, 0.2)",
    },
  },

  ai: {
    name: "ai",
    label: "AI / ML",
    tokens: {
      background: "#09090b",
      foreground: "#f4f4f5",
      primary: "#8b5cf6",
      secondary: "#06b6d4",
      accent: "#ec4899",
      muted: "#a1a1aa",
      border: "#27272a",
      backgroundSecondary: "#111116",
      surface: "rgba(24, 24, 32, 0.72)",
      surfaceHover: "rgba(39, 39, 50, 0.9)",
      glow: "rgba(139, 92, 246, 0.22)",
    },
  },
};

export const defaultTheme = "tech";