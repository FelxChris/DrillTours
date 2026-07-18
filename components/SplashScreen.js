"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Mark from "./Mark";

// Standard isomorphic-effect pattern: useLayoutEffect on the client (fires
// before paint, so the splash can appear with zero flash), useEffect on the
// server (a no-op render pass, since useLayoutEffect would otherwise log a
// harmless-but-noisy warning during SSR).
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Full-screen intro splash: black background, the Drill Tours badge logo
 * animates in, then the whole screen "drains away" through an expanding
 * circular reveal centered on the logo — reading as a droplet/ripple
 * effect — uncovering the homepage underneath.
 *
 * Shows once per browser session (sessionStorage), not on every page
 * navigation, so it doesn't get in the way of someone browsing the site —
 * only the very first load feels like an entrance.
 *
 * Known tradeoff: because sessionStorage is a browser-only API, the
 * server-rendered HTML always paints first without the splash, for a
 * brief moment (typically well under 200ms on a normal connection) until
 * client JS hydrates and decides whether to show it. This is standard for
 * any sessionStorage-gated splash in a server-rendered app and is treated
 * as acceptable here — the alternative (a blocking inline script in the
 * document head) is more invasive and wasn't worth the added complexity
 * under the launch timeline. The homepage itself is fully styled at that
 * first paint (Tailwind is compiled into the HTML/CSS, not JS-dependent),
 * so what briefly shows is the real homepage, not an unstyled flash.
 */
const SESSION_KEY = "drilltours-splash-shown";
const LOGO_HOLD_MS = 1400; // how long the logo sits on screen before the wipe starts
const WIPE_DURATION_S = 0.9;

export default function SplashScreen({ children }) {
  // Defaults to "done" for both SSR output and the first client render, so
  // there is never a server/client mismatch and never a flash of the splash
  // for returning visitors. useIsomorphicLayoutEffect upgrades genuinely
  // first-time-this-session visitors to "showing" before the browser paints.
  const [phase, setPhase] = useState("done");

  useIsomorphicLayoutEffect(() => {
    let alreadyShown = true;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // sessionStorage can throw in some privacy modes — fail open (skip splash).
      alreadyShown = true;
    }

    if (alreadyShown) return; // stays "done", nothing to do

    setPhase("showing");
  }, []);

  useEffect(() => {
    if (phase !== "showing") return;
    const holdTimer = setTimeout(() => setPhase("wiping"), LOGO_HOLD_MS);
    return () => clearTimeout(holdTimer);
  }, [phase]);

  function handleWipeComplete() {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // ignore — worst case the splash shows again next load.
    }
    setPhase("done");
  }

  return (
    <>
      {children}
      <AnimatePresence>
        {(phase === "showing" || phase === "wiping") && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-ink"
            initial={{ clipPath: "circle(100% at 50% 50%)" }}
            animate={{
              clipPath:
                phase === "wiping"
                  ? "circle(0% at 50% 50%)"
                  : "circle(100% at 50% 50%)",
            }}
            transition={{ duration: WIPE_DURATION_S, ease: [0.65, 0, 0.35, 1] }}
            onAnimationComplete={() => {
              if (phase === "wiping") handleWipeComplete();
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <Mark size={180} circle animate />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
