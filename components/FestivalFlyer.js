export default function FestivalFlyer() {
  return (
    <section className="py-20 sm:py-24 border-b border-neutral-900">
      <div className="max-w-[760px] mx-auto px-8 text-center">
        <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4 uppercase">
          Share The Word
        </div>
        <h2 className="font-display text-[clamp(28px,3.6vw,38px)] leading-tight mb-8">
          The official flyer.
        </h2>
        <div className="border border-neutral-800">
          <img
            src="/photos/festival/asafotufiami-2026-flyer.jpg"
            alt="Asafotufiami Festival 2026 — Rep Your Clan Concert official flyer"
            className="w-full h-auto"
          />
        </div>
        <a
          href="/photos/festival/asafotufiami-2026-flyer.jpg"
          download="asafotufiami-2026-rep-your-clan-flyer.jpg"
          className="inline-flex items-center gap-2 border border-gold text-gold px-6 py-3 text-xs uppercase tracking-widest hover:bg-gold hover:text-ink transition-colors mt-8"
        >
          Save Flyer
        </a>
      </div>
    </section>
  );
}
