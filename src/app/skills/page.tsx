"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { skillGroups } from "@/data/skills";

export default function SkillsPage() {
  const [activeGroup, setActiveGroup] = useState(
    skillGroups[0]?.id ?? "",
  );

  const selectedGroup =
    skillGroups.find(
      (group) => group.id === activeGroup,
    ) ?? skillGroups[0];

  return (
    <main className="relative min-h-screen px-6 pb-32 pt-32 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <motion.header
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="flex items-center gap-4">
            <span
              className="h-px w-12"
              style={{
                backgroundColor: "var(--accent)",
              }}
            />

            <span
              className="text-xs uppercase tracking-[0.35em]"
              style={{
                color: "var(--accent)",
              }}
            >
              Skills
            </span>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <h1
              className="text-6xl font-semibold leading-[0.85] tracking-[-0.06em] sm:text-7xl lg:text-8xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              What I
              <br />
              <span
                style={{
                  color: "var(--primary)",
                }}
              >
                build with.
              </span>
            </h1>

            <p
              className="max-w-2xl text-lg leading-8"
              style={{
                color: "var(--muted)",
              }}
            >
              Technologies, languages, frameworks, databases,
              creative tools, and everything else I use to turn
              ideas into working digital experiences.
            </p>
          </div>
        </motion.header>

        {/* Category navigation */}
        <section className="mt-20">
          <div className="flex flex-wrap gap-3">
            {skillGroups.map((group) => {
              const active = activeGroup === group.id;

              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setActiveGroup(group.id)}
                  className="border px-5 py-3 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 sm:text-xs"
                  style={{
                    borderColor: active
                      ? "var(--accent)"
                      : "var(--border)",
                    backgroundColor: active
                      ? "var(--surface)"
                      : "transparent",
                    color: active
                      ? "var(--foreground)"
                      : "var(--muted)",
                    boxShadow: active
                      ? "0 0 30px var(--glow)"
                      : "none",
                  }}
                >
                  <span
                    style={{
                      color: active
                        ? "var(--accent)"
                        : "var(--muted)",
                    }}
                  >
                    {group.number}
                  </span>

                  <span className="mx-2 opacity-40">
                    ·
                  </span>

                  {group.title}
                </button>
              );
            })}
          </div>
        </section>

        {/* Selected group */}
        {selectedGroup && (
          <motion.section
            key={selectedGroup.id}
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className="mt-16"
          >
            <div
              className="border-y py-8"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span
                    className="text-xs uppercase tracking-[0.3em]"
                    style={{
                      color: "var(--accent)",
                    }}
                  >
                    {selectedGroup.number}
                  </span>

                  <h2
                    className="mt-3 text-4xl font-medium tracking-[-0.04em] sm:text-5xl"
                    style={{
                      color: "var(--foreground)",
                    }}
                  >
                    {selectedGroup.title}
                  </h2>
                </div>

                <span
                  className="text-[10px] uppercase tracking-[0.25em]"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  {selectedGroup.skills.length} technologies
                </span>
              </div>

              <p
                className="mt-5 max-w-2xl text-sm leading-7"
                style={{
                  color: "var(--muted)",
                }}
              >
                {selectedGroup.description}
              </p>
            </div>

            {/* Skills */}
            <div className="grid border-l border-b sm:grid-cols-2 lg:grid-cols-3">
              {selectedGroup.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.06,
                  }}
                  className="group relative min-h-40 border-r border-t p-6 transition-colors duration-300 hover:bg-[var(--surface)] sm:p-8"
                  style={{
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="flex h-full flex-col justify-between">
                    <span
                      className="text-[10px] tracking-[0.2em]"
                      style={{
                        color: "var(--accent)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3
                        className="text-xl font-medium tracking-tight sm:text-2xl"
                        style={{
                          color: "var(--foreground)",
                        }}
                      >
                        {skill}
                      </h3>

                      <div
                        className="mt-4 h-px w-8 transition-all duration-300 group-hover:w-16"
                        style={{
                          backgroundColor: "var(--accent)",
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Footer navigation */}
        <div className="mt-20 flex flex-wrap items-center justify-between gap-6">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.2em] transition-transform duration-300 hover:-translate-x-1"
            style={{
              color: "var(--muted)",
            }}
          >
            ← Back home
          </Link>

          <Link
            href="/experience"
            className="inline-flex items-center gap-4 border-b pb-3 text-xs uppercase tracking-[0.2em] transition-transform duration-300 hover:translate-x-2"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground)",
            }}
          >
            <span>Experience</span>

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

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -bottom-40 right-[-10rem] h-96 w-96 rounded-full blur-[140px]"
        style={{
          backgroundColor: "var(--glow)",
          opacity: 0.45,
        }}
      />
    </main>
  );
}