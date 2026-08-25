import Link from "next/link";

export default function ResumePage() {
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
            Curriculum Vitae
          </span>
        </div>

        <div className="mt-10 flex flex-col gap-8 sm:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1
              className="text-[clamp(4rem,13vw,9rem)] font-semibold leading-[0.82] tracking-[-0.07em]"
              style={{
                color: "var(--foreground)",
              }}
            >
              My
              <br />
              <span
                style={{
                  color: "var(--primary)",
                }}
              >
                CV.
              </span>
            </h1>

            <p
              className="mt-8 max-w-xl text-base leading-7 sm:text-lg sm:leading-8"
              style={{
                color: "var(--muted)",
              }}
            >
              A detailed overview of my education,
              experience, projects, technical skills,
              and professional journey.
            </p>
          </div>

          <a
            href="/Himesh-Roy-CV.pdf"
            download
            className="inline-flex w-fit items-center gap-4 border-b pb-3 text-xs uppercase tracking-[0.2em] transition-transform duration-300 hover:translate-x-2 sm:text-sm"
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

        <div
          className="mt-16 overflow-hidden border sm:mt-24"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--surface)",
          }}
        >
          <iframe
            src="/Himesh-Roy-CV.pdf"
            title="Himesh Roy CV"
            className="h-[75vh] min-h-[600px] w-full"
          />
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
            <span
              style={{
                color: "var(--accent)",
              }}
            >
              ←
            </span>

            <span>Back home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}