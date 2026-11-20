"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

type ConnectLink = {
  label: string;
  href: string;
  external: boolean;
  isInternalRoute?: boolean;
  icon: ReactNode;
};

const connectLinks: ConnectLink[] = [
  {
    label: "Email",
    href: "mailto:himeshroy.cse@gmail.com",
    external: false,
    icon: (
      <svg
        className="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
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
    label: "GitHub",
    href: "https://github.com/HimeshRoy",
    external: true,
    icon: (
      <svg
        className="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/himeshroy/",
    external: true,
    icon: (
      <svg
        className="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/_himesh_roy",
    external: true,
    icon: (
      <svg
        className="h-3.5 w-3.5 shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/_himesh_roy",
    external: true,
    icon: (
      <svg
        className="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
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
  {
    label: "View CV",
    href: "/cv",
    external: false,
    isInternalRoute: true,
    icon: (
      <svg
        className="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050505] px-6 pb-8 pt-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-3xl tracking-tight">
              <span className="font-bold text-white">Himesh</span>
              <span className="font-light text-[#8a8a8e]">Roy</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#8a8a8e]">
              Full-Stack Developer &amp; B.Tech CSE (AI &amp; ML) student
              building modern web applications and intelligent systems.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-white" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#8a8a8e]">
                Open to internships &amp; collaborations
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white">
              Navigation
            </span>

            <nav className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3.5">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[#8a8a8e] transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white">
              Connect
            </span>

            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3.5">
              {connectLinks.map((item) =>
                item.isInternalRoute ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group inline-flex items-center gap-2.5 text-sm text-[#8a8a8e] transition-colors duration-200 hover:text-white"
                  >
                    <span className="text-white/60 transition-colors duration-200 group-hover:text-white">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-2.5 text-sm text-[#8a8a8e] transition-colors duration-200 hover:text-white"
                  >
                    <span className="text-white/60 transition-colors duration-200 group-hover:text-white">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[11px] uppercase tracking-[0.18em] text-[#8a8a8e]">
            © {new Date().getFullYear()} Himesh Roy
          </span>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex w-fit cursor-pointer items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-opacity hover:opacity-75"
          >
            Back to top <span>↑</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
