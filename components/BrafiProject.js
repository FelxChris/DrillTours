import { Link } from "@/i18n/routing";

/**
 * The Brafie Project — one of Drill Tours' most distinctive offerings,
 * described in the CEO's own article. Brafie means "return home" in Akan.
 * This section deserves dedicated real estate on the About page and its own
 * page within the site, since it differentiates Drill Tours from generic
 * tourism companies.
 */
export default function BrafiProject() {
  return (
    <section className="bg-ink text-ivory py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div>
            <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4">
              A DRILL TOURS PROGRAMME
            </div>
            <h2 className="font-display text-[clamp(30px,4vw,44px)] leading-tight mb-6">
              The Brafie Project
            </h2>
            <p className="text-[15.5px] leading-relaxed text-neutral-300 mb-5">
              <em>Brafie</em> — to return home.
            </p>
            <p className="text-[15.5px] leading-relaxed text-neutral-300 mb-5">
              The Brafie Project is a Drill Tours programme that aims to facilitate the return
              of people of African descent to their ancestral homelands. More than a tour, it is
              a guided path back — to culture, to community, and to roots.
            </p>
            <p className="text-[15.5px] leading-relaxed text-neutral-300 mb-10">
              The programme provides practical assistance with citizenship, investment
              opportunities, and establishing a business presence in Ghana — supporting the
              diaspora not just to visit, but to belong and to build.
            </p>
            <Link
              href="/reserve"
              className="inline-flex items-center border border-gold text-gold px-7 py-3.5 text-xs uppercase tracking-widest hover:bg-gold hover:text-ink transition-colors"
            >
              Enquire About Brafie
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-px bg-neutral-800">
            {[
              {
                heading: "Return",
                body:
                  "Facilitating the physical and cultural return of the African diaspora to Ghana and across the continent.",
              },
              {
                heading: "Citizenship",
                body:
                  "Guidance on Ghana's Right of Abode programme and the pathways available to people of African descent.",
              },
              {
                heading: "Investment",
                body:
                  "Connecting returning diaspora with real investment and business opportunities in Ghana's growing economy.",
              },
              {
                heading: "Community",
                body:
                  "Building lasting connections between the diaspora and local Ghanaian communities, institutions, and leaders.",
              },
            ].map((item) => (
              <div key={item.heading} className="bg-ink p-8">
                <h4 className="font-display text-xl text-gold mb-2.5">{item.heading}</h4>
                <p className="text-[14.5px] text-neutral-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
