"use client";
import { useState } from "react";
import { Link } from "@/i18n/routing";

const FAQS = [
  {
    q: "Do I need a visa to travel to Ghana?",
    a: (
      <>
        Most travelers do — Ghana doesn't offer walk-up visas on arrival for most
        nationalities. ECOWAS citizens travel visa-free for up to 90 days. Everyone else should
        plan to apply in advance. See our{" "}
        <Link href="/journal/visa-guide-2026" className="text-gold underline">
          full visa guide
        </Link>{" "}
        for who needs what and how long it takes.
      </>
    ),
  },
  {
    q: "How does the reservation process actually work?",
    a: "Submit the reservation form with your dates, destination, and group size — that's a request for availability and pricing, not a confirmed booking yet. A travel designer reviews it and replies, usually within one business day, with a firm itinerary and price. Nothing is charged until you confirm.",
  },
  {
    q: "Can I get a quote before committing to anything?",
    a: "Yes — that's exactly what the reservation form does. There's no obligation at the inquiry stage, and you're welcome to ask questions over WhatsApp before submitting anything formal.",
  },
  {
    q: "Do you arrange travel outside Ghana?",
    a: "Yes. Ghana is our home ground and where most of our on-the-ground experience is concentrated, but we arrange tours across West, East, Southern, North, and Central Africa — see the Destinations page for the regions we cover.",
  },
  {
    q: "What's included in a tour package price?",
    a: "It depends on the package and is confirmed with your specific quote — typically transport, guiding, and entry fees are included, while flights and personal spending usually aren't. Your travel designer will give you an itemized breakdown before you confirm anything.",
  },
  {
    q: "Do you handle group, corporate, or institutional travel?",
    a: "Yes — conferences, government delegations, NGO logistics, executive travel, and school or institutional excursions are a regular part of what we do. See the Corporate Travel section, or email us directly to start that conversation.",
  },
  {
    q: "What if I need to change or cancel my trip?",
    a: (
      <>
        Cancellation terms vary by package, season, and any third-party suppliers involved (hotels,
        parks, transport). We'll confirm the specific terms that apply once your booking is
        underway — see our{" "}
        <Link href="/terms" className="text-gold underline">
          Terms of Service
        </Link>{" "}
        for the general policy.
      </>
    ),
  },
  {
    q: "How quickly will someone get back to me?",
    a: "Within one business day for reservation and contact form submissions. For anything urgent — a departure within the next few days, for instance — WhatsApp us directly using the button on this page; that gets picked up faster than email.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24">
      <div className="max-w-[840px] mx-auto px-8">
        <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4">
          BEFORE YOU ASK
        </div>
        <h2 className="font-display text-[clamp(30px,4vw,42px)] leading-tight mb-12">
          Frequently asked questions.
        </h2>

        <div className="border-t border-neutral-800">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="border-b border-neutral-800">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-[18px] sm:text-[20px] text-ivory">
                    {item.q}
                  </span>
                  <span
                    className="text-gold text-xl flex-shrink-0 transition-transform"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="text-[14.5px] text-neutral-400 leading-relaxed pb-6 pr-10">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
