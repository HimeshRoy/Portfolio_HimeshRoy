"use client";

import { motion } from "framer-motion";

export function DigitalGrid() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Main technical grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              var(--border) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              var(--border) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "64px 64px",
          opacity: 0.18,
        }}
      />

      {/* Soft center fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 15%, var(--background) 90%)",
          opacity: 0.45,
        }}
      />

      {/* Moving scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent), transparent)",
          boxShadow: "0 0 18px var(--accent)",
          opacity: 0.35,
        }}
        animate={{
          top: ["10%", "90%", "10%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}