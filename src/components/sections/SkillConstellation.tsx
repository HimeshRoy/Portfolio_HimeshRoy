"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type SkillConstellationProps = {
  skills: string[];
  label?: string;
};

export function SkillConstellation({
  skills,
  label = "System",
}: SkillConstellationProps) {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const radius = 33;

  return (
    <div className="relative min-h-[380px] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0f] sm:min-h-[460px]">
      {/* Subtle Architectural Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(circle at center, black 10%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 10%, transparent 78%)",
        }}
      />

      {/* Concentric Orbital Rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[66%] w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.08]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
      />

      {/* Soft Center Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl"
      />

      {/* Connection Lines */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {skills.map((skill, index) => {
          const angle =
            (index / Math.max(skills.length, 1)) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(angle) * radius;
          const y = 50 + Math.sin(angle) * radius;
          const isActive = activeSkill === skill;

          return (
            <motion.line
              key={skill}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke="#ffffff"
              strokeWidth={isActive ? 1.5 : 0.75}
              vectorEffect="non-scaling-stroke"
              animate={{
                opacity: isActive ? 0.8 : activeSkill ? 0.1 : 0.22,
              }}
              transition={{ duration: 0.2 }}
            />
          );
        })}
      </svg>

      {/* Center Core Hub */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#050505] px-3 text-center shadow-[0_0_40px_rgba(255,255,255,0.06)] sm:h-28 sm:w-28"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div>
          <div className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8a8a8e]">
            {activeSkill ? "Selected" : "Stack"}
          </div>
          <div className="mt-1 line-clamp-2 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-white sm:text-xs">
            {activeSkill ?? label}
          </div>
        </div>
      </motion.div>

      {/* Skill Nodes */}
      {skills.map((skill, index) => {
        const angle =
          (index / Math.max(skills.length, 1)) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;

        const isActive = activeSkill === skill;
        const isDimmed = activeSkill !== null && !isActive;

        return (
          <motion.button
            key={skill}
            type="button"
            onMouseEnter={() => setActiveSkill(skill)}
            onMouseLeave={() => setActiveSkill(null)}
            onFocus={() => setActiveSkill(skill)}
            onBlur={() => setActiveSkill(null)}
            className={`absolute z-20 max-w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 sm:max-w-none sm:px-4 sm:py-2 sm:text-[11px] ${
              isActive
                ? "border-white bg-white text-[#050505] shadow-[0_0_24px_rgba(255,255,255,0.22)]"
                : "border-white/15 bg-[#111113] text-[#d4d4d8] hover:border-white/40 hover:text-white"
            }`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            animate={{
              opacity: isDimmed ? 0.3 : 1,
              scale: isActive ? 1.08 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {skill}
          </motion.button>
        );
      })}

      {/* Bottom Corner Metadata */}
      <div className="pointer-events-none absolute bottom-4 left-5 text-[10px] uppercase tracking-[0.22em] text-[#8a8a8e]">
        Hover a node
      </div>

      <div className="pointer-events-none absolute bottom-4 right-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
        {skills.length} nodes
      </div>
    </div>
  );
}
