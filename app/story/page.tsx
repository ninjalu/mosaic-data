import type { Metadata } from "next";
import Image from "next/image";
import Wordmark from "../components/Wordmark";
import Emblem from "../components/Emblem";

export const metadata: Metadata = {
  title: "The Story | Brightmere - Where Finance and Operations Came Apart",
  description:
    "Why Brightmere exists: a fast-growing B2B commerce platform preparing for investment, a growth chart everyone trusted, and a cohort table nobody had run. The gap between what the operation did and what finance recorded is where the truth was. Brightmere was built to close it.",
};

// The founding story. Anonymised on purpose: the company is not named and the
// figures are kept generic (Lu, 7-8 Oct 2026). The point is the mechanism, not the firm.
const SAW = {
  finance: [
    "Revenue more than doubling year on year, every quarter up on the last",
    "A growing customer count on every board slide",
    "Marketing and sales spend justified by the top line it bought",
    "A growth story that read the same in the deck, the accounts and the forecast",
  ],
  transactions: [
    "Most of the growth came from customers acquired that quarter",
    "Cohort by cohort, most of them did not come back",
    "Orders per customer, the number nobody tracked, was flat to falling",
    "The curve was being refilled from the top, not compounding from the base",
  ],
};

export default function StoryPage() {
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
              className="text-offwhite text-[15px] font-semibold hidden md:block"
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
              href="/pricing"
              className="text-greenmuted text-[15px] hover:text-offwhite transition-colors hidden md:block"
            >
              Pricing
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
            The story
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-offwhite leading-[1.1] tracking-[-1px] mb-6">
            Where Brightmere started:{" "}
            <span className="text-[#ff7a5c] [text-shadow:0_0_26px_rgba(255,122,92,0.4)]">
              a growth chart and a cohort table that disagreed.
            </span>
          </h1>
          <p className="text-xl text-greenmuted max-w-2xl mx-auto leading-relaxed">
            Every business keeps two records of itself. One is what the operation does: the
            orders, the customers, the deliveries, the returns. The other is what finance
            writes down about it. Most of the time they agree. The money, and the truth, live
            in the moments they don&apos;t.
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
              I was the data scientist at a fast-growing B2B commerce platform. It connected
              consumer-goods brands and distributors to tens of thousands of small retailers
              across several emerging markets, and it was preparing for investment.
            </p>
            <p>
              The story the business told about itself was a good one, and it was true. Revenue
              had more than doubled year on year. The customer count on every board slide went
              up and to the right. The finance view, the investor deck and the forecast all said
              the same thing, because they were all built from the same numbers.
            </p>
            <p className="text-[#1e2126]">
              My job was to find commercial signal in the platform&apos;s transaction data. The
              first thing I did was the thing nobody had done: I ran the cohorts.
            </p>
          </div>
        </div>
      </section>

      {/* Two records */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4 pb-4 border-b-2 border-[#eae5e1]">
            Two records of the same business
          </h2>
          <p className="text-[#75706c] mb-12 max-w-2xl">
            Same company, same months, same customers. One record was built from the ledger
            and the headline counts. The other was built from every order, by the customer who
            placed it and the month they first arrived.
          </p>

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

      {/* What changed */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e2126] mb-8 pb-4 border-b-2 border-[#eae5e1]">
            What changed
          </h2>
          <div className="space-y-5 text-[#75706c] text-lg leading-relaxed">
            <p>
              Nobody had hidden anything. Finance had recorded every sale correctly. The gap was
              not an error, it was a missing join: the ledger knew how much was sold, and the
              platform knew who bought it and whether they came back, and no one had put the two
              side by side.
            </p>
            <p>
              Once they were, the questions changed. Not &ldquo;how fast are we growing&rdquo;
              but &ldquo;which customers stay, what do they have in common, and what does it
              cost us to replace the ones who leave&rdquo;. Segmentation built on the
              transactions replaced gut-feel targeting, and gave the commercial team defensible
              criteria for where pricing and promotional money went.
            </p>
            <p>
              The same data answered the next question too. A national pricing change was on
              the table, with strong opinions on both sides. Instead of arguing, we ran it as a
              controlled experiment on the platform and took the decision on evidence before the
              rollout, not after.
            </p>
            <p className="text-[#1e2126]">
              Leadership walked into the investment conversations knowing what the cohorts
              showed, with the answer ready. That is a very different position from finding out
              in the other side&apos;s diligence.
            </p>
          </div>
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
                    I had seen the same gap before, from the other side. I trained in accounting
                    and economics and started out in corporate finance, so I knew how the ledger
                    gets built: the real world happens, it is recorded as transactions, reconciled,
                    closed and reported, and only then does anyone interpret it. Finance is a
                    translation of operations. It is monthly, it is lagging, and it averages away
                    the thing you most need to see.
                  </p>
                  <p>
                    Then I spent years as a data scientist and engineer building the systems that
                    hold the other record, the operational one. And I kept finding the same thing:
                    the answer the owner or the CFO needed was already in their own systems. It
                    just lived in the join between two sources that had never been put side by
                    side, and almost nobody can read a P&amp;L and build that join.
                  </p>
                  <p className="text-[#1e2126]">
                    Brightmere is that join, done for £5-50m businesses. Operations connected to
                    finance at the transaction, so the numbers you run the business on are the
                    numbers that survive diligence. For the people running it, and for the people
                    about to buy, back or lend to it.
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
              Which of your two records is right?
            </h2>
            <p className="text-lg text-[#75706c] mb-8 max-w-xl mx-auto">
              A 30-minute call is enough to tell you whether yours disagree, and where. No
              pitch deck, no follow-up sequence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="px-8 py-4 bg-gold text-[#2b1209] rounded-full font-bold shadow-[0_6px_30px_rgba(232,93,71,0.3)] hover:bg-gold-deep transition-colors text-lg"
              >
                Book a call &rarr;
              </a>
              <a
                href="/#services"
                className="px-8 py-4 border-2 border-gold/55 text-green rounded-full font-semibold hover:border-gold transition-colors text-lg"
              >
                See the three services
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
