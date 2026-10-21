import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import BrandPhoto from "../components/BrandPhoto";
import ContactBlock from "../components/ContactBlock";

export const metadata: Metadata = {
  title: "The Story | Brightmere - Why Diligence Has to Go Below the Ledger",
  description:
    "Why Brightmere exists: a fast-growing business preparing for investment, a growth chart everyone trusted, and a cohort table nobody had run. The headline was true; the business underneath it was different. A review of the ledger would have confirmed it; the price would still have been wrong. That is the gap operator diligence closes before a buyer signs.",
};

// The founding story. Anonymised on purpose: the company is not named and the
// figures are kept generic (Lu, 7-8 Oct 2026). The point is the mechanism, not the firm.
const SAW = {
  finance: [
    "Revenue more than doubling year on year",
    "A growing customer count on every board slide",
    "The deck, the accounts and the forecast all telling the same story",
  ],
  transactions: [
    "Most of the growth came from customers acquired that quarter",
    "Cohort by cohort, most of them did not come back",
    "The curve was being refilled from the top, not compounding from the base",
  ],
};

const ROOM = [
  {
    label: "What the buyer is shown",
    body: "Revenue more than doubling, a rising customer count, a forecast that extends the curve. A multiple priced on growth.",
    hl: false,
  },
  {
    label: "What financial DD confirms",
    body: "The revenue is real, recognised properly and backed by cash. All true. The work is done from the ledger, so that is where it stops.",
    hl: false,
  },
  {
    label: "What the transactions show",
    body: "Most of the growth is customers who arrived that quarter, and most of them never come back. The buyer is not paying for a compounding asset. They are paying for a treadmill they will have to keep funding.",
    hl: true,
  },
];

