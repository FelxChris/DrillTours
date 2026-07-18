import PageShell from "@/components/PageShell";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Understanding Kente: Cloth, Color, and Meaning | Drill Tours Ltd",
  description:
    "The origins, weaving tradition, and color symbolism behind kente cloth — from Bonwire's looms to its place in Ghanaian and diaspora culture today.",
};

export default function UnderstandingKente() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          ["Home", "/"],
          ["Journal", "/journal"],
          ["Understanding Kente", null],
        ]}
      />
      <header className="max-w-[760px] mx-auto px-8 pt-6 pb-10">
        <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4">
          AFRICAN CULTURE
        </div>
        <h1 className="font-display text-[clamp(30px,4.5vw,46px)] leading-tight">
          Understanding Kente: Cloth, Color, and Meaning
        </h1>
      </header>

      <article className="max-w-[760px] mx-auto px-8 pb-24 text-[15.5px] leading-relaxed text-neutral-300 space-y-6">
        <p>
          If you've been to a Ghanaian wedding, a graduation, or a chief's durbar, you've seen
          kente — the brightly patterned cloth woven in narrow strips and sewn into full sheets.
          It's one of the most recognisable textiles to come out of West Africa, and one of the
          most misunderstood outside it. Here's the short version of where it comes from and what
          it actually means.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">The spider's web</h2>
        <p>
          Tradition traces kente to Bonwire, a town in Ghana's Ashanti Region still considered the
          craft's spiritual home. As the story goes, two weavers from Bonwire — often named as
          Kuragu and Ameyaw — watched a spider spinning an intricate web in the forest and set out
          to recreate its pattern in cloth. What they wove was brought to the Asante royal court
          and adopted as a fabric of the Asantehene, the Asante king — which is how kente became
          associated with royalty and status in the first place. The weaving itself likely draws
          on textile traditions among the Akan and Ewe peoples going back much further, but the
          kente we recognise today — bold colour, geometric strip-weaving — came together under
          the Asante in the 1600s.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">How it's made</h2>
        <p>
          Kente is woven on a narrow horizontal loom, producing strips only a few inches wide.
          Weavers — traditionally men — work the strips one at a time, then sew a series of them
          together side by side to build a full cloth. That construction is part of why kente
          looks the way it does: repeating geometric blocks, rather than one continuous image,
          because the design is built up strip by strip. A single high-quality cloth can represent
          weeks of work.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">What the colors mean</h2>
        <p>
          Every colour in kente carries a traditional association, though weavers and communities
          read them slightly differently:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="text-ivory">Gold</span> — royalty, wealth, status</li>
          <li><span className="text-ivory">Yellow</span> — fertility, growth</li>
          <li><span className="text-ivory">Green</span> — renewal, the harvest</li>
          <li><span className="text-ivory">Blue</span> — peace, harmony, spiritual calm</li>
          <li><span className="text-ivory">Red</span> — passion, sacrifice, political struggle</li>
          <li><span className="text-ivory">Black</span> — maturity, connection to ancestors</li>
        </ul>
        <p>
          Beyond colour, individual patterns often carry their own names and proverbs — a zigzag
          motif representing life's ups and downs, a particular block pattern tied to leadership
          or wisdom. Asking a weaver what a specific pattern is called, and what it means, is one
          of the better conversations you can have in a market in Ghana.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Ashanti and Ewe traditions</h2>
        <p>
          While Bonwire and the Asante get most of the credit in popular accounts, the Ewe people
          of Ghana's Volta Region have their own kente weaving tradition, centred around towns
          like Agotime-Kpetoe. Ewe kente tends to use a wider, more varied colour palette and
          patterns drawn from everyday life rather than exclusively royal symbolism — it was
          historically less restricted to chiefs and more widely worn. Both traditions are very
          much alive today, and it's worth seeing a loom in action in either region if your
          itinerary allows it.
        </p>

        <h2 className="font-display text-2xl text-ivory pt-4">Kente today</h2>
        <p>
          What began as a cloth reserved for kings is now worn far more broadly — at weddings,
          funerals, church services, and graduations across Ghana, and as a recognisable marker of
          African heritage in the diaspora, from graduation stoles to formalwear. If you buy kente
          in Ghana, buying directly from a weaver or a cooperative in Bonwire or the Volta Region
          — rather than a mass-produced print — is the difference between owning a piece of the
          actual craft and owning a picture of it.
        </p>

        <p className="text-neutral-500 text-sm pt-6 border-t border-neutral-800">
          Want to see the looms in person? Our cultural experience itineraries can include a stop
          in Bonwire or the Volta Region weaving towns — get in touch and we'll build it in.
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
