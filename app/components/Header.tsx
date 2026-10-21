"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { NAV } from "./content";

// One header for every page, so the tabs never change from page to page
// (Lu, 8 Oct 2026). `current` marks the section you are in.
// Premium redesign (Oct 2026), after HaysMac: transparent over the dark hero, solid ink once
// you scroll, hover dropdowns on desktop and a full-screen menu on mobile.
export default function Header({ current }: { current?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
    <header
      className={`fixed top-0 w-full z-50 font-dm transition-colors duration-300 ${
        scrolled || open ? "bg-ink/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <a id="site-logo" href="/" aria-label="Brightmere home" onClick={() => setOpen(false)}>
          <Logo onDark size={26} />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className={`px-4 py-2 text-[15px] transition-colors ${
                  current === item.href ? "text-paper" : "text-paper/70 hover:text-paper"
                }`}
              >
                {item.label}
              </a>
              {item.children && (
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity">
                  <div className="min-w-[240px] bg-paper text-ink chamfer-sm py-3 shadow-[0_20px_40px_color-mix(in_srgb,var(--color-ink)_25%,transparent)]">
                    {item.children.map((c) => (
                      <a key={c.href} href={c.href} className="flex items-center justify-between gap-6 px-5 py-2.5 text-[15px] hover:bg-mustard/40">
                        {c.label}
                        <span className="text-coral">&rarr;</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-paper/10 border border-paper/30 text-paper text-[15px] hover:bg-paper hover:text-ink transition-colors whitespace-nowrap"
          >
            Contact <span className="text-mustard">&rarr;</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-paper/10 border border-paper/30 text-paper text-[15px]"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? "Close" : "Menu"} <span className="text-mustard">{open ? "×" : "→"}</span>
          </button>
        </div>
      </div>

    </header>
      {open && (
        <div id="mobile-menu" className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-50 bg-ink overflow-y-auto px-6 pb-12">
          {NAV.map((item) => (
            <div key={item.label} className="rule-dot-light py-5">
              <a href={item.href} onClick={() => setOpen(false)} className="font-serif text-paper text-[34px] tracking-[-0.02em]">
                {item.label}
              </a>
              {item.children && (
                <div className="mt-3 flex flex-col gap-2">
                  {item.children.slice(1).map((c) => (
                    <a key={c.href} href={c.href} onClick={() => setOpen(false)} className="text-paper/70 text-[16px]">
                      {c.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="/contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-paper text-ink">
            Contact <span className="text-coral">&rarr;</span>
          </a>
        </div>
      )}
    </>
  );
}
