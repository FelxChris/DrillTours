import { buildOgImage } from "@/lib/og-image";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Tour Packages — Drill Tours Ltd";

export default function Image() {
  return buildOgImage({
    eyebrow: "The Manifest",
    title: "Eight ways to move through Africa.",
  });
}
