import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ContactBlock from "../components/ContactBlock";

export const metadata: Metadata = {
  title: "Who We Work With | Brightmere",
  description:
    "Operator diligence for independent searchers, holding companies, family offices and serial acquirers buying a £5-50m UK business, and for the M&A advisers and lenders who run their diligence.",
};

// "By market" page, after HaysMac's Markets section. Buyer types come from the site's
// "Who it is for" copy; each paragraph only restates what the engagement already offers.
const MARKETS = [
  {
    id: "independent-searchers",
    name: "Independent searchers",
    bg: "bg-mustard",
    lead: "Buying one business to run yourself, often with search investors behind you.",
    body: "It is your first acquisition and you will be the one running it, so you need to know what you are stepping into, not just what the accounts say. The findings memo ranks every issue by what it does to the price, with evidence you can put in front of your investors and use across the table: the price conversation, the working capital peg, how the earn-out pays. The rebuilt dataset gives you a true starting point for your first months in charge.",
  },
  {
    id: "holding-companies",
    name: "Holding companies",
    bg: "bg-blush",
    lead: "Buying to hold, so what matters is whether it compounds.",
    body: "Cohorts, margin by customer and capacity tell you whether you are buying revenue that builds on itself or a top line refilled every quarter. The rebuilt dataset comes with the memo, so your first numbers after completion start from something true.",
  },
  {
    id: "family-offices",
    name: "Family offices",
    bg: "bg-mist",
    lead: "Patient capital, and often a lean deal team.",
    body: "We work alongside your financial due diligence firm and lawyers, report to you directly, and keep the fee fixed before we start. If the target's data cannot answer the questions, we say so in the first few days and stop.",
  },
  {
    id: "serial-acquirers",
    name: "Serial acquirers",
    bg: "bg-moss",
    lead: "You know what good looks like. You need the same read on every target.",
    body: "The same six checks, run on each target's own records in two to three weeks, so one deal compares with the next on evidence rather than on the information memorandum.",
  },
  {
    id: "advisers-and-lenders",
    name: "Advisers and lenders",
    bg: "bg-field",
    lead: "Advising or lending on a deal? Bring us in as a workstream.",
    body: "We sit alongside the financial due diligence firm, report to the buyer and work to the deal timetable. A lender that needs a report it can formally rely on will look to the financial DD firm for that. What advisers and lenders want from us is the evidence underneath, and that is in the memo, shared as the buyer directs.",
  },
];

export default function WhoWeWorkWith() {
  return (
    <div className="min-h-screen bg-paper text-ink font-dm">
      <Header current="/who-we-work-with" />
      <PageHero
        eyebrow="Who we work with"
        title="Built for buyers"
        accent="of £5-50m businesses."
        standfirst="Independent searchers, holding companies, family offices and serial acquirers buying a £5-50m UK business, and the advisers and lenders who run their diligence."
        sections={MARKETS.map((m) => ({ id: m.id, label: m.name }))}
        cta={{ label: "Key contacts", href: "#contact" }}
      />

      <section className="px-6 md:px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto space-y-8">
          {MARKETS.map((m, i) => (
            <div
              key={m.id}
              id={m.id}
              className={`${m.bg} ${i % 2 ? "chamfer-r" : "chamfer"} scroll-mt-40 px-6 sm:px-12 md:px-20 py-14 md:py-20 grid lg:grid-cols-12 gap-8`}
            >
              <div className="lg:col-span-5">
                <p className="font-serif text-[18px] text-ink/45">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 font-serif text-[40px] md:text-[56px] leading-none tracking-[-0.03em]">{m.name}</h2>
              </div>
              <div className="lg:col-span-7">
                <p className="font-serif text-[24px] md:text-[28px] leading-[1.2] tracking-[-0.015em]">{m.lead}</p>
                <p className="mt-6 text-[17px] leading-relaxed text-ink/80 max-w-2xl">{m.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper px-6 md:px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-end">
          <h2 className="lg:col-span-7 display text-[48px] md:text-[80px]">
            Where it earns its fee <span className="italic text-coral-soft">fastest.</span>
          </h2>
          <div className="lg:col-span-5">
            <p className="text-paper/80 text-[18px] leading-relaxed">
              Operationally complex targets: thousands of SKUs, customers, jobs or loads, where the
              average hides the answer. Distribution, manufacturing, logistics and services businesses
              where the operational system holds the real story.
            </p>
            <a href="/operator-diligence#what-we-check" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-paper text-ink hover:bg-mustard transition-colors">
              What we check <span className="text-coral">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <ContactBlock title="Looking at a business now?" />
      <Footer />
    </div>
  );
}
