export type ThemeId =
  | "monsoon"
  | "cherry-blossom"
  | "summer"
  | "winter"
  | "ai"
  | "tech"
  | "natural";

export type ThemeConfig = {
  id: ThemeId;
  name: string;
  description: string;
  icon: string;
};

export const themes: ThemeConfig[] = [
  {
    id: "monsoon",
    name: "Monsoon",
    description:
      "Rain, clouds, reflections, and a calm atmospheric mood.",
    icon: "🌧️",
  },
  {
    id: "cherry-blossom",
    name: "Cherry Blossom",
    description:
      "Soft petals, spring air, and delicate motion.",
    icon: "🌸",
  },
  {
    id: "summer",
    name: "Summer",
    description:
      "Warm sunlight, energy, and bright atmospheric movement.",
    icon: "☀️",
  },
  {
    id: "winter",
    name: "Winter",
    description:
      "Cold air, snow, frost, and minimal atmosphere.",
    icon: "❄️",
  },
  {
    id: "ai",
    name: "AI / ML",
    description:
      "Intelligent systems, data, networks, and computational visuals.",
    icon: "🤖",
  },
  {
    id: "tech",
    name: "Tech",
    description:
      "Digital systems, grids, interfaces, and futuristic motion.",
    icon: "💻",
  },
  {
    id: "natural",
    name: "Natural",
    description:
      "Organic shapes, greenery, earth, and peaceful movement.",
    icon: "🌿",
  },
];