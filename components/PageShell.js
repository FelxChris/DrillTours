import Nav from "./Nav";
import Footer from "./Footer";

/**
 * Shared wrapper for every page except the homepage (which has its own
 * SplashScreen-wrapped layout in app/page.js). Keeps Nav + Footer
 * consistent across /about, /destinations, /packages, /gallery, /reserve,
 * /contact without repeating the same three lines on every page.
 *
 * `pad` controls whether the standard top padding (to clear the fixed
 * nav bar) is applied — leave it on unless the page builds its own
 * full-bleed hero that handles that spacing itself.
 */
export default function PageShell({ children, pad = true }) {
  return (
    <div className="bg-ink text-ivory overflow-x-hidden min-h-screen flex flex-col">
      <Nav />
      <main className={`flex-1 ${pad ? "pt-[140px]" : ""}`}>{children}</main>
      <Footer />
    </div>
  );
}
