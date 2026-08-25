"use client";

import { Clouds, Cloud } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { getWind } from "./Wind";

export function CloudLayer() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const group = groupRef.current;

    if (!group) return;

    const wind = getWind(
      state.clock.elapsedTime,
    );

    group.position.x +=
      wind.x * 0.035 * delta;

    if (group.position.x > 5) {
      group.position.x = -5;
    }
  });

  return (
    <group ref={groupRef}>
      <Clouds limit={120}>
        <Cloud
          seed={11}
          position={[-6, 4.8, -4]}
          bounds={[8, 2.2, 2.5]}
          segments={45}
          volume={8}
          smallestVolume={0.35}
          concentrate="inside"
          scale={[1.2, 1, 1]}
          color="#263943"
          opacity={0.58}
          fade={12}
          speed={0.08}
        />

        <Cloud
          seed={27}
          position={[1, 5.3, -5]}
          bounds={[9, 2.5, 3]}
          segments={50}
          volume={9}
          smallestVolume={0.3}
          concentrate="inside"
          scale={[1.3, 1, 1]}
          color="#304752"
          opacity={0.62}
          fade={14}
          speed={0.06}
        />

        <Cloud
          seed={43}
          position={[8, 4.7, -4.5]}
          bounds={[7, 2.1, 2.5]}
          segments={40}
          volume={7}
          smallestVolume={0.35}
          concentrate="inside"
          scale={[1.15, 1, 1]}
          color="#21343d"
          opacity={0.55}
          fade={12}
          speed={0.07}
        />

        <Cloud
          seed={71}
          position={[-1, 3.8, -6]}
          bounds={[12, 2.8, 3]}
          segments={55}
          volume={10}
          smallestVolume={0.25}
          concentrate="inside"
          scale={[1.5, 0.9, 1]}
          color="#182a32"
          opacity={0.48}
          fade={16}
          speed={0.045}
        />
      </Clouds>
    </group>
  );
}