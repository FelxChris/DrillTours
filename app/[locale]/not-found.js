import PageShell from "@/components/PageShell";
import Mark from "@/components/Mark";

export const metadata = {
  title: "Page Not Found | Drill Tours Ltd",
};

const POPULAR_LINKS = [
  ["Destinations", "/destinations"],
  ["Tour Packages", "/packages"],
  ["Make a Reservation", "/reserve"],
  ["Gallery", "/gallery"],
  ["Contact Us", "/contact"],
];

export default function NotFound() {
  return (
    <PageShell>
      <section className="min-h-[70vh] flex items-center">
        <div className="max-w-[640px] mx-auto px-8 text-center">
          <div className="flex justify-center mb-8">
            <Mark size={70} />
          </div>
          <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4">404</div>
          <h1 className="font-display text-[clamp(28px,4vw,40px)] leading-tight mb-5">
            This trail doesn&rsquo;t lead anywhere.
          </h1>
          <p className="text-[15.5px] text-neutral-400 leading-relaxed mb-10">
            The page you&rsquo;re looking for may have moved, or the link might be outdated.
            Here&rsquo;s where most people are headed:
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap mb-10">
            {POPULAR_LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center justify-center border border-neutral-700 text-ivory px-5 py-3 text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <a href="/" className="text-xs tracking-wide text-gold border-b border-gold/40">
            ← Back to Home
          </a>
        </div>
      </section>
    </PageShell>
  );
}
