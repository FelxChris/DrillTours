import { buildOgImage } from "@/lib/og-image";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Asafotufiami Festival 2026 — Rep Your Clan Concert";

export default function Image() {
  return buildOgImage({
    eyebrow: "Asafotufiami Festival 2026",
    title: "Rep Your Clan Concert — 1 Aug, Mohee Food Court, Sege.",
  });
}
