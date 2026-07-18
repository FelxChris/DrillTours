import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import Destinations from "@/components/Destinations";
import Divider from "@/components/Divider";
import GhanaExperiences from "@/components/GhanaExperiences";

export const metadata = {
  title: "Destinations | Drill Tours Ltd",
  description:
    "Five regions across Africa, with Ghana as our home ground — explore where Drill Tours takes you, from Cape Coast Castle to Mole National Park.",
};

export default function DestinationsPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[["Home", "/"], ["Destinations", null]]} />
      <Destinations />
      <Divider label="Our Home Ground" />
      <GhanaExperiences />
    </PageShell>
  );
}
