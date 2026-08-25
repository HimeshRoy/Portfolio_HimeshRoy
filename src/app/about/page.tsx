"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Curiosity",
    description:
      "I enjoy understanding how things work, exploring unfamiliar technologies, and learning by building real projects.",
  },
  {
    number: "02",
    title: "Building",
    description:
      "I learn best by turning ideas into working products, from full stack applications to experiments with AI and creative technology.",
  },
  {
    number: "03",
    title: "Problem Solving",
    description:
      "I like breaking down problems, experimenting with different approaches, and creating solutions that are practical and useful.",
  },
];

export default function AboutPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        color: "var(--foreground)",
      }}
    >
      <section className="px-6 pb-24 pt-32 sm:px-10 lg:px-16 lg:pb-32 lg:pt-40">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
          >
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
                About
              </span>
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
              <div>
                <span
                  className="text-sm uppercase tracking-[0.25em]"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  A little about me
                </span>

                <h1
                  className="mt-5 text-6xl font-semibold leading-[0.85] tracking-[-0.06em] sm:text-7xl lg:text-[8rem]"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  Himesh
                  <br />
                  <span
                    style={{
                      color: "var(--primary)",
                    }}
                  >
                    Roy.
                  </span>
                </h1>
              </div>

              <div className="flex flex-col justify-end">
                <p
                  className="max-w-3xl text-2xl leading-[1.3] tracking-tight sm:text-3xl lg:text-4xl"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  I&apos;m a Full Stack Developer and
                  Computer Science student specializing
                  in Artificial Intelligence and Machine
                  Learning.
                </p>

                <p
                  className="mt-8 max-w-2xl text-base leading-8"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  I enjoy building responsive and scalable
                  web applications while exploring AI/ML,
                  modern technologies, and creative ways to
                  turn ideas into useful digital products.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div
        className="mx-6 border-t sm:mx-10 lg:mx-16"
        style={{
          borderColor: "var(--border)",
        }}
      />

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{
                color: "var(--accent)",
              }}
            >
              01 / Story
            </span>

            <h2
              className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              Learning,
              <br />
              building,
              <br />
              growing.
            </h2>
          </div>

          <div className="max-w-3xl space-y-7 text-base leading-8">
            <p
              style={{
                color: "var(--foreground)",
              }}
            >
              I&apos;m currently pursuing a B.Tech in
              Computer Science and Engineering with a
              specialization in Artificial Intelligence and
              Machine Learning at Geeta University, Panipat.
            </p>

            <p
              style={{
                color: "var(--muted)",
              }}
            >
              Alongside my academics, I focus on full stack
              development and enjoy working with technologies
              such as React, TypeScript, Node.js, Express.js,
              Python, and modern frontend tools.
            </p>

            <p
              style={{
                color: "var(--muted)",
              }}
            >
              My development journey has been driven by
              practical projects, experimentation, and
              continuous learning. I enjoy taking an idea,
              understanding the problem behind it, and
              turning it into something people can actually
              use.
            </p>

            <p
              style={{
                color: "var(--muted)",
              }}
            >
              I also enjoy participating in hackathons and
              exploring AI/ML alongside software development,
              giving me opportunities to learn beyond the
              classroom and work on real-world problems.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-12">
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{
                color: "var(--accent)",
              }}
            >
              02 / Principles
            </span>

            <h2
              className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              How I work.
            </h2>
          </div>

          <div
            className="border-t"
            style={{
              borderColor: "var(--border)",
            }}
          >
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{
                  opacity: 0,
                  y: 25,
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
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="grid gap-6 border-b py-10 sm:grid-cols-[80px_0.8fr_1.2fr] sm:items-center"
                style={{
                  borderColor: "var(--border)",
                }}
              >
                <span
                  className="text-xs tracking-[0.2em]"
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  {principle.number}
                </span>

                <h3
                  className="text-2xl font-medium"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  {principle.title}
                </h3>

                <p
                  className="max-w-xl text-sm leading-7"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto w-full max-w-7xl">
          <div
            className="border-y py-12"
            style={{
              borderColor: "var(--border)",
            }}
          >
            <div className="grid gap-10 sm:grid-cols-3">
              <div>
                <span
                  className="text-[10px] uppercase tracking-[0.25em]"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  Education
                </span>

                <p
                  className="mt-3 text-lg"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  B.Tech CSE · AI & ML
                </p>

                <p
                  className="mt-2 text-sm"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  Geeta University, Panipat
                </p>
              </div>

              <div>
                <span
                  className="text-[10px] uppercase tracking-[0.25em]"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  Experience
                </span>

                <p
                  className="mt-3 text-lg"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  Full Stack Intern
                </p>

                <p
                  className="mt-2 text-sm"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  World On Networks
                </p>
              </div>

              <div>
                <span
                  className="text-[10px] uppercase tracking-[0.25em]"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  Focus
                </span>

                <p
                  className="mt-3 text-lg"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  Full Stack · AI/ML
                </p>

                <p
                  className="mt-2 text-sm"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  Software & intelligent systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-32 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-7xl">
          <div
            className="relative overflow-hidden border p-8 sm:p-12 lg:p-16"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--surface)",
            }}
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[100px]"
              style={{
                backgroundColor: "var(--glow)",
              }}
            />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <span
                  className="text-xs uppercase tracking-[0.3em]"
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  03 / Currently
                </span>

                <h2
                  className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  Building, learning,
                  <br />
                  and exploring.
                </h2>

                <p
                  className="mt-6 max-w-2xl text-base leading-7"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  Currently focused on full stack
                  development, AI/ML, academic growth,
                  personal projects, and exploring new
                  technologies that can turn ideas into
                  meaningful digital experiences.
                </p>
              </div>

              <Link
                href="/skills"
                className="inline-flex w-fit items-center gap-4 border-b pb-3 text-sm uppercase tracking-[0.2em] transition-transform duration-300 hover:translate-x-2"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                <span>Explore my skills</span>

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
        </div>
      </section>
    </main>
  );
}