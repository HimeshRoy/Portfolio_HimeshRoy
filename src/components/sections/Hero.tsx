"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 65,
    damping: 20,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 65,
    damping: 20,
    mass: 0.5,
  });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(hover: none)").matches) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 12;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-svh min-h-[650px] w-full items-stretch overflow-hidden bg-[#050505] pt-24 lg:h-screen lg:min-h-[700px] lg:pt-28"
    >
      {/* Charcoal watercolor / ink-wash backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="ink-backdrop absolute inset-0" />
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full opacity-[0.38]"
        >
          <defs>
            <filter id="ink-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="24" />
            </filter>
          </defs>
          <g filter="url(#ink-blur)" fill="#27272a">
            <path d="M210,160 C340,70 590,40 820,90 C1050,140 1280,80 1380,220 C1450,320 1340,560 1220,690 C1100,820 820,860 540,810 C260,760 110,640 90,450 C75,310 120,225 210,160 Z" />
            <circle cx="980" cy="340" r="240" fill="#323238" opacity="0.65" />
            <circle cx="380" cy="540" r="190" fill="#1f1f23" opacity="0.7" />
          </g>
        </svg>
      </div>

      {/* Main Split Grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-12 lg:gap-8 lg:px-16">
        {/* Left Copy Column */}
        <div className="flex flex-col items-start py-10 lg:col-span-6 lg:py-0">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 text-base font-medium text-[#d4d4d8] sm:text-lg"
          >
            Hi, I&apos;m Himesh,
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-display text-4xl font-extrabold uppercase leading-[1.03] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]"
          >
            I&apos;M A FULL-STACK
            <br />
            &amp; AI DEVELOPER
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-6 max-w-md text-sm leading-7 text-[#8a8a8e] sm:text-base"
          >
            B.Tech CSE (AI &amp; ML) student building full-stack web
            applications, intelligent systems, and interactive digital products
            with Next.js, TypeScript, Python, and PostgreSQL.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <Link
              href="/projects"
              className="group relative inline-block pb-2 text-sm font-bold tracking-wide text-white sm:text-base"
            >
              <span>View My Projects</span>
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-white transition-transform duration-300 origin-left group-hover:scale-x-110" />
            </Link>
          </motion.div>
        </div>

        {/* Right 3D Avatar Column (anchored flush to bottom) */}
        <div className="relative flex h-[400px] items-end justify-center sm:h-[480px] lg:col-span-6 lg:h-full">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ x: smoothX, y: smoothY }}
            className="relative flex h-full w-full items-end justify-center lg:justify-end"
          >
            <Image
              src="/himesh-avatar-3d.png"
              alt="3D avatar portrait of Himesh Roy"
              width={640}
              height={720}
              priority
              className="h-auto max-h-[400px] w-auto object-contain object-bottom drop-shadow-[0_28px_60px_rgba(0,0,0,0.9)] sm:max-h-[480px] lg:max-h-[84vh]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
