"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Connection = {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
  duration: number;
  opacity: number;
};

export function NeuralConnections() {
  const connections = useMemo<Connection[]>(() => {
    const points = Array.from({ length: 28 }, () => ({
      x: 5 + Math.random() * 90,
      y: 8 + Math.random() * 84,
    }));

    return Array.from({ length: 42 }, (_, index) => {
      const start = points[Math.floor(Math.random() * points.length)];
      const end = points[Math.floor(Math.random() * points.length)];

      return {
        id: index,
        x1: start.x,
        y1: start.y,
        x2: end.x,
        y2: end.y,
        delay: Math.random() * -8,
        duration: 3 + Math.random() * 4,
        opacity: 0.18 + Math.random() * 0.18,
      };
    });
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {connections.map((connection) => (
          <motion.line
            key={connection.id}
            x1={connection.x1}
            y1={connection.y1}
            x2={connection.x2}
            y2={connection.y2}
            stroke="var(--primary)"
            strokeWidth="0.14"
            vectorEffect="non-scaling-stroke"
            initial={{
              opacity: connection.opacity * 0.5,
            }}
            animate={{
              opacity: [
                connection.opacity * 0.5,
                connection.opacity,
                connection.opacity * 0.5,
              ],
            }}
            transition={{
              duration: connection.duration,
              delay: connection.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}