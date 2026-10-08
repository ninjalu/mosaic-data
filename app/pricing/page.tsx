import type { Metadata } from "next";
import Wordmark from "../components/Wordmark";
import Emblem from "../components/Emblem";

export const metadata: Metadata = {
  title: "Pricing | Brightmere - Three Services, Fixed Fees",
  description:
    "What Brightmere charges, in full: diligence-ready numbers (£10,000 fixed, 3 weeks), operator diligence for buyers (£15,000 fixed per target), and numbers kept true (from £1,500 a month). No day rates, no open-ended retainers.",
};

const STAGES = [
  {
    n: "1",
    name: "Diligence-ready numbers",
    tagline: "Before someone with money looks at your numbers",
    duration: "3 weeks",
    fee: "£10,000 fixed",
    body: "For owners of £5-50m businesses about to raise, sell, refinance or take on a new facility. We rebuild the picture from your own transactions: cash proof, real margin by customer and product, working capital stripped of the flattering month, revenue concentration, and every heroic assumption named. You get a findings pack a lender's or buyer's team can test, and time to fix what they would have found. The first few days map what your data can actually support; if the honest answer is that it needs nothing, we say so and stop, and you pay for those days only.",
    chips: ["Half upfront, half on delivery", "Every finding sized in £", "Sits before the chartered report, not instead of it"],
  },
  {
    n: "2",
    name: "Operator diligence for buyers",
    tagline: "Before you rely on someone else's numbers",
    duration: "2-3 weeks",
    fee: "£15,000 fixed",
    body: "For acquirers, searchers and holding companies buying a £3-20m business, and the advisers and lenders backing them. The same transaction-level read pointed at the target: is the revenue what the data room says, which customers and jobs make money, how much cash the business really needs, and whether the operation can deliver the plan you are paying for. It runs alongside the chartered firm's financial due diligence and answers the questions that report leaves open. Scoped to a deal timetable; priced for one target.",
    chips: ["Fixed fee per target", "Capacity tested from the operational log", "Alongside the chartered FDD"],
  },
  {
    n: "3",
    name: "Numbers kept true",
    tagline: "After the event, month after month",
    duration: "Monthly, until cancelled",
    fee: "From £1,500 a month",
    body: "The rebuilt view stays live. Reconciled every month with anything that does not tie flagged, real margin and cash watched at line level, a rolling 13-week cash view, and one session a month on the numbers and the decisions in front of you. The fee is pegged to the size of the business, not to hours, and steps up only when the business does: a new entity, a new division, a second site.",
    chips: ["Reconciled monthly, exceptions flagged", "Grows with the business, not the hours", "Cancel any time"],
  },
];

