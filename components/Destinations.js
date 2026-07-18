const REGIONS = [
  { name: "West Africa", note: "Ghana · Senegal · Côte d'Ivoire · Benin", flagship: true },
  { name: "East Africa", note: "Kenya · Tanzania · Rwanda · Uganda" },
  { name: "Southern Africa", note: "South Africa · Botswana · Namibia · Zimbabwe" },
  { name: "North Africa", note: "Morocco · Egypt · Tunisia" },
  { name: "Central Africa", note: "Gabon · Cameroon · DR Congo" },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <h2 className="font-display text-[clamp(30px,4vw,42px)] mb-11">
          Five regions. One continent.
        </h2>

        <div className="flex flex-col">
          {REGIONS.map((r, i) => (
            <div
              key={r.name}
              id={r.flagship ? "ghana" : undefined}
              className="flex justify-between items-center py-6 border-b border-neutral-900 gap-4"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-neutral-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`font-display text-[clamp(22px,3vw,32px)] ${
                    r.flagship ? "text-gold" : "text-ivory"
                  }`}
                >
                  {r.name}
                </h3>
                {r.flagship && (
                  <span className="text-[10.5px] tracking-wide border border-gold text-gold px-2.5 py-1 uppercase">
                    Flagship
                  </span>
                )}
              </div>
              <span className="text-[13.5px] text-neutral-400 text-right">{r.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
