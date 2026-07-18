"use client";
import { useState } from "react";

const CATEGORIES = ["All", "Ghana", "Wildlife", "Culture", "Adventure"];

const ITEMS = [
  { cat: "Ghana", src: "/photos/volta-hotel-aerial.jpg", title: "Volta Hotel, Akosombo" },
  { cat: "Ghana", src: "/photos/aburi-palm-avenue.jpg", title: "Aburi Botanical Gardens" },
  { cat: "Adventure", src: "/photos/wli-falls.jpg", title: "Wli Falls, Volta Region" },
  { cat: "Ghana", src: "/photos/lakeside-resort-aerial.jpg", title: "Lakeside Resort, Volta Lake" },
  { cat: "Ghana", src: "/photos/lakeside-terrace.png", title: "Lakeside Terrace, Akosombo" },
  { cat: "Ghana", src: "/photos/lakeside-lawn.png", title: "Resort Grounds, Akosombo" },
  { cat: "Wildlife", src: "/photos/peacock-poolside.jpg", title: "Resident Peacock, Resort Grounds" },
  { cat: "Culture", src: "/photos/accra-architecture.jpg", title: "Modern Accra Architecture" },
  { cat: "Culture", src: "/photos/buffet-spread.jpg", title: "Traditional Buffet Spread" },
  { cat: "Culture", src: "/photos/kwame-nkrumah-memorial-park.jpg", title: "Kwame Nkrumah Memorial Park & Mausoleum" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const items = ITEMS.filter((g) => filter === "All" || g.cat === filter);

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="flex justify-between items-end mb-9 flex-wrap gap-5">
          <h2 className="font-display text-[clamp(30px,4vw,42px)]">Field Notes</h2>
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-xs px-4 py-2 tracking-wide border transition-colors ${
                  filter === c
                    ? "bg-gold text-ink border-gold"
                    : "bg-transparent text-neutral-400 border-neutral-700"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((g) => (
            <div key={g.title} className="relative overflow-hidden" style={{ height: 190 }}>
              <img
                src={g.src}
                alt={g.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-3.5 left-3.5">
                <div className="font-display text-[13.5px]">{g.title}</div>
                <div className="text-[10px] text-gold tracking-wide mt-0.5">{g.cat.toUpperCase()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
