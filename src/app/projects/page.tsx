import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main
      className="min-h-screen px-6 pb-24 pt-32 sm:px-10 sm:pb-32 lg:px-16"
      style={{
        color: "var(--foreground)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex items-center gap-3 sm:gap-4">
          <span
            className="h-px w-8 sm:w-12"
            style={{
              backgroundColor: "var(--accent)",
            }}
          />

          <span
            className="text-[10px] uppercase tracking-[0.28em] sm:text-xs sm:tracking-[0.35em]"
            style={{
              color: "var(--accent)",
            }}
          >
            Projects
          </span>
        </div>

        <div className="mt-10 max-w-4xl sm:mt-14">
          <h1
            className="text-[clamp(4rem,13vw,9rem)] font-semibold leading-[0.82] tracking-[-0.07em]"
            style={{
              color: "var(--foreground)",
            }}
          >
            Selected
            <br />
            <span
              style={{
                color: "var(--primary)",
              }}
            >
              work.
            </span>
          </h1>

          <p
            className="mt-8 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8"
            style={{
              color: "var(--muted)",
            }}
          >
            A collection of projects exploring software,
            web development, creative technology, and
            different ways of turning ideas into useful
            digital experiences.
          </p>
        </div>

        <div className="mt-16 sm:mt-24">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group border-t py-8 sm:py-10"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <div className="grid gap-6 lg:grid-cols-[80px_180px_1fr_auto] lg:items-center lg:gap-12">
                <span
                  className="text-xs sm:text-sm"
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  {project.number}
                </span>

                <div className="flex flex-row items-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                  <span
                    className="text-[10px] uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.2em]"
                    style={{
                      color: "var(--muted)",
                    }}
                  >
                    {project.year}
                  </span>

                  <span
                    className="text-[9px] uppercase tracking-[0.2em]"
                    style={{
                      color: "var(--accent)",
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="min-w-0">
                  <h2
                    className="text-2xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl lg:text-4xl"
                    style={{
                      color: "var(--foreground)",
                    }}
                  >
                    {project.title}
                  </h2>

                  <p
                    className="mt-3 max-w-2xl text-sm leading-7"
                    style={{
                      color: "var(--muted)",
                    }}
                  >
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border px-3 py-1.5 text-[9px] uppercase tracking-[0.14em]"
                        style={{
                          borderColor: "var(--border)",
                          color: "var(--muted)",
                        }}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex w-fit items-center gap-3 text-xs uppercase tracking-[0.18em] transition-transform duration-300 hover:translate-x-2 lg:justify-self-end"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  <span>View project</span>

                  <span
                    style={{
                      color: "var(--accent)",
                    }}
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-8 border-t pt-8"
          style={{
            borderColor: "var(--border)",
          }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.18em] transition-transform duration-300 hover:-translate-x-2 sm:text-sm sm:tracking-[0.2em]"
            style={{
              color: "var(--foreground)",
            }}
          >
            <span>Back home</span>

            <span
              style={{
                color: "var(--accent)",
              }}
            >
              ←
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}