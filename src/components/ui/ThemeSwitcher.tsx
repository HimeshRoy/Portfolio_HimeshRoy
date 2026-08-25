"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { themes } from "@/themes/themes";
import { useTheme } from "@/themes/ThemeProvider";
import type { ThemeName } from "@/themes/types";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const currentTheme = themes[theme];

  const handleThemeChange = (nextTheme: ThemeName) => {
    setTheme(nextTheme);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="group flex items-center gap-3 rounded-full border px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] backdrop-blur-md transition-all duration-300"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--surface)",
          color: "var(--foreground)",
        }}
      >
        <span
          className="h-2 w-2 rounded-full"
          style={{
            backgroundColor: "var(--accent)",
            boxShadow: "0 0 12px var(--glow)",
          }}
        />

        <span>{currentTheme.label}</span>

        <motion.span
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          style={{
            color: "var(--muted)",
          }}
        >
          ↓
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <button
              type="button"
              aria-label="Close theme selector"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 cursor-default"
            />

            <motion.div
              initial={{
                opacity: 0,
                y: -8,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -8,
                scale: 0.96,
              }}
              transition={{
                duration: 0.2,
              }}
              className="absolute right-0 top-full z-50 mt-3 w-64 overflow-hidden rounded-2xl border p-2 shadow-2xl backdrop-blur-xl"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
                boxShadow:
                  "0 20px 60px var(--glow)",
              }}
              role="menu"
            >
              <div className="px-3 pb-2 pt-2">
                <span
                  className="text-[9px] uppercase tracking-[0.3em]"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  Change atmosphere
                </span>
              </div>

              <div className="space-y-1">
                {Object.values(themes).map(
                  (item) => {
                    const isActive =
                      item.name === theme;

                    return (
                      <button
                        key={item.name}
                        type="button"
                        role="menuitem"
                        onClick={() =>
                          handleThemeChange(
                            item.name as ThemeName,
                          )
                        }
                        className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-200"
                        style={{
                          backgroundColor:
                            isActive
                              ? "var(--surface-hover)"
                              : "transparent",
                        }}
                      >
                        <span
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm"
                          style={{
                            borderColor:
                              isActive
                                ? "var(--accent)"
                                : "var(--border)",
                            backgroundColor:
                              isActive
                                ? "var(--background-secondary)"
                                : "transparent",
                          }}
                        >
                          {getThemeIcon(
                            item.name as ThemeName,
                          )}
                        </span>

                        <span className="min-w-0 flex-1">
                          <span
                            className="block text-[10px] uppercase tracking-[0.18em]"
                            style={{
                              color:
                                isActive
                                  ? "var(--foreground)"
                                  : "var(--muted)",
                            }}
                          >
                            {item.label}
                          </span>

                          <span
                            className="mt-1 block truncate text-[9px]"
                            style={{
                              color:
                                "var(--muted)",
                            }}
                          >
                            {item.name ===
                            "monsoon"
                              ? "Rain & atmosphere"
                              : item.name ===
                                  "cherry-blossom"
                                ? "Spring & petals"
                                : item.name ===
                                    "summer"
                                  ? "Warm & energetic"
                                  : item.name ===
                                      "winter"
                                    ? "Cold & minimal"
                                    : item.name ===
                                        "ai"
                                      ? "Intelligence & data"
                                      : item.name ===
                                          "tech"
                                        ? "Digital & futuristic"
                                        : "Organic & peaceful"}
                          </span>
                        </span>

                        {isActive && (
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{
                              backgroundColor:
                                "var(--accent)",
                              boxShadow:
                                "0 0 10px var(--glow)",
                            }}
                          />
                        )}
                      </button>
                    );
                  },
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function getThemeIcon(theme: ThemeName) {
  switch (theme) {
    case "monsoon":
      return "🌧️";
    case "cherry-blossom":
      return "🌸";
    case "summer":
      return "☀️";
    case "winter":
      return "❄️";
    case "ai":
      return "🤖";
    case "tech":
      return "💻";
    case "nature":
      return "🌿";
  }
}