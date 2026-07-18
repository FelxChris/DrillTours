import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Gallery | Drill Tours Ltd",
  description: "Field notes from across Ghana — Drill Tours Ltd's photo gallery.",
};

export default function GalleryPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[["Home", "/"], ["Gallery", null]]} />
      <Gallery />
    </PageShell>
  );
}
