import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/routing";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
  // Keep behavior deterministic — don't auto-redirect based on browser
  // language. A visitor landing on drilltours.com should see English by
  // default and switch explicitly, not be silently redirected because
  // their browser is set to French.
  localeDetection: false,
});

export const config = {
  // Match every path except: API routes, Next.js internals, static files
  // (anything with a dot, e.g. favicon.ico, robots.txt, sitemap.xml), and
  // the special metadata routes that must stay locale-free.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
