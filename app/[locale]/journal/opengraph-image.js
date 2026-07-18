import { buildOgImage } from "@/lib/og-image";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Journal — Drill Tours Ltd";

export default function Image() {
  return buildOgImage({
    eyebrow: "Journal",
    title: "Travel notes from the road.",
  });
}
