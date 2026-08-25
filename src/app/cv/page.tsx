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

const strengths = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Building responsive and scalable web applications across frontend and backend technologies.",
  },
  {
    number: "02",
    title: "AI & Machine Learning",
    description:
      "Developing technical knowledge in artificial intelligence and machine learning alongside software development.",
  },
  {
    number: "03",
    title: "Project Driven Learning",
    description:
      "Learning through practical projects, experimentation, hackathons, and hands-on development.",
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
                Curriculum Vitae
              </span>
            </div>

            <span
              className="hidden text-xs uppercase tracking-[0.25em] sm:block"
              style={{
                color: "var(--muted)",
              }}
            >
              Full Stack Developer
            </span>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <span
                className="text-sm uppercase tracking-[0.25em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                Himesh Roy
              </span>

              <h1
                className="mt-5 text-6xl font-semibold leading-[0.85] tracking-[-0.06em] sm:text-7xl lg:text-8xl"
                style={{
                  color: "var(--foreground)",
                }}
              >
                Full Stack
                <br />
                <span
                  style={{
                    color: "var(--primary)",
                  }}
                >
                  Developer.
                </span>
              </h1>
            </div>

            <div>
              <p
                className="max-w-2xl text-lg leading-8"
                style={{
                  color: "var(--muted)",
                }}
              >
                B.Tech CSE student specializing in AI & ML, with a strong
                passion for full stack development. I build responsive,
                scalable web applications using modern technologies while
                exploring AI, machine learning, and new ideas through projects
                and hackathons.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="border px-4 py-2 text-[10px] uppercase tracking-[0.16em]"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--muted)",
                    }}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.header>

        <section
          className="mt-24 border-y py-12"
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
                className="mt-3 text-xl"
                style={{
                  color: "var(--foreground)",
                }}
              >
                B.Tech CSE · AI & ML
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
                className="mt-3 text-xl"
                style={{
                  color: "var(--foreground)",
                }}
              >
                Full Stack Intern
              </p>
            </div>

            <div>
              <span
                className="text-[10px] uppercase tracking-[0.25em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                Location
              </span>

              <p
                className="mt-3 text-xl"
                style={{
                  color: "var(--foreground)",
                }}
              >
                Panipat · India
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24 grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{
                color: "var(--accent)",
              }}
            >
              01 / Profile
            </span>

            <h2
              className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              Building
              <br />
              full stack
              <br />
              experiences.
            </h2>
          </div>

          <div className="max-w-3xl space-y-7 text-base leading-8">
            <p
              style={{
                color: "var(--foreground)",
              }}
            >
              I am a B.Tech CSE student specializing in Artificial Intelligence
              and Machine Learning with a strong interest in full stack
              development.
            </p>

            <p
              style={{
                color: "var(--muted)",
              }}
            >
              I work with modern frontend and backend technologies to build
              responsive and scalable web applications, while continuously
              expanding my knowledge through practical projects.
            </p>

            <p
              style={{
                color: "var(--muted)",
              }}
            >
              I enjoy participating in hackathons and experimenting with
              technologies that help bridge the gap between design,
              functionality, and real-world problem solving.
            </p>
          </div>
        </section>

        <section className="mt-24">
          <div className="mb-12">
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{
                color: "var(--accent)",
              }}
            >
              02 / Experience
            </span>

            <h2
              className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              Professional experience.
            </h2>
          </div>

          <div
            className="border-t"
            style={{
              borderColor: "var(--border)",
            }}
          >
            <motion.div
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
              }}
              className="grid gap-6 border-b py-10 sm:grid-cols-[180px_0.8fr_1.2fr] sm:items-start"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <div>
                <span
                  className="text-xs uppercase tracking-[0.2em]"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  June 2026 — July 2026
                </span>

                <span
                  className="mt-2 block text-[9px] uppercase tracking-[0.25em]"
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  Internship
                </span>
              </div>

              <div>
                <h3
                  className="text-2xl font-medium sm:text-3xl"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  Full Stack Development Intern
                </h3>

                <p
                  className="mt-2 text-sm uppercase tracking-[0.15em]"
                  style={{
                    color: "var(--secondary)",
                  }}
                >
                  World On Networks
                </p>
              </div>

              <p
                className="max-w-xl text-sm leading-7"
                style={{
                  color: "var(--muted)",
                }}
              >
                Gained practical hands-on experience in full stack web
                development, specifically working with React.js and Node.js.
                Built and developed LocalLens, a full stack web application
                featuring user authentication, location-based features, and
                secure APIs.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mt-24">
          <div className="mb-12">
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{
                color: "var(--accent)",
              }}
            >
              03 / Education
            </span>

            <h2
              className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              Academic journey.
            </h2>
          </div>

          <div
            className="border-t"
            style={{
              borderColor: "var(--border)",
            }}
          >
            <div
              className="grid gap-6 border-b py-10 sm:grid-cols-[180px_1fr] sm:items-start"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <span
                className="text-xs uppercase tracking-[0.2em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                2025 — Present
              </span>

              <div>
                <h3
                  className="text-2xl font-medium sm:text-3xl"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  B.Tech in CSE with Specialization in AI & ML
                </h3>

                <p
                  className="mt-2 text-sm uppercase tracking-[0.15em]"
                  style={{
                    color: "var(--secondary)",
                  }}
                >
                  Geeta University, Panipat
                </p>
              </div>
            </div>

            <div
              className="grid gap-6 border-b py-10 sm:grid-cols-[180px_1fr] sm:items-start"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <span
                className="text-xs uppercase tracking-[0.2em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                2023 — 2025
              </span>

              <div>
                <h3
                  className="text-2xl font-medium sm:text-3xl"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  Higher Secondary — Science (PCM)
                </h3>

                <p
                  className="mt-2 text-sm uppercase tracking-[0.15em]"
                  style={{
                    color: "var(--secondary)",
                  }}
                >
                  Nirmaan Vidya Jyoti School, Siliguri
                </p>
              </div>
            </div>

            <div
              className="grid gap-6 border-b py-10 sm:grid-cols-[180px_1fr] sm:items-start"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <span
                className="text-xs uppercase tracking-[0.2em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                2017 — 2023
              </span>

              <div>
                <h3
                  className="text-2xl font-medium sm:text-3xl"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  Secondary Education
                </h3>

                <p
                  className="mt-2 text-sm uppercase tracking-[0.15em]"
                  style={{
                    color: "var(--secondary)",
                  }}
                >
                  Caesar School, Malbazar
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24">
          <div className="mb-12">
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{
                color: "var(--accent)",
              }}
            >
              04 / Skills
            </span>

            <h2
              className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              Technical skills.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border px-4 py-3 text-[10px] uppercase tracking-[0.16em]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--muted)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div className="mb-12">
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{
                color: "var(--accent)",
              }}
            >
              05 / Selected projects
            </span>

            <h2
              className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              Things I&apos;ve built.
            </h2>
          </div>

          <div
            className="border-t"
            style={{
              borderColor: "var(--border)",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.number}
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
                className="grid gap-6 border-b py-10 sm:grid-cols-[80px_180px_1fr] sm:items-start"
                style={{
                  borderColor: "var(--border)",
                }}
              >
                <span
                  className="text-xs"
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  {project.number}
                </span>

                <div>
                  <span
                    className="text-[10px] uppercase tracking-[0.2em]"
                    style={{
                      color: "var(--muted)",
                    }}
                  >
                    {project.period}
                  </span>
                </div>

                <div>
                  <h3
                    className="text-2xl font-medium"
                    style={{
                      color: "var(--foreground)",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="mt-3 max-w-xl text-sm leading-7"
                    style={{
                      color: "var(--muted)",
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-16 lg:grid-cols-2">
          <div>
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{
                color: "var(--accent)",
              }}
            >
              06 / Certifications
            </span>

            <h2
              className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              Certifications.
            </h2>

            <div
              className="mt-10 border-t"
              style={{
                borderColor: "var(--border)",
              }}
            >
              {certifications.map((certification) => (
                <div
                  key={certification}
                  className="border-b py-5 text-sm"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  {certification}
                </div>
              ))}
            </div>
          </div>

          <div>
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{
                color: "var(--accent)",
              }}
            >
              07 / Achievements
            </span>

            <h2
              className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl"
              style={{
                color: "var(--foreground)",
              }}
            >
              Hackathons.
            </h2>

            <div
              className="mt-10 border-t"
              style={{
                borderColor: "var(--border)",
              }}
            >
              {achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="border-b py-5 text-sm leading-7"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  {achievement}
                </div>
              ))}
            </div>
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
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[100px]"
              style={{
                backgroundColor: "var(--glow)",
              }}
            />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span
                  className="text-xs uppercase tracking-[0.3em]"
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  08 / Resume
                </span>

                <h2
                  className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  Want the full picture?
                </h2>

                <p
                  className="mt-5 max-w-xl text-sm leading-7"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  Download the complete Himesh Roy resume for a detailed
                  overview of my education, experience, skills, projects,
                  certifications, and achievements.
                </p>
              </div>

              <a
                href="/Himesh-Roy-CV.pdf"
                download
                className="inline-flex w-fit items-center gap-4 border-b pb-3 text-sm uppercase tracking-[0.2em] transition-transform duration-300 hover:translate-x-2"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--foreground)",
                }}
              >
                <span>Download CV</span>

                <span
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  ↓
                </span>
              </a>
            </div>
          </div>
        </section>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-6">
          <Link
            href="/education"
            className="text-xs uppercase tracking-[0.2em] transition-transform duration-300 hover:-translate-x-1"
            style={{
              color: "var(--muted)",
            }}
          >
            ← Education
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-4 border-b pb-3 text-xs uppercase tracking-[0.2em] transition-transform duration-300 hover:translate-x-2"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground)",
            }}
          >
            <span>Contact me</span>

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
        className="pointer-events-none fixed -bottom-40 left-[-10rem] h-96 w-96 rounded-full blur-[140px]"
        style={{
          backgroundColor: "var(--glow)",
          opacity: 0.35,
        }}
      />
    </main>
  );
}