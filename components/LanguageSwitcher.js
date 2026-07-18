"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { locales } from "@/i18n/routing";

/**
 * Labels for every locale the architecture supports. Only locales actually
 * listed in i18n/routing.js's `locales` array render as options — adding a
 * label here alone doesn't enable a language, see that file's comment for
 * the full checklist.
 */
const LOCALE_LABELS = {
  en: "EN",
  fr: "FR",
  es: "ES",
  de: "DE",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function handleChange(nextLocale) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className="flex items-center gap-1 text-[12px]" role="group" aria-label="Select language">
      {locales.map((code, i) => (
        <span key={code} className="flex items-center">
          <button
            onClick={() => handleChange(code)}
            aria-current={locale === code ? "true" : undefined}
            className={`px-1.5 py-1 tracking-wide transition-colors ${
              locale === code ? "text-gold" : "text-neutral-400 hover:text-ivory"
            }`}
          >
            {LOCALE_LABELS[code] || code.toUpperCase()}
          </button>
          {i < locales.length - 1 && <span className="text-neutral-700">/</span>}
        </span>
      ))}
    </div>
  );
}
