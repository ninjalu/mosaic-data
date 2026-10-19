import type { Metadata } from "next";
import Wordmark from "../components/Wordmark";
import Header from "../components/Header";
import Emblem from "../components/Emblem";
import { BOOKING_URL } from "../components/booking";

export const metadata: Metadata = {
  title: "FAQ | Brightmere - Operator Due Diligence, Answered Straight",
  description:
    "Straight answers for people buying a £5-20m business: what operator due diligence is, how it differs from financial and commercial due diligence, whether a lender can rely on it, what it finds, what data it needs, how long it takes and what it costs.",
};

type QA = { q: string; a: string[] };
type Section = { id: string; eyebrow: string; title: string; intro?: string; items: QA[] };

// DD only (19 Oct 2026). Never call the work QoE; never imply accountancy-firm status.
// Reliance for a lender comes from the financial DD firm, not from us.
const SECTIONS: Section[] = [
  {
    id: "what-it-is",
    eyebrow: "The basics",
    title: "What operator diligence is",
    items: [
      {
        q: "What is operator due diligence?",
        a: [
          "It is a check, before you buy a business, of whether the business underneath the numbers is the one you are paying for. We rebuild revenue, margin, cash needs and capacity from the target's own records - sales orders, invoices, stock movements, jobs, loads - and tie them back to the ledger.",
          "The output is a findings memo ranked by price impact, with every finding sized in pounds and traced to the source rows, plus the questions to put to the seller before you sign.",
        ],
      },
      {
        q: "How is it different from financial due diligence?",
        a: [
          "Financial due diligence works from the trial balance and management accounts. It adjusts earnings, identifies net debt and normalises working capital. It is essential, and your lender will usually insist on it.",
          "It also tends to stop at the trial balance. Which customers come back, which jobs lose money and whether the operation can carry the plan are answered in the operational records underneath. That is where we work.",
        ],
      },
      {
        q: "How is it different from commercial due diligence?",
        a: [
          "Commercial due diligence looks outward: the market, competitors, customer interviews. Operator diligence looks inward, at what the target's own transactions show. On a £5-20m deal, commercial DD is often skipped; the questions it would have asked about customers can usually be answered more cheaply, and more reliably, from the order book.",
        ],
      },
      {
        q: "Is this a quality of earnings report?",
        a: [
          "No, and we won't call it one. A quality of earnings report is an accountancy firm's work on earnings. Brightmere is not an accountancy firm. Our work sits alongside that report, and often gives the firm writing it sharper questions to ask.",
        ],
      },
      {
        q: "Can our lender rely on your report?",
        a: [
          "Our report is addressed to you, the buyer. A lender that needs a report it can formally rely on will look to the financial due diligence firm for that.",
          "Lenders and your other advisers are welcome to read our findings, on the usual basis that they do not rely on them. In practice, what they want from us is the evidence, and that is in the memo.",
        ],
      },
    ],
  },
  {
    id: "findings",
    eyebrow: "The findings",
    title: "What it finds, and what you do with it",
    items: [
      {
        q: "What do you look for in the transactions?",
        a: [
          "The patterns that make a set of accounts true but misleading. A growing top line refilled by new customers who don't come back. Concentration hidden across several account codes for the same customer group. Customers or products that lose money once freight, returns and rebates are counted. Working capital that looks lean only at the reference date. An operation already at its limit. Relationships, approvals and fixes that all run through the owner.",
          "Not every target has these. When the transactions back the story, we say so plainly, and that is worth knowing too.",
        ],
      },
      {
        q: "How do the findings change a deal?",
        a: [
          "They give you evidence to act on: a price conversation, the working capital peg, how an earn-out is structured, which warranties or specific protections to ask for, and what goes first in the plan after completion. Your lawyers and corporate finance adviser decide how to use them. We provide the evidence, not legal or investment advice.",
        ],
      },
      {
        q: "What is the working capital peg, and why do transactions matter for it?",
        a: [
          "The peg is the level of working capital the business is expected to hand over at completion. If actual working capital is below it, the price usually comes down, and vice versa. It is normally set from an average of recent months.",
          "Monthly balances can be flattered: debtors chased hard before month end, supplier payments held back, stock run down. Rebuilding working capital from the debtor, creditor and stock ledgers shows what the business really needs to run, which is the number the peg should reflect.",
        ],
      },
    ],
  },
  {
    id: "deal-team",
    eyebrow: "Working together",
    title: "Working with your deal team",
    items: [
      {
        q: "When in the deal should we bring you in?",
        a: [
          "Usually once heads of terms are signed and the data room is open, so the work fits inside exclusivity. Earlier is fine if you want a fast read on a target before committing to the full diligence spend.",
        ],
      },
      {
        q: "How long does it take?",
        a: [
          "Two to three weeks from receiving the data. The first few days map what the data can support. If exclusivity is tight, we agree a shorter scope up front rather than rushing the full one.",
        ],
      },
      {
        q: "Who do you report to, and who else sees the findings?",
        a: [
          "We report to the buyer. We share findings with your lawyers, financial DD firm and lender as you direct, and work to their timetable.",
        ],
      },
      {
        q: "I advise buyers or lend to them. How do I bring you in?",
        a: [
          "As a workstream on a live deal, alongside the financial DD firm. A 30-minute call about the target and the timetable is enough to scope it, and the fee is fixed before we start.",
        ],
      },
      {
        q: "Do you work for sellers?",
        a: [
          "Our focus is buyers. If you are selling and want to see your business the way a buyer's diligence will, ask on a call and we'll tell you honestly whether it is worth doing.",
        ],
      },
    ],
  },
  {
    id: "data-fee",
    eyebrow: "The practicalities",
    title: "Data, confidentiality and fee",
    items: [
      {
        q: "What data do you need from the target?",
        a: [
          "Exports the business already has: sales orders and invoices, customer and product lists, stock movements, debtor and creditor ledgers, and whatever system runs the operation - a TMS, an ERP, job management. No new reports for the seller to build.",
        ],
      },
      {
        q: "What if the target's data is a mess?",
        a: [
          "Most is, and that is itself a finding. The first few days establish what the data can support. If it cannot answer the questions, we tell you and stop, and you pay only for those days.",
        ],
      },
      {
        q: "How do you handle confidentiality?",
        a: [
          "We sign the NDA before anything is shared and work from read-only copies through the data room or a secure transfer. At the end of the engagement, the data is returned or deleted, as you choose.",
        ],
      },
      {
        q: "How much does it cost?",
        a: [
          "£15,000 fixed per target, for two to three weeks of work. Half on instruction, half on delivery. No day rates, and the fee is agreed before we start.",
        ],
      },
    ],
  },
];

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SECTIONS.flatMap((s) =>
      s.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a.join(" ") },
      }))
    ),
  };
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#faf7f5] text-[#1e2126]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />

      <Header current="/faq" />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden bg-[linear-gradient(110deg,#16181c_0%,#1e2126_55%,#26292f_100%)]">
        <div className="absolute top-28 left-[5%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float1" />
        <div className="absolute top-44 right-[8%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float2" />
        <div className="absolute bottom-16 left-[12%] w-6 h-6 bg-[#e85d47]/35 rounded-full animate-float3" />
        <div className="absolute bottom-28 right-[6%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float1" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="flex items-center justify-center gap-2.5 text-[13px] tracking-[3px] text-greenmuted font-semibold uppercase mb-4">
            <span className="w-[9px] h-[9px] rounded-full bg-gold flex-shrink-0" />
            Questions, answered
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-offwhite leading-[1.1] tracking-[-1px] mb-6">
            Operator Diligence,{" "}
            <span className="text-[#ff7a5c] [text-shadow:0_0_26px_rgba(255,122,92,0.4)]">
              Answered Straight
            </span>
          </h1>
          <p className="text-xl text-greenmuted max-w-2xl mx-auto leading-relaxed">
            Brightmere checks whether a business you are buying is what its numbers say, from
            its own transactions. These are the questions buyers, advisers and lenders ask us
            most, answered the way we&apos;d answer them on a call: plainly, including the parts
            that don&apos;t favour us.
          </p>
        </div>
      </section>

      {/* Section index */}
      <section className="py-10 px-6 border-b border-[#eae5e1]">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#75706c] shadow-[0_2px_14px_rgba(30,33,38,0.06)] hover:text-[#c24a36] transition-colors"
            >
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* FAQ sections */}
      {SECTIONS.map((section) => (
        <section key={section.id} id={section.id} className="py-16 px-6 scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <p className="flex items-center gap-2.5 text-[13px] tracking-[3px] text-[#75706c] font-semibold uppercase mb-3">
              <span className="w-[9px] h-[9px] rounded-full bg-gold flex-shrink-0" />
              {section.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-[#1e2126] mb-10 pb-4 border-b-2 border-[#eae5e1]">
              {section.title}
            </h2>

            <div className="space-y-10">
              {section.items.map((item) => (
                <div key={item.q}>
                  <h3 className="text-xl font-semibold text-[#1e2126] mb-3">{item.q}</h3>
                  {item.a.map((para, i) => (
                    <p key={i} className="text-[#75706c] leading-relaxed mb-3">
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-12 left-[6%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float2" />
        <div className="absolute top-28 right-[10%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float1" />
        <div className="absolute bottom-16 left-[14%] w-6 h-6 bg-[#e85d47]/35 rounded-full animate-float3" />
        <div className="absolute bottom-28 right-[5%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float2" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-[#e85d47]/10 to-[#ff9a82]/20 border border-gold/30 rounded-[14px] p-10 md:p-14 text-center">
            <h2 className="text-3xl font-bold text-[#1e2126] mb-4">
              Have a question that isn&apos;t here?
            </h2>
            <p className="text-lg text-[#75706c] mb-8 max-w-xl mx-auto">
              Ask it on a 30-minute call - no pitch deck, no obligation. Tell us about the
              target and the timetable, and we&apos;ll tell you honestly whether we can help.
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
