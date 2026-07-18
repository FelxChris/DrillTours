"use client";
import { motion } from "framer-motion";

/**
 * The Drill Tours mark: four overlapping mountain peaks, each rendered as
 * two layers — a colored silhouette (Ghana flag colors: red, red, gold,
 * green) behind, and a near-black silhouette in front, offset down and to
 * the right. This reveals a sliver of color along the upper-left edge of
 * each peak, matching the company's original logo construction exactly.
 *
 * See /brand/BRAND-GUIDE.md for full usage rules.
 *
 * Props:
 *   size     — height in px (width follows the icon's natural aspect ratio)
 *   badge    — if true, renders the full lockup with the rounded black
 *              badge and "DrillTOURS" wordmark baked in (matches the
 *              original logo file exactly). If false (default), renders
 *              the mountain icon alone, for use next to a separate
 *              <Wordmark /> component or in tight spaces (favicons, etc).
 *   circle   — if true, renders the mountains + wordmark inside a circular
 *              badge frame instead of the rounded-rectangle pill. Use for
 *              app-icon-style and social-avatar-style contexts (the splash
 *              screen, a favicon, a circular profile picture). Takes
 *              precedence over `badge` if both are passed.
 *   animate  — if true, peaks fade/scale in on mount.
 */
const PEAKS = [
  { color: "M 50 220 L 195 30 L 238 84 L 220 90 L 232 102 L 213 110 L 255 220 Z", black: "M 58 220 L 195 38 L 234 84 L 217 90 L 228 102 L 210 109 L 248 220 Z", fill: "#E5302F" },
  { color: "M 195 220 L 300 90 L 356 164 L 337 169 L 348 180 L 329 187 L 360 220 Z", black: "M 202 220 L 300 98 L 350 164 L 332 169 L 343 180 L 325 186 L 353 220 Z", fill: "#D62A2A" },
  { color: "M 340 220 L 478 8 L 538 87 L 518 93 L 530 106 L 510 114 L 555 220 Z", black: "M 347 220 L 478 16 L 532 87 L 513 93 L 525 106 L 506 113 L 548 220 Z", fill: "#F2B705" },
  { color: "M 510 220 L 612 108 L 658 169 L 639 173 L 648 185 L 630 192 L 665 220 Z", black: "M 517 220 L 612 116 L 652 169 L 634 173 L 643 185 L 626 191 L 658 220 Z", fill: "#1E8A3C" },
];
const BLACK = "#0A0A0A";

function Peaks({ animate }) {
  if (!animate) {
    return (
      <>
        {PEAKS.map((p, i) => (
          <path key={`c${i}`} d={p.color} fill={p.fill} />
        ))}
        {PEAKS.map((p, i) => (
          <path key={`b${i}`} d={p.black} fill={BLACK} />
        ))}
      </>
    );
  }
  return (
    <>
      {PEAKS.map((p, i) => (
        <motion.path
          key={`c${i}`}
          d={p.color}
          fill={p.fill}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: "bottom" }}
        />
      ))}
      {PEAKS.map((p, i) => (
        <motion.path
          key={`b${i}`}
          d={p.black}
          fill={BLACK}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: "bottom" }}
        />
      ))}
    </>
  );
}

export default function Mark({ size = 40, badge = false, circle = false, animate = false }) {
  if (circle) {
    return (
      <svg width={size} height={size} viewBox="0 0 600 600">
        <circle cx="300" cy="300" r="296" fill={BLACK} stroke="#3a3a3a" strokeWidth="3" />
        <g transform="translate(105, 175) scale(0.62)">
          <Peaks animate={animate} />
        </g>
        <text x="300" y="420" fontFamily="Arial, Helvetica, sans-serif" fontSize="58" fontWeight="400" fill="#FFFFFF" textAnchor="middle">
          Drill<tspan fontWeight="800">TOURS</tspan>
        </text>
      </svg>
    );
  }

  if (badge) {
    const width = size * (720 / 380);
    return (
      <svg width={width} height={size} viewBox="0 0 720 380">
        <Peaks animate={animate} />
        <rect x="40" y="270" width="640" height="90" rx="28" fill={BLACK} />
        <text x="65" y="333" fontFamily="Arial, Helvetica, sans-serif" fontSize="62" fontWeight="400" fill="#FFFFFF">
          Drill<tspan fontWeight="800">TOURS</tspan>
        </text>
      </svg>
    );
  }

  const width = size * (680 / 260);
  return (
    <svg width={width} height={size} viewBox="0 0 680 260">
      <Peaks animate={animate} />
    </svg>
  );
}
