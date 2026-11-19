
"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props {
  hero: ReactNode;
  about: ReactNode;
}

export default function HeroAboutTransition({
  hero,
  about,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const heroElement = heroRef.current;
      const aboutElement = aboutRef.current;

      if (!heroElement || !aboutElement) return;

      gsap.set(aboutElement, {
        yPercent: 100,
      });

      gsap.to(aboutElement, {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          pin: heroElement,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        ref={heroRef}
        className="relative z-10 h-svh w-full"
      >
        {hero}
      </div>

      <div
        ref={aboutRef}
        className="relative z-20 -mt-[100svh] w-full bg-[#050505] will-change-transform"
      >
        {about}
      </div>
    </div>
  );
}