const PRINCIPLES = [
  {
    title: "Priced on value found, not hours worked",
    body: "You're not buying our time; you're buying named, sized pockets of your own cash. The fee is fixed before we start, and every finding carries a pound figure you can weigh it against.",
  },
  {
    title: "The investment test",
    body: "A diagnostic that finds £200K of recoverable cash is cheap at several times its fee; one that finds nothing is expensive at any price. That's why Discovery comes first - and why we'll tell you to stop if the prize looks small.",
  },
  {
    title: "A baseline in every engagement",
    body: "Every engagement sets a measured baseline - DSO, stock days, working capital as a share of sales - so recovery is provable, not claimed. It's also what makes recovery-linked fees possible: you can only share what you can measure.",
  },
  {
    title: "What we don't do",
    body: "No day rates. No time-and-materials. No open-ended retainers that outlive their usefulness. If what you need is ongoing senior finance leadership rather than cash found and freed, a fractional CFO is the better buy - and we'll say so.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#faf7f5] text-[#1e2126]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#16181c]/90 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Emblem />
            <Wordmark dark />
          </a>
          <div className="flex items-center gap-8">
            <a
              href="/story"
              className="text-greenmuted text-[15px] hover:text-offwhite transition-colors hidden md:block"
            >
              Story
            </a>
            <a
              href="/methodology"
              className="text-greenmuted text-[15px] hover:text-offwhite transition-colors hidden md:block"
            >
              Methodology
            </a>
            <a
              href="/faq"
              className="text-greenmuted text-[15px] hover:text-offwhite transition-colors hidden md:block"
            >
              FAQ
            </a>
            <a
              href="/#contact"
              className="px-5 py-2.5 bg-gold text-[#2b1209] rounded-full font-bold text-[15px] hover:bg-gold-deep transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden bg-[linear-gradient(110deg,#16181c_0%,#1e2126_55%,#26292f_100%)]">
        <div className="absolute top-28 left-[5%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float1" />
        <div className="absolute top-44 right-[8%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float2" />
        <div className="absolute bottom-16 left-[12%] w-6 h-6 bg-[#e85d47]/35 rounded-full animate-float3" />
        <div className="absolute bottom-28 right-[6%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float1" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="flex items-center justify-center gap-2.5 text-[13px] tracking-[3px] text-greenmuted font-semibold uppercase mb-4">
            <span className="w-[9px] h-[9px] rounded-full bg-gold flex-shrink-0" />
            Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-offwhite leading-[1.1] tracking-[-1px] mb-6">
            What It Costs -{" "}
            <span className="text-[#ff7a5c] [text-shadow:0_0_26px_rgba(255,122,92,0.4)]">
              and How We Price
            </span>
          </h1>
          <p className="text-xl text-greenmuted max-w-2xl mx-auto leading-relaxed">
            Most consultancies make you sit through three calls to hear a number. Here is
            how Brightmere charges, in full: three named services, each with a fixed fee
            agreed before work starts, and every finding sized in pounds so you can weigh
            the fee against it. No day rates. No open-ended retainers.
          </p>
        </div>
      </section>

      {/* Four stages */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="flex items-center gap-2.5 text-[13px] tracking-[3px] text-[#75706c] font-semibold uppercase mb-3">
            <span className="w-[9px] h-[9px] rounded-full bg-gold flex-shrink-0" />
            The structure
          </p>
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4 pb-4 border-b-2 border-[#eae5e1]">
            Three services, each priced on its own
          </h2>
          <p className="text-[#75706c] mb-14 max-w-2xl">
            You buy one at a time, and each ends with something worth having on its own.
            The first two are fixed-fee projects on a deal clock; the third is what they
            earn into.
          </p>

          <div className="space-y-6">
            {STAGES.map((stage) => (
              <div
                key={stage.n}
                className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(30,33,38,0.06)]"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center">
                      <span className="text-[#2b1209] font-bold text-lg">{stage.n}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e2126] mb-1">{stage.name}</h3>
                    <p className="text-[#75706c] text-sm font-medium mb-3">{stage.tagline}</p>
                    <p className="text-[#75706c] leading-relaxed mb-4">{stage.body}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gold/10 rounded-full text-xs font-semibold text-[#c24a36]">
                        {stage.duration}
                      </span>
                      <span className="px-3 py-1 bg-gold/10 rounded-full text-xs font-semibold text-[#c24a36]">
                        {stage.fee}
                      </span>
                      {stage.chips.map((chip) => (
                        <span
                          key={chip}
                          className="px-3 py-1 bg-[#f3ece9] rounded-full text-xs font-medium text-[#75706c]"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="flex items-center gap-2.5 text-[13px] tracking-[3px] text-[#75706c] font-semibold uppercase mb-3">
            <span className="w-[9px] h-[9px] rounded-full bg-gold flex-shrink-0" />
            The principles
          </p>
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4 pb-4 border-b-2 border-[#eae5e1]">
            Why we price like this
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(30,33,38,0.06)]"
              >
                <h3 className="text-lg font-semibold text-[#1e2126] mb-3">{p.title}</h3>
                <p className="text-[#75706c] text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-12 left-[6%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float2" />
        <div className="absolute top-28 right-[10%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float1" />
        <div className="absolute bottom-16 left-[14%] w-6 h-6 bg-[#e85d47]/35 rounded-full animate-float3" />
        <div className="absolute bottom-28 right-[5%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float2" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-[#e85d47]/10 to-[#ff9a82]/20 border border-gold/30 rounded-[14px] p-10 md:p-14 text-center">
            <h2 className="text-3xl font-bold text-[#1e2126] mb-4">
              Want a number for your business?
            </h2>
            <p className="text-lg text-[#75706c] mb-8 max-w-xl mx-auto">
              A 30-minute call is enough to tell you whether there&apos;s cash worth going
              after and exactly what Discovery would cost. No pitch deck, no follow-up
              sequence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="px-8 py-4 bg-gold text-[#2b1209] rounded-full font-bold shadow-[0_6px_30px_rgba(232,93,71,0.3)] hover:bg-gold-deep transition-colors text-lg"
              >
                Book a call &rarr;
              </a>
              <a
                href="/faq"
                className="px-8 py-4 border-2 border-gold/55 text-green rounded-full font-semibold hover:border-gold transition-colors text-lg"
              >
                Read the FAQ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 text-center bg-[linear-gradient(110deg,#16181c_0%,#1e2126_60%,#26292f_100%)]">
        <a href="/" className="inline-block">
          <span className="flex justify-center mb-[18px]">
            <Emblem width={86} height={79} />
          </span>
          <Wordmark dark big />
        </a>
        <p className="mt-4 text-sm tracking-[5px] uppercase text-greenmuted">London, UK</p>
        <a
          href="/#contact"
          className="inline-block mt-9 px-9 py-4 bg-gold text-[#2b1209] rounded-full font-bold shadow-[0_6px_30px_rgba(232,93,71,0.3)] hover:bg-gold-deep transition-colors"
        >
          Book a call
        </a>
        <p className="mt-11 text-[13px] text-[#75706c]">
          <a href="mailto:lu@brightmerehq.com" className="hover:text-gold transition-colors">
            lu@brightmerehq.com
          </a>{" "}
          &middot; &copy; 2026 Brightmere
        </p>
      </footer>
    </div>
  );
}
