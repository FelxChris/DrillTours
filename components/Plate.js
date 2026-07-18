const PALETTES = {
  coast: ["#1E8A3C", "#F2B705"],
  savanna: ["#F2B705", "#8B1538"],
  forest: ["#1E8A3C", "#FAF8F3"],
  river: ["#F2B705", "#1E8A3C"],
};

/**
 * Generative "atlas plate" abstraction used in place of stock photography,
 * consistent with the brand's no-literal-photography art direction.
 * Replace with real photography by swapping this component for an <Image />
 * once production photos are available.
 */
export default function Plate({ variant = "coast", height = 280 }) {
  const [a, b] = PALETTES[variant] || PALETTES.coast;
  return (
    <svg viewBox="0 0 400 280" width="100%" height={height} preserveAspectRatio="none">
      <rect width="400" height="280" fill="#161616" />
      <path d="M0,180 Q100,140 200,170 T400,150 V280 H0 Z" fill={a} opacity="0.18" />
      <path d="M0,210 Q120,190 240,215 T400,200 V280 H0 Z" fill={b} opacity="0.14" />
      <g stroke={a} strokeWidth="0.6" opacity="0.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={i} x1={-20 + i * 55} y1="0" x2={60 + i * 55} y2="280" />
        ))}
      </g>
      <circle cx="320" cy="55" r="22" fill="none" stroke="#F2B705" strokeWidth="0.8" opacity="0.7" />
    </svg>
  );
}
