import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import FestivalHero from "@/components/FestivalHero";
import FestivalHistory from "@/components/FestivalHistory";
import FestivalProgramme from "@/components/FestivalProgramme";
import FestivalGallery from "@/components/FestivalGallery";
import FestivalVenue from "@/components/FestivalVenue";
import FestivalMerch from "@/components/FestivalMerch";
import FestivalReservation from "@/components/FestivalReservation";
import FestivalFlyer from "@/components/FestivalFlyer";
import FestivalFAQ from "@/components/FestivalFAQ";

export const metadata = {
  title: "Asafotufiami Festival 2026 — Rep Your Clan Concert | Drill Tours Ltd",
  description:
    "Asafotufiami Festival 2026's Rep Your Clan Concert — 1st August, Mohee Food Court, Sege-Ada, 11 AM till late. Reserve official merchandise or book the full festival + tour package with Drill Tours.",
};

export default function AsafotufiamiFestivalPage() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          ["Home", "/"],
          ["Packages", "/packages"],
          ["Asafotufiami Festival 2026", null],
        ]}
      />
      <FestivalHero />
      <FestivalHistory />
      <FestivalProgramme />
      <FestivalGallery />
      <FestivalVenue />
      <FestivalMerch />
      <FestivalReservation />
      <FestivalFlyer />
      <FestivalFAQ />
    </PageShell>
  );
}
