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

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[currentIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <section className="min-h-screen bg-[#050505] px-6 pb-24 pt-28 text-white sm:px-10 sm:pb-32 sm:pt-32 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Back link */}
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#8a8a8e] transition-colors hover:text-white"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">
            ←
          </span>
          <span>Back to Projects</span>
        </Link>

        {/* Main Split */}
        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/15 bg-[#111113] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                {project.category}
              </span>
              <span className="font-mono text-xs text-[#8a8a8e]">
                {project.number} · {project.year}
              </span>
            </div>

            <h1 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[1.03] tracking-[-0.03em] text-white sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#8a8a8e] sm:text-base">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#8a8a8e]">
                Tech Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-[#111113] px-3 py-1 text-xs text-[#d4d4d8]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            {(project.live || project.github) && (
              <div className="mt-9 flex flex-wrap items-center gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#050505] transition-opacity hover:opacity-85"
                  >
                    <span>Live Project</span>
                    <span>↗</span>
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#111113] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-white/35"
                  >
                    <span>Source Code</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right Preview Frame */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0f]">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute h-56 w-56 rounded-full bg-white/[0.05] blur-3xl"
                  />
                  <span className="select-none font-display text-[8rem] font-extrabold leading-none tracking-tighter text-white/[0.08] sm:text-[10rem]">
                    {project.number}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bento Metadata + Next Project */}
        <div className="mt-14 grid grid-cols-1 gap-4 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="rounded-2xl border border-white/10 bg-[#111113] p-5 lg:col-span-3">
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#8a8a8e]">
              Year
            </span>
            <p className="mt-2 font-display text-xl font-bold text-white">
              {project.year}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111113] p-5 lg:col-span-3">
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#8a8a8e]">
              Category
            </span>
            <p className="mt-2 font-display text-xl font-bold text-white">
              {project.category}
            </p>
          </div>

          {nextProject && nextProject.slug !== project.slug && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#111113] p-5 transition-colors hover:border-white/25 hover:bg-[#151518] sm:col-span-2 lg:col-span-6"
            >
              <div>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#8a8a8e]">
                  Next Project · {nextProject.number}
                </span>
                <p className="mt-1.5 font-display text-xl font-bold text-white">
                  {nextProject.title}
                </p>
              </div>
              <span className="text-lg text-white transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}