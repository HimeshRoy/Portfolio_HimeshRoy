"use client";

import { DataLines } from "./DataLines";
import { DigitalGrid } from "./DigitalGrid";
import { TechParticles } from "./TechParticles";

export function TechScene() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <DigitalGrid />
      <DataLines />
      <TechParticles />
    </div>
  );
}