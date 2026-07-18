"use client";
import { useState } from "react";

const SUPPORT_WHATSAPP_NUMBER = "233246361258";

/**
 * Floating customer-service button, fixed bottom-left so it never collides
 * with the watermark (bottom-right). Expands to a small card on click with
 * a one-line prompt and a direct WhatsApp link — kept lightweight rather
 * than a full chat widget, since WhatsApp is already the team's real
 * support channel.
 */
export default function SupportButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 left-5 z-[90]">
      {open && (
        <div className="absolute bottom-[60px] left-0 w-64 bg-ink border border-neutral-700 shadow-xl p-5 mb-2">
          <p className="text-sm text-ivory leading-relaxed mb-4">
            Need help planning your trip? Chat with us directly on WhatsApp.
          </p>
          <a
            href={`https://wa.me/${SUPPORT_WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi Drill Tours, I have a question."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full border border-gold text-gold px-4 py-2.5 text-xs uppercase tracking-widest hover:bg-gold hover:text-ink transition-colors"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close customer service menu" : "Open customer service menu"}
        className="w-14 h-14 rounded-full bg-gold text-ink flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        {open ? (
          <span className="text-xl leading-none">×</span>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              stroke="#0F0F0F"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
