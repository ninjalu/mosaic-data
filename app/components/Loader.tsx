"use client";

import { useEffect, useState } from "react";
import { MARK_BANDS, MARK_GOLD } from "./Emblem";

// Opening sequence (Lu, 21 Oct 2026): fog clearing off the lake. The page sits behind a soft
// mist with the mark and wordmark in it; the fog banks drift apart, the blur melts away and the
// page comes through clear. Once per session, skipped for reduced-motion users; click to skip.
const BANKS = [
  { x: "-10%", y: "8%", w: "75%", h: "55%", dir: -1, d: 0 },
  { x: "35%", y: "-5%", w: "80%", h: "60%", dir: 1, d: 80 },
  { x: "-15%", y: "45%", w: "85%", h: "60%", dir: -1, d: 160 },
  { x: "40%", y: "50%", w: "75%", h: "55%", dir: 1, d: 40 },
];

export default function Loader() {
  const [phase, setPhase] = useState<"off" | "fog" | "clear">("off");

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("bm-intro") === "1";
      sessionStorage.setItem("bm-intro", "1");
    } catch {}
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setPhase("fog");
    const t1 = setTimeout(() => setPhase("clear"), 1500);
    const t2 = setTimeout(() => setPhase("off"), 3300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "off") return null;
  const clear = phase === "clear";
  return (
    <div className="fixed inset-0 z-[100] overflow-hidden" aria-hidden="true" onClick={() => setPhase("off")}>
      {/* the mist itself: frosts the page, then melts away */}
      <div
        className="absolute inset-0 transition-[backdrop-filter,-webkit-backdrop-filter,background-color] duration-[1700ms] ease-out"
        style={{
          backdropFilter: clear ? "blur(0px)" : "blur(12px)",
          WebkitBackdropFilter: clear ? "blur(0px)" : "blur(12px)",
          backgroundColor: clear ? "rgba(236,240,236,0)" : "rgba(236,240,236,0.5)",
        }}
      />
      {/* fog banks drifting apart */}
      {BANKS.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full transition-[transform,opacity] duration-[1800ms] ease-out"
          style={{
            left: b.x,
            top: b.y,
            width: b.w,
            height: b.h,
            background: "radial-gradient(closest-side, rgba(255,255,255,0.8), rgba(255,255,255,0.35) 55%, rgba(255,255,255,0))",
            filter: "blur(30px)",
            transform: clear ? `translateX(${b.dir * 45}%) scale(1.15)` : "translateX(0) scale(1)",
            opacity: clear ? 0 : 1,
            transitionDelay: `${b.d}ms`,
          }}
        />
      ))}
      {/* the mark and wordmark, seen through the mist */}
      <div className="relative h-full flex items-center justify-center">
        <div
          className={`flex flex-col items-center transition-[opacity,filter,transform] duration-700 ease-out ${
            clear ? "opacity-0 blur-sm -translate-y-2" : "loader-word"
          }`}
        >
          <svg viewBox="18 18 84 84" className="w-[min(22vw,120px)] h-auto">
            {MARK_BANDS.map((d) => (
              <path key={d} d={d} fill={MARK_GOLD} />
            ))}
          </svg>
          <span className="mt-5 font-serif text-ink text-[clamp(40px,7vw,80px)] tracking-[-0.03em] leading-none whitespace-nowrap">
            brightmere
          </span>
        </div>
      </div>
    </div>
  );
}
