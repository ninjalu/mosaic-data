import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ContactBlock from "../components/ContactBlock";

export const metadata: Metadata = {
  title: "FAQ | Brightmere - Operator Due Diligence, Answered Straight",
  description:
    "Straight answers for people buying a £5-50m business: what operator due diligence is, how it differs from financial and commercial due diligence, whether a lender can rely on it, what it finds, what data it needs, how long it takes and what it costs.",
};

type QA = { q: string; a: string[] };
type Section = { id: string; eyebrow: string; title: string; intro?: string; items: QA[] };

// DD only (19 Oct 2026). Quality of earnings is part of the work, tested at transaction level
// (Lu, 21 Oct 2026). Never imply accountancy-firm status.
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
          "Commercial due diligence looks outward: the market, competitors, customer interviews. Operator diligence looks inward, at what the target's own transactions show. On a £5-50m deal, commercial DD is often skipped; the questions it would have asked about customers can usually be answered more cheaply, and more reliably, from the order book.",
        ],
      },
      {
        q: "Do you do quality of earnings?",
        a: [
          "Yes, at transaction level. Most quality of earnings work adjusts the reported numbers from the trial balance. We test whether the earnings are real and will repeat from the customers, orders and jobs behind them, and tie every adjustment back to the ledger.",
          "If your lender needs a report it can formally rely on, that comes from the financial due diligence firm, and our findings often give that firm sharper questions to ask.",
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
  const blocks = ["bg-mustard", "bg-blush", "bg-mist", "bg-moss"];
  return (
    <div className="min-h-screen bg-paper text-ink font-dm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <Header current="/faq" />
      <PageHero
        eyebrow="Questions, answered"
        title="Operator diligence,"
        accent="answered straight."
        standfirst="These are the questions buyers, advisers and lenders ask us most, answered the way we'd answer them on a call: plainly, including the parts that don't favour us."
        sections={SECTIONS.map((s) => ({ id: s.id, label: s.title }))}
        cta={{ label: "Ask on a call", href: "#contact" }}
      />

      {SECTIONS.map((section, si) => (
        <section key={section.id} id={section.id} className="px-6 md:px-8 pt-16 md:pt-24 scroll-mt-36">
          <div className={`max-w-7xl mx-auto ${blocks[si % blocks.length]} ${si % 2 ? "chamfer-r" : "chamfer"} px-6 sm:px-12 md:px-20 py-14 md:py-20 grid lg:grid-cols-12 gap-10`}>
            <div className="lg:col-span-4">
              <p className="text-[13px] tracking-[0.28em] uppercase text-ink/60 mb-5">{section.eyebrow}</p>
              <h2 className="font-serif text-[38px] md:text-[52px] leading-none tracking-[-0.03em]">{section.title}</h2>
            </div>
            <div className="lg:col-span-8 border-t border-dotted border-ink/50">
              {section.items.map((item) => (
                <details key={item.q} className="rule-dot group">
                  <summary className="py-6 flex items-start justify-between gap-6 cursor-pointer">
                    <span className="font-serif text-[24px] md:text-[30px] leading-[1.12] tracking-[-0.015em] group-hover:text-coral transition-colors">{item.q}</span>
                    <span className="faq-plus text-[30px] font-light leading-none mt-1 transition-transform">+</span>
                  </summary>
                  <div className="pb-8 pr-6 space-y-4 text-[17px] leading-relaxed text-ink/85 max-w-3xl">
                    {item.a.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      <ContactBlock title="Have a question that isn't here?" />
      <Footer />
    </div>
  );
}
