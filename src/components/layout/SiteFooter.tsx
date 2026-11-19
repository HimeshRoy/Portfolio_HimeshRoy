"use client";

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

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050505] px-6 pb-8 pt-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_0.7fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-3xl tracking-tight"
            >
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

            <div className="mt-5 flex flex-col gap-3.5">
              <a
                href="mailto:himeshroy.cse@gmail.com"
                className="text-sm text-[#8a8a8e] transition-colors hover:text-white"
              >
                Email
              </a>
              <a
                href="https://github.com/HimeshRoy"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[#8a8a8e] transition-colors hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/himeshroy/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[#8a8a8e] transition-colors hover:text-white"
              >
                LinkedIn
              </a>
              <Link
                href="/cv"
                className="text-sm text-[#8a8a8e] transition-colors hover:text-white"
              >
                View CV
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-[#8a8a8e] sm:flex-row sm:gap-6">
            <span>© {new Date().getFullYear()} Himesh Roy</span>
            <span>Built with Next.js · TypeScript · PostgreSQL</span>
          </div>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex w-fit items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-opacity hover:opacity-75"
          >
            Back to top <span>↑</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}