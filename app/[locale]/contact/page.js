import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact | Drill Tours Ltd",
  description:
    "Get in touch with Drill Tours Ltd — Accra, Ghana. Email, phone, WhatsApp, and our office location.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[["Home", "/"], ["Contact", null]]} />
      <Contact />
    </PageShell>
  );
}
