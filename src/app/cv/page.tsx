"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const highlights = [
  "Full Stack Development",
  "AI / Machine Learning",
  "React.js",
  "Node.js",
  "TypeScript",
  "Python",
];

const snapshot = [
  { label: "Education", value: "B.Tech CSE · AI & ML" },
  { label: "Experience", value: "Full Stack Intern" },
  { label: "Location", value: "Panipat · India" },
];

const educationHistory = [
  {
    period: "2025 — Present",
    degree: "B.Tech in CSE with Specialization in AI & ML",
    institution: "Geeta University, Panipat",
  },
  {
    period: "2023 — 2025",
    degree: "Higher Secondary — Science (PCM)",
    institution: "Nirmaan Vidya Jyoti School, Siliguri",
  },
  {
    period: "2017 — 2023",
    degree: "Secondary Education",
    institution: "Caesar School, Malbazar",
  },
];

const skills = [
  "HTML5",
  "CSS / Tailwind",
  "JavaScript",
  "C / C++",
  "Python",
  "React / Vite",
  "TypeScript",
  "Node.js",
  "Express.js",
];

const projects = [
  {
    number: "01",
    title: "LocalLens",
    period: "July 2026",
    description:
      "A full stack web application for discovering nearby places, sharing reviews, ratings and photos, with authentication, location-based features, secure APIs, and responsive UI.",
  },
  {
    number: "02",
    title: "North Bengal Cloud Academy",
    period: "June 2026",
    description:
      "An online learning platform for students featuring authentication, assignments, attendance, live classes, tests, results, and an admin dashboard.",
  },
  {
    number: "03",
    title: "Personal Portfolio",
    period: "April 2026",
    description:
      "A professional personal portfolio designed to showcase frontend development skills and academic projects.",
  },
];

const certifications = [
  "Cisco C++ Essentials 1 & Essentials 2",
  "CSS Certificate — HackerRank",
  "Kaggle Community Member",
  "Python Coder — Kaggle",
];

const achievements = [
  "Participant — HackForge 2.0 Hackathon, Geeta University",
  "Participant / Top 15 — Internal SIH, Geeta University",
];

