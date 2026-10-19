import type { Metadata } from "next";
import Image from "next/image";
import Wordmark from "../components/Wordmark";
import Header from "../components/Header";
import Emblem from "../components/Emblem";
import { BOOKING_URL } from "../components/booking";

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

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-[#faf7f5] text-[#1e2126]">
      <Header current="/story" />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden bg-[linear-gradient(110deg,#16181c_0%,#1e2126_55%,#26292f_100%)]">
        <div className="absolute top-28 left-[5%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float1" />
        <div className="absolute top-44 right-[8%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float2" />
        <div className="absolute bottom-16 left-[12%] w-6 h-6 bg-[#e85d47]/35 rounded-full animate-float3" />
        <div className="absolute bottom-28 right-[6%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float1" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="flex items-center justify-center gap-2.5 text-[13px] tracking-[3px] text-greenmuted font-semibold uppercase mb-4">
            <span className="w-[9px] h-[9px] rounded-full bg-gold flex-shrink-0" />
            The story
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-offwhite leading-[1.1] tracking-[-1px] mb-6">
            Revenue doubled.{" "}
            <span className="text-[#ff7a5c] [text-shadow:0_0_26px_rgba(255,122,92,0.4)]">
              But the real business was sinking fast.
            </span>
          </h1>
          <p className="text-xl text-greenmuted max-w-2xl mx-auto leading-relaxed">
            The financials were correct and every sale was booked properly. Underneath, most of the
            customers behind that growth never came back, and the base was shrinking every
            quarter. A review of the ledger would have passed it. A buyer would have paid for it.
          </p>
        </div>
      </section>

      {/* The setting */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="flex items-center gap-2.5 text-[13px] tracking-[3px] text-[#75706c] font-semibold uppercase mb-3">
            <span className="w-[9px] h-[9px] rounded-full bg-gold flex-shrink-0" />
            Early 2025
          </p>
          <h2 className="text-3xl font-bold text-[#1e2126] mb-8 pb-4 border-b-2 border-[#eae5e1]">
            The setting
          </h2>
          <div className="space-y-5 text-[#75706c] text-lg leading-relaxed">
            <p>
              I was the data scientist at a fast-growing B2B commerce platform, connecting
              consumer-goods brands to tens of thousands of small retailers, and preparing for
              investment. Revenue had more than doubled year on year. The deck, the accounts and
              the forecast all said the same thing, because they were built from the same numbers.
            </p>
            <p className="text-[#1e2126]">
              My job was to find commercial signal in the platform&apos;s transactions. The first
              thing I did was the thing nobody had done: I ran the cohorts.
            </p>
          </div>
        </div>
      </section>

      {/* Two records */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e2126] mb-12 pb-4 border-b-2 border-[#eae5e1]">
            Two records of the same business
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
              <div className="text-[#75706c] text-sm font-medium uppercase tracking-wider mb-4">What finance saw</div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-[#1e2126] mb-6"><span className="w-2.5 h-2.5 rounded-full bg-gold/40 flex-shrink-0" />Growth</h3>
              <ul className="space-y-4">
                {SAW.finance.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#75706c]">
                    <span className="mt-[7px] w-2 h-2 rounded-full bg-gold/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#e85d47]/10 to-[#ff9a82]/20 border border-gold/30 rounded-[14px] p-8">
              <div className="text-[#75706c] text-sm font-medium uppercase tracking-wider mb-4">What the transactions said</div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-[#1e2126] mb-6"><span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />Churn</h3>
              <ul className="space-y-4">
                {SAW.transactions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#1e2126]">
                    <span className="mt-[7px] w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <blockquote className="mt-14 max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-bold text-[#1e2126] leading-snug">
              &ldquo;The headline was true. The business underneath it was different.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Put a buyer in the room */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="flex items-center gap-2.5 text-[13px] tracking-[3px] text-[#75706c] font-semibold uppercase mb-3">
            <span className="w-[9px] h-[9px] rounded-full bg-gold flex-shrink-0" />
            Now put a buyer in the room
          </p>
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4 pb-4 border-b-2 border-[#eae5e1]">
            The ledger would have passed. The price would have been wrong.
          </h2>
          <p className="text-[#75706c] mb-12 max-w-2xl">
            Nobody had hidden anything. Every sale was invoiced, paid and booked correctly. So
            picture the same business in a data room.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
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
            ].map((c) => (
              <div
                key={c.label}
                className={`rounded-[14px] p-7 ${c.hl ? "bg-gradient-to-br from-[#e85d47]/10 to-[#ff9a82]/20 border border-gold/30" : "bg-white shadow-[0_2px_14px_rgba(30,33,38,0.06)]"}`}
              >
                <p className="text-[#75706c] text-xs font-semibold uppercase tracking-wider mb-3">{c.label}</p>
                <p className={c.hl ? "text-[#1e2126]" : "text-[#75706c]"}>{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl space-y-5 text-[#75706c] text-lg leading-relaxed">
            <p>
              That one table changes the deal. The multiple, because durable revenue and
              rented revenue are not worth the same. The earn-out, which should pay on customers
              retained, not on total sales. The model, which needs a line for what it costs to
              replace the customers who leave. And the first hundred days, which start with
              retention, not growth.
            </p>
            <p className="text-[#1e2126]">
              At the platform, the cohorts were run before the investors arrived, and leadership
              walked into those conversations with the answer ready. A buyer is rarely that lucky.
              Unless someone runs the read for them, they find out after completion.
            </p>
          </div>
        </div>
      </section>

      {/* Why it belongs in diligence */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4 pb-4 border-b-2 border-[#eae5e1]">
            Why this has to be part of diligence
          </h2>
          <p className="text-[#75706c] mb-12 max-w-2xl">
            Not a nice-to-have alongside the real work. The part that tells you what you are
            actually buying.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
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
            ].map((c) => (
              <div key={c.t} className="bg-white rounded-[14px] p-7 shadow-[0_2px_14px_rgba(30,33,38,0.06)] border-t-2 border-gold">
                <h3 className="text-lg font-semibold text-[#1e2126] mb-2">{c.t}</h3>
                <p className="text-[#75706c] text-sm">{c.b}</p>
              </div>
            ))}
          </div>
          <blockquote className="mt-14 max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-bold text-[#1e2126] leading-snug">
              Financial due diligence tells you the numbers are right. Operator diligence tells
              you what they mean for the price.
            </p>
          </blockquote>
        </div>
      </section>

      {/* The lesson -> Brightmere */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-12 right-[8%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float1" />
        <div className="absolute top-32 right-[4%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float2" />
        <div className="absolute bottom-16 left-[6%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float3" />
        <div className="absolute bottom-36 left-[12%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float1" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="bg-white rounded-[14px] p-8 md:p-12 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <Image
                src="/lu.jpg"
                alt="Lu Luo, founder of Brightmere"
                width={128}
                height={128}
                className="w-32 h-32 rounded-[14px] object-cover flex-shrink-0 shadow-[0_2px_14px_rgba(30,33,38,0.12)]"
              />
              <div>
                <h2 className="text-2xl font-bold text-[#1e2126] mb-4">Why I built Brightmere</h2>
                <div className="space-y-4 text-[#75706c] leading-relaxed">
                  <p>
                    I trained in accounting and started out in corporate finance, so I know how
                    the ledger gets built: the real world happens, then it is recorded, closed and
                    averaged. Then I spent years in data science and engineering, building the
                    systems the ledger is fed from. I can read both records, and join them.
                  </p>
                  <p className="text-[#1e2126]">
                    Brightmere does that for buyers of £5-20m businesses: the target&apos;s own
                    transactions, joined to its ledger, so you know whether the business
                    underneath the headline is the one you are paying for, before you sign.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-[#e85d47]/10 to-[#ff9a82]/20 border border-gold/30 rounded-[14px] p-10 md:p-14 text-center">
            <h2 className="text-3xl font-bold text-[#1e2126] mb-4">
              Looking at a business now?
            </h2>
            <p className="text-lg text-[#75706c] mb-8 max-w-xl mx-auto">
              A 30-minute call is enough to tell you whether the target&apos;s two records are
              likely to disagree, and where to look. No pitch deck, no follow-up sequence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
                className="px-8 py-4 bg-gold text-[#2b1209] rounded-full font-bold shadow-[0_6px_30px_rgba(232,93,71,0.3)] hover:bg-gold-deep transition-colors text-lg"
              >
                Book a call &rarr;
              </a>
              <a
                href="/#what-we-check"
                className="px-8 py-4 border-2 border-gold/55 text-green rounded-full font-semibold hover:border-gold transition-colors text-lg"
              >
                What we check
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
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
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
