import { buildOgImage } from "@/lib/og-image";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Reserve — Drill Tours Ltd";

export default function Image() {
  return buildOgImage({
    eyebrow: "Reservation",
    title: "Tell us where, we'll handle how.",
  });
}
