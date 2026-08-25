"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Bird = {
  id: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  wave: number;
};

function BirdShape() {
  return (
    <svg
      viewBox="0 0 80 40"
      width="100%"
      height="100%"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 21C13 13 22 13 39 21C56 13 67 13 75 21"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M39 21C38 17 39 13 42 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Birds() {
  const birds = useMemo<Bird[]>(() => {
    return Array.from({ length: 5 }, (_, index) => ({
      id: index,
      top: 12 + Math.random() * 30,
      size: 18 + Math.random() * 16,
      duration: 20 + Math.random() * 12,
      delay: Math.random() * -28,
      opacity: 0.12 + Math.random() * 0.15,
      wave: 12 + Math.random() * 18,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      {birds.map((bird) => (
        <motion.div
          key={bird.id}
          className="absolute left-[-8%]"
          style={{
            top: `${bird.top}%`,
            width: `${bird.size}px`,
            height: `${bird.size * 0.5}px`,
            color: "var(--foreground)",
            opacity: bird.opacity,
          }}
          animate={{
            x: ["-8vw", "25vw", "55vw", "82vw", "108vw"],
            y: [
              0,
              -bird.wave,
              bird.wave * 0.45,
              -bird.wave * 0.7,
              0,
            ],
            scale: [1, 0.96, 1.02, 0.98, 1],
          }}
          transition={{
            duration: bird.duration,
            delay: bird.delay,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          <BirdShape />
        </motion.div>
      ))}
    </div>
  );
}