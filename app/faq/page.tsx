import type { Metadata } from "next";
import Wordmark from "../components/Wordmark";
import Emblem from "../components/Emblem";

export const metadata: Metadata = {
  title: "FAQ | Brightmere - Cash Flow & Working Capital, Answered Straight",
  description:
    "Straight answers to the questions mid-market owners ask about cash flow and working capital: why profitable businesses run out of cash, what a working capital diagnostic costs, how the 13-week forecast works, and how working capital moves your sale price.",
};

type QA = { q: string; a: string[] };
type Section = { id: string; eyebrow: string; title: string; intro?: string; items: QA[] };

const SECTIONS: Section[] = [
  {
    id: "cash-tight",
    eyebrow: "The problem",
    title: "“Why is my cash always tight?”",
    items: [
      {
        q: "Why is my business profitable but I never have any cash?",
        a: [
          "Because profit counts a sale the day you invoice it; cash arrives the day the customer actually pays. In between, the money sits in receivables and stock - so a growing, profitable business can watch the P&L improve while the bank balance gets worse.",
          "The money usually isn’t gone. It’s parked: in inventory you bought ahead of sales, in invoices your customers haven’t paid yet, and in supplier bills you settled earlier than you needed to. Reading those three ledgers line by line tells you exactly where, and how much.",
        ],
      },
      {
        q: "Where does the cash actually go in my business?",
        a: [
          "In an inventory-heavy business, cash gets trapped in four places: stock (slow movers, phantom lines, safety stock nobody sized), receivables (invoices drifting past terms), supplier payments made faster than your customers pay you, and growth itself - every new pound of revenue needs stock and receivables funded up front before it comes back as cash.",
        ],
      },
      {
        q: "Why do I always run out of cash when we’re growing?",
        a: [
          "That’s overtrading, and it isn’t bad luck - it’s the arithmetic of your business model. If you hold stock and give customers credit, every pound of new sales has to be funded before it’s collected: you buy the stock, you wait out the payment terms, and only then does the cash come back. The faster you grow, the more of tomorrow’s cash you spend today.",
          "The fix isn’t necessarily to slow down. It’s to know exactly how much cash each pound of growth consumes, shorten the cycle where you can, and fund the rest deliberately instead of discovering the gap mid-quarter.",
        ],
      },
      {
        q: "What is working capital in plain English - and why does mine keep going up?",
        a: [
          "Working capital is the cash your operation needs just to keep the wheels turning: stock, plus what customers owe you, minus what you owe suppliers. It’s money that’s working for the business but not available to spend.",
          "It creeps up for predictable reasons: revenue growth (more stock, more receivables), terms drifting longer, SKU proliferation, and safety stock that never gets re-sized. A useful way to hold it: for every £1 of sales, some number of pence is tied up in the cycle. Most owners have never seen that number for their own business - it’s the first thing worth knowing.",
        ],
      },
      {
        q: "How much cash is tied up in my inventory and receivables - and how do I find out?",
        a: [
          "You can get a rough answer today from three reports: your aged debtors, your stock valuation, and your aged creditors. Each day of sales sitting in receivables is roughly annual revenue ÷ 365 in cash - so a £18M business carrying 5 unnecessary days of debtors has about £250K parked there alone.",
          "The precise answer needs the transaction detail underneath: which SKUs, which customers, which invoices. That’s what a Cash X-Ray does - it reads the actual ledgers and puts a pound figure on each pocket of trapped cash, so you’re acting on named items, not averages.",
        ],
      },
      {
        q: "Why is my cash tight every time we hit our busy season?",
        a: [
          "Seasonal working capital is tidal: you build stock for months, it converts to receivables at the peak, and the cash lands weeks after that. Your funding need is set by the peak of that build - not the average - and the cash-rich trough after the season is a trap, because the water is coming back.",
          "The practical move is to map the swing: how big is peak-to-trough, how long is the build, and does the peak land mid-month where month-end reporting never sees it. Then you size the facility to the swing and stop being surprised by a tide you can see coming.",
        ],
      },
      {
        q: "Should I get a working capital loan, or fix the underlying problem first?",
        a: [
          "Fix first, borrow second. The cheapest capital you have is the cash already trapped in your own cycle - releasing it costs nothing and improves the business at the same time. Borrowing to cover a leak pays a lender to ignore the problem.",
          "Debt absolutely has a place: funding a genuine seasonal swing or a structural baseline is what revolving facilities are for. But you can only match the right money to the need after you know the shape of the need - which is why the diagnostic comes before the bank conversation, not after.",
        ],
      },
    ],
  },
  {
    id: "the-service",
    eyebrow: "The service",
    title: "What a working capital diagnostic actually is",
    items: [
      {
        q: "What does a working capital consultant actually do?",
        a: [
          "Finds where your cash is stuck - stock, receivables, supplier terms - puts a pound figure on each pocket, and then changes the processes and terms that trapped it. The good ones work from your data; the rest work from interviews and industry averages.",
          "Brightmere’s version is deliberately narrow: we read your actual ledgers, transaction by transaction, over one week. The deliverable is a sized list - “here is where your cash is, here is what each item is worth, here are the three levers that move it” - not a strategy deck.",
        ],
      },
      {
        q: "How much does a cash flow / working capital diagnostic cost?",
        a: [
          "The Cash X-Ray is a fixed fee, agreed before we start - [PRICING TO CONFIRM: fixed fee or bracket here]. There’s no open-ended retainer and no day-rate meter running: one week, one price, findings sized in pounds.",
          "Follow-on Release work - actually fixing the leaks - is scoped and priced separately against the sized findings, so you decide with the numbers in front of you. You’ll never be asked to commit to fixing anything before you know what it’s worth.",
        ],
      },
      {
        q: "How long does a working capital review take?",
        a: [
          "One week for the diagnostic, assuming we get data access on day one. Fixing what it finds - the Release phase - typically runs one to three months depending on which levers matter: collections process changes land in weeks, supplier term renegotiations and stock rationalisation take longer.",
        ],
      },
      {
        q: "Is hiring a cash flow consultant worth it for a business my size?",
        a: [
          "It’s worth it when three things are true: you’re roughly $15–50M revenue, you manage hundreds or thousands of SKUs or customers (too many to track by hand), and cash feels tighter than your profit says it should. In that zone there’s almost always six or seven figures sitting in the cycle, and a fixed-fee week that names it pays for itself quickly.",
          "It’s honestly not worth it if you’re much smaller (the absolute pounds get thin), if you’re cash-rich with clean visibility already, or if your ledgers are too incomplete to read in a week. We tell people that on the first call - a diagnostic that finds nothing helps nobody.",
        ],
      },
      {
        q: "How is this different from hiring a fractional CFO?",
        a: [
          "A fractional CFO is an ongoing person: leadership, judgement, board presence, a day or two a week, indefinitely. A diagnostic is a fixed-scope event: one week, your data, a sized answer to one question - where is the cash and what’s it worth?",
          "They complement rather than compete. We often hand our findings and the operating rhythm - the 13-week forecast, the cash dashboard - to the client’s FD or fractional CFO to run. If what you actually need is a senior finance person in the room every week, hire that; if you need the cash found and sized first, that’s us.",
        ],
      },
      {
        q: "My accountant already does my books - why can’t they do this?",
        a: [
          "Different job. Your accountant’s work is backward-looking and category-level: accurate accounts, tax, compliance. A working capital diagnostic is operational and transaction-level: which SKUs are dead, which customers pay 20 days late, which invoices bounce for errors, which supplier terms you’re not using.",
          "Most accountants simply aren’t set up to read fifty thousand transactions for patterns - it’s not what you pay them for. Keep your accountant; this answers a question their engagement was never designed to ask.",
        ],
      },
      {
        q: "Can’t I just buy cash flow forecasting software instead?",
        a: [
          "Software shows you a dashboard of whatever you feed it. It won’t decide which SKUs to cut, renegotiate a supplier’s terms, or find the invoice errors making customers pay late - and if the underlying flows are messy, the forecast is a confident picture of bad assumptions.",
          "The sequence that works: fix the flows first, then instrument them. We often set clients up with a live forecast at the end of an engagement - but as the output of clean data and a working process, not a substitute for one.",
        ],
      },
      {
        q: "How much cash can you realistically free up - and how do you know before you start?",
        a: [
          "Honest answer: we don’t know before we look, and neither does anyone else. The “5–15% of revenue” figures that circulate online are marketing averages - some businesses are sitting on seven figures, some genuinely have little trapped, and quoting a promise before reading your ledgers would be theatre.",
          "What we can promise is the order of operations: the X-Ray sizes every finding in pounds before you spend anything on fixing them. You learn what the prize is before you bet on it - and if the prize is small, we’ll say so.",
        ],
      },
      {
        q: "What happens after the diagnostic - do you actually fix things, or just hand me a report?",
        a: [
          "Both exist, and they’re separate decisions. The X-Ray week ends with sized findings and a prioritised plan - that’s the fixed-fee deliverable, complete in itself; some clients take it and execute with their own team.",
          "If you want us to fix the leaks, that’s the Release phase: scoped against the specific findings, priced separately, agreed only once you’ve seen the numbers. We’re upfront that Release is where deeper work happens - but the diagnostic is never a teaser for it.",
        ],
      },
    ],
  },
  {
    id: "ccc",
    eyebrow: "The mechanics",
    title: "DSO, inventory, and supplier terms",
    items: [
      {
        q: "What is the cash conversion cycle, and what’s a good one for my industry?",
        a: [
          "The cash conversion cycle is the number of days between paying your suppliers and collecting from your customers: days of receivables, plus days of inventory, minus days of payables. A distributor might run 60+ days; a discount grocer runs negative - suppliers fund the whole business.",
          "Treat published “good” numbers with suspicion: they’re mostly large-cap averages, and the headline CCC hides more than it shows. The useful comparisons are your own trend over time and the spread between your product lines and customers - that’s where the money is, and it never shows up in a league table.",
        ],
      },
      {
        q: "What’s a good DSO - how fast should my customers be paying me?",
        a: [
          "Measure yourself against your own terms, not an industry average. If your standard terms are 30 days and your DSO is 48, you’re lending customers 18 days of free money - and each of those days is worth roughly annual revenue ÷ 365 in cash. On £18M of revenue, that gap is about £890K.",
          "Then split it: DSO is an average, and averages hide the answer. Two or three named customers usually account for most of the drift - which turns a vague “collections problem” into a short list of conversations.",
        ],
      },
      {
        q: "How do I get customers to pay faster without damaging the relationship?",
        a: [
          "Start from an uncomfortable fact: most late payment is caused by the seller. Invoice errors, missing PO numbers, unclear terms, and nobody chasing consistently - fix first-time-right invoicing and a polite, predictable chasing cadence and a chunk of your DSO disappears without a single awkward conversation.",
          "For terms themselves, bake them into new deals and product launches rather than retrofitting existing relationships - resistance is far lower at the start of something new. And when a customer is genuinely distressed, be the squeakiest wheel: friendly, early, and first in the queue.",
        ],
      },
      {
        q: "My customers pay in 60 days but I pay suppliers in 30 - how do I close that gap?",
        a: [
          "Right now you’re funding a 30-day gap out of your own pocket on every transaction. Close it from both ends: tighten customer terms at renewal and on new lines, fix the invoice-accuracy and chasing problems that stretch 60 to 75, and renegotiate supplier terms where the supplier’s balance sheet is stronger than yours - large suppliers can fund those days cheaper than you can, and it’s often priced in.",
          "What not to do: just pay late. Taking 60 days on agreed-30 terms is fragile theatre - it survives exactly until their CFO changes, and it comes back to you as price increases and de-prioritised supply.",
        ],
      },
      {
        q: "How much inventory should I carry - and how do I know if I’m holding too much?",
        a: [
          "Enough to hit the service level you’ve actually promised customers - not the comfort level your ops team prefers. The tell-tales of too much: a long tail of slow movers nobody reviews, safety stock set years ago and never re-sized, and SKU counts that only ever go up.",
          "The tail is where the money hides. Everyone loves adding products; nobody loves cutting them - and the cash benefit of pruning the tail is often bigger than the profit benefit. A line-level read of stock ageing against rate of sale turns that from an argument into a list.",
        ],
      },
      {
        q: "Should I pay suppliers early to take the discount, or hold the cash?",
        a: [
          "It’s arithmetic, not philosophy. Annualise the discount and compare it to your cost of capital: 2% for paying 30 days early is roughly 24% annualised - far better than any facility you’re paying for, so take it if you have genuine headroom. If taking it squeezes your buffer in a tight month, the discount isn’t worth the risk.",
          "Do the sum per supplier, once, and turn it into a rule - this is a decision that should be mechanical, not re-debated every month-end.",
        ],
      },
      {
        q: "How do I negotiate longer payment terms with suppliers without hurting the relationship?",
        a: [
          "Negotiate at moments of change - new product lines, volume step-ups, contract renewals - and trade something real: committed volume, better forecasts, a longer agreement. Cold asks for longer terms with nothing in return get remembered.",
          "Target the suppliers whose balance sheets are stronger than yours; they can carry those days cheaper than you can. And don’t squeeze the small, fragile ones - terms they have to fund on expensive debt come straight back to you as price rises and supply risk.",
        ],
      },
    ],
  },
  {
    id: "forecast",
    eyebrow: "The forecast",
    title: "The 13-week cash flow forecast",
    items: [
      {
        q: "What is a 13-week cash flow forecast, and why 13 weeks?",
        a: [
          "It’s a weekly schedule of actual cash in and out of the bank, 13 weeks ahead - one quarter. Thirteen weeks is the sweet spot: near enough that the numbers are real receipts and payments rather than P&L abstractions, far enough that you can still act on what you see.",
          "Think of it as a scheduling tool, not a prediction. It won’t be exactly right - it’s there so that a squeeze in week 9 becomes a decision you make in week 2.",
        ],
      },
      {
        q: "Does a business my size actually need one, or is that just for companies in trouble?",
        a: [
          "The restructuring stigma is out of date - well-run businesses use the 13-week as a steering wheel, not a life raft. You need one if any of these are true: seasonal stock builds, tight headroom on your facility, a growth spurt underway, a refinance or sale on the horizon, or one customer worth more than 20% of revenue.",
          "If you’re genuinely cash-rich with boring, predictable flows, a monthly view may be enough. But most $15–50M businesses that think they’re in that category are looking at averages that say fine while the weeks underneath say otherwise.",
        ],
      },
      {
        q: "Can I build a 13-week forecast myself in a spreadsheet?",
        a: [
          "Yes - the mechanics are simple. Opening bank balance, plus expected receipts, minus expected payments, week by week. Weeks 1–4 come straight from your ledgers (invoices already raised, bills already due); weeks 5–13 come from trading assumptions.",
          "The hard part isn’t the maths, it’s the discipline: reconcile to the bank every Monday, roll it forward every week, and keep it alive past month two - which is where most spreadsheet forecasts quietly die. If yours has died twice already, the problem is the process around it, not the template.",
        ],
      },
      {
        q: "How often does a cash flow forecast need updating, and who should own it?",
        a: [
          "Weekly, on a fixed rhythm - reconcile actuals Monday, roll forward and review Tuesday. Ownership sits with finance (your FD or controller), with sales and ops feeding their assumptions in; a forecast owned by “everyone” is owned by no one.",
          "The most valuable habit costs nothing: compare this week’s version against last week’s. If week 8 just got £200K worse, something moved - and version-to-version comparison is where you catch it early.",
        ],
      },
      {
        q: "Why are my cash flow forecasts always wrong?",
        a: [
          "Almost always one of three things: receipt-timing assumptions (the forecast believes customers pay on time; your debtor ledger says otherwise), the seam at week 4–5 where real ledger data hands over to trading assumptions, or blending different seasonal patterns - domestic and export, core and promo - into one shapeless average.",
          "Fix those and stop chasing perfection: the goal is a forecast whose errors shrink over time and whose surprises arrive early. Wrong-but-improving beats precise-but-dead.",
        ],
      },
    ],
  },
  {
    id: "exit",
    eyebrow: "The exit",
    title: "Selling, raising, and due diligence",
    items: [
      {
        q: "What is a working capital peg, and how does it affect what I get paid when I sell?",
        a: [
          "The peg is the “normal” level of working capital a buyer requires you to deliver with the business - usually set from your own trailing-twelve-month average during diligence. Deliver less at completion and the price drops pound for pound; deliver more and you’ve gifted the buyer cash you could have taken out.",
          "Here’s what deal advisors rarely say plainly: because the peg is set from your history, the 12–24 months before a sale are the peg. Run a bloated cycle in that window and it gets baked in as “normal” - you hand over that working capital forever. Tighten the cycle early and the freed cash is yours twice: once in the bank now, once in a lower peg at completion.",
        ],
      },
      {
        q: "What do buyers look at in my working capital during due diligence?",
        a: [
          "Trend and quality, not just level. Expect them to pull: DSO/DIO/DPO trends over 2–3 years, aged receivables (how much is genuinely collectable), stock ageing and obsolescence provisions, seasonal swings month by month, and customer concentration.",
          "They’re also expert at spotting window-dressing - payables stretched or invoices pulled forward to flatter the completion date get normalised right back out, and worse, they read as a management credibility problem. Clean history beats clever timing every time.",
        ],
      },
      {
        q: "Do I need a quality of earnings report before going to market - and how far in advance should working capital work start?",
        a: [
          "They’re different tools on different clocks. A QoE is an accountant’s validation of your earnings, typically commissioned 3–6 months before market. Working capital work is operational and needs to start earlier - ideally 12–24 months out - because it takes time to change the trailing history the peg will be set from.",
          "To be clear about the line: Brightmere doesn’t produce QoE reports. What we do is make sure that when the QoE team and the buyer’s diligence team arrive, what they find - clean cycles, explained numbers, no surprises - supports your price instead of eroding it.",
        ],
      },
      {
        q: "Can messy working capital actually reduce my sale price?",
        a: [
          "Yes, three separate ways. A bloated trailing history sets the peg high, which transfers cash to the buyer at completion. Weak data invites diligence discounting - buyers price uncertainty against you. And a leaky cash cycle reads as a management-quality signal that colours the whole negotiation.",
          "The same discipline works in reverse: cash you free before a sale is money you keep, and the cleaner machine often re-prices the business on top. Working capital is one of the few places where exit prep pays you before the exit.",
        ],
      },
    ],
  },
  {
    id: "data",
    eyebrow: "The practicalities",
    title: "Data, security, and your team’s time",
    items: [
      {
        q: "What systems do you connect to - will this work with my ERP or accounting software?",
        a: [
          "Almost certainly. We work from standard exports or read-only access to mainstream systems - QuickBooks, Xero, Sage, NetSuite, SAP Business One, Microsoft Dynamics, and the common inventory platforms alongside them. If your system can export a ledger to CSV, we can read it.",
          "What the X-Ray actually needs is unglamorous: sales ledger, purchase ledger, stock records, and bank transactions. No system migration, no integration project - your data stays where it is.",
        ],
      },
      {
        q: "How safe is my financial data - what access do you actually need?",
        a: [
          "Read-only, and only what the engagement needs: ledger exports or view-only credentials that you grant and can revoke at any time. We never need write access to your systems, and we’ll sign an NDA before seeing a single number.",
          "Data is held encrypted, used solely for your engagement, never shared or pooled, and deleted on completion at your request - with written confirmation. If your buyer or lender later asks how the analysis was handled, the answer is one you’ll be comfortable giving.",
        ],
      },
      {
        q: "How much of my team’s time will a one-week diagnostic take?",
        a: [
          "A few hours, total. Someone - usually your FD, financial controller, or office manager - spends an hour or two on day one getting us data access, there’s a short mid-week check-in for questions, and a findings session at the end of the week.",
          "That’s the point of working from ledgers instead of workshops: the data does the talking, and your team keeps running the business while we read.",
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

      {/* Header */}
      <header className="fixed top-0 w-full bg-[#16181c]/90 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Emblem />
            <Wordmark dark />
          </a>
          <div className="flex items-center gap-8">
            <a
              href="/methodology"
              className="text-greenmuted text-[15px] hover:text-offwhite transition-colors hidden md:block"
            >
              Methodology
            </a>
            <a
              href="/pricing"
              className="text-greenmuted text-[15px] hover:text-offwhite transition-colors hidden md:block"
            >
              Pricing
            </a>
            <a
              href="/assess"
              className="text-greenmuted text-[15px] hover:text-offwhite transition-colors hidden sm:block"
            >
              2-min assessment
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
            Questions, answered
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-offwhite leading-[1.1] tracking-[-1px] mb-6">
            Cash &amp; Working Capital,{" "}
            <span className="text-[#ff7a5c] [text-shadow:0_0_26px_rgba(255,122,92,0.4)]">
              Answered Straight
            </span>
          </h1>
          <p className="text-xl text-greenmuted max-w-2xl mx-auto leading-relaxed">
            Brightmere runs one-week working capital diagnostics for inventory-heavy
            mid-market businesses - $15–50M revenue, in manufacturing, distribution,
            DTC, and retail. These are the questions owners and finance leaders ask us
            most, answered the way we&apos;d answer them on a call: plainly, in pounds,
            including the parts that don&apos;t favour us.
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
              Ask it on a 30-minute call - no pitch deck, no obligation. Or take the
              2-minute assessment and see which parts of your cash cycle deserve a
              closer look.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="px-8 py-4 bg-gold text-[#2b1209] rounded-full font-bold shadow-[0_6px_30px_rgba(232,93,71,0.3)] hover:bg-gold-deep transition-colors text-lg"
              >
                Book a call &rarr;
              </a>
              <a
                href="/assess"
                className="px-8 py-4 border-2 border-gold/55 text-green rounded-full font-semibold hover:border-gold transition-colors text-lg"
              >
                Take the 2-min assessment
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
