import { buildOgImage } from "@/lib/og-image";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Drill Tours Ltd — Exploring Africa, Creating Experiences";

export default function Image() {
  return buildOgImage({
    eyebrow: "Accra, Ghana",
    title: "Discover Africa, beyond the ordinary.",
  });
}
