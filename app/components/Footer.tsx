import Emblem from "./Emblem";
import { BOOKING_URL } from "./booking";

// Mega footer, after HaysMac: every page one click away, then a giant wordmark on mustard.
const COLUMNS = [
  {
    title: "What we do",
    links: [
      { label: "Operator diligence", href: "/operator-diligence" },
      { label: "What we check", href: "/operator-diligence#what-we-check" },
      { label: "How it runs", href: "/operator-diligence#how-it-runs" },
      { label: "Where it sits", href: "/operator-diligence#where-it-sits" },
      { label: "Fee", href: "/operator-diligence#fee" },
    ],
  },
  {
    title: "Who we work with",
    links: [
      { label: "Independent searchers", href: "/who-we-work-with#independent-searchers" },
      { label: "Holding companies", href: "/who-we-work-with#holding-companies" },
      { label: "Family offices", href: "/who-we-work-with#family-offices" },
      { label: "Serial acquirers", href: "/who-we-work-with#serial-acquirers" },
      { label: "Advisers and lenders", href: "/who-we-work-with#advisers-and-lenders" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Brightmere", href: "/about" },
      { label: "The story", href: "/story" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="font-dm">
      <div className="bg-ink text-paper px-6 md:px-8 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="font-serif text-[28px] tracking-[-0.02em] leading-tight">
              Looking at a business <span className="italic text-coral-soft">now?</span>
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-paper text-ink hover:bg-mustard transition-colors"
            >
              Book a call <span className="text-coral">&rarr;</span>
            </a>
            <a href="mailto:lu@brightmerehq.com" className="block mt-6 text-paper/70 hover:text-paper">
              lu@brightmerehq.com
            </a>
            <p className="mt-1 text-paper/50">London, UK</p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-3">
              <p className="font-serif text-[24px] tracking-[-0.01em] mb-5">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-paper/70 hover:text-paper transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-mustard px-6 md:px-8 pt-12 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <a href="/" aria-label="Brightmere home" className="flex items-end gap-[2vw]">
            <span className="font-serif text-ink/85 tracking-[-0.04em] leading-[0.8] text-[15vw] lg:text-[190px]">brightmere</span>
            <Emblem width={150} height={138} light />
          </a>
          <div className="mt-10 pt-5 border-t border-ink/20 flex flex-col sm:flex-row justify-between gap-2 text-[13px] text-ink/65">
            <span>&copy; 2026 Brightmere. Smart Pig Limited, trading as Brightmere.</span>
            <span>Operator diligence for buyers of £5-50m UK businesses</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
