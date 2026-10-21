import Header from "./components/Header";
import Footer from "./components/Footer";
import LakePhoto from "./components/LakePhoto";
import BrandPhoto from "./components/BrandPhoto";
import SunStripes from "./components/SunStripes";
import Image from "next/image";
import CursorSun from "./components/CursorSun";
import { CHECKS } from "./components/content";
import { BOOKING_URL } from "./components/booking";

// Premium redesign v2 (Oct 2026), structured after the haysmac.com home page: full-height hero
// with a quick-link bar, two-tone statement, "For buyers / advisers / lenders" panel, colour-block
// link lists, founder strip and feature tiles. The logo (sun over the mere) is the imagery.
// DD only (19 Oct 2026). Quality of earnings is in scope, tested at transaction level (Lu, 21 Oct
// 2026); never a replacement for the FDD firm's report.

const AUDIENCES = [
  {
    word: "For buyers.",
    body: "Before you sign, know whether the business underneath the numbers is the one you are paying for: which customers stay, which jobs make money, how much cash it really needs.",
    link: { label: "Who we work with", href: "/who-we-work-with" },
  },
  {
    word: "For advisers.",
    body: "Bring us in as a workstream on a live deal, alongside the financial due diligence firm. We report to the buyer and work to the deal timetable.",
    link: { label: "Advisers and lenders", href: "/who-we-work-with#advisers-and-lenders" },
  },
  {
    word: "For lenders.",
    body: "Your reliance comes from the financial due diligence firm. What you want from us is the evidence underneath, and that is in the memo.",
    link: { label: "Read the FAQ", href: "/faq#what-it-is" },
  },
];

