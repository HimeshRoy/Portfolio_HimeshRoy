"use client";

import { useTheme } from "@/themes/ThemeProvider";
import { motion } from "framer-motion";
import Link from "next/link";

const navigation = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Education",
    href: "/education",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "CV",
    href: "/cv",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function SiteFooter() {
  const { theme } = useTheme();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="relative border-t px-6 pb-8 pt-16 sm:px-10 lg:px-16"
      style={{
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_0.7fr]">
          <div>
            <Link
              href="/"
              className="text-4xl font-semibold tracking-[-0.05em]"
              style={{
                color: "var(--foreground)",
              }}
            >
              Himesh
              <span
                style={{
                  color: "var(--primary)",
                }}
              >
                Roy
              </span>
            </Link>

            <p
              className="mt-5 max-w-sm text-sm leading-7"
              style={{
                color: "var(--muted)",
              }}
            >
              Developer, AI/ML enthusiast, and creator
              building thoughtful digital experiences.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: "var(--accent)",
                  boxShadow:
                    "0 0 16px var(--glow)",
                }}
              />

              <span
                className="text-[10px] uppercase tracking-[0.3em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                {getThemeLabel(theme)} · Active
              </span>
            </div>
          </div>

          <div>
            <span
              className="text-[10px] uppercase tracking-[0.3em]"
              style={{
                color: "var(--accent)",
              }}
            >
              Navigation
            </span>

            <nav className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm transition-transform duration-300 hover:translate-x-1"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <span
              className="text-[10px] uppercase tracking-[0.3em]"
              style={{
                color: "var(--accent)",
              }}
            >
              Connect
            </span>

            <div className="mt-5 flex flex-col gap-4">
              <a
                href="mailto:himeshroy.cse@gmail.com"
                className="text-sm transition-opacity duration-300 hover:opacity-70"
                style={{
                  color: "var(--foreground)",
                }}
              >
                Email
              </a>

              <a
                href="https://github.com/HimeshRoy"
                className="text-sm transition-opacity duration-300 hover:opacity-70"
                style={{
                  color: "var(--foreground)",
                }}
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/himeshroy/"
                className="text-sm transition-opacity duration-300 hover:opacity-70"
                style={{
                  color: "var(--foreground)",
                }}
              >
                LinkedIn
              </a>

              <Link
                href="/cv"
                className="text-sm transition-opacity duration-300 hover:opacity-70"
                style={{
                  color: "var(--foreground)",
                }}
              >
                View CV
              </Link>
            </div>
          </div>
        </div>

        <div
          className="mt-16 flex flex-col gap-6 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderColor: "var(--border)",
          }}
        >
          <div
            className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.2em] sm:flex-row sm:gap-6"
            style={{
              color: "var(--muted)",
            }}
          >
            <span>
              © {new Date().getFullYear()} Himesh Roy
            </span>

            <span>
              Built with Next.js · TypeScript · Three.js
            </span>
          </div>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="inline-flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.25em]"
            style={{
              color: "var(--foreground)",
            }}
          >
            Back to top
            <span
              style={{
                color: "var(--accent)",
              }}
            >
              ↑
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

function getThemeLabel(theme: string) {
  switch (theme) {
    case "monsoon":
      return "Monsoon";
    case "cherry-blossom":
      return "Cherry Blossom";
    case "summer":
      return "Summer";
    case "winter":
      return "Winter";
    case "ai":
      return "AI / ML";
    case "tech":
      return "Tech";
    case "nature":
      return "Nature";
    default:
      return "Monsoon";
  }
}