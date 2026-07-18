import { ImageResponse } from "next/og";

const PEAK_COLORS = ["#E5302F", "#D62A2A", "#F2B705", "#1E8A3C"];

/**
 * Builds a 1200x630 Open Graph / Twitter card image: ink background, the
 * four-peak mountain mark (flat silhouette, simplified for OG rendering —
 * @vercel/og's renderer (Satori) doesn't support every SVG feature the
 * real two-layer logo uses, so this is a deliberately simplified flat
 * version, not a bug), the page's eyebrow label, and a title.
 *
 * Usage: call from a route's opengraph-image.js. Each route file defines
 * its own `size`/`contentType`/`alt` constants directly (rather than
 * re-exporting them from here) since Next.js's metadata file convention
 * expects those as plain exports in the route file itself.
 */
export function buildOgImage({ eyebrow, title }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0F0F0F",
          padding: "80px",
        }}
      >
        <svg width="320" height="110" viewBox="0 0 680 260" style={{ marginBottom: 48 }}>
          <path d="M 50 220 L 195 30 L 238 84 L 220 90 L 232 102 L 213 110 L 255 220 Z" fill={PEAK_COLORS[0]} />
          <path d="M 195 220 L 300 90 L 356 164 L 337 169 L 348 180 L 329 187 L 360 220 Z" fill={PEAK_COLORS[1]} />
          <path d="M 340 220 L 478 8 L 538 87 L 518 93 L 530 106 L 510 114 L 555 220 Z" fill={PEAK_COLORS[2]} />
          <path d="M 510 220 L 612 108 L 658 169 L 639 173 L 648 185 L 630 192 L 665 220 Z" fill={PEAK_COLORS[3]} />
        </svg>

        {eyebrow && (
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              color: "#F2B705",
              marginBottom: 20,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
        )}

        <div
          style={{
            fontSize: 64,
            color: "#FAF8F3",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 900,
            display: "flex",
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: 26,
            color: "#8a8a8a",
            marginTop: 36,
            display: "flex",
          }}
        >
          <span style={{ fontWeight: 400 }}>Drill</span>
          <span style={{ fontWeight: 700 }}>Tours</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
