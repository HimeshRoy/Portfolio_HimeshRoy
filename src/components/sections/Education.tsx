"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { education } from "@/data/education";

export function Education() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = education[activeIndex] ?? education[0];

  return (
    <section
      id="education-preview"
      className="relative border-t border-white/10 bg-[#050505] px-6 py-20 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8a8a8e]">
              Academic Journey
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase leading-[1.03] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              EDUCATION
            </h2>
          </div>

          <Link
            href="/education"
            className="group relative inline-block w-fit pb-1.5 text-sm font-bold tracking-wide text-white"
          >
            <span>View Education</span>
            <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-white transition-transform duration-300 group-hover:scale-x-110" />
          </Link>
        </div>

        {/* Interactive Split Stage */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left: Interactive Selector List */}
          <div className="flex flex-col divide-y divide-white/10 border-y border-white/10 lg:col-span-5">
            {education.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="group relative flex w-full items-center justify-between gap-4 py-5 text-left transition-colors"
                >
                  {/* Animated left indicator bar */}
                  {isActive && (
                    <motion.span
                      layoutId="edu-active-bar"
                      className="absolute inset-y-2 left-0 w-[3px] rounded-full bg-white"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}

                  <div className={`pl-4 transition-all duration-300 ${isActive ? "translate-x-1" : ""}`}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-[#8a8a8e]">
                        {item.number}
                      </span>
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#8a8a8e]">
                        {item.period}
                      </span>
                    </div>

                    <h3
                      className={`mt-1.5 font-display text-lg font-bold tracking-tight transition-colors sm:text-xl ${
                        isActive ? "text-white" : "text-white/45 group-hover:text-white/80"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <span
                    className={`pr-2 text-sm transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 text-white opacity-100"
                        : "-translate-x-2 text-white/40 opacity-0 group-hover:translate-x-0 group-hover:opacity-70"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Animated Detail Stage */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0f] p-7 sm:p-9 lg:col-span-7">
            {/* Subtle top-right glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl"
            />

            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.number}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 flex h-full flex-col justify-between"
                >
                  {/* Giant Watermark Number */}
                  {/* <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-8 -right-2 select-none font-display text-[8rem] font-extrabold leading-none tracking-tighter text-white/[0.04] sm:text-[10rem]"
                  >
                    {active.number}
                  </span> */}

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                        {active.type}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#8a8a8e]">
                        {active.period}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                      {active.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-[#d4d4d8]">
                      {active.institution}
                    </p>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-[#8a8a8e] sm:text-base">
                      {active.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5 text-[11px] uppercase tracking-[0.22em] text-[#8a8a8e]">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    <span>
                      Milestone {active.number} of{" "}
                      {String(education.length).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}