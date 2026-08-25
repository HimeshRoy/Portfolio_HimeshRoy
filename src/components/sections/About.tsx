"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function About() {
  return (
    <section
      id="about-preview"
      className="relative flex min-h-screen items-center px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-32"
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
            amount: 0.2,
          }}
          transition={{
            duration: 1,
          }}
        >
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
              About
            </span>
          </div>

          <div className="mt-10 grid gap-10 sm:mt-12 sm:gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
            <div>
              <p
                className="text-xs uppercase tracking-[0.22em] sm:text-sm sm:tracking-[0.25em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                Who is
              </p>

              <h2
                className="mt-3 text-[clamp(4rem,18vw,8rem)] font-semibold leading-[0.85] tracking-[-0.07em] sm:text-7xl lg:text-8xl"
                style={{
                  color: "var(--foreground)",
                }}
              >
                Himesh
                <br />
                <span
                  style={{
                    color: "var(--primary)",
                  }}
                >
                  Roy?
                </span>
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p
                className="max-w-2xl text-xl leading-[1.4] tracking-tight sm:text-2xl sm:leading-[1.35] lg:text-3xl"
                style={{
                  color: "var(--foreground)",
                }}
              >
                I build digital experiences at the
                intersection of technology, artificial
                intelligence, and creativity.
              </p>

              <p
                className="mt-6 max-w-xl text-sm leading-7 sm:mt-8 sm:text-base"
                style={{
                  color: "var(--muted)",
                }}
              >
                I&apos;m a developer and AI/ML enthusiast
                who enjoys turning ideas into useful,
                thoughtful, and memorable digital products.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex w-fit items-center gap-4 border-b pb-3 text-xs uppercase tracking-[0.18em] transition-transform duration-300 hover:translate-x-2 sm:mt-10 sm:text-sm sm:tracking-[0.2em]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                <span>Read my story</span>

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
            className="mt-16 grid border-y sm:mt-24 sm:grid-cols-3"
            style={{
              borderColor: "var(--border)",
            }}
          >
            <div
              className="border-b px-0 py-6 sm:border-b-0 sm:border-r sm:px-8 sm:py-8"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <span
                className="text-[10px] uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.25em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                Focus
              </span>

              <p
                className="mt-2 text-base sm:mt-3 sm:text-lg"
                style={{
                  color: "var(--foreground)",
                }}
              >
                Software · AI/ML
              </p>
            </div>

            <div
              className="border-b px-0 py-6 sm:border-b-0 sm:border-r sm:px-8 sm:py-8"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <span
                className="text-[10px] uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.25em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                Approach
              </span>

              <p
                className="mt-2 text-base sm:mt-3 sm:text-lg"
                style={{
                  color: "var(--foreground)",
                }}
              >
                Curious · Experimental
              </p>
            </div>

            <div className="px-0 py-6 sm:px-8 sm:py-8">
              <span
                className="text-[10px] uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.25em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                Currently
              </span>

              <p
                className="mt-2 text-base sm:mt-3 sm:text-lg"
                style={{
                  color: "var(--foreground)",
                }}
              >
                Building & learning
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}