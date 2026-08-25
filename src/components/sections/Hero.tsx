"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { MouseEvent } from "react";
import { useTheme } from "@/themes/ThemeProvider";

export function Hero() {
  const { theme } = useTheme();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 20,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 20,
    mass: 0.5,
  });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(hover: none)").matches) {
      return;
    }

    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const enterWorld = () => {
    const target =
      document.getElementById("about-preview");

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[calc(100svh-73px)] items-center overflow-hidden px-6 py-24 sm:min-h-[calc(100svh-81px)] sm:px-10 sm:py-20 lg:min-h-[calc(100vh-81px)] lg:px-16 lg:py-0"
    >
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="pointer-events-none absolute inset-0 hidden sm:block"
      >
        <div
          className="absolute left-[8%] top-[20%] h-56 w-56 rounded-full blur-[100px] sm:h-64 sm:w-64 lg:left-[12%] lg:top-[22%] lg:h-72 lg:w-72 lg:blur-[120px]"
          style={{
            backgroundColor: "var(--glow)",
          }}
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <div className="flex min-h-[calc(100svh-121px)] flex-col justify-center sm:min-h-[calc(100svh-121px)] lg:min-h-[calc(100vh-81px)]">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            className="mb-7 flex items-center gap-3 sm:mb-8 sm:gap-4"
          >
            <span
              className="h-px w-8 sm:w-12"
              style={{
                backgroundColor: "var(--accent)",
              }}
            />

            <span
              className="text-[10px] uppercase tracking-[0.25em] sm:text-xs sm:tracking-[0.35em]"
              style={{
                color: "var(--muted)",
              }}
            >
              Developer · AI · Creator
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              x: smoothX,
              y: smoothY,
            }}
            className="max-w-6xl text-[clamp(4rem,18vw,11rem)] font-semibold leading-[0.82] tracking-[-0.075em] sm:text-[clamp(5rem,13vw,11rem)] lg:text-[clamp(7rem,12vw,11rem)]"
          >
            <span
              style={{
                color: "var(--foreground)",
              }}
            >
              Himesh
            </span>{" "}
            <span
              className="relative inline-block"
              style={{
                color: "var(--primary)",
              }}
            >
              Roy
            </span>
          </motion.h1>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-12 flex max-w-2xl flex-col gap-6 sm:ml-[8vw] sm:mt-16 sm:flex-row sm:items-start sm:gap-10 lg:ml-[12vw] lg:mt-20 lg:gap-12"
          >
            <p
              className="max-w-md text-sm leading-7 sm:text-base lg:text-lg"
              style={{
                color: "var(--muted)",
              }}
            >
              Developer, AI/ML enthusiast, and creator
              building thoughtful digital experiences with
              technology, creativity, and curiosity.
            </p>

            <div
              className="flex shrink-0 flex-row gap-5 text-[10px] uppercase tracking-[0.25em] sm:flex-col sm:gap-1 sm:text-xs"
              style={{
                color: "var(--secondary)",
              }}
            >
              <span>Portfolio</span>
              <span>2026</span>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            className="mt-12 sm:ml-[8vw] sm:mt-14 lg:ml-[12vw] lg:mt-16"
          >
            <motion.button
              type="button"
              onClick={enterWorld}
              whileHover={{
                x: 8,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group inline-flex items-center gap-4 border-b pb-3 text-xs uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.2em]"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            >
              <span>Enter my world</span>

              <motion.span
                className="text-lg"
                style={{
                  color: "var(--accent)",
                }}
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 1,
        }}
        className="absolute bottom-6 left-6 z-10 flex items-center gap-3 sm:bottom-8 sm:left-10 lg:left-16"
      >
        <span
          className="h-2 w-2 rounded-full"
          style={{
            backgroundColor: "var(--accent)",
            boxShadow: "0 0 16px var(--glow)",
          }}
        />

        <span
          className="text-[9px] uppercase tracking-[0.25em] sm:text-[10px] sm:tracking-[0.3em]"
          style={{
            color: "var(--muted)",
          }}
        >
          {getThemeLabel(theme)} · Active
        </span>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 1.1,
        }}
        className="absolute bottom-6 right-6 z-10 sm:bottom-8 sm:right-10 lg:right-16"
      >
        <span
          className="text-[9px] uppercase tracking-[0.25em] sm:text-[10px] sm:tracking-[0.3em]"
          style={{
            color: "var(--muted)",
          }}
        >
          Scroll ↓
        </span>
      </motion.div>
    </section>
  );
}

function getThemeLabel(theme: string) {
  switch (theme) {
    case "monsoon":
      return "Monsoon";
    case "cherry-blossom":
      return "Cherry Blossom";
    case "summer":
      return "Summer";
    case "winter":
      return "Winter";
    case "ai":
      return "AI / ML";
    case "tech":
      return "Tech";
    case "nature":
      return "Nature";
    default:
      return "Monsoon";
  }
}