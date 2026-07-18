import { Link } from "@/i18n/routing";

/**
 * Simple breadcrumb trail. `items` is an array of [label, href] pairs;
 * the last item renders as plain text (current page), not a link.
 *
 * Usage: <Breadcrumbs items={[["Home", "/"], ["Journal", "/journal"], ["Visa Guide 2026", null]]} />
 */
export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-[1240px] mx-auto px-8 pt-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-[12px] text-neutral-500">
        {items.map(([label, href], i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={label} className="flex items-center gap-1.5">
              {href && !isLast ? (
                <Link href={href} className="hover:text-gold transition-colors">
                  {label}
                </Link>
              ) : (
                <span className={isLast ? "text-neutral-300" : ""}>{label}</span>
              )}
              {!isLast && <span className="text-neutral-700">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
