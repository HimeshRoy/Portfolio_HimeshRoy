"use client";

import type { MouseEvent } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { experience } from "@/data/experience";

export function Experience() {
  const [spot, setSpot] = useState({ x: 0, y: 0, active: false });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpot({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  return (
    <section
      id="experience-preview"
      className="relative border-t border-white/10 bg-[#050505] px-6 py-20 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-12 lg:gap-12">
        {/* Left Sticky Editorial Column */}
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8a8a8e]">
            Building &amp; Shipping
          </p>

          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase leading-[1.03] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            EXPERIENCE
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-7 text-[#8a8a8e]">
            Hands-on engineering across full-stack web applications, APIs,
            databases, and production deployments.
          </p>

          <div className="mt-7">
            <Link
              href="/experience"
              className="group relative inline-block pb-1.5 text-sm font-bold tracking-wide text-white"
            >
              <span>View Full Experience</span>
              <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-white transition-transform duration-300 group-hover:scale-x-110" />
            </Link>
          </div>
        </div>

        {/* Right Timeline Rail + Spotlight Cards */}
        <div className="relative pl-6 sm:pl-8 lg:col-span-7">
          {/* Vertical Timeline Line */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-white/50 via-white/15 to-transparent"
          />

          <div className="flex flex-col gap-6">
            {experience.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseMove={handleMove}
                onMouseLeave={() => setSpot((s) => ({ ...s, active: false }))}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0f] p-6 transition-colors duration-300 hover:border-white/25 sm:p-8"
              >
                {/* Cursor-following spotlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                  style={{
                    opacity: spot.active ? 1 : 0,
                    background: `radial-gradient(360px circle at ${spot.x}px ${spot.y}px, rgba(255,255,255,0.06), transparent 65%)`,
                  }}
                />

                {/* Timeline Node Dot */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[25px] top-8 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/40 bg-[#050505] sm:-left-[33px]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>

                {/* Watermark Index */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-1 right-4 select-none font-display text-8xl font-extrabold leading-none text-white/[0.035]"
                >
                  {item.number}
                </span>

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      {item.type}
                    </span>

                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#8a8a8e]">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    {item.role}
                  </h3>

                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4d4d8]">
                    {item.company}
                  </p>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#8a8a8e]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}