"use client";

import { motion } from "framer-motion";

import { Birds } from "./Birds";
import { Leaves } from "./Leaves";

function WindGlow() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-[-20%] w-[70%]"
      style={{
        background:
          "linear-gradient(90deg, transparent, var(--glow), transparent)",
        filter: "blur(80px)",
        opacity: 0.16,
      }}
      animate={{
        x: ["-10%", "170%"],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

export function NatureScene() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <WindGlow />

      <Birds />

      <Leaves />
    </div>
  );
}