"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

const mobileNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-[#050505]/85 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        {/* Two-weight wordmark matching reference */}
        <Link
          href="/"
          className="relative z-50 shrink-0 font-display text-lg tracking-tight transition-opacity hover:opacity-80"
        >
          <span className="font-bold text-white">Himesh</span>
          <span className="font-light text-[#8a8a8e]">Roy</span>
        </Link>

        {/* Desktop Nav + Social Icons */}
        <div className="hidden items-center gap-8 lg:flex">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-7">
              {primaryNav.map((item) => {
                const active = isActive(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`text-sm transition-colors duration-200 ${
                        active
                          ? "font-medium text-white"
                          : "text-[#8a8a8e] hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="h-4 w-px bg-white/10" aria-hidden="true" />

          <div className="flex items-center gap-4 text-white">
            <a
              href="https://github.com/HimeshRoy"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="opacity-75 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-[18px] w-[18px]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/himeshroy/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="opacity-75 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-[18px] w-[18px]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
              </svg>
            </a>

            <a
              href="mailto:himeshroy.cse@gmail.com"
              aria-label="Email"
              className="opacity-75 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-[18px] w-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-50 flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          <span className="sr-only">
            {menuOpen ? "Close navigation" : "Open navigation"}
          </span>
          <span className="relative flex h-4 w-6 flex-col justify-between">
            <span
              className={`h-px w-full origin-center bg-white transition-transform duration-300 ${
                menuOpen ? "translate-y-[7.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-px w-full origin-center bg-white transition-transform duration-300 ${
                menuOpen ? "-translate-y-[7.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Fullscreen Drawer */}
      <div
        className={`fixed inset-0 top-[72px] z-40 bg-[#050505] transition-all duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="h-full overflow-y-auto px-6 pb-12 pt-6 sm:px-10"
        >
          <ul className="divide-y divide-white/10">
            {mobileNav.map((item, index) => {
              const active = isActive(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between py-4 transition-colors ${
                      active ? "text-white" : "text-[#8a8a8e] hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-[11px] font-medium text-[#52525b]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg font-semibold">
                        {item.label}
                      </span>
                    </span>
                    <span className="text-sm">{active ? "●" : "→"}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex items-center gap-6 text-sm text-[#8a8a8e]">
            <a
              href="https://github.com/HimeshRoy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/himeshroy/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:himeshroy.cse@gmail.com"
              className="hover:text-white"
            >
              Email
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}