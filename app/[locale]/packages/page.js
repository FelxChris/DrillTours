import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import Packages from "@/components/Packages";

export const metadata = {
  title: "Tour Packages | Drill Tours Ltd",
  description:
    "Eight ways to move through Africa with Drill Tours: heritage tours, wildlife safaris, beach holidays, adventure tours, cultural experiences, corporate travel, educational excursions, and luxury Africa packages.",
};

export default function PackagesPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[["Home", "/"], ["Packages", null]]} />
      <Packages />
    </PageShell>
  );
}
