"use client";

import { Canvas } from "@react-three/fiber";
import { CloudLayer } from "./CloudLayer";
import { Lightning } from "./Lightning";
import { Rain } from "./Rain";
import { useTheme } from "@/themes/ThemeProvider";

export function MonsoonScene() {
  const { theme } = useTheme();

  if (theme !== "monsoon") {
    return null;
  }
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 60,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <fogExp2 attach="fog" args={["#0b2028", 0.028]} />

        <CloudLayer />
        <Lightning />
        <Rain />
      </Canvas>
    </div>
  );
}
