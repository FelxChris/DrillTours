import { Link } from "@/i18n/routing";
import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Terms of Service | Drill Tours Ltd",
  description: "Terms and conditions for booking tours and services with Drill Tours Ltd.",
};

export default function TermsOfService() {
  return (
    <PageShell>
      <Breadcrumbs items={[["Home", "/"], ["Terms of Service", null]]} />
      <header className="max-w-[760px] mx-auto px-8 pt-6 pb-10">
        <h1 className="font-display text-[clamp(30px,4.5vw,46px)] leading-tight">Terms of Service</h1>
        <p className="text-neutral-500 text-sm mt-3">Last updated: June 2026</p>
      </header>

      <article className="max-w-[760px] mx-auto px-8 pb-24 text-[15.5px] leading-relaxed text-neutral-300 space-y-6">
        <p>
          These terms govern your use of drilltours.com and any tour, trek, safari, or travel
          service booked with Drill Tours Ltd ("we," "us," "our"). By submitting a reservation
          request, you agree to these terms.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Reservations and quotes</h2>
        <p>
          Submitting the reservation form on this site is a request for availability and pricing,
          not a confirmed booking. A booking is only confirmed once we have responded directly to
          confirm dates, pricing, and — where applicable — received any required deposit or
          payment.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Pricing</h2>
        <p>
          Prices quoted are specific to the dates, group size, and itinerary discussed and may
          change if any of those details change. Prices are not guaranteed until a booking is
          confirmed in writing.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Cancellations and changes</h2>
        <p>
          Cancellation policies vary by tour package, season, and any third-party suppliers
          involved (hotels, parks, transport operators). We'll provide the specific cancellation
          terms that apply to your booking at the time of confirmation. Where a third-party
          supplier's own cancellation policy applies, that policy governs in addition to ours.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Travel documents and requirements</h2>
        <p>
          You are responsible for ensuring you hold a valid passport, any required visas,
          vaccination certificates (including yellow fever where required), and travel insurance.
          We can advise on requirements but are not responsible for denied entry, missed travel,
          or other consequences of incomplete documentation.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Health, safety, and conduct</h2>
        <p>
          Some of our tours involve physical activity, remote locations, or wildlife viewing that
          carry inherent risk. You're responsible for assessing your own fitness for a given
          itinerary and disclosing any relevant medical conditions in advance. We reserve the
          right to remove a participant from a tour, without refund, for conduct that endangers
          themselves, other travelers, or our guides and staff.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Liability</h2>
        <p>
          We take care in selecting accommodations, transport, and activity operators, but we are
          not liable for the acts, omissions, or default of independent third-party suppliers, nor
          for delays, losses, or injury arising from circumstances beyond our reasonable control
          (including weather, civil disruption, or government action).
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Corporate and institutional travel</h2>
        <p>
          Group, government, NGO, and corporate bookings may be subject to separate written
          agreements that take precedence over these general terms where the two conflict.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Changes to these terms</h2>
        <p>
          We may update these terms from time to time. The version in effect at the time you
          submit a booking request applies to that booking.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Governing law</h2>
        <p>These terms are governed by the laws of Ghana.</p>

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

        <p className="text-neutral-500 text-sm pt-6 border-t border-neutral-800">
          This is a general terms template and isn't a substitute for review by a lawyer familiar
          with Ghanaian tourism and consumer protection law — worth having checked once the
          business is operating at volume, particularly the liability and cancellation sections.
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
