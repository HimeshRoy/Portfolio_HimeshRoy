
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
  const sceneRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scene = sceneRef.current;
      const aboutElement = aboutRef.current;

      if (!scene || !aboutElement) return;

      gsap.set(aboutElement, {
        yPercent: 100,
      });

      gsap.to(aboutElement, {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: scene,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });
    },
    {
      scope: sceneRef,
    }
  );

  return (
    <section
      ref={sceneRef}
      className="relative h-[200svh] w-full"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-svh w-full overflow-hidden">

        {/* Hero stays stationary */}
        <div className="absolute inset-0 z-10">
          {hero}
        </div>

        {/* About slides over Hero */}
        <div
          ref={aboutRef}
          className="absolute inset-0 z-20 h-full w-full overflow-y-auto bg-[#050505]"
        >
          {about}
        </div>

      </div>
    </section>
  );
}
