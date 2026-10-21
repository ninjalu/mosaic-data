import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import BrandPhoto from "../components/BrandPhoto";
import ContactBlock from "../components/ContactBlock";
import { CHECKS, STEPS, DELIVERABLES, TERMS, COMPARISON } from "../components/content";

export const metadata: Metadata = {
  title: "Operator Diligence | Brightmere",
  description:
    "Financial due diligence stops at the trial balance. Operator diligence starts below it: the target's revenue, margin, cash and capacity rebuilt from its own orders, invoices and jobs. 2-3 weeks, £15,000 fixed per target.",
};

// Service page, structured after HaysMac's service pages (Deal Advisory): hero + standfirst,
// sticky in-page menu, intro beside a feature panel, "how we can help" card beside an
// accordion, a centred "why" statement, timeline, comparison, fee, key contacts.
const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "what-we-check", label: "What we check" },
  { id: "why", label: "Why Brightmere" },
  { id: "how-it-runs", label: "How it runs" },
  { id: "where-it-sits", label: "Where it sits" },
  { id: "fee", label: "Fee" },
];

export default function OperatorDiligence() {
  return (
    <div className="min-h-screen bg-paper text-ink font-dm">
      <Header current="/operator-diligence" />
      <PageHero
        eyebrow="What we do"
        title="Operator diligence"
        standfirst="Before you buy a £5-50m business, we rebuild its revenue, margin, cash and capacity from its own orders, invoices and jobs, and show you where the data room story and the transactions part ways."
        sections={SECTIONS}
        cta={{ label: "Key contacts", href: "#contact" }}
      />

      {/* Overview */}
      <section id="overview" className="grid lg:grid-cols-2 scroll-mt-36">
        <div className="px-6 md:px-8 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] py-24 md:py-28">
          <h2 className="font-serif text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.025em]">
            Alongside your financial due diligence, <span className="text-coral">not instead of it.</span>
          </h2>
          <div className="mt-10 space-y-5 text-slate text-[17px] leading-relaxed max-w-xl">
            <p>
              Financial due diligence tests the ledger: earnings adjustments, net debt, normalised
              working capital, worked from the trial balance and management accounts. Essential,
              and your lender will insist on it. It stops there.
            </p>
            <p>
              The deal is decided below it. Retention, real margin, cash needs and capacity live in
              the order book, the job sheets, the TMS and the ERP. Few diligence teams open them, and
              rarely at a price that suits a £5-50m deal.
            </p>
            <p className="text-ink">
              We read that layer, transaction by transaction, tied back to the ledger so the totals
              agree. Then we show you where the detail does not, and what it is worth.
            </p>
          </div>
        </div>
        <div className="bg-mist px-6 md:px-12 py-16 md:py-24 flex flex-col justify-center">
          <div className="bg-ink text-paper chamfer p-10 md:p-14">
            <p className="text-[12px] tracking-[0.22em] uppercase text-mustard">The engagement</p>
            <p className="mt-6 display text-[64px] md:text-[88px]">£15,000</p>
            <p className="mt-3 font-serif italic text-[22px] text-paper/80">fixed per target, 2-3 weeks</p>
            <p className="mt-8 text-paper/70 leading-relaxed">Every finding sized in pounds, ranked by what it does to the price, and traced to the rows it came from.</p>
            <a href="#fee" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-paper text-ink hover:bg-mustard transition-colors">
              What you get <span className="text-coral">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* What we check: card + accordion */}
      <section id="what-we-check" className="px-6 md:px-8 py-24 md:py-32 scroll-mt-36">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="bg-field chamfer-r p-8 lg:sticky lg:top-40">
              <h2 className="font-serif text-[30px] tracking-[-0.02em]">Six questions the price depends on</h2>
              <p className="mt-5 text-slate leading-relaxed">
                Each one answered from the target&apos;s own records, line by line, at a resolution a
                spreadsheet cannot reach.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-ink text-paper hover:bg-ink-soft transition-colors">
                Contact us <span className="text-mustard">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-8 border-t border-dotted border-ink/50">
            {CHECKS.map((c, i) => (
              <details key={c.q} id={`check-${i + 1}`} className="rule-dot group scroll-mt-40" open={i === 0}>
                <summary className="py-7 flex items-start justify-between gap-6 cursor-pointer">
                  <span className="font-serif text-[28px] md:text-[38px] leading-[1.08] tracking-[-0.02em] group-hover:text-coral transition-colors">{c.q}</span>
                  <span className="faq-plus text-[32px] font-light leading-none mt-1 transition-transform">+</span>
                </summary>
                <div className="pb-9 grid md:grid-cols-2 gap-8 max-w-3xl">
                  <div>
                    <p className="text-[12px] tracking-[0.22em] uppercase text-slate mb-2">How we answer it</p>
                    <p className="text-[17px] leading-relaxed">{c.how}</p>
                  </div>
                  <div>
                    <p className="text-[12px] tracking-[0.22em] uppercase text-slate mb-2">Why it matters to the price</p>
                    <p className="text-[17px] leading-relaxed">{c.why}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Why: centred statement */}
      <section id="why" className="px-6 md:px-8 pb-24 md:pb-32 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <h2 className="display text-center text-[48px] md:text-[96px] max-w-6xl mx-auto">
            Why operator diligence with <span className="italic text-coral">Brightmere?</span>
          </h2>
          <div className="mt-20 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:col-start-1 space-y-10">
              {[
                { t: "Both records, read by one person", b: "Most people who can read a P&L can't pull apart millions of transaction lines, and most who can pull them apart can't read the P&L. Diligence below the trial balance needs both, in the same head." },
                { t: "Priced for a £5-50m deal", b: "Transaction-level diligence has usually been a large-deal luxury. Fixed at £15,000 per target, it fits the deals where an average hides the most." },
                { t: "Built to fit inside exclusivity", b: "A sharp answer before you sign beats a perfect one after the price is agreed. Two to three weeks from receiving the data." },
              ].map((w) => (
                <div key={w.t} className="pt-6 border-t border-ink/20">
                  <h3 className="font-serif text-[28px] tracking-[-0.015em]">{w.t}</h3>
                  <p className="mt-3 text-slate text-[17px] leading-relaxed">{w.b}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <BrandPhoto src="/lu.jpg" alt="Lu Luo, founder of Brightmere" className="aspect-[4/5]" />
            </div>
          </div>
        </div>
      </section>

      {/* How it runs */}
      <section id="how-it-runs" className="px-6 md:px-8 scroll-mt-36">
        <div className="max-w-7xl mx-auto bg-blush chamfer px-6 sm:px-12 md:px-24 py-20 md:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-[44px] md:text-[60px] leading-none tracking-[-0.03em]">How it runs</h2>
            <p className="mt-6 text-lg text-ink/75">A sharp answer before you sign beats a perfect one after the price is agreed.</p>
          </div>
          <div className="lg:col-span-8 border-t border-dotted border-ink/50">
            {STEPS.map((s) => (
              <div key={s.when} className="rule-dot py-7 grid sm:grid-cols-12 gap-3 sm:gap-8">
                <p className="sm:col-span-3 font-serif text-[26px] tracking-[-0.01em]">{s.when}</p>
                <p className="sm:col-span-9 text-[17px] leading-relaxed">{s.what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where it sits */}
      <section id="where-it-sits" className="px-6 md:px-8 py-24 md:py-32 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-[34px] md:text-[54px] leading-[1.08] tracking-[-0.025em] max-w-4xl">
            Where it sits in your diligence.{" "}
            <span className="text-coral">A complement to the reports you already commission.</span>
          </h2>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {COMPARISON.map((col) => (
              <div key={col.name} className={`p-8 md:p-10 ${col.hl ? "bg-ink text-paper chamfer-r" : "border-t border-ink/25"}`}>
                <p className={`text-[12px] tracking-[0.22em] uppercase mb-3 ${col.hl ? "text-mustard" : "text-slate"}`}>{col.by}</p>
                <h3 className="font-serif text-[32px] leading-none tracking-[-0.02em] mb-8">{col.name}</h3>
                <p className={`text-[12px] tracking-[0.22em] uppercase mb-2 ${col.hl ? "text-paper/55" : "text-slate"}`}>Works from</p>
                <p className={`mb-6 leading-relaxed ${col.hl ? "text-paper/90" : "text-slate"}`}>{col.from}</p>
                <p className={`text-[12px] tracking-[0.22em] uppercase mb-2 ${col.hl ? "text-paper/55" : "text-slate"}`}>Answers</p>
                <p className={`font-serif text-[22px] leading-snug ${col.hl ? "text-coral-soft" : "text-ink"}`}>{col.answers}</p>
              </div>
            ))}
          </div>
          <p className="text-slate text-[15px] mt-10 max-w-3xl leading-relaxed">
            Quality of earnings is part of the work: we test the earnings against the transactions
            behind them, line by line. Our report is addressed to you. If your lender needs a report
            it can formally rely on, that is the financial due diligence firm&apos;s, and we work
            alongside them.
          </p>
        </div>
      </section>

      {/* Fee */}
      <section id="fee" className="px-6 md:px-8 scroll-mt-36">
        <div className="max-w-7xl mx-auto bg-moss chamfer-r px-6 sm:px-12 md:px-24 py-20 md:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[13px] tracking-[0.28em] uppercase text-ink/60 mb-6">The engagement</p>
            <h2 className="font-serif text-[44px] md:text-[60px] leading-none tracking-[-0.03em]">£15,000 fixed per target</h2>
            <p className="mt-5 font-serif italic text-[22px] text-ink/80">Two to three weeks from receiving the data</p>
            <div className="flex flex-wrap gap-2 mt-10">
              {TERMS.map((t) => (
                <span key={t} className="px-4 py-1.5 rounded-full border border-ink/40 text-[13px]">{t}</span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[13px] tracking-[0.28em] uppercase text-ink/60 mb-4">What you get</p>
            <ul className="border-t border-dotted border-ink/50">
              {DELIVERABLES.map((d) => (
                <li key={d} className="rule-dot py-5 flex items-start justify-between gap-6 text-[17px]">
                  <span>{d}</span>
                  <span className="mt-0.5">&rarr;</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-ink/75 leading-relaxed">
              It earns its fee fastest in operationally complex targets: thousands of SKUs,
              customers, jobs or loads, where the average hides the answer.
            </p>
          </div>
        </div>
      </section>

      <ContactBlock title="Talk about a live deal" />
      <Footer />
    </div>
  );
}
