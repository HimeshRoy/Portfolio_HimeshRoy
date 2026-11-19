"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

function getBentoSpan(index: number) {
  const slot = index % 5;
  if (slot === 0) return "md:col-span-6 lg:col-span-7";
  if (slot === 1) return "md:col-span-6 lg:col-span-5";
  return "md:col-span-4 lg:col-span-4";
}

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-28 text-white sm:px-10 sm:pb-32 sm:pt-32 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8a8a8e]">
              Archive · {projects.length} Builds
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              SELECTED WORK
            </h1>
            <p className="mt-5 text-sm leading-7 text-[#8a8a8e] sm:text-base">
              Full-stack web applications, AI/ML experiments, and interactive
              tools built to solve real problems.
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
        </motion.div>

        {/* Compact Animated Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12">
          {projects.map((project, index) => {
            const isWide = index % 5 === 0;
            const spanClass = getBentoSpan(index);

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: Math.min((index % 5) * 0.05, 0.2),
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -3 }}
                className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#111113] p-5 transition-colors duration-300 hover:border-white/25 hover:bg-[#151518] sm:p-6 ${spanClass}`}
              >
                {/* Stretched full-card link to slug page */}
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`View ${project.title}`}
                  className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                />

                {isWide && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/[0.04] blur-3xl"
                  />
                )}

                <div className="pointer-events-none relative z-10">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/10 bg-[#050505] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#a1a1aa]">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2.5 font-mono text-[11px] text-white/40">
                      <span>{project.year}</span>
                      <span>·</span>
                      <span>{project.number}</span>
                    </div>
                  </div>

                  <h2
                    className={`mt-4 font-display font-bold tracking-tight text-white ${
                      isWide ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
                    }`}
                  >
                    {project.title}
                  </h2>

                  <p
                    className={`mt-2 leading-6 text-[#8a8a8e] ${
                      isWide
                        ? "line-clamp-3 max-w-xl text-sm"
                        : "line-clamp-2 text-xs sm:text-sm"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 mt-5">
                  <div className="pointer-events-none flex flex-wrap gap-1.5">
                    {project.technologies
                      .slice(0, isWide ? 5 : 3)
                      .map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-[#050505]/80 px-2.5 py-0.5 text-[10px] text-[#a1a1aa]"
                        >
                          {technology}
                        </span>
                      ))}
                    {project.technologies.length > (isWide ? 5 : 3) && (
                      <span className="rounded-full border border-white/10 bg-[#050505]/50 px-2 py-0.5 text-[10px] text-[#71717a]">
                        +{project.technologies.length - (isWide ? 5 : 3)}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3.5">
                    <span className="pointer-events-none inline-flex items-center gap-1.5 text-xs font-bold text-white sm:text-sm">
                      <span>View Project</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </span>

                    <div className="relative z-20 flex items-center gap-3 text-[11px] font-medium text-[#8a8a8e]">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-white"
                        >
                          Live ↗
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-white"
                        >
                          Code ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
