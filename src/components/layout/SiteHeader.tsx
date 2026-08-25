"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

const navigation = [
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

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="relative z-50 border-b"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--background)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="relative z-50 shrink-0 text-xl font-semibold transition-opacity hover:opacity-70"
          style={{
            color: "var(--foreground)",
          }}
        >
          HIMESH ROY
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden lg:block"
        >
          <ul className="flex items-center gap-6">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={
                      active ? "page" : undefined
                    }
                    className="group relative block py-1 text-sm transition-colors duration-300"
                    style={{
                      color: active
                        ? "var(--foreground)"
                        : "var(--muted)",
                    }}
                  >
                    {item.label}

                    <span
                      className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                      style={{
                        width: active ? "100%" : "0%",
                        backgroundColor: "var(--accent)",
                      }}
                    />

                    <span
                      className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                      style={{
                        backgroundColor: "var(--accent)",
                        opacity: active ? 0 : 0.6,
                      }}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ThemeSwitcher />
        </div>

        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          style={{
            color: "var(--foreground)",
          }}
        >
          <span className="sr-only">
            {menuOpen
              ? "Close navigation"
              : "Open navigation"}
          </span>

          <span className="relative flex h-5 w-6 flex-col justify-between">
            <span
              className="h-px w-full origin-center transition-transform duration-300"
              style={{
                backgroundColor: "var(--foreground)",
                transform: menuOpen
                  ? "translateY(9px) rotate(45deg)"
                  : "none",
              }}
            />

            <span
              className="h-px w-full transition-opacity duration-300"
              style={{
                backgroundColor: "var(--foreground)",
                opacity: menuOpen ? 0 : 1,
              }}
            />

            <span
              className="h-px w-full origin-center transition-transform duration-300"
              style={{
                backgroundColor: "var(--foreground)",
                transform: menuOpen
                  ? "translateY(-9px) rotate(-45deg)"
                  : "none",
              }}
            />
          </span>
        </button>
      </div>

      <div
        className="fixed inset-0 top-[73px] z-40 lg:hidden"
        style={{
          visibility: menuOpen ? "visible" : "hidden",
        }}
      >
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            backgroundColor: "var(--background)",
            opacity: menuOpen ? 1 : 0,
          }}
        />

        <nav
          aria-label="Mobile navigation"
          className="relative h-full overflow-y-auto px-6 pb-10 pt-8 transition-transform duration-300 sm:px-10"
          style={{
            backgroundColor: "var(--background)",
            transform: menuOpen
              ? "translateY(0)"
              : "translateY(-20px)",
            opacity: menuOpen ? 1 : 0,
          }}
        >
          <div className="mx-auto max-w-7xl">
            <div
              className="mb-8 border-b pb-5 text-[10px] uppercase tracking-[0.3em]"
              style={{
                borderColor: "var(--border)",
                color: "var(--muted)",
              }}
            >
              Navigation
            </div>

            <ul>
              {navigation.map((item, index) => {
                const active = isActive(item.href);

                return (
                  <li
                    key={item.href}
                    className="border-b"
                    style={{
                      borderColor: "var(--border)",
                    }}
                  >
                    <Link
                      href={item.href}
                      aria-current={
                        active ? "page" : undefined
                      }
                      className="flex items-center justify-between py-5"
                      style={{
                        color: active
                          ? "var(--foreground)"
                          : "var(--muted)",
                      }}
                    >
                      <span className="flex items-center gap-5">
                        <span
                          className="text-[9px]"
                          style={{
                            color: "var(--accent)",
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-lg">
                          {item.label}
                        </span>
                      </span>

                      <span
                        className="text-lg"
                        style={{
                          color: active
                            ? "var(--accent)"
                            : "var(--muted)",
                        }}
                      >
                        {active ? "●" : "→"}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10">
              <span
                className="mb-4 block text-[10px] uppercase tracking-[0.3em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                Theme
              </span>

              <ThemeSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}