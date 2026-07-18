import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Journal | Drill Tours Ltd",
  description: "Travel tips, visa guides, destination highlights, and African culture from Drill Tours Ltd.",
};

const POSTS = [
  {
    slug: "visa-guide-2026",
    title: "Visa Guide: Entering Ghana in 2026",
    tag: "Visa Guides",
  },
  {
    slug: "five-days-gold-coast",
    title: "Five Days on the Gold Coast: A Slow Itinerary",
    tag: "Destination Highlights",
  },
  {
    slug: "understanding-kente",
    title: "Understanding Kente: Cloth, Color, and Meaning",
    tag: "African Culture",
  },
];

export default function JournalIndex() {
  return (
    <PageShell>
      <Breadcrumbs items={[["Home", "/"], ["Journal", null]]} />
      <header className="max-w-[1240px] mx-auto px-8 pt-6 pb-10">
        <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4">JOURNAL</div>
        <h1 className="font-display text-[clamp(34px,5vw,56px)] leading-tight max-w-[700px]">
          Travel notes from the road, written by people who&rsquo;ve actually been there.
        </h1>
      </header>

      <section className="max-w-[1240px] mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
          {POSTS.map((p) => (
            <a
              key={p.slug}
              href={`/journal/${p.slug}`}
              className="border-t border-gold/40 pt-5 block hover:opacity-80 transition-opacity"
            >
              <span className="text-[11px] tracking-wide text-gold">{p.tag.toUpperCase()}</span>
              <h2 className="font-display text-xl mt-3 leading-snug">{p.title}</h2>
              <span className="text-xs text-neutral-400 block mt-3.5">Read more →</span>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
