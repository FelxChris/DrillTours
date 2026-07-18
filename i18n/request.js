import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  // Validate the incoming locale parameter (the [locale] URL segment) —
  // if someone hits a nonsense locale like /xx/about, 404 rather than
  // silently falling back, since the middleware should already have
  // redirected anything invalid before this runs.
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
