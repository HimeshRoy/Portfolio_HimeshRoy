"use client";

import { motion } from "framer-motion";

export function WinterAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div
        className="absolute -left-48 -top-48 h-[34rem] w-[34rem] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(186, 230, 253, 0.28), rgba(59, 130, 246, 0.06) 52%, transparent 74%)",
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-48 -right-40 h-[32rem] w-[32rem] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(186, 230, 253, 0.2), transparent 70%)",
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}