const WHY = [
  {
    t: "It isn't an accounting error",
    b: "So a review of the accounts won't catch it. Every number is right. The problem is what the numbers average away.",
  },
  {
    t: "It only shows when two records meet",
    b: "The ledger knows how much was sold. The operational system knows who bought, what it cost to serve them and whether they came back. The answer lives in the join, below the trial balance.",
  },
  {
    t: "It goes straight to the price",
    b: "A multiple is a bet on durability. Durability lives in cohorts, margin by customer and the capacity to deliver the plan, not in the headline.",
  },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-paper text-ink font-dm">
      <Header current="/story" />
      <PageHero
        image="/story-ice.jpg"
        eyebrow="The story"
        title="Revenue doubled."
        accent="But the real business was sinking fast."
        standfirst="The financials were correct and every sale was booked properly. Underneath, most of the customers behind that growth never came back, and the base was shrinking every quarter. A review of the ledger would have passed it. A buyer would have paid for it."
        sections={[
          { id: "setting", label: "The setting" },
          { id: "two-records", label: "Two records" },
          { id: "buyer", label: "Put a buyer in the room" },
          { id: "why", label: "Why it belongs in diligence" },
          { id: "lesson", label: "Why I built Brightmere" },
        ]}
      />

      {/* The setting */}
      <section id="setting" className="px-6 md:px-8 py-24 md:py-32 scroll-mt-36">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-[13px] tracking-[0.28em] uppercase text-slate mb-5">Early 2025</p>
            <h2 className="font-serif text-[44px] md:text-[60px] leading-none tracking-[-0.03em]">The setting</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-[19px] leading-relaxed text-slate">
            <p>
              I was the data scientist at a fast-growing B2B commerce platform, connecting
              consumer-goods brands to tens of thousands of small retailers, and preparing for
              investment. Revenue had more than doubled year on year. The deck, the accounts and
              the forecast all said the same thing, because they were built from the same numbers.
            </p>
            <p className="font-serif text-[26px] md:text-[30px] leading-[1.25] text-ink">
              My job was to find commercial signal in the platform&apos;s transactions. The first
              thing I did was the thing nobody had done: <span className="text-coral">I ran the cohorts.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Two records */}
      <section id="two-records" className="px-6 md:px-8 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-[40px] md:text-[64px] leading-none tracking-[-0.03em]">Two records of the same business</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { k: "What finance saw", t: "Growth", items: SAW.finance, cls: "bg-mist chamfer" },
              { k: "What the transactions said", t: "Churn", items: SAW.transactions, cls: "bg-ink text-paper chamfer-r" },
            ].map((col) => (
              <div key={col.t} className={`${col.cls} p-8 md:p-12`}>
                <p className="text-[12px] tracking-[0.22em] uppercase opacity-60">{col.k}</p>
                <p className="mt-4 display text-[64px] md:text-[88px]">{col.t}</p>
                <ul className="mt-8">
                  {col.items.map((item) => (
                    <li key={item} className={`py-4 text-[17px] ${col.t === "Churn" ? "rule-dot-light" : "rule-dot"}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-16 text-center display text-[40px] md:text-[72px] max-w-5xl mx-auto">
            &ldquo;The headline was true. <span className="italic text-coral">The business underneath it was different.</span>&rdquo;
          </p>
        </div>
      </section>

      {/* Put a buyer in the room */}
      <section id="buyer" className="px-6 md:px-8 py-24 md:py-32 scroll-mt-36">
        <div className="max-w-7xl mx-auto bg-blush chamfer px-6 sm:px-12 md:px-20 py-16 md:py-24">
          <p className="text-[13px] tracking-[0.28em] uppercase text-ink/60 mb-5">Now put a buyer in the room</p>
          <h2 className="font-serif text-[38px] md:text-[60px] leading-[1.02] tracking-[-0.03em] max-w-5xl">
            The ledger would have passed. <span className="text-coral">The price would have been wrong.</span>
          </h2>
          <p className="mt-6 text-[18px] text-ink/75 max-w-2xl">
            Nobody had hidden anything. Every sale was invoiced, paid and booked correctly. So
            picture the same business in a data room.
          </p>
          <div className="mt-12 border-t border-dotted border-ink/50">
            {ROOM.map((c) => (
              <div key={c.label} className="rule-dot py-7 grid md:grid-cols-12 gap-4">
                <p className={`md:col-span-4 font-serif text-[26px] tracking-[-0.015em] ${c.hl ? "text-coral" : ""}`}>{c.label}</p>
                <p className={`md:col-span-8 text-[17px] leading-relaxed ${c.hl ? "text-ink" : "text-ink/75"}`}>{c.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8 text-[17px] leading-relaxed text-ink/85">
            <p>
              That one table changes the deal. The multiple, because durable revenue and
              rented revenue are not worth the same. The earn-out, which should pay on customers
              retained, not on total sales. The model, which needs a line for what it costs to
              replace the customers who leave. And the first hundred days, which start with
              retention, not growth.
            </p>
            <p>
              At the platform, the cohorts were run before the investors arrived, and leadership
              walked into those conversations with the answer ready. A buyer is rarely that lucky.
              Unless someone runs the read for them, they find out after completion.
            </p>
          </div>
        </div>
      </section>

      {/* Why it belongs in diligence */}
      <section id="why" className="px-6 md:px-8 pb-24 md:pb-32 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <h2 className="display text-center text-[48px] md:text-[88px]">Why this has to be part of diligence</h2>
          <p className="mt-8 text-center font-serif text-[22px] text-slate max-w-2xl mx-auto">
            Not a nice-to-have alongside the real work. The part that tells you what you are
            actually buying.
          </p>
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {WHY.map((c, i) => (
              <div key={c.t} className="pt-6 border-t border-ink/25">
                <p className="font-serif text-[15px] text-slate mb-4">0{i + 1}</p>
                <h3 className="font-serif text-[28px] leading-tight tracking-[-0.015em]">{c.t}</h3>
                <p className="mt-4 text-slate leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 bg-ink text-paper chamfer px-8 md:px-16 py-14 md:py-20">
            <p className="display text-[36px] md:text-[60px] max-w-5xl">
              Financial due diligence tells you the numbers are right.{" "}
              <span className="italic text-coral-soft">Operator diligence tells you what they mean for the price.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Why I built Brightmere */}
      <section id="lesson" className="px-6 md:px-8 scroll-mt-36">
        <div className="max-w-7xl mx-auto bg-mist chamfer-r px-6 sm:px-12 md:px-20 py-16 md:py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <BrandPhoto src="/lu-headshot-2.jpg" alt="Lu Luo, founder of Brightmere" className="aspect-[4/5] max-w-[300px]" />
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-serif text-[40px] md:text-[56px] leading-none tracking-[-0.03em]">Why I built Brightmere</h2>
            <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-slate">
              <p>
                I trained in accounting and started out in corporate finance, so I know how
                the ledger gets built: the real world happens, then it is recorded, closed and
                averaged. Then I spent years in data science and engineering, building the
                systems the ledger is fed from. I can read both records, and join them.
              </p>
              <p className="text-ink">
                Brightmere does that for buyers of £5-50m businesses: the target&apos;s own
                transactions, joined to its ledger, so you know whether the business
                underneath the headline is the one you are paying for, before you sign.
              </p>
            </div>
            <a href="/operator-diligence#what-we-check" className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-ink text-paper hover:bg-ink-soft transition-colors">
              What we check <span className="text-mustard">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <ContactBlock title="Looking at a business now?" />
      <Footer />
    </div>
  );
}
