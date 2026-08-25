"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Pulse = {
  id: number;
  left: number;
  top: number;
  distance: number;
  duration: number;
  delay: number;
  opacity: number;
};

export function DataPulses() {
  const pulses = useMemo<Pulse[]>(() => {
    return Array.from({ length: 18 }, (_, index) => ({
      id: index,
      left: 8 + Math.random() * 84,
      top: 10 + Math.random() * 78,
      distance: 40 + Math.random() * 90,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * -8,
      opacity: 0.55 + Math.random() * 0.35,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {pulses.map((pulse) => (
        <motion.span
          key={pulse.id}
          className="absolute rounded-full"
          style={{
            left: `${pulse.left}%`,
            top: `${pulse.top}%`,
            width: "4px",
            height: "4px",
            background: "var(--secondary)",
            boxShadow: "0 0 8px var(--secondary), 0 0 18px var(--secondary)",
            opacity: pulse.opacity,
          }}
          animate={{
            x: [0, pulse.distance, 0],
            y: [0, -pulse.distance * 0.25, pulse.distance * 0.15, 0],
            opacity: [
              pulse.opacity * 0.25,
              pulse.opacity,
              pulse.opacity * 0.5,
              pulse.opacity * 0.25,
            ],
            scale: [0.7, 1.5, 0.9, 0.7],
          }}
          transition={{
            duration: pulse.duration,
            delay: pulse.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
