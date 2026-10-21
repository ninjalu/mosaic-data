// Shared copy for the premium site (Oct 2026). Copy is carried over from the DD-only site
// (19 Oct 2026). Rules: quality of earnings is in scope, tested at transaction level (Lu, 21 Oct
// 2026); never imply accountancy-firm status; lender reliance comes from the financial DD firm.

export const CHECKS = [
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

export const STEPS = [
  { when: "Day 1", what: "Scoping call, NDA and a short data request: the order, invoice, stock and job exports the business already has." },
  { when: "Days 2-4", what: "We map what the data can support. If it cannot answer the questions, we say so and stop. You pay for the days used." },
  { when: "Weeks 1-2", what: "The read: every check, run on the target's own records and tied back to the ledger." },
  { when: "Week 3", what: "Findings memo and a working session with you and your advisers. Faster if exclusivity is tight." },
];

export const DELIVERABLES = [
  "A findings memo ranked by price impact, every finding sized in pounds and traced to the source rows",
  "The questions to put to the seller before you sign, with the evidence behind each one",
  "A working session with you and your advisers to walk the findings",
  "The rebuilt dataset, so your first numbers after completion start from something true",
];

export const TERMS = ["Half on instruction, half on delivery", "Fixed before we start", "Stop early if the data can't support it"];

export const COMPARISON = [
  { name: "Financial DD", by: "Your accountants", from: "Trial balance, management accounts, statutory accounts", answers: "Are the earnings and net debt what the seller claims?", hl: false },
  { name: "Commercial DD", by: "Market consultants", from: "Market data, customer interviews", answers: "Is this a good market to be in?", hl: false },
  { name: "Operator diligence", by: "Brightmere", from: "The target's own orders, invoices, stock, jobs and operational logs", answers: "Is the business underneath the numbers the one you are paying for?", hl: true },
];

// Commitments that are true of every engagement. Used as "How we work" on About.
export const PRINCIPLES = [
  { t: "Every finding sized in pounds", b: "Ranked by what it does to the price, and traced back to the rows it came from." },
  { t: "Fixed before we start", b: "£15,000 per target, agreed up front. Half on instruction, half on delivery. No day rates." },
  { t: "We stop if the data can't answer", b: "The first few days map what the data can support. If it cannot, we say so, and you pay for those days only." },
  { t: "Founder-led, start to finish", b: "Lu scopes every engagement, reviews every finding before it reaches you and walks you through the results." },
];

export const NAV = [
  {
    label: "What we do",
    href: "/operator-diligence",
    children: [
      { label: "Operator diligence", href: "/operator-diligence" },
      { label: "What we check", href: "/operator-diligence#what-we-check" },
      { label: "How it runs", href: "/operator-diligence#how-it-runs" },
      { label: "Fee", href: "/operator-diligence#fee" },
    ],
  },
  { label: "Who we work with", href: "/who-we-work-with" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Brightmere", href: "/about" },
      { label: "The story", href: "/story" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];
