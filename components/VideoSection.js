"use client";
import { useState } from "react";

const VIDEO_ID = "8Ov569YyOxM";
const CHANNEL_URL = "https://www.youtube.com/@DrillTours";

/**
 * YouTube embed for the Drill Tours resort short.
 * Uses a click-to-load pattern (poster image first, loads iframe on click)
 * so the page doesn't pay the iframe's JS cost on initial load.
 */
export default function VideoSection() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="py-24 bg-[#151515] border-t border-b border-neutral-900">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-14 items-center">

          {/* Text */}
          <div>
            <div className="font-mono text-[11px] tracking-[2px] text-gold mb-4">
              DRILL TOURS — IN THE FIELD
            </div>
            <h2 className="font-display text-[clamp(28px,3.6vw,40px)] leading-tight mb-5">
              See what a Drill Tours experience actually looks like.
            </h2>
            <p className="text-[15px] leading-relaxed text-neutral-400 mb-8">
              A brief look at one of Ghana&rsquo;s finest resort destinations, filmed by
              our team on a recent tour. This is what we mean by curated, on-the-ground
              experience.
            </p>
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-neutral-700 text-neutral-300 px-6 py-3 text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-colors"
            >
              <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
                <path d="M15.67 1.88A2.01 2.01 0 0 0 14.26.45C13.02.1 8 .1 8 .1S2.98.1 1.74.45A2.01 2.01 0 0 0 .33 1.88C0 3.13 0 5.7 0 5.7s0 2.57.33 3.82a2.01 2.01 0 0 0 1.41 1.43C2.98 11.3 8 11.3 8 11.3s5.02 0 6.26-.35a2.01 2.01 0 0 0 1.41-1.43C16 8.27 16 5.7 16 5.7s0-2.57-.33-3.82zM6.4 8.1V3.3l4.17 2.4L6.4 8.1z"/>
              </svg>
              More on YouTube
            </a>
          </div>

          {/* Video */}
          <div
            className="relative w-full overflow-hidden bg-neutral-900 cursor-pointer"
            style={{ aspectRatio: "9/16", maxHeight: 520, maxWidth: 293, margin: "0 auto" }}
            onClick={() => setLoaded(true)}
          >
            {!loaded ? (
              <>
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                  alt="Drill Tours resort tour — click to play"
                  className="w-full h-full object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-ink/30">
                  <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-xl">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="#0F0F0F">
                      <path d="M4 2l14 8-14 8z" />
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title="Drill Tours — Ghana Resort Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
