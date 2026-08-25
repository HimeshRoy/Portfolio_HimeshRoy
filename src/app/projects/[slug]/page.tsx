import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    notFound();
  }

  return (
    <main
      className="min-h-screen px-6 pb-32 pt-32 sm:px-10 lg:px-16"
      style={{
        color: "var(--foreground)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] transition-transform duration-300 hover:-translate-x-2 sm:text-sm"
          style={{
            color: "var(--muted)",
          }}
        >
          <span
            style={{
              color: "var(--accent)",
            }}
          >
            ←
          </span>

          <span>Back to projects</span>
        </Link>

        <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <span
                className="text-xs uppercase tracking-[0.3em]"
                style={{
                  color: "var(--accent)",
                }}
              >
                {project.number}
              </span>

              <span
                className="h-px w-8"
                style={{
                  backgroundColor: "var(--border)",
                }}
              />

              <span
                className="text-[10px] uppercase tracking-[0.25em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                {project.category}
              </span>
            </div>

            <h1
              className="mt-7 text-[clamp(3.5rem,9vw,4rem)] font-semibold leading-[0.85] tracking-[-0.07em]"
              style={{
                color: "var(--foreground)",
              }}
            >
              {project.title}
            </h1>

            <p
              className="mt-8 max-w-xl text-base leading-7 sm:text-lg sm:leading-8"
              style={{
                color: "var(--muted)",
              }}
            >
              {project.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border px-3 py-2 text-[9px] uppercase tracking-[0.15em] sm:px-4 sm:text-[10px] sm:tracking-[0.2em]"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border-b pb-3 text-xs uppercase tracking-[0.18em] transition-transform duration-300 hover:translate-x-2 sm:text-sm sm:tracking-[0.2em]"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                >
                  <span>Live project</span>

                  <span
                    style={{
                      color: "var(--accent)",
                    }}
                  >
                    ↗
                  </span>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border-b pb-3 text-xs uppercase tracking-[0.18em] transition-transform duration-300 hover:translate-x-2 sm:text-sm sm:tracking-[0.2em]"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  <span>Source code</span>

                  <span
                    style={{
                      color: "var(--accent)",
                    }}
                  >
                    ↗
                  </span>
                </a>
              )}
            </div>
          </div>

          <div
            className="relative aspect-[4/3] overflow-hidden rounded-3xl border"
            style={{
              borderColor: "var(--border)",
              background:
                "linear-gradient(135deg, var(--surface), var(--background))",
              boxShadow: "0 30px 100px var(--glow)",
            }}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <span
                  className="text-[28vw] font-semibold leading-none tracking-[-0.08em] sm:text-[20vw] lg:text-[12vw]"
                  style={{
                    color: "var(--primary)",
                  }}
                >
                  {project.number}
                </span>
              </div>
            )}
          </div>
        </div>

        <div
          className="mt-24 border-t pt-8 sm:mt-32"
          style={{
            borderColor: "var(--border)",
          }}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span
                className="text-[10px] uppercase tracking-[0.25em]"
                style={{
                  color: "var(--muted)",
                }}
              >
                Project year
              </span>

              <p
                className="mt-2 text-sm uppercase tracking-[0.18em]"
                style={{
                  color: "var(--foreground)",
                }}
              >
                {project.year}
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] transition-transform duration-300 hover:translate-x-2 sm:text-sm"
              style={{
                color: "var(--foreground)",
              }}
            >
              <span>All projects</span>

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
    </main>
  );
}