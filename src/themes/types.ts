export type ThemeName =
  | "monsoon"
  | "cherry-blossom"
  | "summer"
  | "winter"
  | "nature"
  | "tech"
  | "ai";

export interface ThemeTokens {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
  muted: string;
  border: string;

  backgroundSecondary: string;
  surface: string;
  surfaceHover: string;
  glow: string;
}

export interface ThemeDefinition {
  name: ThemeName;
  label: string;
  tokens: ThemeTokens;
}