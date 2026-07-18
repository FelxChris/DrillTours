import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Visa Guide: Entering Ghana in 2026 | Drill Tours Ltd",
  description: "What you need to know about Ghana visas in 2026 — who needs one, how to apply, processing times, and costs.",
};

export default function VisaGuide2026() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          ["Home", "/"],
          ["Journal", "/journal"],
          ["Visa Guide: Entering Ghana in 2026", null],
        ]}
      />
      <header className="max-w-[760px] mx-auto px-8 pt-6 pb-10">
        <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4">
          VISA GUIDES
        </div>
        <h1 className="font-display text-[clamp(30px,4.5vw,46px)] leading-tight">
          Visa Guide: Entering Ghana in 2026
        </h1>
      </header>

      <article className="max-w-[760px] mx-auto px-8 pb-24 text-[15.5px] leading-relaxed text-neutral-300 space-y-6">
        <p>
          Most visitors to Ghana need a visa arranged before they travel — Ghana does not offer a
          walk-up visa on arrival for the majority of nationalities. Here&rsquo;s what to actually
          do about it, in plain terms.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Who needs a visa</h2>
        <p>
          Citizens of ECOWAS member states (Nigeria, Senegal, Côte d&rsquo;Ivoire, and twelve others)
          travel to Ghana visa-free for up to 90 days. Citizens of Mauritius and Trinidad and
          Tobago can enter visa-free for up to 60 days. Most other travelers — including from the
          US, UK, Canada, and the EU — need to arrange a visa in advance.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">How to apply</h2>
        <p>
          The most direct route is the Ghana Immigration Service&rsquo;s online portal,{" "}
          <a href="https://gisonline.gov.gh" target="_blank" rel="noopener noreferrer" className="text-gold underline">
            gisonline.gov.gh
          </a>
          , or applying in person at a Ghana embassy or consulate in your country. A standard
          tourist visa is typically issued for 30 to 60 days. Standard processing takes 5–7
          business days; expedited processing is available at some missions for an additional fee
          and takes 2–3 business days.
        </p>
        <p>
          We recommend applying at least 2–3 weeks before travel, and earlier than that — ideally
          by September — if you&rsquo;re planning to visit during December, when embassy
          applications surge for the holiday season.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Visa on Arrival</h2>
        <p>
          Ghana does run a Visa on Arrival program, but it requires pre-approval before you fly —
          you cannot simply land and apply at the airport. It&rsquo;s intended for travelers from
          countries without a Ghanaian diplomatic mission, or those traveling on short notice for
          business, conferences, or family emergencies, with a host organization in Ghana
          submitting the request on their behalf. If you&rsquo;re booking a tour with us, we can
          advise whether this route applies to your situation.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">What you&rsquo;ll need</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>A passport valid for at least six months beyond your travel dates</li>
          <li>Proof of accommodation (a hotel booking or host invitation letter)</li>
          <li>A return or onward flight ticket</li>
          <li>A yellow fever vaccination certificate</li>
          <li>Evidence of sufficient funds for your stay</li>
        </ul>

        <h2 className="font-display text-2xl text-ivory pt-4">Costs</h2>
        <p>
          Fees vary by nationality and visa type, and are set by the issuing embassy rather than a
          single fixed rate — expect a single-entry tourist visa to run in the range of $100–150
          for most nationalities, with multiple-entry visas costing more. Check with your nearest
          Ghana embassy or consulate for the exact current fee.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">One note for the diaspora</h2>
        <p>
          Ghana&rsquo;s Right of Abode program allows members of the African diaspora whose
          ancestors were taken from the continent during the transatlantic slave trade to live and
          work in Ghana indefinitely, without a visa or work permit. It&rsquo;s a different process
          from a standard tourist visa, handled through the Diaspora Affairs Bureau at the Ministry
          of Foreign Affairs. If this applies to you and you&rsquo;d like guidance, get in touch and
          we can point you in the right direction.
        </p>

        <p className="text-neutral-500 text-sm pt-6 border-t border-neutral-800">
          Visa policy can change without much notice. Always confirm current requirements directly
          with the{" "}
          <a href="https://gis.gov.gh" target="_blank" rel="noopener noreferrer" className="text-gold underline">
            Ghana Immigration Service
          </a>{" "}
          or your nearest Ghanaian embassy before booking travel.
        </p>
      </article>

      <footer className="max-w-[760px] mx-auto px-8 pb-16">
        <a href="/journal" className="text-xs tracking-wide text-gold border-b border-gold/40">
          ← Back to Journal
        </a>
      </footer>
    </PageShell>
  );
}
