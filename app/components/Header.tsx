import Emblem from "./Emblem";
import Wordmark from "./Wordmark";

// One header for every page, so the tabs never change from page to page
// (Lu, 8 Oct 2026). `current` just marks the page you are on.
const TABS = [
  { href: "/story", label: "Story" },
  { href: "/methodology", label: "Methodology" },
  { href: "/faq", label: "FAQ" },
  { href: "/pricing", label: "Pricing" },
];

export default function Header({ current }: { current?: string }) {
  return (
    <header className="fixed top-0 w-full bg-[#16181c]/90 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <Emblem />
          <Wordmark dark />
        </a>
        <div className="flex items-center gap-8">
          {TABS.map((t) => (
            <a
              key={t.href}
              href={t.href}
              className={`text-[15px] transition-colors hidden md:block ${
                t.href === current
                  ? "text-offwhite font-semibold"
                  : "text-greenmuted hover:text-offwhite"
              }`}
            >
              {t.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="px-5 py-2.5 bg-gold text-[#2b1209] rounded-full font-bold text-[15px] hover:bg-gold-deep transition-colors"
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}
