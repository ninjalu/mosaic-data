"use client";

import { useRef, useState } from "react";

// After HaysMac's star-shaped arrow that follows the cursor: over a link list, the risen sun
// (with an arrow) trails the pointer. Mouse/pen only; touch users see the normal arrows.
export default function CursorSun({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const box = useRef<HTMLDivElement>(null);
  const sun = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0, raf: 0 });

  const tick = () => {
    const p = pos.current;
    p.x += (p.tx - p.x) * 0.18;
    p.y += (p.ty - p.y) * 0.18;
    if (sun.current) sun.current.style.transform = `translate(${p.x - 56}px, ${p.y - 56}px)`;
    p.raf = Math.abs(p.tx - p.x) + Math.abs(p.ty - p.y) > 0.5 ? requestAnimationFrame(tick) : 0;
  };

  const move = (e: React.PointerEvent) => {
    if (e.pointerType === "touch" || !box.current) return;
    const r = box.current.getBoundingClientRect();
    const p = pos.current;
    p.tx = e.clientX - r.left;
    p.ty = e.clientY - r.top;
    if (!on) {
      p.x = p.tx;
      p.y = p.ty;
      setOn(true);
    }
    if (!p.raf) p.raf = requestAnimationFrame(tick);
  };

  return (
    <div
      ref={box}
      className={`relative ${on ? "md:cursor-none" : ""} ${className}`}
      onPointerMove={move}
      onPointerLeave={() => setOn(false)}
    >
      {children}
      <div
        ref={sun}
        aria-hidden="true"
        className={`hidden md:block pointer-events-none absolute left-0 top-0 w-28 h-28 z-10 transition-[opacity,scale] duration-300 ${
          on ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >
        <svg viewBox="0 0 112 112" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.18)]">
          <circle cx="56" cy="56" r="44" fill="#162d27" style={{ fill: "var(--color-ink)" }} />
          <path d="M28,62 A28,28 0 0 1 84,62 Z" fill="#e3b23c" />
          <rect x="22" y="67" width="68" height="4" rx="2" fill="#ff9a82" opacity=".8" />
          <rect x="34" y="75" width="44" height="3.5" rx="1.75" fill="#ff9a82" opacity=".45" />
          <path d="M50 50 L62 50 M57 45 L62 50 L57 55" stroke="#ffffff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
