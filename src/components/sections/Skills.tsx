"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { skillGroups } from "@/data/skills";
import { SkillConstellation } from "./SkillConstellation";

export function Skills() {
  const [activeGroup, setActiveGroup] = useState<string>(
    skillGroups[0]?.id ?? "",
  );

  const selectedGroup =
    skillGroups.find((group) => group.id === activeGroup) ?? skillGroups[0];

  return (
    <section
      id="skills-preview"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-20 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Sticky Editorial Column */}
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8a8a8e]">
              Technology Ecosystem
            </p>

            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase leading-[1.03] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              BUILT WITH
              <br />
              TECHNOLOGY
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#8a8a8e]">
              Languages, frameworks, databases, and creative tools I use to
              architect and ship modern digital products.
            </p>

            <div className="mt-7">
              <Link
                href="/skills"
                className="group relative inline-block pb-1.5 text-sm font-bold tracking-wide text-white"
              >
                <span>Explore All Skills</span>
                <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-white transition-transform duration-300 group-hover:scale-x-110" />
              </Link>
            </div>

            {/* Category Selector Pills */}
            <div className="mt-10 flex flex-wrap gap-2">
              {skillGroups.map((group) => {
                const isActive = selectedGroup?.id === group.id;

                return (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => setActiveGroup(group.id)}
                    aria-pressed={isActive}
                    className={`relative rounded-full border px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors duration-200 ${
                      isActive
                        ? "border-white text-[#050505]"
                        : "border-white/10 bg-[#111113] text-[#8a8a8e] hover:border-white/25 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="skills-active-pill"
                        className="absolute inset-0 rounded-full bg-white"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <span className="font-mono text-[10px] opacity-60">
                        {group.number}
                      </span>
                      <span>{group.title}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Interactive Constellation Stage */}
          <div className="min-w-0 lg:col-span-7">
            <AnimatePresence mode="wait">
              {selectedGroup && (
                <motion.div
                  key={selectedGroup.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="min-w-0"
                >
                  <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                    <div>
                      <span className="font-mono text-xs text-white/40">
                        {selectedGroup.number}
                      </span>
                      <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {selectedGroup.title}
                      </h3>
                    </div>

                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#8a8a8e]">
                      {selectedGroup.skills.length} Technologies
                    </span>
                  </div>

                  <p className="mb-6 max-w-xl text-sm leading-6 text-[#8a8a8e]">
                    {selectedGroup.description}
                  </p>

                  <SkillConstellation
                    skills={selectedGroup.skills}
                    label={selectedGroup.title}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
