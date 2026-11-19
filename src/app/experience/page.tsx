"use client";

import type { MouseEvent } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { experience } from "@/data/experience";

type ExperienceItem = (typeof experience)[number];

function ExperienceCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const [spot, setSpot] = useState({ x: 0, y: 0, active: false });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpot({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
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
          background: `radial-gradient(360px circle at ${spot.x}px${spot.y}px, rgba(255,255,255,0.06), transparent 65%)`,
        }}
      />

      {/* Timeline Node Dot */}
      <span
        aria-hidden="true"
        className="absolute -left-[25px] top-8 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/40 bg-[#050505] sm:-left-[33px]"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
      </span>

      {/* Giant Watermark Index */}
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

        <h2 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          {item.role}
        </h2>

        <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4d4d8]">
          {item.company}
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#8a8a8e]">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function ExperiencePage() {
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
              Experience · Building &amp; Shipping
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              WHERE I&apos;VE BEEN
            </h1>
            <p className="mt-5 text-sm leading-7 text-[#8a8a8e] sm:text-base">
              A timeline of the roles, engineering builds, and collaborations
              that have shaped how I architect software.
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

        {/* Split Editorial Timeline */}
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Sticky Summary */}
          <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <div className="rounded-2xl border border-white/10 bg-[#111113] p-6">
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#8a8a8e]">
                Career Track
              </span>
              <p className="mt-2 font-display text-3xl font-extrabold text-white">
                {String(experience.length).padStart(2, "0")}
              </p>
              <p className="mt-2 text-xs leading-6 text-[#8a8a8e]">
                {experience.length === 1 ? "Role" : "Roles"} across full-stack
                engineering, APIs, and production web applications.
              </p>
            </div>
          </div>

          {/* Right Timeline Rail */}
          <div className="relative pl-6 sm:pl-8 lg:col-span-8">
            <div
              aria-hidden="true"
              className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-white/50 via-white/15 to-transparent"
            />

            <div className="flex flex-col gap-6">
              {experience.map((item, index) => (
                <ExperienceCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
          <Link
            href="/skills"
            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#8a8a8e] transition-colors hover:text-white"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            <span>Skills</span>
          </Link>

          <Link
            href="/education"
            className="group relative inline-flex items-center gap-2 pb-1.5 text-sm font-bold tracking-wide text-white"
          >
            <span>Education</span>
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