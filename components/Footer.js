import { Link } from "@/i18n/routing";
import Mark from "./Mark";
import Wordmark from "./Wordmark";

const SOCIAL_LINKS = {
  Instagram: "https://www.instagram.com/cliffdrills/",
  TripAdvisor: "https://www.tripadvisor.com/Search?q=DrillTours+Ghana",
  WhatsApp: "https://wa.me/233246361258",
};

const EXPLORE = [
  ["Destinations", "/destinations"],
  ["Tour Packages", "/packages"],
  ["Gallery", "/gallery"],
  ["Reserve", "/reserve"],
];

const COMPANY = [
  ["About Us", "/about"],
  ["Corporate Travel", "/#corporate"],
  ["Journal", "/journal"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 pt-16 pb-9">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Mark size={28} />
              <Wordmark size={18} />
            </Link>
            <p className="text-[13px] text-neutral-400 leading-relaxed max-w-[280px]">
              Exploring Africa. Creating Experiences. A Ghana-based tourism house serving
              travelers, institutions, and governments across the continent.
            </p>
          </div>

          <FooterColumn title="Explore" items={EXPLORE} />
          <FooterColumn title="Company" items={COMPANY} />
          <FooterColumn
            title="Connect"
            items={Object.entries(SOCIAL_LINKS)}
            external
          />
        </div>

        <div className="cdt-rule my-10" />

        <div className="flex justify-between text-[11.5px] text-neutral-500 flex-wrap gap-2.5">
          <div className="flex flex-wrap gap-x-5 gap-y-1.5">
            <span>© 2026 Drill Tours Ltd. All rights reserved.</span>
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
          <span>26 Lolite Street, Spintex, Accra, Ghana</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items, external = false }) {
  return (
    <div>
      <div className="cdt-label">{title}</div>
      {items.map(([label, href]) =>
        external ? (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[13.5px] text-neutral-300 my-2.5 hover:text-gold transition-colors"
          >
            {label}
          </a>
        ) : (
          <Link
            key={label}
            href={href}
            className="block text-[13.5px] text-neutral-300 my-2.5 hover:text-gold transition-colors"
          >
            {label}
          </Link>
        )
      )}
    </div>
  );
}
