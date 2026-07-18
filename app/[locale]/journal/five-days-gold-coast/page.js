import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Five Days on the Gold Coast: A Slow Itinerary | Drill Tours Ltd",
  description:
    "A slow, five-day route along Ghana's Gold Coast — Accra, Cape Coast, Kakum's canopy walk, Elmina, and a final day in the Aburi hills.",
};

export default function FiveDaysGoldCoast() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          ["Home", "/"],
          ["Journal", "/journal"],
          ["Five Days on the Gold Coast", null],
        ]}
      />
      <header className="max-w-[760px] mx-auto px-8 pt-6 pb-10">
        <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4">
          DESTINATION HIGHLIGHTS
        </div>
        <h1 className="font-display text-[clamp(30px,4.5vw,46px)] leading-tight">
          Five Days on the Gold Coast: A Slow Itinerary
        </h1>
      </header>

      <article className="max-w-[760px] mx-auto px-8 pb-24 text-[15.5px] leading-relaxed text-neutral-300 space-y-6">
        <p>
          Ghana&rsquo;s coast doesn&rsquo;t reward rushing. Five days is enough to move from
          Accra&rsquo;s energy to the quiet of a castle courtyard at dawn, without spending half
          the trip in transit. This is the route we send most first-time visitors on — adjust the
          pace to taste.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Day 1 — Accra</h2>
        <p>
          Start in the capital. Spend the morning at the Kwame Nkrumah Memorial Park, built on the
          site where Ghana&rsquo;s first president declared independence in 1957 — a good primer
          before anywhere else on the trip. From there, wander Jamestown&rsquo;s fishing harbour
          and old lighthouse, then Osu for lunch and a look at the craft stalls along Oxford
          Street. Close the day at the beach — Labadi or Kokrobite both work — for the sunset and
          your first taste of live highlife or afrobeats spilling out of a beach bar.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Day 2 — Cape Coast &amp; Kakum</h2>
        <p>
          Drive west to Cape Coast, roughly three hours from Accra. Spend the morning at Cape
          Coast Castle — one of the most visited of Ghana&rsquo;s coastal forts, and the site of
          the &ldquo;Door of No Return,&rdquo; through which enslaved Africans passed onto ships
          bound across the Atlantic. It&rsquo;s a heavy, necessary stop; take the guided tour
          rather than walking it alone. In the afternoon, head about 40 minutes inland to Kakum
          National Park for the canopy walkway — seven suspension bridges strung roughly 40
          metres above the rainforest floor, first opened in 1995 and still one of the few
          treetop walks of its kind in Africa. Overnight in Cape Coast.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Day 3 — Elmina</h2>
        <p>
          A short drive from Cape Coast, Elmina is home to St. George&rsquo;s Castle, built by the
          Portuguese in 1482 and widely considered the oldest surviving European building in
          sub-Saharan Africa. Like Cape Coast Castle, it later became a major hub of the
          transatlantic slave trade under Dutch control, and the dungeons remain part of the tour.
          Afterward, walk down to Elmina&rsquo;s working fishing harbour — one of the most
          photogenic in the country, especially in the late afternoon when the boats come in.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Day 4 — Beach Day</h2>
        <p>
          Give yourself a full day with nothing on the itinerary. Busua and Anomabo are both
          reachable from Cape Coast/Elmina and offer a different pace from Accra&rsquo;s beaches —
          quieter, better for swimming, and dotted with small guesthouses rather than resorts.
          Surf lessons are available in Busua if you want to be active; otherwise, this is the day
          to do nothing at all.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Day 5 — Aburi &amp; Back to Accra</h2>
        <p>
          On the return drive, stop in the Aburi hills above Accra. The Aburi Botanical Gardens,
          established in 1890, are a cool, quiet break after four days on the coast, and the
          nearby palm-lined avenues make for an easy walk. Aburi is also known for woodcarving —
          it&rsquo;s a good last stop for souvenirs before heading back into the city for a final
          night out.
        </p>

        <p className="text-neutral-500 text-sm pt-6 border-t border-neutral-800">
          This route can flex — add a day at Kakum for the treetop overnight lodge, or swap Aburi
          for a night in the Volta hills instead. Get in touch and we&rsquo;ll build it around
          your dates.
        </p>
      </article>

      <footer className="max-w-[760px] mx-auto px-8 pb-16">
        <a href="/journal" className="text-xs tracking-wide text-gold border-b border-gold/40">
          ← Back to Journal
        </a>
      </footer>
    </PageShell>
  );
}
