const VALUES = ["Integrity", "Excellence", "Authenticity", "Sustainability", "Customer Satisfaction"];

export default function About() {
  return (
    <section id="about" className="bg-ivory text-ink py-24">
      <div className="max-w-[1240px] mx-auto px-8">

        {/* Main intro — CEO's own words, lightly edited for web */}
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16 mb-20">
          <div>
            <div className="font-mono text-[11px] tracking-[2px] text-forest mb-4">
              ABOUT DRILL TOURS
            </div>
            <h2 className="font-display text-[clamp(32px,4vw,46px)] leading-tight">
              Cultural heritage. Deeper understanding. Authentic Africa.
            </h2>
          </div>
          <div className="space-y-5 text-[15.5px] leading-relaxed text-neutral-700">
            <p>
              Drill Tours is a travel company that specializes in organizing tours and travel
              experiences with a focus on cultural and traditional heritage. We offer a range of
              packages — including heritage tours that provide opportunities for cultural
              exchange and learning — allowing participants to gain a deeper understanding and
              appreciation of African culture and identity.
            </p>
            <p>
              We offer a unique and transformative travel experience that connects people to
              the rich cultural heritage of Ghana and the broader African continent.
            </p>
          </div>
        </div>

        {/* Highlighting Black Significance */}
        <div className="border-t border-neutral-300 pt-16 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16">
            <div>
              <div className="font-mono text-[11px] tracking-[2px] text-forest mb-4">
                OUR PURPOSE
              </div>
              <h3 className="font-display text-[clamp(24px,3vw,34px)] leading-tight">
                Highlighting Black Significance
              </h3>
            </div>
            <div className="text-[15.5px] leading-relaxed text-neutral-700">
              <p>
                Drill Tours offers tours that explore the connections between Ghana and the
                African diaspora, highlighting the ways in which the experiences of black
                people in Ghana have contributed to and shaped the broader history and culture
                of the African continent — and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="border-t border-neutral-300 pt-12">
          <h4 className="font-display text-lg mb-5">Values</h4>
          <div className="flex gap-3 flex-wrap">
            {VALUES.map((v) => (
              <span
                key={v}
                className="text-[13px] border border-forest/35 text-forest px-4 py-2"
              >
                {v}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
