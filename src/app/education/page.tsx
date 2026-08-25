"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { education } from "@/data/education";

export default function EducationPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden px-6 pb-32 pt-32 sm:px-10 lg:px-16"
      style={{
        color: "var(--foreground)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.header
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="flex items-center justify-between">
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
                Education
              </span>
            </div>

            <span
              className="hidden text-xs uppercase tracking-[0.25em] sm:block"
              style={{
                color: "var(--muted)",
              }}
            >
              Academic journey
            </span>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h1
              className="text-6xl font-semibold leading-[0.85] tracking-[-0.06em] sm:text-7xl lg:text-8xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              Learning
              <br />
              <span
                style={{
                  color: "var(--primary)",
                }}
              >
                by doing.
              </span>
            </h1>

            <p
              className="max-w-2xl text-lg leading-8"
              style={{
                color: "var(--muted)",
              }}
            >
              The academic experiences, certifications, and
              learning paths that have shaped my technical
              foundation and curiosity.
            </p>
          </div>
        </motion.header>

        <section className="relative mt-24">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[31px] top-0 w-px sm:left-[39px] lg:left-[55px]"
            style={{
              backgroundColor: "var(--border)",
            }}
          />

          <div>
            {education.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 25,
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
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="relative grid grid-cols-[64px_1fr] gap-8 border-t py-12 sm:grid-cols-[80px_180px_1fr] sm:gap-8 lg:grid-cols-[112px_220px_1fr] lg:gap-12"
                style={{
                  borderColor: "var(--border)",
                }}
              >
                <div className="relative flex justify-center">
                  <span
                    className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-xs"
                    style={{
                      borderColor: "var(--accent)",
                      backgroundColor: "var(--background)",
                      color: "var(--accent)",
                      boxShadow: "0 0 24px var(--glow)",
                    }}
                  >
                    {item.number}
                  </span>
                </div>

                <div className="pt-2">
                  <span
                    className="block text-xs uppercase tracking-[0.2em]"
                    style={{
                      color: "var(--muted)",
                    }}
                  >
                    {item.period}
                  </span>

                  <span
                    className="mt-3 inline-flex border px-2 py-1 text-[9px] uppercase tracking-[0.2em]"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--accent)",
                    }}
                  >
                    {item.type}
                  </span>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <h2
                    className="text-3xl font-medium tracking-tight sm:text-4xl"
                    style={{
                      color: "var(--foreground)",
                    }}
                  >
                    {item.title}
                  </h2>

                  <p
                    className="mt-2 text-sm uppercase tracking-[0.15em]"
                    style={{
                      color: "var(--secondary)",
                    }}
                  >
                    {item.institution}
                  </p>

                  <p
                    className="mt-6 max-w-2xl text-sm leading-8"
                    style={{
                      color: "var(--muted)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-6">
          <Link
            href="/experience"
            className="text-xs uppercase tracking-[0.2em] transition-transform duration-300 hover:-translate-x-1"
            style={{
              color: "var(--muted)",
            }}
          >
            ← Experience
          </Link>

          <Link
            href="/cv"
            className="inline-flex items-center gap-4 border-b pb-3 text-xs uppercase tracking-[0.2em] transition-transform duration-300 hover:translate-x-2"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground)",
            }}
          >
            <span>View my CV</span>

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

      <div
        aria-hidden="true"
        className="pointer-events-none fixed -bottom-40 right-[-10rem] h-96 w-96 rounded-full blur-[140px]"
        style={{
          backgroundColor: "var(--glow)",
          opacity: 0.35,
        }}
      />
    </main>
  );
}