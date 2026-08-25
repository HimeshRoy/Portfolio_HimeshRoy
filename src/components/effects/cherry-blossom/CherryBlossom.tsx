"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Petal = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotation: number;
  opacity: number;
  blur: number;
};

export function CherryBlossom() {
  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: 30 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      size: 6 + Math.random() * 8,
      duration: 14 + Math.random() * 10,
      delay: Math.random() * -24,
      drift: 50 + Math.random() * 160,
      rotation: 180 + Math.random() * 360,
      opacity: 0.3 + Math.random() * 0.45,
      blur: Math.random() > 0.82 ? 1.2 : 0,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {petals.map((petal) => (
        <motion.span
          key={petal.id}
          className="absolute top-[-5%]"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 0.62}px`,
            opacity: petal.opacity,
            background:
              "linear-gradient(135deg, var(--accent), var(--primary))",
            borderRadius: "80% 20% 70% 30%",
            filter: `blur(${petal.blur}px)`,
          }}
          animate={{
            y: ["-5vh", "110vh"],
            x: [
              0,
              petal.drift * 0.35,
              -petal.drift * 0.2,
              petal.drift * 0.55,
            ],
            rotate: [
              0,
              petal.rotation * 0.35,
              petal.rotation * 0.8,
              petal.rotation,
            ],
            scale: [
              1,
              0.9,
              1.08,
              0.92,
            ],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.3, 0.65, 1],
          }}
        />
      ))}
    </div>
  );
}