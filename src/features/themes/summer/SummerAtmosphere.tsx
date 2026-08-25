"use client";

import { motion } from "framer-motion";

export function SummerAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div
        className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(250, 204, 21, 0.28), rgba(249, 115, 22, 0.08) 48%, transparent 72%)",
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-48 -left-40 h-[32rem] w-[32rem] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245, 158, 11, 0.2), rgba(249, 115, 22, 0.06) 50%, transparent 74%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-[38%] top-[18%] h-2 w-2 rounded-full"
        style={{
          background: "var(--accent)",
          boxShadow: "0 0 20px var(--accent)",
          opacity: 0.45,
        }}
        animate={{
          opacity: [0.25, 0.6, 0.25],
          scale: [0.8, 1.3, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}