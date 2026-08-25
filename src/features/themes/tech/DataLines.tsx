"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Line = {
  id: number;
  top: number;
  left: number;
  width: number;
  duration: number;
  delay: number;
};

export function DataLines() {
  const lines = useMemo<Line[]>(() => {
    return Array.from({ length: 14 }, (_, index) => ({
      id: index,
      top: 12 + Math.random() * 76,
      left: Math.random() * 75,
      width: 100 + Math.random() * 260,
      duration: 4 + Math.random() * 5,
      delay: Math.random() * -8,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute h-px"
          style={{
            top: `${line.top}%`,
            left: `${line.left}%`,
            width: `${line.width}px`,

            background:
              "linear-gradient(90deg, transparent, var(--accent), transparent)",

            boxShadow:
              "0 0 6px var(--accent), 0 0 14px var(--glow)",

            opacity: 0.42,
          }}
          animate={{
            x: [0, 80, 0],
            opacity: [0.12, 0.65, 0.12],
          }}
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}