const BUYERS = [
  { label: "Independent searchers", href: "/who-we-work-with#independent-searchers" },
  { label: "Holding companies", href: "/who-we-work-with#holding-companies" },
  { label: "Family offices", href: "/who-we-work-with#family-offices" },
  { label: "Serial acquirers", href: "/who-we-work-with#serial-acquirers" },
  { label: "M&A advisers and lenders", href: "/who-we-work-with#advisers-and-lenders" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink font-dm">
      <Header current="/" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper min-h-[100svh] flex flex-col">
        {/* Lake Jasna, Slovenia: clear water, the stones visible beneath the reflection. Below the
            surface is where the work happens. Photo: Adam Vradenburg, Unsplash Licence. */}
        <Image
          src="/hero-lake.jpg"
          alt="A clear alpine lake beneath snow-capped mountains, the stones on the lake bed visible through the water"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_40%] hero-photo"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-ink)_45%,transparent)_0%,color-mix(in_srgb,var(--color-ink)_0%,transparent)_30%,color-mix(in_srgb,var(--color-ink)_15%,transparent)_55%,color-mix(in_srgb,var(--color-ink)_80%,transparent)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-ink)_55%,transparent)_0%,color-mix(in_srgb,var(--color-ink)_0%,transparent)_65%)]" />
        <div className="relative z-10 flex-1 flex items-end px-6 md:px-8 pt-40 pb-16">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-[13px] tracking-[0.28em] uppercase text-paper/80 mb-8">Operator diligence for buyers</p>
            {/* Clarity first (Lu, 21 Oct 2026); the trial-balance line is the second layer. */}
            <h1 className="display drop-shadow-[0_2px_24px_rgba(8,30,29,0.35)] text-[52px] sm:text-[72px] md:text-[84px] lg:text-[104px] max-w-[34rem] md:max-w-[40rem] lg:max-w-[52rem]">
              Before you buy, <span className="italic text-coral-soft">see it clearly.</span>
            </h1>
            <p className="mt-8 font-serif text-[22px] md:text-[28px] leading-[1.3] text-paper/90 max-w-[40rem] drop-shadow-[0_2px_16px_rgba(8,30,29,0.4)]">
              Financial due diligence stops at the trial balance.<br className="hidden sm:block" /> We start below it.
            </p>
          </div>
        </div>
        {/* Quick links (v2, Lu 21 Oct 2026: "more sophisticated"): a frosted strip on the photo -
            number, serif title, one-line note, arrow. Book a call is the one solid accent. */}
        <nav aria-label="Quick links" className="relative z-10 border-t border-paper/20 bg-ink/35 backdrop-blur-md text-paper">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", label: "What we check", note: "Six questions behind the price", href: "/operator-diligence#what-we-check" },
              { n: "02", label: "Who we work with", note: "Buyers, advisers and lenders", href: "/who-we-work-with" },
              { n: "03", label: "How it runs", note: "2-3 weeks, one fixed fee", href: "/operator-diligence#how-it-runs" },
              { n: "04", label: "Book a call", note: "30 minutes on your deal", href: BOOKING_URL, cta: true },
            ].map((q, i) => (
              <a
                key={q.label}
                href={q.href}
                {...(q.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`group relative flex items-center justify-between gap-4 px-6 md:px-8 lg:px-10 py-5 md:py-7 transition-colors duration-300 ${
                  q.cta ? "bg-mustard text-ink hover:bg-paper" : "hover:bg-paper/10"
                } ${i % 2 ? "border-l border-paper/15" : ""} ${i === 2 ? "lg:border-l lg:border-paper/15" : ""} ${i > 1 ? "border-t lg:border-t-0 border-paper/15" : ""}`}
              >
                <span className="min-w-0">
                  <span className={`block text-[11px] tracking-[0.24em] mb-2 ${q.cta ? "text-ink/60" : "text-paper/55"}`}>{q.n}</span>
                  <span className="block font-serif text-[19px] md:text-[23px] leading-tight tracking-[-0.01em] whitespace-nowrap">{q.label}</span>
                  <span className={`hidden md:block mt-1.5 text-[13px] truncate ${q.cta ? "text-ink/70" : "text-paper/65"}`}>{q.note}</span>
                </span>
                <span
                  className={`shrink-0 grid place-items-center w-9 h-9 md:w-10 md:h-10 rounded-full border text-[15px] transition-all duration-300 group-hover:translate-x-1 ${
                    q.cta ? "border-ink/30 group-hover:bg-ink group-hover:text-paper" : "border-paper/35 group-hover:bg-paper group-hover:text-ink"
                  }`}
                  aria-hidden="true"
                >
                  &rarr;
                </span>
                {/* underline that draws in on hover */}
                <span className={`absolute left-6 md:left-8 right-6 md:right-8 bottom-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${q.cta ? "bg-ink/40" : "bg-mustard"}`} />
              </a>
            ))}
          </div>
        </nav>
      </section>

      {/* Statement + story feature */}
      <section className="grid lg:grid-cols-2">
        <div className="px-6 md:px-8 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] py-24 md:py-32">
          <h2 className="font-serif text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.025em]">
            The accounts can be right and the business still not be what you are paying for.{" "}
            <span className="text-coral">Welcome to Brightmere.</span>
          </h2>
          <div className="mt-10 space-y-5 text-slate text-[17px] leading-relaxed max-w-xl">
            <p>
              Nobody has to be hiding anything. The ledger records every sale correctly. It just
              cannot tell you which customers come back, which jobs lose money, or whether the
              operation can carry the plan in the information memorandum.
            </p>
            <p>
              Before you buy a £5-50m business, we rebuild its revenue, margin, cash and capacity
              from its own orders, invoices and jobs, and show you where the data room story and
              the transactions part ways. Alongside your financial due diligence, not instead of it.
            </p>
          </div>
          <a href="/operator-diligence" className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-full bg-ink text-paper hover:bg-ink-soft transition-colors">
            Discover more <span className="text-mustard">&rarr;</span>
          </a>
        </div>
        <div className="bg-blush px-6 md:px-12 py-16 md:py-24 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-8">
            <p className="font-serif text-[26px] tracking-[-0.01em]">The story</p>
            <a href="/story" className="px-5 py-2 rounded-full border border-ink/50 text-[14px] hover:bg-ink hover:text-paper transition-colors">
              Read it <span>&rarr;</span>
            </a>
          </div>
          <a href="/story" className="relative block bg-ink text-paper chamfer group overflow-hidden aspect-[4/3]">
            <LakePhoto src="/story-ice.jpg" crop="shore" className="transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-ink)_5%,transparent)_0%,color-mix(in_srgb,var(--color-ink)_85%,transparent)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <p className="font-serif text-[30px] md:text-[40px] leading-[1.05] tracking-[-0.025em]">
                Revenue doubled. <span className="italic text-coral-soft">But the real business was sinking fast.</span>
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* For buyers / advisers / lenders */}
      <section className="relative overflow-hidden bg-ink text-paper px-6 md:px-8 py-24 md:py-32">
        <SunStripes className="sun-stripes-live absolute -right-10 bottom-0 w-[46vw] max-w-[640px] h-auto opacity-[0.08]" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-10">
            {AUDIENCES.map((a) => (
              <div key={a.word}>
                <p className="display text-[56px] md:text-[72px]">{a.word}</p>
                <p className="mt-8 text-paper/75 text-[17px] leading-relaxed max-w-sm">{a.body}</p>
                <a href={a.link.href} className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full border border-paper/60 hover:bg-paper hover:text-ink transition-colors">
                  {a.link.label} <span className="text-mustard">&rarr;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we check: mustard list, linking through */}
      <section className="px-6 md:px-8 pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto bg-mustard chamfer px-6 sm:px-12 md:px-24 py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-serif text-[44px] md:text-[64px] leading-none tracking-[-0.03em]">What we check</h2>
            <p className="text-ink/70 max-w-sm">Six questions the price depends on, answered from the target&apos;s own records.</p>
          </div>
          <CursorSun className="mt-12 border-t border-dotted border-ink/50">
            {CHECKS.map((c, i) => (
              <a key={c.q} href={`/operator-diligence#check-${i + 1}`} className="rule-dot group flex items-center justify-between gap-6 py-6">
                <span className="flex items-baseline gap-6">
                  <span className="font-serif text-[18px] text-ink/45 w-8">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-[26px] md:text-[34px] leading-[1.1] tracking-[-0.02em]">{c.q}</span>
                </span>
                <span className="text-[22px] group-hover:translate-x-1.5 transition-transform">&rarr;</span>
              </a>
            ))}
          </CursorSun>
        </div>
      </section>

      {/* Who we work with: moss list */}
      <section className="px-6 md:px-8 py-10">
        <div className="max-w-7xl mx-auto bg-moss chamfer-r px-6 sm:px-12 md:px-24 py-16 md:py-24">
          <h2 className="font-serif text-[44px] md:text-[64px] leading-none tracking-[-0.03em]">Who we work with</h2>
          <CursorSun className="mt-12 border-t border-dotted border-ink/50">
            {BUYERS.map((b) => (
              <a key={b.label} href={b.href} className="rule-dot group flex items-center justify-between gap-6 py-6">
                <span className="font-serif text-[26px] md:text-[34px] leading-[1.1] tracking-[-0.02em]">{b.label}</span>
                <span className="text-[22px] group-hover:translate-x-1.5 transition-transform">&rarr;</span>
              </a>
            ))}
          </CursorSun>
        </div>
      </section>

      {/* Founder strip */}
      <section className="px-6 md:px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <BrandPhoto src="/lu-headshot-2.jpg" alt="Lu Luo, founder of Brightmere" className="aspect-[4/5] max-w-[300px] lg:max-w-[340px]" />
          </div>
          <div className="lg:col-span-7">
            <p className="text-[13px] tracking-[0.28em] uppercase text-slate mb-6">Who leads the work</p>
            <p className="font-serif text-[34px] md:text-[50px] leading-[1.08] tracking-[-0.025em]">
              Most people who can read a P&amp;L can&apos;t pull apart millions of transaction lines.{" "}
              <span className="text-coral">Diligence below the trial balance needs both.</span>
            </p>
            <p className="mt-8 text-slate text-[17px] leading-relaxed max-w-2xl">
              Lu Luo trained in accounting and economics, started out in accounting and corporate
              finance, then spent years in data science and engineering building the systems finance
              teams report from. Lu founded Brightmere and leads every engagement from London: scoping
              it, reviewing every finding and walking you through the results.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink text-paper hover:bg-ink-soft transition-colors">
                About Brightmere <span className="text-mustard">&rarr;</span>
              </a>
              <a href="/story" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-ink/60 hover:bg-ink hover:text-paper transition-colors">
                Read the story <span className="text-coral">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature tiles, as at the foot of HaysMac pages */}
      <section className="grid md:grid-cols-2">
        {[
          { t: "Operator diligence", b: "What we check, how it runs, the fee", href: "/operator-diligence", cta: "Discover more" },
          { t: "Questions, answered", b: "Reliance, QoE, the working capital peg, data, timing", href: "/faq", cta: "Read the FAQ" },
        ].map((tile, i) => (
          <a key={tile.t} href={tile.href} className="relative block overflow-hidden bg-ink text-paper min-h-[380px] group">
            {/* Clear alpine lake, stones visible (Andrew, Unsplash Licence) / foggy path beside an
                alpine lake (Zion C, Unsplash Licence) */}
            <LakePhoto src={i === 0 ? "/tile-clear-water.jpg" : "/tile-mountain-path.jpg"} crop={i === 0 ? "below" : "shore"} className="transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-ink)_10%,transparent)_0%,color-mix(in_srgb,var(--color-ink)_85%,transparent)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
              <p className="font-serif text-[44px] md:text-[56px] leading-none tracking-[-0.03em]">{tile.t}</p>
              <p className="mt-3 text-paper/70">{tile.b}</p>
              <span className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-paper text-ink group-hover:bg-mustard transition-colors">
                {tile.cta} <span className="text-coral">&rarr;</span>
              </span>
            </div>
          </a>
        ))}
      </section>

      <Footer />
    </div>
  );
}
