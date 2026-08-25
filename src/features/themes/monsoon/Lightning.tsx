"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Lightning() {
  const lightRef = useRef<THREE.DirectionalLight>(null);

  const nextFlash = useRef(4);
  const flashTime = useRef(0);

  useFrame((_, delta) => {
    const light = lightRef.current;

    if (!light) return;

    if (flashTime.current > 0) {
      flashTime.current -= delta;

      const progress =
        1 - flashTime.current / 0.3;

      const intensity =
        Math.sin(progress * Math.PI);

      light.intensity = intensity * 10;

      return;
    }

    light.intensity = 0;

    nextFlash.current -= delta;

    if (nextFlash.current <= 0) {
      flashTime.current = 0.3;

      nextFlash.current =
        7 + Math.random() * 13;
    }
  });

  return (
    <directionalLight
      ref={lightRef}
      color="#dff6ff"
      intensity={0}
      position={[0, 8, 4]}
    />
  );
}