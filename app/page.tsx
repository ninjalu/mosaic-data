import Image from "next/image";
import Wordmark from "./components/Wordmark";
import Header from "./components/Header";
import Emblem from "./components/Emblem";
import { BOOKING_URL } from "./components/booking";

export default function Home() {
  // DD only (19 Oct 2026). One service, one buyer: operator diligence for people buying a
  // business. Financial DD stops at the trial balance; this starts below it. Never called
  // QoE, never sold as a replacement for the FDD firm's report (that firm gives lender reliance).
  const checks = [
    {
      q: "Is the revenue real, and will it repeat?",
      how: "Customer cohorts, retention and churn, concentration, and the one-offs sitting inside the run-rate.",
      why: "Whether you are paying a multiple on revenue that compounds, or on a top line refilled every quarter.",
    },
    {
      q: "Where is the money actually made?",
      how: "Margin by customer, product and job, after freight, returns, rebates and discounts.",
      why: "Which part of the EBITDA you are really buying, and which part loses money.",
    },
    {
      q: "How much cash does it really need?",
      how: "Working capital month by month from the debtor, creditor and stock ledgers, with the flattering month named.",
      why: "Evidence for the working capital peg, before completion accounts settle it for you.",
    },
    {
      q: "Can the operation deliver the plan?",
      how: "Capacity and the one true bottleneck, computed from the operational log rather than a site visit.",
      why: "Whether the growth case needs capex, hires or a second site nobody has priced.",
    },
    {
      q: "How much leaves with the seller?",
      how: "Owner and key-person dependency, measured from who sells, approves and fixes things in the systems.",
      why: "What the earn-out and the handover plan need to protect.",
    },
    {
      q: "Does the data room match the transactions?",
      how: "Management accounts tied down to the order, invoice and job records underneath them.",
      why: "The totals usually agree. Where the detail does not is where your questions to the seller come from.",
    },
  ];

  const steps = [
    { when: "Day 1", what: "Scoping call, NDA and a short data request: the order, invoice, stock and job exports the business already has." },
    { when: "Days 2-4", what: "We map what the data can support. If it cannot answer the questions, we say so and stop. You pay for the days used." },
    { when: "Weeks 1-2", what: "The read: every check above, run on the target's own records and tied back to the ledger." },
    { when: "Week 3", what: "Findings memo and a working session with you and your advisers. Faster if exclusivity is tight." },
  ];

  return (
    <div className="min-h-screen bg-[#faf7f5] text-[#1e2126]">
      <Header current="/" />

      {/* Hero Section */}
      <section className="pt-36 pb-44 px-6 relative overflow-hidden bg-[linear-gradient(110deg,#16181c_0%,#1e2126_55%,#26292f_100%)]">
        {/* Noise-to-signal graphic */}
        <svg
          className="absolute left-0 bottom-0 w-full h-auto opacity-85 pointer-events-none"
          viewBox="0 0 1440 330"
          fill="none"
          aria-hidden="true"
        >
          <g fill="#e85d47">
            <rect x="30" y="230" width="9" height="60" rx="4" opacity="0.10" />
            <rect x="62" y="200" width="9" height="90" rx="4" opacity="0.12" />
            <rect x="94" y="245" width="9" height="45" rx="4" opacity="0.10" />
            <rect x="126" y="185" width="9" height="105" rx="4" opacity="0.13" />
            <rect x="158" y="225" width="9" height="65" rx="4" opacity="0.11" />
            <rect x="190" y="205" width="9" height="85" rx="4" opacity="0.13" />
            <rect x="222" y="240" width="9" height="50" rx="4" opacity="0.11" />
            <rect x="254" y="195" width="9" height="95" rx="4" opacity="0.14" />
            <rect x="286" y="228" width="9" height="62" rx="4" opacity="0.12" />
            <rect x="318" y="212" width="9" height="78" rx="4" opacity="0.14" />
            <rect x="350" y="232" width="9" height="58" rx="4" opacity="0.13" />
            <rect x="382" y="215" width="9" height="75" rx="4" opacity="0.15" />
          </g>
          <path
            d="M420,280 C560,268 640,250 760,232 C900,211 1020,178 1160,130 C1260,96 1322,72 1370,54"
            stroke="#e85d47"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.7"
          />
          <circle cx="1370" cy="54" r="9" fill="#e85d47" />
          <circle cx="1370" cy="54" r="24" fill="#e85d47" opacity="0.18" />
        </svg>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="flex items-center justify-center gap-2.5 text-[13px] tracking-[3px] text-greenmuted font-semibold uppercase mb-5"><span className="w-[9px] h-[9px] rounded-full bg-gold flex-shrink-0" />Operator diligence for buyers</p>
          <h1 className="text-4xl md:text-5xl font-bold text-offwhite leading-[1.15] tracking-[-1px] mb-6">
            Financial due diligence stops at the trial balance.
            <br />
            <span className="text-[#ff7a5c] [text-shadow:0_0_26px_rgba(255,122,92,0.4)]">We start below it.</span>
          </h1>

          <p className="text-xl text-greenmuted max-w-2xl mx-auto mb-6 leading-relaxed">
            Before you buy a £5-20m business, we rebuild its revenue, margin, cash and capacity
            from its own orders, invoices and jobs, and show you where the data room story and
            the transactions part ways. Alongside your financial due diligence, not instead of it.
          </p>
          <p className="font-mono text-base text-offwhite max-w-2xl mx-auto mb-10">
            2-3 weeks &middot; £15,000 fixed per target &middot; every finding sized in pounds
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gold text-[#2b1209] rounded-full font-bold shadow-[0_6px_30px_rgba(232,93,71,0.3)] hover:bg-gold-deep transition-colors text-lg"
            >
              Talk about a live deal &rarr;
            </a>
            <a
              href="#what-we-check"
              className="inline-block px-8 py-4 border-2 border-gold/55 text-offwhite rounded-full font-semibold hover:border-gold transition-colors text-lg"
            >
              What we check
            </a>
          </div>
        </div>
      </section>

      {/* The gap */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4 pb-4 border-b-2 border-[#eae5e1]">
            The accounts can be right and the business still not be what you are paying for
          </h2>
          <p className="text-[#75706c] mb-12 max-w-2xl">
            Nobody has to be hiding anything. The ledger records every sale correctly. It just
            cannot tell you which customers come back, which jobs lose money, or whether the
            operation can carry the plan in the information memorandum.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[14px] p-7 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
              <h3 className="text-lg font-semibold text-[#1e2126] mb-2">Financial DD tests the ledger</h3>
              <p className="text-[#75706c] text-sm">Earnings adjustments, net debt, normalised working capital, worked from the trial balance and management accounts. Essential, and your lender will insist on it. It stops there.</p>
            </div>
            <div className="bg-white rounded-[14px] p-7 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
              <h3 className="text-lg font-semibold text-[#1e2126] mb-2">The deal is decided below it</h3>
              <p className="text-[#75706c] text-sm">Retention, real margin, cash needs and capacity live in the order book, the job sheets, the TMS and the ERP. Few diligence teams open them, and rarely at a price that suits a £5-20m deal.</p>
            </div>
            <div className="bg-gradient-to-br from-[#e85d47]/10 to-[#ff9a82]/20 border border-gold/30 rounded-[14px] p-7">
              <h3 className="text-lg font-semibold text-[#1e2126] mb-2">We read that layer</h3>
              <p className="text-[#1e2126] text-sm">Transaction by transaction, tied back to the ledger so the totals agree. Then we show you where the detail does not, and what it is worth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What we check */}
      <section id="what-we-check" className="py-20 px-6 relative overflow-hidden scroll-mt-24">
        <div className="absolute top-12 right-[5%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float1" />
        <div className="absolute top-32 right-[12%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float3" />
        <div className="absolute bottom-16 left-[4%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float2" />
        <div className="absolute bottom-32 left-[10%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float1" />

        <div className="max-w-5xl mx-auto relative z-10">
          <p className="flex items-center gap-2.5 text-[13px] tracking-[3px] text-[#75706c] font-semibold uppercase mb-3"><span className="w-[9px] h-[9px] rounded-full bg-gold flex-shrink-0" />What we check</p>
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4 pb-4 border-b-2 border-[#eae5e1]">
            Six questions the price depends on
          </h2>
          <p className="text-[#75706c] mb-14 max-w-2xl">
            Each one answered from the target&apos;s own records, line by line, at a resolution a
            spreadsheet cannot reach.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checks.map((c, i) => (
              <div key={c.q} className="flex flex-col bg-white rounded-[14px] p-7 shadow-[0_2px_14px_rgba(30,33,38,0.06)] border-t-2 border-gold">
                <p className="text-[#75706c] text-xs font-semibold uppercase tracking-wider mb-2">Check {i + 1}</p>
                <h3 className="text-xl font-semibold text-[#1e2126] mb-3">{c.q}</h3>
                <p className="text-[#75706c] text-sm mb-4">{c.how}</p>
                <p className="text-[#c24a36] text-sm font-medium mt-auto">{c.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The offer */}
      <section id="fee" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3 bg-gradient-to-br from-[#e85d47]/10 to-[#ff9a82]/20 border border-gold/30 rounded-[14px] p-8 md:p-10">
              <p className="text-[#75706c] text-xs font-semibold uppercase tracking-wider mb-3">The engagement</p>
              <h2 className="text-3xl font-bold text-[#1e2126] mb-2">Operator diligence</h2>
              <p className="font-mono text-[#c24a36] mb-6">2-3 weeks &middot; £15,000 fixed per target</p>
              <ul className="space-y-4">
                {[
                  "A findings memo ranked by price impact, every finding sized in pounds and traced to the source rows",
                  "The questions to put to the seller before you sign, with the evidence behind each one",
                  "A working session with you and your advisers to walk the findings",
                  "The rebuilt dataset, so your first numbers after completion start from something true",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#1e2126]">
                    <span className="mt-[7px] w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-8">
                {["Half on instruction, half on delivery", "Fixed before we start", "Stop early if the data can't support it"].map((chip) => (
                  <span key={chip} className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white border border-[#eae5e1] text-[#1e2126] text-xs font-medium">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-[#75706c] text-xs font-semibold uppercase tracking-wider mb-3">Who it is for</p>
              <p className="text-[#1e2126] mb-4">
                Independent sponsors, holding companies, family offices and serial acquirers
                buying a £5-20m UK business.
              </p>
              <p className="text-[#75706c] text-sm mb-4">
                It earns its fee fastest in operationally complex targets: thousands of SKUs,
                customers, jobs or loads, where the average hides the answer.
              </p>
              <p className="text-[#75706c] text-sm">
                Advising or lending on a deal? Bring us in as a workstream alongside the
                financial due diligence firm. We report to the buyer and work to the deal
                timetable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it runs */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4 pb-4 border-b-2 border-[#eae5e1]">
            Built to fit inside exclusivity
          </h2>
          <p className="text-[#75706c] mb-12 max-w-2xl">
            A sharp answer before you sign beats a perfect one after the price is agreed.
          </p>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.when} className="flex flex-col sm:flex-row gap-2 sm:gap-6 bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
                <p className="font-mono text-sm text-[#c24a36] font-semibold sm:w-28 flex-shrink-0 sm:pt-0.5">{s.when}</p>
                <p className="text-[#1e2126]">{s.what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where it sits */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4 pb-4 border-b-2 border-[#eae5e1]">
            Where it sits in your diligence
          </h2>
          <p className="text-[#75706c] mb-12 max-w-2xl">
            A complement to the reports you already commission, answering the question they
            leave open.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Financial DD", by: "Your accountants", from: "Trial balance, management accounts, statutory accounts", answers: "Are the earnings and net debt what the seller claims?", hl: false },
              { name: "Commercial DD", by: "Market consultants", from: "Market data, customer interviews", answers: "Is this a good market to be in?", hl: false },
              { name: "Operator diligence", by: "Brightmere", from: "The target's own orders, invoices, stock, jobs and operational logs", answers: "Is the business underneath the numbers the one you are paying for?", hl: true },
            ].map((col) => (
              <div
                key={col.name}
                className={`rounded-[14px] p-7 ${col.hl ? "bg-gradient-to-br from-[#e85d47]/10 to-[#ff9a82]/20 border border-gold/30" : "bg-white shadow-[0_2px_14px_rgba(30,33,38,0.06)]"}`}
              >
                <p className="text-[#75706c] text-xs font-semibold uppercase tracking-wider mb-2">{col.by}</p>
                <h3 className="flex items-center gap-3 text-xl font-bold text-[#1e2126] mb-5"><span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${col.hl ? "bg-gold" : "bg-gold/40"}`} />{col.name}</h3>
                <p className="text-[#75706c] text-xs font-semibold uppercase tracking-wider mb-1">Works from</p>
                <p className={`text-sm mb-4 ${col.hl ? "text-[#1e2126]" : "text-[#75706c]"}`}>{col.from}</p>
                <p className="text-[#75706c] text-xs font-semibold uppercase tracking-wider mb-1">Answers</p>
                <p className={`text-sm ${col.hl ? "text-[#1e2126] font-medium" : "text-[#75706c]"}`}>{col.answers}</p>
              </div>
            ))}
          </div>
          <p className="text-[#75706c] text-sm mt-8 max-w-3xl">
            Brightmere is not an accountancy firm and this is not a quality of earnings report.
            Our report is addressed to you. If your lender needs a report it can rely on, that
            is the financial due diligence firm&apos;s, and we work alongside them.
          </p>
        </div>
      </section>

      {/* Founder - who you would be working with */}
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
                <p className="text-[#75706c] text-xs font-semibold uppercase tracking-wider mb-2">Who does the work</p>
                <h2 className="text-2xl font-bold text-[#1e2126] mb-4">Lu Luo, founder</h2>
                <div className="space-y-4 text-[#75706c] leading-relaxed">
                  <p>
                    I trained in accounting and economics and started out in accounting and
                    corporate finance. Then I moved into data science and engineering, and spent
                    years building the systems that finance teams report from. Most people who
                    can read a P&amp;L can&apos;t pull apart millions of transaction lines, and
                    most who can pull them apart can&apos;t read the P&amp;L. Diligence below the
                    trial balance needs both.
                  </p>
                  <p>
                    At a fast-growing B2B commerce platform preparing for investment, sales were
                    up quarter after quarter. Nobody had run the cohorts. When I did, the growth
                    was mostly new customers, and most of them didn&apos;t come back. The headline
                    was true. The business underneath it was different.
                  </p>
                  <p className="text-[#1e2126]">
                    That is the gap I look for in every target: between what the numbers say and
                    what the transactions show. I work from London and I do the work myself.
                  </p>
                </div>
                <a
                  href="/story"
                  className="inline-block mt-5 text-[#1e2126] underline underline-offset-4 font-semibold hover:text-gold transition-colors"
                >
                  Read the story &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e2126] mb-12 pb-4 border-b-2 border-[#eae5e1]">
            Questions buyers ask
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "We already have financial due diligence. Why add this?",
                a: "Because it answers a different question. The financial DD firm tests whether the earnings and net debt are what the seller says, working from the trial balance. We test whether the business underneath is what you are paying for: which customers stay, which jobs make money, how much cash it really needs and whether it can deliver the plan. That lives in the operational records, which financial DD rarely opens."
              },
              {
                q: "Is this a quality of earnings report?",
                a: "No, and we won't call it one. A QoE is an accountancy firm's report on earnings, and your lender will usually want one it can rely on. Our work sits alongside it and often gives that firm sharper questions to ask."
              },
              {
                q: "What do you need from the seller?",
                a: "Exports the business already has: sales orders and invoices, customer and product lists, stock movements, debtor and creditor ledgers, and whatever operational system runs the work (TMS, ERP, job management). No new reports. Read-only, through the data room or a secure transfer."
              },
              {
                q: "What if the target's data is a mess?",
                a: "Most is, and that is itself a finding. The first few days map what the data can support. If it cannot answer the questions, we tell you and stop, and you pay only for those days."
              },
              {
                q: "Do you work with the deal team we already have?",
                a: "Yes. We report to you, share findings with your lawyers, financial DD firm and lender as you direct, and run to their timetable."
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
                <h3 className="flex items-center gap-3 text-[#1e2126] font-semibold mb-3"><span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />{item.q}</h3>
                <p className="text-[#75706c] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/faq"
              className="text-[#1e2126] underline underline-offset-4 font-semibold hover:text-gold transition-colors"
            >
              More questions, answered &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 relative overflow-hidden">
        {/* Decorative floating dots */}
        <div className="absolute top-12 left-[5%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float2" />
        <div className="absolute top-28 left-[10%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float1" />
        <div className="absolute top-44 left-[3%] w-6 h-6 bg-[#e85d47]/35 rounded-full animate-float3" />
        <div className="absolute top-20 right-[6%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float3" />
        <div className="absolute top-40 right-[12%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float2" />
        <div className="absolute top-56 right-[4%] w-6 h-6 bg-[#e85d47]/35 rounded-full animate-float1" />
        <div className="absolute bottom-16 right-[8%] w-6 h-6 bg-[#e85d47]/20 rounded-full animate-float1" />
        <div className="absolute bottom-32 left-[8%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float3" />

        <div className="max-w-xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4 pb-4 border-b-2 border-[#eae5e1]">
            Looking at a business now?
          </h2>
          <p className="text-[#75706c] mb-8">
            30-minute call. Tell us about the target and the timetable, and we&apos;ll tell you
            honestly whether operator diligence would change your view of it, and what the data
            room would need to contain.
          </p>

          <div className="text-center mb-10">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-9 py-4 bg-gold text-[#2b1209] rounded-full font-bold shadow-[0_6px_30px_rgba(232,93,71,0.3)] hover:bg-gold-deep transition-colors text-lg"
            >
              Pick a time &rarr;
            </a>
            <p className="mt-3 text-sm text-[#75706c]">
              30 minutes on Google Meet. Choose a slot that suits you.
            </p>
          </div>

          <p className="text-center text-[#75706c] mb-4">
            Prefer to write first? Send a note and we&apos;ll come back to you.
          </p>

          <form
            action="https://formspree.io/f/mwvvkjnb"
            method="POST"
            className="bg-white rounded-[14px] p-8 space-y-6 shadow-[0_2px_14px_rgba(30,33,38,0.06)]"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#1e2126] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-white border border-[#eae5e1] rounded-lg text-[#1e2126] placeholder-[#b5aca6] focus:ring-2 focus:ring-gold focus:border-gold"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1e2126] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white border border-[#eae5e1] rounded-lg text-[#1e2126] placeholder-[#b5aca6] focus:ring-2 focus:ring-gold focus:border-gold"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="referral" className="block text-sm font-medium text-[#1e2126] mb-2">
                How did you hear about us?
              </label>
              <select
                id="referral"
                name="referral"
                defaultValue=""
                className="w-full px-4 py-3 bg-white border border-[#eae5e1] rounded-lg text-[#1e2126] focus:ring-2 focus:ring-gold focus:border-gold"
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="ai-assistant">AI assistant (ChatGPT, Claude, Gemini, Perplexity)</option>
                <option value="google-search">Google or other search engine</option>
                <option value="linkedin">LinkedIn</option>
                <option value="referral">Referral / word of mouth</option>
                <option value="podcast-newsletter">Podcast or newsletter</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#1e2126] mb-2">
                What are you buying, and when?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-white border border-[#eae5e1] rounded-lg text-[#1e2126] placeholder-[#b5aca6] focus:ring-2 focus:ring-gold focus:border-gold"
                placeholder="e.g., £8m revenue distributor, heads of terms signed, six weeks of exclusivity..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gold text-[#2b1209] rounded-full font-bold hover:bg-gold-deep transition-colors"
            >
              Start a Conversation
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 text-center bg-[linear-gradient(110deg,#16181c_0%,#1e2126_60%,#26292f_100%)]">
        <a href="/" className="inline-block">
          <span className="flex justify-center mb-[18px]"><Emblem width={86} height={79} /></span>
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
          </a>
          {" "}&middot; &copy; 2026 Brightmere
        </p>
      </footer>
    </div>
  );
}
