"use client";
import { useState } from "react";
import Mark from "./Mark";

const STATEMENTS = [
  {
    quote:
      "Every detail considered before you have to ask. Delegations move through multiple regions without friction.",
    tag: "Corporate & Institutional Travel",
  },
  {
    quote: "The kind of guiding that disappears — you simply experience the place, fully looked after.",
    tag: "Private & Leisure Travel",
  },
  {
    quote: "Itineraries built with real depth, for groups that need more than a standard tour.",
    tag: "Educational & Group Travel",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = STATEMENTS[index];

  return (
    <section className="bg-[#151515] border-t border-b border-neutral-900 py-24">
      <div className="max-w-[760px] mx-auto px-8">
        <Mark size={28} />
        <div className="font-mono text-[11px] tracking-[2px] text-gold mt-7 mb-3 uppercase">
          What to expect
        </div>
        <p className="font-display text-[clamp(22px,3vw,30px)] italic leading-snug text-neutral-100">
          &ldquo;{t.quote}&rdquo;
        </p>
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-neutral-400">{t.tag}</div>
          <div className="flex gap-2.5">
            <button
              onClick={() => setIndex((index - 1 + STATEMENTS.length) % STATEMENTS.length)}
              className="border border-neutral-700 text-ivory w-9 h-9"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => setIndex((index + 1) % STATEMENTS.length)}
              className="border border-neutral-700 text-ivory w-9 h-9"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
        <a
          href="https://www.instagram.com/cliffdrills/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 text-xs tracking-wide text-gold border-b border-gold/40"
        >
          See real trips and traveler stories on Instagram →
        </a>
      </div>
    </section>
  );
}
