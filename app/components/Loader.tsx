"use client";

import { useEffect, useRef, useState } from "react";

// Opening sequence, after the HaysMac logo intro: the three water lines draw in, the sun
// rises over them, the wordmark appears, then the big emblem flies into the header logo while
// the panel dissolves. Once per session, skipped for reduced-motion users; click to skip.
export default function Loader() {
  const [phase, setPhase] = useState<"off" | "show" | "fly">("off");
  const mark = useRef<SVGSVGElement>(null);
  const word = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("bm-intro") === "1";
      sessionStorage.setItem("bm-intro", "1");
    } catch {}
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setPhase("show");
    const t1 = setTimeout(() => setPhase("fly"), 1800);
    const t2 = setTimeout(() => setPhase("off"), 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // fly the big emblem onto the header emblem, and the big wordmark onto the header wordmark
  useEffect(() => {
    if (phase !== "fly") return;
    const pairs: [Element | null, Element | null][] = [
      [mark.current, document.querySelector("#site-logo svg")],
      [word.current, document.querySelector("#site-logo [data-wordmark]")],
    ];
    for (const [from, to] of pairs) {
      if (!from || !to) continue;
      const a = from.getBoundingClientRect();
      const b = to.getBoundingClientRect();
      const s = b.width / a.width;
      const dx = b.left + b.width / 2 - (a.left + a.width / 2);
      const dy = b.top + b.height / 2 - (a.top + a.height / 2);
      const el = from as HTMLElement;
      el.style.animation = "none";
      el.style.opacity = "1";
      void el.offsetWidth; // commit the un-animated state so the flight transitions
      el.style.transition = "transform 900ms cubic-bezier(.7,0,.2,1)";
      el.style.transformOrigin = "center center";
      el.style.transform = `translate(${dx}px, ${dy}px) scale(${s})`;
    }
  }, [phase]);

  if (phase === "off") return null;
  return (
    <div className="fixed inset-0 z-[100] pointer-events-auto" aria-hidden="true" onClick={() => setPhase("off")}>
      <div className={`absolute inset-0 bg-ink transition-opacity duration-[900ms] ease-in ${phase === "fly" ? "opacity-0" : "opacity-100"}`} />
      <div className="relative h-full flex items-center justify-center">
        <div className="flex flex-col items-center">
          <svg ref={mark} viewBox="0 0 130 120" className="w-[min(46vw,300px)] h-auto overflow-visible">
            <clipPath id="loaderSky">
              <rect x="0" y="0" width="130" height="66" />
            </clipPath>
            <g clipPath="url(#loaderSky)">
              <path d="M20,62 A45,45 0 0 1 110,62 Z" fill="#e3b23c" className="loader-sun" />
            </g>
            <rect x="8" y="70" width="114" height="7" rx="3.5" fill="#ff9a82" opacity=".7" className="loader-line" style={{ animationDelay: "0ms" }} />
            <rect x="24" y="84" width="82" height="6" rx="3" fill="#ff9a82" opacity=".4" className="loader-line" style={{ animationDelay: "120ms" }} />
            <rect x="40" y="97" width="50" height="5" rx="2.5" fill="#ff9a82" opacity=".22" className="loader-line" style={{ animationDelay: "240ms" }} />
          </svg>
          <span
            ref={word}
            className="loader-word mt-6 font-serif text-paper text-[clamp(40px,7vw,84px)] tracking-[-0.03em] leading-none whitespace-nowrap"
          >
            brightmere
          </span>
        </div>
      </div>
    </div>
  );
}
