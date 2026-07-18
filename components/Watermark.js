/**
 * Small fixed watermark, bottom-right of every page. Purely decorative /
 * attribution — kept quiet (low opacity, small type) so it never competes
 * with real content or interactive elements.
 */
export default function Watermark() {
  return (
    <div
      className="fixed bottom-3 right-4 z-[60] pointer-events-none select-none"
      style={{
        fontFamily: "IBM Plex Mono, monospace",
        fontSize: 11,
        letterSpacing: "0.5px",
        color: "rgba(250,248,243,0.35)",
      }}
      aria-hidden="true"
    >
      ©S
    </div>
  );
}
