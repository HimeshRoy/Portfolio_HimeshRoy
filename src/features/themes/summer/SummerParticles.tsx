"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Particle = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

export function SummerParticles() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 24 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 1.5 + Math.random() * 2.5,
      duration: 12 + Math.random() * 12,
      delay: Math.random() * -20,
      drift: (Math.random() - 0.5) * 100,
      opacity: 0.12 + Math.random() * 0.3,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: "var(--accent)",
            opacity: particle.opacity,
            boxShadow: "0 0 8px var(--glow)",
          }}
          animate={{
            x: [
              0,
              particle.drift,
              particle.drift * -0.5,
              0,
            ],
            y: [
              0,
              -25,
              15,
              0,
            ],
            opacity: [
              particle.opacity,
              particle.opacity * 1.6,
              particle.opacity * 0.6,
              particle.opacity,
            ],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}