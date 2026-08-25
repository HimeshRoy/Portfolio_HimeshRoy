"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Leaf = {
  id: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotation: number;
  opacity: number;
  sway: number;
};

function LeafShape() {
  return (
    <svg
      viewBox="0 0 48 32"
      width="100%"
      height="100%"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 18C10 5 25 2 45 5C40 19 29 29 17 29C10 29 5 24 3 18Z"
        fill="currentColor"
      />

      <path
        d="M6 20C16 17 27 11 40 5"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Leaves() {
  const leaves = useMemo<Leaf[]>(() => {
    return Array.from({ length: 30 }, (_, index) => ({
      id: index,
      top: Math.random() * 88,
      size: 12 + Math.random() * 20,
      duration: 11 + Math.random() * 11,
      delay: Math.random() * -22,
      drift: 35 + Math.random() * 55,
      rotation: 360 + Math.random() * 720,
      opacity: 0.18 + Math.random() * 0.32,
      sway: 20 + Math.random() * 45,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute left-[-8%]"
          style={{
            top: `${leaf.top}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size * 0.66}px`,
            color: "var(--accent)",
            opacity: leaf.opacity,
          }}
          animate={{
            x: [
              "-8vw",
              `${leaf.drift * 0.35}vw`,
              `${leaf.drift * 0.7}vw`,
              `${leaf.drift * 1.25}vw`,
              "112vw",
            ],
            y: [
              "0vh",
              "5vh",
              "14vh",
              "24vh",
              "36vh",
            ],
            rotate: [
              0,
              leaf.rotation * 0.2,
              leaf.rotation * 0.45,
              leaf.rotation * 0.75,
              leaf.rotation,
            ],
            skewX: [
              0,
              leaf.sway * 0.15,
              -leaf.sway * 0.15,
              leaf.sway * 0.1,
              0,
            ],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.22, 0.48, 0.72, 1],
          }}
        >
          <LeafShape />
        </motion.div>
      ))}
    </div>
  );
}