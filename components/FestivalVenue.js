const VENUE_QUERY = "Mohee Food Court, Sege, Ada, Greater Accra Region, Ghana";

export default function FestivalVenue() {
  return (
    <section className="py-20 sm:py-24 border-b border-neutral-900">
      <div className="max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-16 items-start">
        <div>
          <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4 uppercase">
            Getting There
          </div>
          <h2 className="font-display text-[clamp(28px,3.6vw,38px)] leading-tight mb-6">
            Mohee Food Court, Sege.
          </h2>
          <p className="text-[14.5px] text-neutral-300 leading-relaxed mb-7 max-w-[420px]">
            Sege sits on the Accra–Ada coastal road, roughly an hour and a half east of Accra
            by car. Drill Tours' festival + tour package includes return transport from Accra,
            so you don't have to think about the drive.
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VENUE_QUERY)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gold text-gold px-6 py-3 text-xs uppercase tracking-widest hover:bg-gold hover:text-ink transition-colors"
          >
            Get Directions
          </a>
        </div>

        <div className="border border-neutral-800 aspect-[16/10] overflow-hidden">
          <iframe
            title="Map to Mohee Food Court, Sege, Ada"
            src={`https://www.google.com/maps?q=${encodeURIComponent(VENUE_QUERY)}&output=embed`}
            className="w-full h-full grayscale-[40%] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
