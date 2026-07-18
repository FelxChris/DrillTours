import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import Watermark from "@/components/Watermark";
import SupportButton from "@/components/SupportButton";
import { locales } from "@/i18n/routing";
import "../globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata = {
  metadataBase: new URL("https://drilltours.com"),
  title: "Drill Tours Ltd | Exploring Africa. Creating Experiences.",
  description:
    "Premium African tourism, curated from Accra, Ghana. Heritage, wildlife, adventure, and corporate travel across the African continent.",
};

/**
 * This is the de facto root layout — `<html>` and `<body>` live here, not
 * in a separate app/layout.js. next-intl's locale-routing approach
 * requires this: the [locale] segment needs to set the `lang` attribute,
 * and Next.js only allows one set of html/body tags in the whole app, so
 * they have to live at this level rather than one above it. (See
 * next-intl GitHub issue #862 for the maintainers confirming this is
 * expected, not a workaround.)
 */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;

  if (!locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NextTopLoader color="#F2B705" height={3} showSpinner={false} shadow="0 0 10px #F2B705" />
          {children}
          <Watermark />
          <SupportButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
