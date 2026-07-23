import { Link } from "@/i18n/routing";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Privacy Policy | Drill Tours Ltd",
  description: "How Drill Tours Ltd collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <PageShell>
      <Breadcrumbs items={[["Home", "/"], ["Privacy Policy", null]]} />
      <header className="max-w-[760px] mx-auto px-8 pt-6 pb-10">
        <h1 className="font-display text-[clamp(30px,4.5vw,46px)] leading-tight">Privacy Policy</h1>
        <p className="text-neutral-500 text-sm mt-3">Last updated: June 2026</p>
      </header>

      <article className="max-w-[760px] mx-auto px-8 pb-24 text-[15.5px] leading-relaxed text-neutral-300 space-y-6">
        <p>
          Drill Tours Ltd ("we," "us," "our") respects your privacy. This policy explains what
          information we collect through drilltours.com, why we collect it, and how it's handled.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Information we collect</h2>
        <p>When you submit our reservation or contact forms, we collect:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Full name and email address</li>
          <li>Phone number and country (reservation form only)</li>
          <li>Travel details you provide: destination, number of travelers, travel date, and package preference (reservation form only)</li>
          <li>Any additional notes you choose to include</li>
        </ul>
        <p>
          We do not collect payment information through this website. We do not use cookies for
          advertising or tracking, and we do not sell or share your information with third-party
          advertisers.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">How we use it</h2>
        <p>
          Information submitted through our forms is used solely to respond to your inquiry,
          confirm availability and pricing, and arrange your travel with us. Submissions are
          delivered to our team by email and recorded in an internal log so we can follow up and
          keep track of requests.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Where it's stored</h2>
        <p>
          Form submissions are processed using Resend (an email delivery service) and stored in a
          private Google Sheet accessible only to Drill Tours staff. Neither service uses your
          information for any purpose beyond delivering and storing your submission on our behalf.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">How long we keep it</h2>
        <p>
          We retain reservation and contact submissions for as long as reasonably necessary to
          respond to your inquiry and maintain business records, and you may request deletion at
          any time using the contact details below.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Your rights</h2>
        <p>
          You can ask us what information we hold about you, request a correction, or request
          deletion, by emailing{" "}
          <a href="mailto:DrillTours@gmail.com" className="text-gold underline">
            DrillTours@gmail.com
          </a>
          . We'll respond within a reasonable time.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Third-party links</h2>
        <p>
          Our site links to external services including WhatsApp, Instagram, TripAdvisor, and
          Google Maps. Once you leave our site through one of these links, that service's own
          privacy policy applies, not ours.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Changes to this policy</h2>
        <p>
          We may update this policy from time to time as our services or applicable law change.
          The "last updated" date at the top of this page reflects the most recent revision.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Contact us</h2>
        <p>
          Drill Tours Ltd, 26 Lolite Street, Spintex, Accra, Ghana.
          <br />
          Email:{" "}
          <a href="mailto:DrillTours@gmail.com" className="text-gold underline">
            DrillTours@gmail.com
          </a>{" "}
          · Phone:{" "}
          <a href="tel:+233246361258" className="text-gold underline">
            +233 24 636 1258
          </a>
        </p>
      </article>

      <footer className="max-w-[760px] mx-auto px-8 pb-16">
        <Link href="/" className="text-xs tracking-wide text-gold border-b border-gold/40">
          ← Back to home
        </Link>
      </footer>
    </PageShell>
  );
}
