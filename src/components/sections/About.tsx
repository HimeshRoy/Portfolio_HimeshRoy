"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const highlights = [
  { label: "Focus", value: "Full-Stack · AI & ML" },
  { label: "Approach", value: "Curious · Systems-First" },
  { label: "Currently", value: "Building & Learning" },
];

export function About() {
  return (
    <section
      id="about-preview"
      className="relative min-h-svh border-t border-white/10 bg-[#050505] px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8a8a8e]">
            About
          </p>

          {/* Split Editorial Grid */}
          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl font-extrabold uppercase leading-[1.03] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                WHO IS
                <br />
                HIMESH ROY?
              </h2>
            </div>

            <div className="flex flex-col justify-between lg:col-span-7">
              <p className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
                I build digital products at the intersection of full-stack
                engineering, artificial intelligence, and design.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#8a8a8e] sm:text-base">
                I&apos;m a B.Tech CSE (AI &amp; ML) student and developer who
                enjoys turning complex ideas into fast, useful, and memorable
                web applications.
              </p>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="group relative inline-block pb-2 text-sm font-bold tracking-wide text-white sm:text-base"
                >
                  <span>Read My Story</span>
                  <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-white transition-transform duration-300 group-hover:scale-x-110" />
                </Link>
              </div>
            </div>
          </div>

          {/* 3-Column Metrics Strip */}
          <div className="mt-16 grid grid-cols-1 divide-y divide-white/10 border-y border-white/10 sm:mt-20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="py-6 sm:px-8 sm:py-8 first:sm:pl-0 last:sm:pr-0"
              >
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#8a8a8e]">
                  {item.label}
                </span>
                <p className="mt-2 font-display text-lg font-bold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}