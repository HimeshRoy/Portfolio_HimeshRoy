"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Node = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
};

export function NeuralNodes() {
  const nodes = useMemo<Node[]>(() => {
    return Array.from({ length: 28 }, (_, index) => ({
      id: index,
      left: 8 + Math.random() * 84,
      top: 10 + Math.random() * 78,
      size: 3 + Math.random() * 4,
      delay: Math.random() * -6,
      duration: 3 + Math.random() * 4,
      opacity: 0.3 + Math.random() * 0.45,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {nodes.map((node) => (
        <motion.span
          key={node.id}
          className="absolute rounded-full"
          style={{
            left: `${node.left}%`,
            top: `${node.top}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
            background: "var(--accent)",
            opacity: node.opacity,
            boxShadow:
              "0 0 8px var(--accent), 0 0 18px var(--glow)",
          }}
          animate={{
            scale: [0.7, 1.35, 0.7],
            opacity: [
              node.opacity * 0.45,
              node.opacity,
              node.opacity * 0.45,
            ],
          }}
          transition={{
            duration: node.duration,
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}