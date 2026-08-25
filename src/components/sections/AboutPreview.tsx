"use client";

import { motion } from "framer-motion";

export function AboutPreview() {
  return (
    <section
      id="about-preview"
      className="relative flex min-h-screen items-center px-6 py-32 sm:px-10 lg:px-16"
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
          className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{
                color: "var(--accent)",
              }}
            >
              About me
            </span>

            <h2
              className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              More than
              <br />
              just code.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p
              className="text-lg leading-8 sm:text-xl"
              style={{
                color: "var(--muted)",
              }}
            >
              I&apos;m Himesh Roy, a developer and AI/ML
              enthusiast who enjoys turning ideas into
              meaningful digital experiences.
            </p>

            <p
              className="mt-6 text-base leading-7"
              style={{
                color: "var(--secondary)",
              }}
            >
              I&apos;m interested in the space where software,
              artificial intelligence, design, and creativity
              come together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}