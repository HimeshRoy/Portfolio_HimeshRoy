"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { getWind } from "./Wind";

type RainDrop = {
  x: number;
  y: number;
  z: number;
  speed: number;
  length: number;
  width: number;
  wind: number;
};

type RainLayerProps = {
  count: number;
  depth: number;
  size: number;
  speed: number;
  opacity: number;
};

function RainLayer({
  count,
  depth,
  size,
  speed,
  opacity,
}: RainLayerProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const drops = useMemo<RainDrop[]>(() => {
    return Array.from({ length: count }, () => {
      const depthVariation = Math.random();

      return {
        x: (Math.random() - 0.5) * 20,
        y: Math.random() * 18 - 4,
        z: depth + (Math.random() - 0.5) * 4,
        speed:
          speed +
          depthVariation * 1.5 +
          Math.random() * 0.7,
        length:
          0.28 +
          depthVariation * 0.32 +
          Math.random() * 0.16,
        width:
          0.28 +
          depthVariation * 0.32,
        wind:
          0.7 +
          Math.random() * 0.35,
      };
    });
  }, [count, depth, speed]);

  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(1, 1, 1, 8);
  }, []);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      uniforms: {
        uColor: {
          value: new THREE.Color("#d9f5ff"),
        },
        uOpacity: {
          value: opacity,
        },
      },
      vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;

          vec4 mvPosition =
            modelViewMatrix *
            instanceMatrix *
            vec4(position, 1.0);

          gl_Position =
            projectionMatrix *
            mvPosition;
        }
      `,
      fragmentShader: `
        varying vec2 vUv;

        uniform vec3 uColor;
        uniform float uOpacity;

        void main() {
          float horizontal =
            abs(vUv.x - 0.5) * 2.0;

          float edge =
            smoothstep(1.0, 0.45, horizontal);

          float topFade =
            smoothstep(0.0, 0.2, vUv.y);

          float bottomFade =
            smoothstep(1.0, 0.65, vUv.y);

          float alpha =
            edge *
            topFade *
            bottomFade *
            uOpacity;

          if (alpha < 0.01) {
            discard;
          }

          gl_FragColor =
            vec4(uColor, alpha);
        }
      `,
    });
  }, [opacity]);

  const dummy = useMemo(
    () => new THREE.Object3D(),
    [],
  );

  useFrame((state, delta) => {
    const mesh = meshRef.current;

    if (!mesh) return;

    const wind = getWind(
      state.clock.elapsedTime,
    );

    const frameDelta = Math.min(delta, 0.033);

    drops.forEach((drop, index) => {
      drop.y -=
        drop.speed * frameDelta;

      drop.x +=
        wind.x *
        drop.wind *
        frameDelta;

      if (drop.y < -10) {
        drop.y = 12 + Math.random() * 8;
        drop.x =
          (Math.random() - 0.5) * 20;
        drop.z =
          depth +
          (Math.random() - 0.5) * 4;
      }

      dummy.position.set(
        drop.x,
        drop.y,
        drop.z,
      );

      dummy.rotation.z =
        -0.08 -
        wind.x * 0.14;

      dummy.scale.set(
        drop.width * size * 0.035,
        drop.length * size,
        1,
      );

      dummy.updateMatrix();

      mesh.setMatrixAt(
        index,
        dummy.matrix,
      );
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[
        geometry,
        material,
        count,
      ]}
      frustumCulled={false}
    />
  );
}

export function Rain() {
  return (
    <group>
      <RainLayer
        count={260}
        depth={-4}
        size={0.65}
        speed={3.2}
        opacity={0.16}
      />

      <RainLayer
        count={500}
        depth={0}
        size={0.9}
        speed={4.2}
        opacity={0.32}
      />

      <RainLayer
        count={160}
        depth={2.5}
        size={1.35}
        speed={5.2}
        opacity={0.48}
      />
    </group>
  );
}