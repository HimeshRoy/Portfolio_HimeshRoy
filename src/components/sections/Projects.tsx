"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import type { MouseEvent } from "react";
import { useState } from "react";
import { projects } from "@/data/projects";

export function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const smoothX = useSpring(cursorX, {
    stiffness: 180,
    damping: 24,
    mass: 0.35,
  });

  const smoothY = useSpring(cursorY, {
    stiffness: 180,
    damping: 24,
    mass: 0.35,
  });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    cursorX.set(event.clientX + 24);
    cursorY.set(event.clientY + 24);
  };

  const active = projects.find(
    (project) => project.number === activeProject,
  );

  return (
    <section
      id="projects-preview"
      className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
          }}
        >
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <span
                className="h-px w-8 sm:w-12"
                style={{
                  backgroundColor: "var(--accent)",
                }}
              />

              <span
                className="text-[10px] uppercase tracking-[0.28em] sm:text-xs sm:tracking-[0.35em]"
                style={{
                  color: "var(--accent)",
                }}
              >
                Selected work
              </span>
            </div>

            <span
              className="hidden text-[10px] uppercase tracking-[0.25em] sm:block"
              style={{
                color: "var(--muted)",
              }}
            >
              {projects.length} projects
            </span>
          </div>

          <div className="mt-10 sm:mt-14">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                onMouseEnter={() =>
                  setActiveProject(project.number)
                }
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setActiveProject(null)}
                className="group border-t py-8 sm:py-10"
                style={{
                  borderColor: "var(--border)",
                }}
              >
                <div className="grid gap-6 sm:gap-8 lg:grid-cols-[80px_0.8fr_1.2fr_auto] lg:items-center lg:gap-10">
                  <span
                    className="text-xs sm:text-sm"
                    style={{
                      color: "var(--accent)",
                    }}
                  >
                    {project.number}
                  </span>

                  <span
                    className="text-[10px] uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.25em]"
                    style={{
                      color: "var(--muted)",
                    }}
                  >
                    {project.category}
                  </span>

                  <div>
                    <h3
                      className="text-2xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl lg:text-4xl"
                      style={{
                        color: "var(--foreground)",
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="mt-3 max-w-xl text-sm leading-7"
                      style={{
                        color: "var(--muted)",
                      }}
                    >
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border px-3 py-1 text-[9px] uppercase tracking-[0.15em]"
                          style={{
                            borderColor: "var(--border)",
                            color: "var(--muted)",
                          }}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex w-fit items-center gap-3 text-xs uppercase tracking-[0.18em] transition-transform duration-300 hover:translate-x-2 lg:justify-self-end"
                    style={{
                      color: "var(--foreground)",
                    }}
                  >
                    <span>View project</span>

                    <span
                      style={{
                        color: "var(--accent)",
                      }}
                    >
                      →
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className="border-t pt-7 sm:pt-8"
            style={{
              borderColor: "var(--border)",
            }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.18em] transition-transform duration-300 hover:translate-x-2 sm:text-sm sm:tracking-[0.2em]"
              style={{
                color: "var(--foreground)",
              }}
            >
              <span>View all projects</span>

              <span
                style={{
                  color: "var(--accent)",
                }}
              >
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      {active && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.85,
          }}
          style={{
            x: smoothX,
            y: smoothY,
            borderColor: "var(--border)",
            background:
              "linear-gradient(135deg, var(--surface), var(--background))",
            boxShadow: "0 20px 80px var(--glow)",
          }}
          className="pointer-events-none fixed left-0 top-0 z-50 hidden h-56 w-80 overflow-hidden rounded-2xl border p-5 shadow-2xl lg:block"
        >
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <span
                className="text-[10px] uppercase tracking-[0.3em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                Preview
              </span>

              <span
                className="text-xs"
                style={{
                  color: "var(--accent)",
                }}
              >
                {active.number}
              </span>
            </div>

            <div>
              <div
                className="text-6xl font-semibold tracking-[-0.08em]"
                style={{
                  color: "var(--primary)",
                }}
              >
                {active.number}
              </div>

              <div
                className="mt-3 text-xs uppercase tracking-[0.25em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                {active.category}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {active.technologies.slice(0, 3).map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border px-2 py-1 text-[9px] uppercase tracking-[0.15em]"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--muted)",
                    }}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}