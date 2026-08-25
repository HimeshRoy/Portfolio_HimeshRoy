"use client";

import { useEffect } from "react";
import { useTheme } from "@/themes/ThemeProvider";

export function SeasonalCursor() {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove(
      "monsoon-cursor",
      "cherry-blossom-cursor",
      "summer-cursor",
      "winter-cursor",
      "nature-cursor",
      "tech-cursor",
      "ai-cursor",
    );

    if (theme === "monsoon") {
      root.classList.add("monsoon-cursor");
    }

    if (theme === "cherry-blossom") {
      root.classList.add("cherry-blossom-cursor");
    }

    if (theme === "summer") {
      root.classList.add("summer-cursor");
    }

    if (theme === "winter") {
      root.classList.add("winter-cursor");
    }

    if (theme === "nature") {
      root.classList.add("nature-cursor");
    }
    if (theme === "tech") {
      root.classList.add("tech-cursor");
    }
    if (theme === "ai") {
      root.classList.add("ai-cursor");
    }
    return () => {
      root.classList.remove(
        "monsoon-cursor",
        "cherry-blossom-cursor",
        "summer-cursor",
        "winter-cursor",
        "nature-cursor",
        "tech-cursor",
        "ai-cursor",
      );
    };
  }, [theme]);

  return null;
}
