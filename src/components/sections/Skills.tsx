"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { skillGroups } from "@/data/skills";
import { SkillConstellation } from "./SkillConstellation";

export function Skills() {
  const [activeGroup, setActiveGroup] = useState<string | null>(
    skillGroups[0]?.id ?? null,
  );

  const selectedGroup =
    skillGroups.find(
      (group) => group.id === activeGroup,
    ) ?? skillGroups[0];

  return (
    <section
      id="skills-preview"
      className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
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
                Skills
              </span>
            </div>

            <span
              className="hidden text-[10px] uppercase tracking-[0.25em] sm:block"
              style={{
                color: "var(--muted)",
              }}
            >
              Technology ecosystem
            </span>
          </div>

          <div className="mt-10 grid gap-12 sm:mt-16 sm:gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <span
                className="text-xs uppercase tracking-[0.22em] sm:text-sm sm:tracking-[0.25em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                What I work with
              </span>

              <h2
                className="mt-4 text-[clamp(3.5rem,15vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em] sm:mt-5"
                style={{
                  color: "var(--foreground)",
                }}
              >
                Built
                <br />
                with
                <br />
                <span
                  style={{
                    color: "var(--primary)",
                  }}
                >
                  technology.
                </span>
              </h2>

              <p
                className="mt-6 max-w-md text-sm leading-7 sm:mt-8 sm:text-base"
                style={{
                  color: "var(--muted)",
                }}
              >
                A collection of technologies, languages,
                frameworks, and creative tools I use to turn
                ideas into digital experiences.
              </p>

              <div className="mt-8 sm:mt-10">
                <Link
                  href="/skills"
                  className="inline-flex items-center gap-4 border-b pb-3 text-xs uppercase tracking-[0.18em] transition-transform duration-300 hover:translate-x-2 sm:text-sm sm:tracking-[0.2em]"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                >
                  <span>Explore all skills</span>

                  <span
                    style={{
                      color: "var(--accent)",
                    }}
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="min-w-0">
              <div className="mb-8 flex max-w-full flex-wrap gap-2.5 sm:mb-10 sm:gap-3">
                {skillGroups.map((group) => {
                  const isActive =
                    activeGroup === group.id;

                  return (
                    <button
                      key={group.id}
                      type="button"
                      onClick={() =>
                        setActiveGroup(group.id)
                      }
                      aria-pressed={isActive}
                      className="min-h-10 max-w-full border px-3 py-2.5 text-[9px] uppercase tracking-[0.15em] transition-all duration-300 sm:min-h-11 sm:px-5 sm:text-[11px] sm:tracking-[0.18em]"
                      style={{
                        borderColor: isActive
                          ? "var(--accent)"
                          : "var(--border)",
                        backgroundColor: isActive
                          ? "var(--surface)"
                          : "transparent",
                        color: isActive
                          ? "var(--foreground)"
                          : "var(--muted)",
                        boxShadow: isActive
                          ? "0 0 28px var(--glow)"
                          : "none",
                      }}
                    >
                      <span
                        style={{
                          color: isActive
                            ? "var(--accent)"
                            : "var(--muted)",
                        }}
                      >
                        {group.number}
                      </span>

                      <span className="mx-1.5 opacity-40 sm:mx-2">
                        ·
                      </span>

                      {group.title}
                    </button>
                  );
                })}
              </div>

              {selectedGroup && (
                <motion.div
                  key={selectedGroup.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="min-w-0"
                >
                  <div className="mb-7 sm:mb-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                      <div className="min-w-0">
                        <span
                          className="text-xs uppercase tracking-[0.25em]"
                          style={{
                            color: "var(--accent)",
                          }}
                        >
                          {selectedGroup.number}
                        </span>

                        <h3
                          className="mt-2 text-3xl font-medium tracking-tight sm:text-5xl"
                          style={{
                            color: "var(--foreground)",
                          }}
                        >
                          {selectedGroup.title}
                        </h3>
                      </div>

                      <span
                        className="shrink-0 text-[9px] uppercase tracking-[0.22em] sm:text-[10px] sm:tracking-[0.25em]"
                        style={{
                          color: "var(--muted)",
                        }}
                      >
                        {selectedGroup.skills.length}{" "}
                        technologies
                      </span>
                    </div>

                    <p
                      className="mt-3 max-w-xl text-sm leading-7 sm:mt-4"
                      style={{
                        color: "var(--muted)",
                      }}
                    >
                      {selectedGroup.description}
                    </p>
                  </div>

                  <div className="min-w-0 overflow-hidden">
                    <SkillConstellation
                      skills={selectedGroup.skills}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-[100px] sm:h-80 sm:w-80 sm:blur-[120px]"
        style={{
          backgroundColor: "var(--glow)",
        }}
      />
    </section>
  );
}