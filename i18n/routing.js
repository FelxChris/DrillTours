import { createSharedPathnamesNavigation } from "next-intl/navigation";

/**
 * Locale configuration. Architecture supports more locales than are
 * actually translated yet — see /messages/README.md for current status.
 * Add a new locale by: 1) adding it here, 2) adding a messages/<code>.json
 * file, 3) adding it to LOCALE_LABELS in components/LanguageSwitcher.js.
 */
export const locales = ["en", "fr"];
export const defaultLocale = "en";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
