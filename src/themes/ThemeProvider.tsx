"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { defaultTheme, themes } from "./themes";
import type { ThemeName } from "./types";

interface ThemeContextValue {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(defaultTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme && savedTheme in themes) {
      setThemeState(savedTheme as ThemeName);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const tokens = themes[theme].tokens;

    root.dataset.theme = theme;

    root.style.setProperty("--background", tokens.background);
    root.style.setProperty("--foreground", tokens.foreground);
    root.style.setProperty("--primary", tokens.primary);
    root.style.setProperty("--secondary", tokens.secondary);
    root.style.setProperty("--accent", tokens.accent);
    root.style.setProperty("--muted", tokens.muted);
    root.style.setProperty("--border", tokens.border);

    root.style.setProperty(
      "--background-secondary",
      tokens.backgroundSecondary,
    );

    root.style.setProperty("--surface", tokens.surface);

    root.style.setProperty("--surface-hover", tokens.surfaceHover);

    root.style.setProperty("--glow", tokens.glow);

    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
