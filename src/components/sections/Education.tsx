"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { education } from "@/data/education";

export function Education() {
  return (
    <section
      id="education-preview"
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
                Education
              </span>
            </div>

            <span
              className="hidden text-[10px] uppercase tracking-[0.25em] sm:block"
              style={{
                color: "var(--muted)",
              }}
            >
              Academic journey
            </span>
          </div>

          <div className="mt-10 sm:mt-16">
            {education.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                className="group grid gap-6 border-t py-8 sm:gap-8 sm:py-10 lg:grid-cols-[80px_180px_1fr] lg:gap-12"
                style={{
                  borderColor: "var(--border)",
                }}
              >
                <span
                  className="text-xs sm:text-sm"
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  {item.number}
                </span>

                <div className="flex flex-row items-center gap-4 sm:flex-col sm:items-start sm:gap-2">
                  <span
                    className="text-[10px] uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.2em]"
                    style={{
                      color: "var(--muted)",
                    }}
                  >
                    {item.period}
                  </span>

                  <span
                    className="text-[9px] uppercase tracking-[0.22em] sm:tracking-[0.25em]"
                    style={{
                      color: "var(--accent)",
                    }}
                  >
                    {item.type}
                  </span>
                </div>

                <div>
                  <h3
                    className="text-2xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl lg:text-4xl"
                    style={{
                      color: "var(--foreground)",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-2 text-xs uppercase tracking-[0.12em] sm:text-sm sm:tracking-[0.15em]"
                    style={{
                      color: "var(--secondary)",
                    }}
                  >
                    {item.institution}
                  </p>

                  <p
                    className="mt-4 max-w-xl text-sm leading-7 sm:mt-5"
                    style={{
                      color: "var(--muted)",
                    }}
                  >
                    {item.description}
                  </p>
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
              href="/education"
              className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.18em] transition-transform duration-300 hover:translate-x-2 sm:text-sm sm:tracking-[0.2em]"
              style={{
                color: "var(--foreground)",
              }}
            >
              <span>View education</span>

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
    </section>
  );
}