"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type SkillConstellationProps = {
  skills: string[];
};

export function SkillConstellation({
  skills,
}: SkillConstellationProps) {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <div
      className="relative min-h-[430px] overflow-hidden border sm:min-h-[520px] lg:min-h-[580px]"
      style={{
        borderColor: "var(--border)",
        background:
          "linear-gradient(180deg, color-mix(in srgb, var(--surface) 35%, transparent), transparent)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              var(--border) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              var(--border) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "48px 48px",
          opacity: 0.18,
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 82%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px]"
        style={{
          background: "var(--glow)",
          opacity: 0.35,
        }}
      />

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {skills.map((skill, index) => {
          const angle =
            (index / Math.max(skills.length, 1)) *
              Math.PI *
              2 -
            Math.PI / 2;

          const radius =
            typeof window !== "undefined" &&
            window.innerWidth < 640
              ? 29
              : 32;

          const x =
            50 + Math.cos(angle) * radius;

          const y =
            50 + Math.sin(angle) * radius;

          const isActive =
            activeSkill === skill;

          return (
            <motion.line
              key={skill}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke="var(--accent)"
              strokeWidth={isActive ? 0.32 : 0.16}
              vectorEffect="non-scaling-stroke"
              animate={{
                opacity: isActive ? 0.85 : 0.35,
              }}
              transition={{
                duration: 0.25,
              }}
            />
          );
        })}
      </svg>

      <motion.div
        className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border sm:h-28 sm:w-28 lg:h-32 lg:w-32"
        style={{
          borderColor: "var(--accent)",
          background: "var(--background)",
          color: "var(--foreground)",
          boxShadow:
            "0 0 30px var(--glow), inset 0 0 25px var(--glow)",
        }}
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-center">
          <div
            className="text-[9px] uppercase tracking-[0.25em] sm:text-[11px] sm:tracking-[0.3em]"
            style={{
              color: "var(--muted)",
            }}
          >
            Skill
          </div>

          <div
            className="mt-1 text-[10px] uppercase tracking-[0.18em] sm:mt-2 sm:text-sm sm:tracking-[0.22em]"
            style={{
              color: "var(--accent)",
            }}
          >
            System
          </div>
        </div>
      </motion.div>

      {skills.map((skill, index) => {
        const angle =
          (index / Math.max(skills.length, 1)) *
            Math.PI *
            2 -
          Math.PI / 2;

        const radius =
          typeof window !== "undefined" &&
          window.innerWidth < 640
            ? 29
            : 32;

        const x =
          50 + Math.cos(angle) * radius;

        const y =
          50 + Math.sin(angle) * radius;

        const isActive =
          activeSkill === skill;

        const isDimmed =
          activeSkill !== null && !isActive;

        return (
          <motion.button
            key={skill}
            type="button"
            onMouseEnter={() =>
              setActiveSkill(skill)
            }
            onMouseLeave={() =>
              setActiveSkill(null)
            }
            onFocus={() =>
              setActiveSkill(skill)
            }
            onBlur={() =>
              setActiveSkill(null)
            }
            className="absolute z-20 max-w-[42%] -translate-x-1/2 -translate-y-1/2 border px-2.5 py-2 text-[8px] uppercase tracking-[0.1em] transition-colors duration-200 sm:max-w-none sm:px-4 sm:py-3 sm:text-[11px] sm:tracking-[0.16em] lg:px-5 lg:py-3.5 lg:text-xs"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              borderColor: isActive
                ? "var(--accent)"
                : "var(--border)",
              background: isActive
                ? "var(--surface-hover)"
                : "var(--background)",
              color: isActive
                ? "var(--foreground)"
                : "var(--muted)",
              boxShadow: isActive
                ? "0 0 30px var(--glow)"
                : "0 0 0 transparent",
            }}
            animate={{
              opacity: isDimmed ? 0.3 : 1,
              scale: isActive ? 1.08 : 1,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            {skill}
          </motion.button>
        );
      })}

      <div
        className="absolute bottom-4 left-4 text-[8px] uppercase tracking-[0.2em] sm:bottom-5 sm:left-6 sm:text-[9px] sm:tracking-[0.25em]"
        style={{
          color: "var(--muted)",
        }}
      >
        Interactive skill map
      </div>

      <div
        className="absolute bottom-4 right-4 text-[8px] uppercase tracking-[0.2em] sm:bottom-5 sm:right-6 sm:text-[9px] sm:tracking-[0.25em]"
        style={{
          color: "var(--accent)",
        }}
      >
        {skills.length} nodes
      </div>
    </div>
  );
}