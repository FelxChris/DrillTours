import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import About from "@/components/About";
import BrafiProject from "@/components/BrafiProject";

export const metadata = {
  title: "About Us | Drill Tours Ltd",
  description:
    "Drill Tours Ltd — cultural heritage tours, the Brafie Project for the African diaspora, and transformative travel experiences built from Accra, Ghana.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[["Home", "/"], ["About", null]]} />
      <About />
      <BrafiProject />
    </PageShell>
  );
}
