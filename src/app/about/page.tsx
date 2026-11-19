"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Curiosity",
    description:
      "I enjoy understanding how systems work under the hood, exploring unfamiliar technologies, and learning by building real projects.",
  },
  {
    number: "02",
    title: "Building",
    description:
      "I learn best by turning ideas into working products—from full-stack web apps to AI/ML experiments and creative technology.",
  },
  {
    number: "03",
    title: "Problem Solving",
    description:
      "I like breaking down complex problems, testing different architectures, and shipping practical, reliable solutions.",
  },
];

const snapshot = [
  {
    label: "Education",
    title: "B.Tech CSE · AI & ML",
    subtitle: "Geeta University, Panipat",
  },
  {
    label: "Experience",
    title: "Full Stack Intern",
    subtitle: "Worlds On Network",
  },
  {
    label: "Focus",
    title: "Full-Stack · AI/ML",
    subtitle: "Web apps & intelligent systems",
  },
];

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-28 text-white sm:px-10 sm:pb-32 sm:pt-32 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Hero Intro */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-8 border-b border-white/10 pb-14 lg:grid-cols-12 lg:items-end lg:gap-12"
        >
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8a8a8e]">
              About Me
            </p>
            <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              HIMESH
              <br />
              ROY
            </h1>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
              I&apos;m a Full-Stack Developer and Computer Science student
              specializing in Artificial Intelligence and Machine Learning.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#8a8a8e] sm:text-base">
              I build responsive, scalable web applications while exploring
              AI/ML, modern systems, and creative ways to turn ideas into useful
              digital products.
            </p>
          </div>
        </motion.header>

        {/* Snapshot Bento Strip */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {snapshot.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.08 + index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl border border-white/10 bg-[#111113] p-5 sm:p-6"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#8a8a8e]">
                {item.label}
              </span>
              <p className="mt-2.5 font-display text-lg font-bold text-white sm:text-xl">
                {item.title}
              </p>
              <p className="mt-1 text-xs text-[#8a8a8e] sm:text-sm">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 01 / Story */}
        <div className="mt-20 grid gap-10 border-t border-white/10 pt-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#8a8a8e]">
              01 / Story
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[1.03] tracking-[-0.03em] text-white sm:text-4xl">
              LEARNING,
              <br />
              BUILDING,
              <br />
              GROWING.
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-7 text-[#8a8a8e] sm:text-base sm:leading-8 lg:col-span-7">
            <p className="text-white">
              I&apos;m currently pursuing a B.Tech in Computer Science and
              Engineering with a specialization in Artificial Intelligence and
              Machine Learning at Geeta University, Panipat.
            </p>

            <p>
              Alongside my academics, I focus on full-stack development and
              enjoy working with technologies such as React, Next.js,
              TypeScript, Node.js, Express.js, Python, and PostgreSQL.
            </p>

            <p>
              My development journey has been driven by practical projects,
              experimentation, and continuous learning. I enjoy taking an idea,
              understanding the problem behind it, and turning it into something
              people can actually use.
            </p>

            <p>
              I also participate in hackathons and explore AI/ML alongside
              software engineering, giving me opportunities to learn beyond the
              classroom and build for real-world problems.
            </p>
          </div>
        </div>

        {/* 02 / Principles */}
        <div className="mt-20 border-t border-white/10 pt-16">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#8a8a8e]">
            02 / Principles
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[1.03] tracking-[-0.03em] text-white sm:text-4xl">
            HOW I WORK
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111113] p-6 transition-colors duration-300 hover:border-white/25 hover:bg-[#151518]"
              >
                {/* <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-5 right-3 select-none font-display text-7xl font-extrabold leading-none text-white/[0.04]"
                >
                  {principle.number}
                </span> */}

                <span className="font-mono text-xs text-white/40">
                  {principle.number}
                </span>

                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  {principle.title}
                </h3>

                <p className="relative z-10 mt-3 text-sm leading-6 text-[#8a8a8e]">
                  {principle.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* 03 / Currently Callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-20 overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0f] p-7 sm:p-10 lg:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl"
          />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#8a8a8e]">
                03 / Currently
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[1.03] tracking-[-0.03em] text-white sm:text-4xl">
                BUILDING, LEARNING &amp; EXPLORING
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#8a8a8e] sm:text-base">
                Currently focused on full-stack development, AI/ML engineering,
                academic growth, and shipping projects that turn ideas into
                meaningful digital experiences.
              </p>
            </div>

            <Link
              href="/skills"
              className="group relative inline-flex w-fit items-center gap-2 pb-1.5 text-sm font-bold tracking-wide text-white sm:text-base"
            >
              <span>Explore My Skills</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
              <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-white transition-transform duration-300 group-hover:scale-x-110" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}