"use client";

import { DataPulses } from "./DataPulses";
import { NeuralConnections } from "./NeuralConnections";
import { NeuralNodes } from "./NeuralNodes";

export function AIScene() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <NeuralConnections />
      <NeuralNodes />
      <DataPulses />
    </div>
  );
}