export default function CVPage() {
  return (
    <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-28 text-white sm:px-10 sm:pb-32 sm:pt-32 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-white/10 pb-12"
        >
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8a8a8e]">
                Curriculum Vitae · Himesh Roy
              </p>
              <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                FULL STACK
                <br />
                DEVELOPER
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/Himesh-Roy-CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#050505] transition-opacity hover:opacity-85"
              >
                <span>Download PDF</span>
                <span>↓</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#111113] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-white/35"
              >
                <span>Contact Me</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#8a8a8e] sm:text-base">
            B.Tech CSE student specializing in AI &amp; ML, with a strong
            passion for full-stack development. I build responsive, scalable web
            applications using modern technologies while exploring AI, machine
            learning, and new ideas through projects and hackathons.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-white/10 bg-[#111113] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#d4d4d8]"
              >
                {highlight}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Snapshot Strip */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {snapshot.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.06 + index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl border border-white/10 bg-[#111113] p-5"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#8a8a8e]">
                {item.label}
              </span>
              <p className="mt-2 font-display text-lg font-bold text-white">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 01 / Profile */}
        <div className="mt-16 grid gap-8 border-t border-white/10 pt-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#8a8a8e]">
              01 / Profile
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-[-0.02em] text-white sm:text-3xl">
              BUILDING FULL STACK EXPERIENCES
            </h2>
          </div>

          <div className="space-y-4 text-sm leading-7 text-[#8a8a8e] sm:text-base lg:col-span-8">
            <p className="text-white">
              I am a B.Tech CSE student specializing in Artificial Intelligence
              and Machine Learning with a strong interest in full-stack
              development.
            </p>
            <p>
              I work with modern frontend and backend technologies to build
              responsive and scalable web applications, while continuously
              expanding my knowledge through practical projects.
            </p>
            <p>
              I enjoy participating in hackathons and experimenting with
              technologies that help bridge the gap between design,
              functionality, and real-world problem solving.
            </p>
          </div>
        </div>

        {/* 02 / Experience */}
        <div className="mt-16 grid gap-8 border-t border-white/10 pt-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#8a8a8e]">
              02 / Experience
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-[-0.02em] text-white sm:text-3xl">
              PROFESSIONAL EXPERIENCE
            </h2>
          </div>

          <div className="lg:col-span-8">
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-white/10 bg-[#111113] p-6 sm:p-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#050505] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Internship
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#8a8a8e]">
                  June 2026 — July 2026
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl font-bold text-white sm:text-2xl">
                Full Stack Development Intern
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#d4d4d8]">
                World On Networks
              </p>

              <p className="mt-4 text-sm leading-7 text-[#8a8a8e]">
                Gained practical hands-on experience in full-stack web
                development, specifically working with React.js and Node.js.
                Built and developed LocalLens, a full-stack web application
                featuring user authentication, location-based features, and
                secure APIs.
              </p>
            </motion.article>
          </div>
        </div>

        {/* 03 / Education */}
        <div className="mt-16 grid gap-8 border-t border-white/10 pt-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#8a8a8e]">
              03 / Education
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-[-0.02em] text-white sm:text-3xl">
              ACADEMIC JOURNEY
            </h2>
          </div>

          <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#111113] lg:col-span-8">
            {educationHistory.map((item) => (
              <div
                key={item.degree}
                className="flex flex-col justify-between gap-2 p-5 sm:flex-row sm:items-center sm:p-6"
              >
                <div>
                  <h3 className="font-display text-base font-bold text-white sm:text-lg">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-xs text-[#8a8a8e] sm:text-sm">
                    {item.institution}
                  </p>
                </div>

                <span className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-[#8a8a8e]">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 04 / Technical Skills */}
        <div className="mt-16 grid gap-8 border-t border-white/10 pt-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#8a8a8e]">
              04 / Skills
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-[-0.02em] text-white sm:text-3xl">
              TECHNICAL SKILLS
            </h2>
          </div>

          <div className="flex flex-wrap content-start gap-2.5 lg:col-span-8">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-white/10 bg-[#111113] px-4 py-2.5 text-xs font-medium text-[#d4d4d8] transition-colors hover:border-white/25 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 05 / Selected Projects */}
        <div className="mt-16 border-t border-white/10 pt-14">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#8a8a8e]">
                05 / Selected Projects
              </span>
              <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-[-0.02em] text-white sm:text-3xl">
                THINGS I&apos;VE BUILT
              </h2>
            </div>

            <Link
              href="/projects"
              className="group relative inline-block w-fit pb-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white"
            >
              <span>View Full Archive →</span>
              <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-white transition-transform duration-300 group-hover:scale-x-110" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#111113] p-5 transition-colors hover:border-white/25"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-white/40">
                    <span>{project.number}</span>
                    <span>{project.period}</span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#8a8a8e] sm:text-sm">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* 06 / Certifications & 07 / Achievements */}
        <div className="mt-16 grid grid-cols-1 gap-4 border-t border-white/10 pt-14 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#111113] p-6 sm:p-7">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#8a8a8e]">
              06 / Certifications
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-[-0.02em] text-white">
              CERTIFICATIONS
            </h2>

            <ul className="mt-6 divide-y divide-white/10 border-t border-white/10">
              {certifications.map((certification) => (
                <li
                  key={certification}
                  className="flex items-center gap-3 py-3.5 text-sm text-[#d4d4d8]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                  <span>{certification}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111113] p-6 sm:p-7">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#8a8a8e]">
              07 / Achievements
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-[-0.02em] text-white">
              HACKATHONS
            </h2>

            <ul className="mt-6 divide-y divide-white/10 border-t border-white/10">
              {achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex items-start gap-3 py-3.5 text-sm leading-6 text-[#d4d4d8]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 08 / Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0f] p-7 sm:p-10 lg:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl"
          />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-xl">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#8a8a8e]">
                08 / Resume PDF
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[1.03] tracking-[-0.03em] text-white sm:text-4xl">
                WANT THE FULL PICTURE?
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#8a8a8e]">
                Download the complete Himesh Roy resume for a concise PDF
                overview of education, experience, skills, projects, and
                certifications.
              </p>
            </div>

            <a
              href="/Himesh-Roy-CV.pdf"
              download
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#050505] transition-opacity hover:opacity-85"
            >
              <span>Download CV</span>
              <span>↓</span>
            </a>
          </div>
        </motion.div>

        {/* Bottom Navigation */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
          <Link
            href="/education"
            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#8a8a8e] transition-colors hover:text-white"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            <span>Education</span>
          </Link>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 pb-1.5 text-sm font-bold tracking-wide text-white"
          >
            <span>Contact Me</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
            <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-white transition-transform duration-300 group-hover:scale-x-110" />
          </Link>
        </div>
      </div>
    </section>
  );
}