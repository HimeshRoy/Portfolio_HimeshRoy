"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

const bentoSpans = [
  "md:col-span-6 lg:col-span-6 lg:row-span-2", // 0: Flagship tile
  "md:col-span-3 lg:col-span-6", // 1: Top-right
  "md:col-span-3 lg:col-span-6", // 2: Mid-right
  "md:col-span-3 lg:col-span-4", // 3: Bottom-left
  "md:col-span-3 lg:col-span-4", // 4: Bottom-mid
];

export function Projects() {
  const featured = projects.slice(0, 5);

  return (
    <section
      id="projects-preview"
      className="relative border-t border-white/10 bg-[#050505] px-6 py-20 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8a8a8e]">
              Selected Work · {projects.length} Projects
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase leading-[1.03] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              FEATURED PROJECTS
            </h2>
          </div>

          <Link
            href="/projects"
            className="group relative inline-block w-fit pb-1.5 text-sm font-bold tracking-wide text-white"
          >
            <span>View All Projects</span>
            <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-white transition-transform duration-300 group-hover:scale-x-110" />
          </Link>
        </motion.div>

        {/* Compact Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
          {featured.map((project, index) => {
            const isHero = index === 0;
            const spanClass = bentoSpans[index] ?? "md:col-span-3 lg:col-span-4";

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#111113] transition-all duration-300 hover:border-white/25 hover:bg-[#151518] ${
                  isHero ? "p-6 sm:p-7" : "p-5"
                } ${spanClass}`}
              >
                {isHero && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/[0.04] blur-3xl"
                  />
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/10 bg-[#050505] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#a1a1aa]">
                      {project.category}
                    </span>
                    <span className="font-mono text-[11px] text-white/40">
                      {project.number}
                    </span>
                  </div>

                  <h3
                    className={`mt-4 font-display font-bold tracking-tight text-white ${
                      isHero ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`mt-2 leading-6 text-[#8a8a8e] ${
                      isHero
                        ? "line-clamp-4 max-w-lg text-sm"
                        : "line-clamp-2 text-xs sm:text-sm"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 mt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies
                      .slice(0, isHero ? 5 : 3)
                      .map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-[#050505]/80 px-2.5 py-0.5 text-[10px] text-[#a1a1aa]"
                        >
                          {technology}
                        </span>
                      ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3.5">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white transition-opacity hover:opacity-75 sm:text-sm"
                    >
                      <span>View Project</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>

                    {isHero && (
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#52525b]">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}

          {/* 6th Bento Tile: Archive CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="md:col-span-6 lg:col-span-4"
          >
            <Link
              href="/projects"
              className="group flex h-full min-h-[180px] flex-col justify-between rounded-2xl border border-dashed border-white/15 bg-[#0b0b0d] p-5 transition-all duration-300 hover:border-white/35 hover:bg-[#111113]"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#8a8a8e]">
                Full Archive
              </span>

              <div className="my-3">
                <div className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {projects.length}+
                </div>
                <p className="mt-1.5 text-xs leading-5 text-[#8a8a8e] sm:text-sm">
                  All full-stack apps, AI/ML builds, and tools.
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white sm:text-sm">
                <span>Browse All</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}