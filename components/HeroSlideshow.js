"use client";
import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Full-bleed hero slideshow, sized to roughly the full viewport height.
 * - Auto-advances every `interval` ms.
 * - Press and hold (mouse or touch) pauses on the current slide until released.
 * - Respects prefers-reduced-motion by disabling autoplay (still swipeable/clickable).
 *
 * Images: the company's own photography (CEO-supplied), stored in /public/photos.
 * Replace any entry below by dropping a new file in /public/photos and updating
 * the `src` and `caption` here — no other code changes needed.
 */
const SLIDES = [
  { src: "/photos/volta-hotel-aerial.jpg", caption: "Volta Hotel, Akosombo — Eastern Region" },
  { src: "/photos/kwame-nkrumah-memorial-park.jpg", caption: "Kwame Nkrumah Memorial Park & Mausoleum, Accra" },
  { src: "/photos/aburi-palm-avenue.jpg", caption: "Royal Palm Avenue, Aburi Botanical Gardens" },
  { src: "/photos/wli-falls.jpg", caption: "Wli Falls — Volta Region" },
  { src: "/photos/lakeside-resort-aerial.jpg", caption: "Lakeside Resort — Volta Lake" },
  { src: "/photos/lakeside-terrace.png", caption: "Lakeside Terrace — Akosombo" },
  { src: "/photos/peacock-poolside.jpg", caption: "Resort Grounds — Ghana" },
];

const INTERVAL_MS = 5000;

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotionRef.current) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const hold = useCallback(() => setPaused(true), []);
  const release = useCallback(() => setPaused(false), []);

  return (
    <div
      className="absolute inset-0 overflow-hidden select-none"
      onMouseDown={hold}
      onMouseUp={release}
      onMouseLeave={release}
      onTouchStart={hold}
      onTouchEnd={release}
      onTouchCancel={release}
      role="group"
      aria-label="Background slideshow of Drill Tours destinations. Press and hold to pause."
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <img
            src={slide.src}
            alt={slide.caption}
            className="w-full h-full object-cover"
            draggable={false}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Brand-consistent overlay: ink wash + bottom gradient so foreground text stays legible */}
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />

      {/* Caption + manual controls, bottom-right */}
      <div className="absolute bottom-7 right-6 md:bottom-9 md:right-10 flex items-center gap-3 z-10">
        <span className="font-mono text-[10.5px] md:text-xs tracking-wide text-neutral-200 hidden sm:inline">
          {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")} —{" "}
          {SLIDES[index].caption}
          {paused && <span className="text-gold ml-2">·  HELD</span>}
        </span>
        <div className="flex gap-1.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
              className="w-6 h-[3px] transition-colors"
              style={{ background: i === index ? "#F2B705" : "rgba(250,248,243,0.3)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
