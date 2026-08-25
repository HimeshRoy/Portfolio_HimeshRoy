"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Snowflake = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotation: number;
  opacity: number;
};

function SnowflakeShape() {
  const arms = Array.from({ length: 6 }, (_, index) => {
    const angle = index * 60;

    return (
      <g key={angle} transform={`rotate(${angle})`}>
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="-42"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <line
          x1="0"
          y1="-12"
          x2="-9"
          y2="-21"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        <line
          x1="0"
          y1="-12"
          x2="9"
          y2="-21"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        <line
          x1="0"
          y1="-23"
          x2="-10"
          y2="-32"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        <line
          x1="0"
          y1="-23"
          x2="10"
          y2="-32"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </g>
    );
  });

  return (
    <svg
      viewBox="-48 -48 96 96"
      width="100%"
      height="100%"
      fill="none"
    >
      {arms}

      <circle
        cx="0"
        cy="0"
        r="4"
        fill="currentColor"
      />
    </svg>
  );
}

export function WinterSnow() {
  const snowflakes = useMemo<Snowflake[]>(() => {
    return Array.from({ length: 30 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      size: 20 + Math.random() * 18,
      duration: 19 + Math.random() * 13,
      delay: Math.random() * -32,
      drift: (Math.random() - 0.5) * 170,
      rotation: 180 + Math.random() * 360,
      opacity: 0.55 + Math.random() * 0.3,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      {snowflakes.map((snowflake) => (
        <motion.div
          key={snowflake.id}
          className="absolute top-[-10%]"
          style={{
            left: `${snowflake.left}%`,
            width: `${snowflake.size}px`,
            height: `${snowflake.size}px`,
            color: "#7fa9c9",
            opacity: snowflake.opacity,
          }}
          animate={{
            y: ["-10vh", "115vh"],
            x: [
              0,
              snowflake.drift * 0.3,
              snowflake.drift,
              snowflake.drift * 0.55,
            ],
            rotate: [
              0,
              snowflake.rotation * 0.35,
              snowflake.rotation * 0.7,
              snowflake.rotation,
            ],
          }}
          transition={{
            duration: snowflake.duration,
            delay: snowflake.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.3, 0.7, 1],
          }}
        >
          <SnowflakeShape />
        </motion.div>
      ))}
    </div>
  );
}