"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const contactLinks = [
  {
    label: "Email",
    value: "himeshroy.cse@gmail.com",
    href: "mailto:himeshroy.cse@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/HimeshRoy",
    href: "https://github.com/HimeshRoy",
  },
  {
    label: "LinkedIn",
    value: "himesh-roy-23327b385",
    href: "https://www.linkedin.com/in/himesh-roy-23327b385/",
  },
];

export default function ContactPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden px-6 pb-32 pt-32 sm:px-10 lg:px-16"
      style={{
        color: "var(--foreground)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.header
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span
                className="h-px w-12"
                style={{
                  backgroundColor: "var(--accent)",
                }}
              />

              <span
                className="text-xs uppercase tracking-[0.35em]"
                style={{
                  color: "var(--accent)",
                }}
              >
                Contact
              </span>
            </div>

            <span
              className="hidden text-xs uppercase tracking-[0.25em] sm:block"
              style={{
                color: "var(--muted)",
              }}
            >
              Let&apos;s connect
            </span>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h1
              className="text-6xl font-semibold leading-[0.85] tracking-[-0.06em] sm:text-7xl lg:text-8xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              Let&apos;s
              <br />
              <span
                style={{
                  color: "var(--primary)",
                }}
              >
                talk.
              </span>
            </h1>

            <p
              className="max-w-2xl text-lg leading-8"
              style={{
                color: "var(--muted)",
              }}
            >
              Have an idea, a project, an opportunity, or simply want to say
              hello? I&apos;d be happy to hear from you.
            </p>
          </div>
        </motion.header>

        <section className="mt-24">
          <div
            className="border-y"
            style={{
              borderColor: "var(--border)",
            }}
          >
            {contactLinks.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  item.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                initial={{
                  opacity: 0,
                  y: 20,
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
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group grid gap-4 border-b py-8 last:border-b-0 sm:grid-cols-[180px_1fr_auto] sm:items-center"
                style={{
                  borderColor: "var(--border)",
                }}
              >
                <span
                  className="text-xs uppercase tracking-[0.25em]"
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  {item.label}
                </span>

                <span
                  className="break-all text-xl tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-2xl"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  {item.value}
                </span>

                <span
                  className="text-lg transition-transform duration-300 group-hover:translate-x-2"
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{
                color: "var(--accent)",
              }}
            >
              01 / Availability
            </span>

            <h2
              className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              Open to
              <br />
              interesting
              <br />
              things.
            </h2>
          </div>

          <div
            className="border p-8 sm:p-10"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--surface)",
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  backgroundColor: "var(--accent)",
                  boxShadow: "0 0 16px var(--glow)",
                }}
              />

              <span
                className="text-xs uppercase tracking-[0.25em]"
                style={{
                  color: "var(--accent)",
                }}
              >
                Currently building
              </span>
            </div>

            <p
              className="mt-6 max-w-2xl text-base leading-8"
              style={{
                color: "var(--muted)",
              }}
            >
              I&apos;m interested in software development, AI/ML, frontend
              engineering, creative technology, and opportunities where I can
              learn, contribute, and build meaningful products.
            </p>
          </div>
        </section>

        <section className="mt-24">
          <div
            className="relative overflow-hidden border p-8 sm:p-12 lg:p-16"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--surface)",
            }}
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full blur-[120px]"
              style={{
                backgroundColor: "var(--glow)",
                opacity: 0.6,
              }}
            />

            <div className="relative z-10">
              <span
                className="text-xs uppercase tracking-[0.3em]"
                style={{
                  color: "var(--accent)",
                }}
              >
                02 / Start a conversation
              </span>

              <h2
                className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl"
                style={{
                  color: "var(--foreground)",
                }}
              >
                Have something worth building?
              </h2>

              <p
                className="mt-6 max-w-2xl text-base leading-7"
                style={{
                  color: "var(--muted)",
                }}
              >
                The easiest way to reach me is through email. Tell me what
                you&apos;re working on, what you have in mind, or what
                you&apos;d like to explore.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/messages"
                  className="inline-flex items-center gap-5 border-b pb-3 text-sm uppercase tracking-[0.2em] transition-transform duration-300 hover:translate-x-2"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                >
                  <span>Start a conversation</span>

                  <span
                    style={{
                      color: "var(--accent)",
                    }}
                  >
                    →
                  </span>
                </Link>

                <a
                  href="mailto:himeshroy.cse@gmail.com"
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  <span>Email instead</span>

                  <span
                    style={{
                      color: "var(--accent)",
                    }}
                  >
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-6">
          <Link
            href="/cv"
            className="text-xs uppercase tracking-[0.2em] transition-transform duration-300 hover:-translate-x-1"
            style={{
              color: "var(--muted)",
            }}
          >
            ← CV
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-4 border-b pb-3 text-xs uppercase tracking-[0.2em] transition-transform duration-300 hover:translate-x-2"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground)",
            }}
          >
            <span>Back home</span>

            <span
              style={{
                color: "var(--accent)",
              }}
            >
              →
            </span>
          </Link>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed -bottom-40 right-[-10rem] h-96 w-96 rounded-full blur-[140px]"
        style={{
          backgroundColor: "var(--glow)",
          opacity: 0.35,
        }}
      />
    </main>
  );
}
