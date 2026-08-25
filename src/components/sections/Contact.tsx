"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Contact() {
  return (
    <section
      id="contact-preview"
      className="relative flex min-h-[80vh] items-center overflow-hidden px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
              Contact
            </span>
          </div>

          <div className="mt-10 grid gap-10 sm:mt-14 sm:gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <div>
              <p
                className="text-xs uppercase tracking-[0.22em] sm:text-sm sm:tracking-[0.25em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                Have an idea?
              </p>

              <h2
                className="mt-4 text-[clamp(4rem,18vw,8rem)] font-semibold leading-[0.85] tracking-[-0.07em] sm:mt-5 sm:text-7xl lg:text-8xl"
                style={{
                  color: "var(--foreground)",
                }}
              >
                Let&apos;s
                <br />
                build
                <br />
                <span
                  style={{
                    color: "var(--primary)",
                  }}
                >
                  something.
                </span>
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p
                className="max-w-lg text-base leading-7 sm:text-lg sm:leading-8"
                style={{
                  color: "var(--muted)",
                }}
              >
                Whether you have a project idea, a
                collaboration in mind, or simply want to
                say hello, I&apos;d love to hear from you.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex w-fit items-center gap-5 border-b pb-3 text-xs uppercase tracking-[0.18em] sm:mt-10 sm:pb-4 sm:text-sm sm:tracking-[0.2em]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                <span>Start a conversation</span>

                <motion.span
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  →
                </motion.span>
              </Link>
            </div>
          </div>

          <div
            className="mt-16 grid border-y sm:mt-24 sm:grid-cols-3"
            style={{
              borderColor: "var(--border)",
            }}
          >
            <a
              href="mailto:himeshroy.cse@gmail.com"
              className="min-w-0 border-b px-0 py-6 text-sm transition-opacity duration-300 hover:opacity-70 sm:border-b-0 sm:border-r sm:px-8 sm:py-8"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            >
              <span className="block break-all">
                himeshroy.cse@gmail.com
              </span>
            </a>

            <a
              href="https://github.com/HimeshRoy"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b px-0 py-6 text-sm transition-opacity duration-300 hover:opacity-70 sm:border-b-0 sm:border-r sm:px-8 sm:py-8"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/himeshroy/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-0 py-6 text-sm transition-opacity duration-300 hover:opacity-70 sm:px-8 sm:py-8"
              style={{
                color: "var(--foreground)",
              }}
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-[-10%] h-72 w-72 rounded-full blur-[120px] sm:h-96 sm:w-96 sm:blur-[140px]"
        style={{
          backgroundColor: "var(--glow)",
        }}
      />
    </section>
  );
}