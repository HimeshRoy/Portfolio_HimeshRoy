"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { skillGroups } from "@/data/skills";

export default function SkillsPage() {
  const [activeGroup, setActiveGroup] = useState(skillGroups[0]?.id ?? "");

  const selectedGroup =
    skillGroups.find((group) => group.id === activeGroup) ?? skillGroups[0];

  const totalSkills = skillGroups.reduce(
    (sum, group) => sum + group.skills.length,
    0,
  );

  return (
    <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-28 text-white sm:px-10 sm:pb-32 sm:pt-32 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8a8a8e]">
              Skills · {totalSkills} Technologies
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              WHAT I BUILD WITH
            </h1>
            <p className="mt-5 text-sm leading-7 text-[#8a8a8e] sm:text-base">
              Languages, frameworks, databases, and creative tools I use to turn
              ideas into fast, scalable digital products.
            </p>
          </div>

          <Link
            href="/"
            className="group relative inline-flex w-fit items-center gap-2 pb-1.5 text-sm font-bold tracking-wide text-white"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            <span>Back Home</span>
            <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-white transition-transform duration-300 group-hover:scale-x-110" />
          </Link>
        </motion.header>

        {/* Category Selector Pills */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {skillGroups.map((group) => {
            const isActive = activeGroup === group.id;

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveGroup(group.id)}
                aria-pressed={isActive}
                className={`relative rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors duration-200 ${
                  isActive
                    ? "border-white text-[#050505]"
                    : "border-white/10 bg-[#111113] text-[#8a8a8e] hover:border-white/25 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skills-page-pill"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
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
        </motion.div>

        {/* Selected Group Panel */}
        <AnimatePresence mode="wait">
          {selectedGroup && (
            <motion.div
              key={selectedGroup.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              {/* Group Summary Banner */}
              <div className="rounded-2xl border border-white/10 bg-[#0d0d0f] p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <span className="font-mono text-xs text-white/40">
                      {selectedGroup.number}
                    </span>
                    <h2 className="mt-1 font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
                      {selectedGroup.title}
                    </h2>
                  </div>

                  <span className="w-fit rounded-full border border-white/10 bg-[#050505] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#a1a1aa]">
                    {selectedGroup.skills.length} Technologies
                  </span>
                </div>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#8a8a8e]">
                  {selectedGroup.description}
                </p>

                {/* Compact Skill Cards */}
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {selectedGroup.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.04,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="group relative flex min-h-[112px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#111113] p-5 transition-all duration-200 hover:border-white/25 hover:bg-[#16161a]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] text-white/40">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-white/25 transition-colors duration-200 group-hover:bg-white" />
                      </div>

                      <div>
                        <h3 className="font-display text-lg font-bold tracking-tight text-white">
                          {skill}
                        </h3>
                        <div className="mt-2.5 h-[2px] w-6 bg-white/25 transition-all duration-300 group-hover:w-12 group-hover:bg-white" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Navigation */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#8a8a8e] transition-colors hover:text-white"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            <span>About</span>
          </Link>

          <Link
            href="/experience"
            className="group relative inline-flex items-center gap-2 pb-1.5 text-sm font-bold tracking-wide text-white"
          >
            <span>Experience</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
            <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-white transition-transform duration-300 group-hover:scale-x-110" />
          </Link>
        </div>
      </div>
    </section>
  );
}