import { Link } from "@/i18n/routing";

const POSTS = [
  {
    title: "Visa Guide: Entering Ghana in 2026",
    tag: "Visa Guides",
    slug: "visa-guide-2026",
  },
  {
    title: "Five Days on the Gold Coast: A Slow Itinerary",
    tag: "Destination Highlights",
    slug: "five-days-gold-coast",
  },
  {
    title: "Understanding Kente: Cloth, Color, and Meaning",
    tag: "African Culture",
    slug: "understanding-kente",
  },
];

export default function Blog() {
  return (
    <section className="py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="flex justify-between items-end mb-11 flex-wrap gap-4">
          <h2 className="font-display text-[clamp(30px,4vw,42px)]">From the Journal</h2>
          <Link href="/journal" className="text-xs tracking-wide text-gold border-b border-gold/40">
            View all posts →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
          {POSTS.map((b) => (
            <Link
              key={b.slug}
              href={`/journal/${b.slug}`}
              className="border-t border-gold/40 pt-5 block hover:opacity-80 transition-opacity"
            >
              <span className="text-[11px] tracking-wide text-gold">{b.tag.toUpperCase()}</span>
              <h3 className="font-display text-xl mt-3 leading-snug">{b.title}</h3>
              <span className="text-xs text-neutral-400 block mt-3.5">Read more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
