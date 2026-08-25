export function getWind(time: number) {
  const slowGust = Math.sin(time * 0.35) * 0.12;
  const mediumGust = Math.sin(time * 0.9) * 0.06;
  const fineVariation = Math.sin(time * 2.4) * 0.025;

  return {
    x: 0.22 + slowGust + mediumGust + fineVariation,
    strength: 1 + slowGust * 0.8,
  };
}