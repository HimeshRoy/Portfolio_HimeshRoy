"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/themes/ThemeProvider";
import { CherryBlossom } from "./cherry-blossom/CherryBlossom";
import { SummerAtmosphere } from "@/features/themes/summer/SummerAtmosphere";
import { SummerParticles } from "@/features/themes/summer/SummerParticles";
import { WinterAtmosphere } from "@/features/themes/winter/WinterAtmosphere";
import { WinterSnow } from "@/features/themes/winter/WinterSnow";
import { NatureScene } from "@/features/themes/nature/NatureScene";
import { TechScene } from "@/features/themes/tech/TechScene";
import { AIScene } from "@/features/themes/ai/AIScene";

export function Atmosphere() {
  const { theme } = useTheme();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        key={theme}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="absolute inset-0"
      >
        <div
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full blur-3xl"
          style={{
            background: "var(--glow)",
          }}
        />

        <div
          className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full blur-3xl"
          style={{
            background: "var(--glow)",
          }}
        />

        {theme === "summer" && (
          <>
            <SummerAtmosphere />
            <SummerParticles />
          </>
        )}

        {theme === "winter" && (
          <>
            <WinterAtmosphere />
            <WinterSnow />
          </>
        )}

        {theme === "cherry-blossom" && <CherryBlossom />}

        {theme === "nature" && <NatureScene />}

        {theme === "ai" && <AIScene />}

        {theme === "tech" && <TechScene />}
      </motion.div>
    </div>
  );
}
