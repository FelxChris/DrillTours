import { buildOgImage } from "@/lib/og-image";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Gallery — Drill Tours Ltd";

export default function Image() {
  return buildOgImage({
    eyebrow: "Field Notes",
    title: "A look at Ghana, in pictures.",
  });
}
