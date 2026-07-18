const GHANA_SITES = [
  {
    name: "Cape Coast Castle",
    tag: "Heritage",
    coord: "05.10°N, 1.24°W",
    // Real photo, Pexels License (free for commercial use, no attribution
    // required) — https://www.pexels.com/photo/scenic-view-from-cape-coast-castle-in-ghana-33658298/
    image: "https://images.pexels.com/photos/33658298/pexels-photo-33658298.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Elmina Castle",
    tag: "Heritage",
    coord: "05.08°N, 1.35°W",
    // Real photo, Pexels License — https://www.pexels.com/photo/facade-of-elmina-castle-14780914/
    image: "https://images.pexels.com/photos/14780914/pexels-photo-14780914.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  { name: "Kakum National Park", tag: "Wildlife", coord: "05.35°N, 1.38°W" },
  { name: "Mole National Park", tag: "Wildlife", coord: "09.27°N, 1.85°W" },
  {
    name: "Wli Waterfalls",
    tag: "Adventure",
    coord: "07.13°N, 0.57°E",
    image: "/photos/wli-falls.jpg",
  },
  { name: "Lake Volta", tag: "Adventure", coord: "06.30°N, 0.05°E" },
  { name: "Adomi Bridge", tag: "Landmark", coord: "06.20°N, 0.18°E" },
  {
    name: "Accra City Tours",
    tag: "Culture",
    coord: "05.60°N, 0.19°W",
    image: "/photos/accra-architecture.jpg",
  },
  { name: "Kumasi Cultural Tours", tag: "Culture", coord: "06.69°N, 1.62°W" },
];

export default function GhanaExperiences() {
  return (
    <section className="bg-[#151515] py-24 border-t border-b border-neutral-900">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="flex justify-between items-end mb-11 flex-wrap gap-4">
          <h2 className="font-display text-[clamp(30px,4vw,42px)]">Ghana, in nine places.</h2>
          <span className="font-mono text-xs text-gold">OUR HOME GROUND</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800">
          {GHANA_SITES.map((s) => (
            <div
              key={s.name}
              className="bg-[#151515] border border-transparent hover:border-gold/50 transition-colors h-full flex flex-col"
            >
              {s.image && (
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-7 flex-1">
                <div className="font-mono text-[10.5px] text-neutral-500 mb-4">{s.coord}</div>
                <h3 className="font-display text-xl mb-2.5">{s.name}</h3>
                <span className="text-[11.5px] tracking-wide text-forest border border-forest/40 px-3 py-1.5">
                  {s.tag.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[12.5px] text-neutral-500 max-w-[640px]">
          Photography still coming for Kakum, Mole, Lake Volta, Adomi Bridge, and Kumasi —
          shown as coordinate cards for now rather than mismatched stock photography.
        </p>
      </div>
    </section>
  );
}
