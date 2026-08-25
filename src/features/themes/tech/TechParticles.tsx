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
  distance: number;
  opacity: number;
};

export function TechParticles() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 55 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 2.5,
      duration: 5 + Math.random() * 7,
      delay: Math.random() * -12,
      distance: 30 + Math.random() * 100,
      opacity: 0.35 + Math.random() * 0.4,
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
            boxShadow:
              "0 0 6px var(--accent), 0 0 14px var(--glow)",
          }}
          animate={{
            x: [
              0,
              particle.distance,
              particle.distance * 0.4,
              0,
            ],
            y: [
              0,
              -particle.distance * 0.35,
              particle.distance * 0.25,
              0,
            ],
            opacity: [
              particle.opacity * 0.35,
              particle.opacity,
              particle.opacity * 0.55,
              particle.opacity * 0.35,
            ],
            scale: [0.8, 1.2, 0.9, 0.8],
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