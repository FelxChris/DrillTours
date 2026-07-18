import { Link } from "@/i18n/routing";
import Mark from "./Mark";
import HeroSlideshow from "./HeroSlideshow";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative min-h-screen flex items-end border-b border-neutral-900 overflow-hidden pt-[140px] pb-20"
    >
      <HeroSlideshow />

      <div className="relative z-[1] w-full max-w-[1240px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-14 items-end">
        <div>
          <div className="font-mono text-xs tracking-[3px] text-gold mb-7">
            ACCRA, GHANA — WEST AFRICA
          </div>
          <h1 className="font-display font-normal leading-[1.04] tracking-tight text-[clamp(40px,7vw,84px)]">
            Discover Africa,
            <br />
            <span className="italic text-gold font-light">beyond the ordinary.</span>
          </h1>
          <p className="mt-7 text-[17px] leading-relaxed text-neutral-300 max-w-[480px]">
            Culture, history, wildlife, and landscape — curated across the continent by a team
            that calls it home. Drill Tours builds journeys with the precision of a private
            office and the warmth of a host who knows the ground.
          </p>
          <div className="flex gap-4 mt-10 flex-wrap">
            <Link
              href="/packages"
              className="inline-flex items-center border border-gold text-gold px-7 py-3.5 text-xs uppercase tracking-widest hover:bg-gold hover:text-ink transition-colors"
            >
              Explore Tours
            </Link>
            <Link
              href="/reserve"
              className="inline-flex items-center border border-ivory text-ivory px-7 py-3.5 text-xs uppercase tracking-widest hover:bg-ivory hover:text-ink transition-colors"
            >
              Make Reservation
            </Link>
          </div>
        </div>

        <div className="border-t md:border-t-0 md:border-l border-neutral-800 pt-7 md:pt-0 md:pl-9 mt-3 md:mt-0">
          <Mark size={56} animate />
          <div className="mt-5 font-mono text-xs text-neutral-400 leading-[1.9]">
            05.60°N, 0.19°W
            <br />
            <span className="text-gold">54</span> COUNTRIES
            <br />
            <span className="text-gold">1</span> CONTINENT
            <br />
            <span className="text-gold">EST.</span> ACCRA
          </div>
        </div>
      </div>
    </header>
  );
}
