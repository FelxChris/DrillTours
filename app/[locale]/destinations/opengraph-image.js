import { buildOgImage } from "@/lib/og-image";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Destinations — Drill Tours Ltd";

export default function Image() {
  return buildOgImage({
    eyebrow: "Destinations",
    title: "Five regions. One continent.",
  });
}
