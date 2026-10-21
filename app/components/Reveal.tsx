"use client";

import { useEffect } from "react";

// Scroll reveals: headings rise in, colour blocks wipe open from their clipped corner, list rows
// stagger in. Only runs with JS and without reduced motion; content is visible otherwise.
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("reveal-on");
    const targets = document.querySelectorAll("section h2, section .chamfer, section .chamfer-r, section .rule-dot, [data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    targets.forEach((t, i) => {
      const el = t as HTMLElement;
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("is-in");
        return;
      }
      if (el.classList.contains("rule-dot")) el.style.transitionDelay = `${(i % 6) * 60}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
