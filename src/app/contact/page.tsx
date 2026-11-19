"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type ContactChannel = {
  name: string;
  handle: string;
  href: string;
  external: boolean;
  icon: ReactNode;
};

const contactChannels: ContactChannel[] = [
  {
    name: "Email",
    handle: "himeshroy.cse@gmail.com",
    href: "mailto:himeshroy.cse@gmail.com",
    external: false,
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    handle: "@HimeshRoy",
    href: "https://github.com/HimeshRoy",
    external: true,
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "in/himeshroy",
    href: "https://www.linkedin.com/in/himeshroy/",
    external: true,
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
      </svg>
    ),
  },
  {
    name: "X",
    handle: "@_himesh_roy",
    href: "https://x.com/_himesh_roy",
    external: true,
    icon: (
      <svg
        className="h-[18px] w-[18px]"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@_himesh_roy",
    href: "https://instagram.com/_himesh_roy",
    external: true,
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-28 text-white sm:px-10 sm:pb-32 sm:pt-32 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8a8a8e]">
              Contact · Let&apos;s Connect
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              LET&apos;S TALK.
            </h1>
            <p className="mt-5 text-sm leading-7 text-[#8a8a8e] sm:text-base">
              Have an idea, a project, an opportunity, or simply want to say
              hello? Reach out directly or start a live conversation below.
            </p>
          </div>

          <Link
            href="/"
            className="group relative inline-flex w-fit items-center gap-2 pb-1.5 text-sm font-bold tracking-wide text-white"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            <span>Back Home</span>
            <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-white transition-transform duration-300 group-hover:scale-x-110" />
          </Link>
        </motion.header>

        {/* Social & Contact Icon Grid */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {contactChannels.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.06 + index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#111113] p-4 transition-all duration-200 hover:border-white/25 hover:bg-[#16161a]"
            >
              <div className="flex min-w-0 items-center gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#050505] text-white transition-colors duration-200 group-hover:border-white/30 group-hover:bg-white group-hover:text-[#050505]">
                  {item.icon}
                </span>

                <div className="min-w-0">
                  <div className="font-display text-sm font-bold text-white">
                    {item.name}
                  </div>
                  <div className="truncate text-xs text-[#8a8a8e]">
                    {item.handle}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bento Row: Availability + Direct Messaging CTA */}
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* 01 / Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#111113] p-7 sm:p-8 lg:col-span-5"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8a8a8e]">
                  01 / Availability
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#050505] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Currently Building
                </span>
              </div>

              <h2 className="mt-6 font-display text-2xl font-extrabold uppercase leading-tight tracking-[-0.02em] text-white sm:text-3xl">
                OPEN TO INTERESTING THINGS.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#8a8a8e]">
                I&apos;m interested in full-stack software development, AI/ML
                engineering, frontend architecture, and opportunities where I
                can learn, contribute, and ship meaningful products.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-5">
              {["Internships", "Full-Stack", "AI / ML", "Collaborations"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-[#050505] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#a1a1aa]"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          {/* 02 / Start a Conversation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0f] p-7 sm:p-8 lg:col-span-7 lg:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl"
            />

            <div className="relative z-10">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8a8a8e]">
                02 / Direct Message
              </span>

              <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-[1.03] tracking-[-0.03em] text-white sm:text-4xl">
                HAVE SOMETHING WORTH BUILDING?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#8a8a8e] sm:text-base">
                Send a message directly through my portfolio inbox, or email me
                with what you&apos;re working on and what you&apos;d like to
                explore.
              </p>
            </div>

            <div className="relative z-10 mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/messages"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#050505] transition-opacity hover:opacity-85"
              >
                <span>Start a Conversation</span>
                <span>→</span>
              </Link>

              <a
                href="mailto:himeshroy.cse@gmail.com"
                className="group relative inline-flex items-center gap-2 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#d4d4d8] transition-colors hover:text-white"
              >
                <span>Email Instead</span>
                <span>↗</span>
                <span className="absolute inset-x-0 bottom-0 h-px bg-white/30 transition-colors group-hover:bg-white" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
          <Link
            href="/cv"
            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#8a8a8e] transition-colors hover:text-white"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            <span>CV</span>
          </Link>

          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 pb-1.5 text-sm font-bold tracking-wide text-white"
          >
            <span>Back Home</span>
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