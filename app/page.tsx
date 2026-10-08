import Image from "next/image";
import Wordmark from "./components/Wordmark";
import Emblem from "./components/Emblem";

export default function Home() {
  // Three named services (7 Oct 2026). One skill - checking whether the numbers hold up at
  // transaction level - sold at three moments. Prices are fixed and published on purpose:
  // people go looking for a thing they need done, with a price on it.
  const services = [
    {
      n: "1",
      tag: "Most people start here",
      name: "Diligence-ready numbers",
      who: "Owners of £5-50m businesses about to raise, sell, refinance or take on a new facility.",
      what: "We rebuild the picture from your own transactions, not the trial balance: cash proof, real margin by customer and product, working capital stripped of the flattering month, revenue concentration, and every heroic assumption named out loud. You get a findings pack a lender's or buyer's team can test, and the answers before they ask the questions.",
      time: "3 weeks",
      fee: "£10,000 fixed",
      chips: ["Fixed fee, agreed before we start", "Every finding sized in pounds", "Sits before the accountant's report, not instead of it"],
      highlight: true,
    },
    {
      n: "2",
      tag: "The other side of the deal",
      name: "Operator diligence for buyers",
      who: "Acquirers, searchers and holding companies buying a £3-20m business, and the advisers and lenders backing them.",
      what: "The same transaction-level read, pointed at the target: is the revenue what the data room says, which customers and jobs actually make money, how much cash the business really needs, and whether the operation can deliver the plan you are paying for. Runs alongside the chartered firm's financial due diligence and answers what it does not.",
      time: "2-3 weeks",
      fee: "£15,000 fixed",
      chips: ["Alongside the chartered FDD, not in place of it", "Capacity and bottleneck tested from the operational log", "Days, not months"],
      highlight: false,
    },
    {
      n: "3",
      tag: "What it earns into",
      name: "Numbers kept true",
      who: "Owners and finance leads who want the picture to stay reconciled after the event, month after month.",
      what: "The rebuilt view stays live: reconciled every month with anything that does not tie flagged, real margin and cash watched at line level, a rolling 13-week cash view, and one session a month on the numbers and the decisions in front of you. No day rates, no open-ended scope.",
      time: "Monthly",
      fee: "From £1,500 a month",
      chips: ["Reconciled monthly, exceptions flagged", "Cancel any time", "Grows with the business, not the hours"],
      highlight: false,
    },
  ];

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
              href="/pricing"
              className="text-greenmuted text-[15px] hover:text-offwhite transition-colors hidden md:block"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-gold text-[#2b1209] rounded-full font-bold text-[15px] hover:bg-gold-deep transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>
      </header>

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
          <p className="flex items-center justify-center gap-2.5 text-[13px] tracking-[3px] text-greenmuted font-semibold uppercase mb-5"><span className="w-[9px] h-[9px] rounded-full bg-gold flex-shrink-0" />Numbers that survive diligence</p>
          <h1 className="text-4xl md:text-5xl font-bold text-offwhite leading-[1.15] tracking-[-1px] mb-6">
            Finance and operations clarity.
            <br />
            <span className="text-[#ff7a5c] [text-shadow:0_0_26px_rgba(255,122,92,0.4)]">For the people running the business, and the people buying it.</span>
          </h1>

          <p className="text-xl text-greenmuted max-w-2xl mx-auto mb-6 leading-relaxed">
            Brightmere joins what your operation does to what your finance records, transaction
            by transaction, so the numbers you run a £5-50m business on are the same numbers that
            survive diligence. For owners and finance leaders. And for whoever is about to buy,
            back or lend to them.
          </p>
          <p className="text-lg text-greenmuted max-w-2xl mx-auto mb-10 leading-relaxed">
            Three named services. Fixed fees, published below. Every finding sized in pounds and
            traced to your own data.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-block px-8 py-4 bg-gold text-[#2b1209] rounded-full font-bold shadow-[0_6px_30px_rgba(232,93,71,0.3)] hover:bg-gold-deep transition-colors text-lg"
            >
              See the three services &rarr;
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-4 border-2 border-gold/55 text-offwhite rounded-full font-semibold hover:border-gold transition-colors text-lg"
            >
              Book a call
            </a>
          </div>
        </div>
      </section>

      {/* Sound familiar? - the symptoms */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4 pb-4 border-b-2 border-[#eae5e1]">
            When people call us
          </h2>
          <p className="text-[#75706c] mb-12 max-w-2xl">
            Someone is about to go through your numbers with a hostile eye, or you are about to
            rely on someone else&apos;s. That is the moment.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "You're raising money and the investor's first question will be whether the numbers are real.",
              "You're going to market and a buyer's diligence team will spend three weeks trying to pick them apart.",
              "You're refinancing or taking on a new facility and the lender wants the working capital story to hold.",
              "You're buying a business and the data room tells a smoother story than the transactions do.",
              "A new finance director has arrived and doesn't yet trust the number they inherited.",
              "The board pack, the sales report and the finance number never quite agree, and a deal is coming.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-[14px] p-5 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
                <span className="mt-[7px] w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />
                <span className="text-[#1e2126]">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-[#1e2126] text-lg mt-12 max-w-2xl">
            If none of these is in your next twelve months, your accountant is probably all you
            need, and we&apos;ll tell you so on the call.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-12 px-6 border-y border-[#eae5e1]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#75706c] text-sm uppercase tracking-[1.5px] mb-4">
            Built for operationally complex businesses
          </p>
          <p className="text-[#75706c] text-base max-w-2xl mx-auto">
            Hundreds or thousands of SKUs, customers, jobs, loads or transactions - more than anyone
            can track by hand, where the average hides the answer and the money is buried in the
            detail. Owner-led or PE-backed. Whichever side of the deal you&apos;re on.
          </p>
        </div>
      </section>

      {/* The core idea: operations + finance, one language */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4 pb-4 border-b-2 border-[#eae5e1]">
            Your operations and your finances don&apos;t speak the same language
          </h2>
          <p className="text-[#75706c] mb-12 max-w-2xl">
            Finance is really just a translation of operations. The real world happens - stock ships,
            a customer takes 90 days, a job runs long - and only weeks later does it surface as a number,
            blended into an average that buries where the money actually went. That lag, and that
            averaging, is where the money and the clarity hide.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[14px] p-7 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
              <h3 className="text-lg font-semibold text-[#1e2126] mb-2">Two systems, two truths</h3>
              <p className="text-[#75706c] text-sm">Sales counts it one way, operations runs it another, finance books a third. Same business, three numbers - and the difference falls on the floor between them.</p>
            </div>
            <div className="bg-white rounded-[14px] p-7 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
              <h3 className="text-lg font-semibold text-[#1e2126] mb-2">Answers arrive too late</h3>
              <p className="text-[#75706c] text-sm">By the time a problem reaches the P&amp;L, the cash has already moved and the decision has already been made on an average. You&apos;re always explaining the past.</p>
            </div>
            <div className="bg-white rounded-[14px] p-7 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
              <h3 className="text-lg font-semibold text-[#1e2126] mb-2">We make them one</h3>
              <p className="text-[#75706c] text-sm">We join operations and finance into a single view where every event carries its money - so the numbers agree, tie to source, and finally answer the questions you actually have.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Comparison */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
              <div className="text-[#75706c] text-sm font-medium uppercase tracking-wider mb-4">Your accountant</div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-[#1e2126] mb-6"><span className="w-2.5 h-2.5 rounded-full bg-gold/40 flex-shrink-0" />Records what happened</h3>
              <ul className="space-y-4">
                {[
                  "Works from the ledger: statutory accounts, management accounts, tax. Correctly.",
                  "Never opens the order book, the job sheets, the TMS or the ERP",
                  "Sees one or two transactions a year, so doesn't know what the other side's diligence pulls",
                  "Prepared the numbers, so their reassurance carries little weight with a buyer or lender",
                  "Still essential: the statutory sign-off and the chartered report a lender insists on",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#75706c]">
                    <span className="mt-[7px] w-2 h-2 rounded-full bg-gold/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#e85d47]/10 to-[#ff9a82]/20 border border-gold/30 rounded-[14px] p-8">
              <div className="text-[#75706c] text-sm font-medium uppercase tracking-wider mb-4">Brightmere</div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-[#1e2126] mb-6"><span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />Tests whether it holds up</h3>
              <ul className="space-y-4">
                {[
                  "Works from the transactions and ties them to the ledger - the part most firms can't do",
                  "Answers the diligence questions: concentration, real margin, working capital, run-rate",
                  "A second pair of eyes before the hostile pair arrives, with the fixes sized",
                  "Numbers you can steer by, and defend in front of a board, a lender or a buyer",
                  "Sits before or beside the chartered firm. Never instead of it, and never called QoE",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#1e2126]">
                    <span className="mt-[7px] w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 relative overflow-hidden">
        {/* Decorative floating dots */}
        <div className="absolute top-12 right-[5%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float1" />
        <div className="absolute top-32 right-[12%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float3" />
        <div className="absolute top-24 right-[3%] w-6 h-6 bg-[#e85d47]/35 rounded-full animate-float2" />
        <div className="absolute bottom-16 left-[4%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float2" />
        <div className="absolute bottom-32 left-[10%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float1" />
        <div className="absolute bottom-24 left-[16%] w-6 h-6 bg-[#e85d47]/35 rounded-full animate-float3" />
        <div className="absolute top-20 left-[3%] w-6 h-6 bg-[#e85d47]/20 rounded-full animate-float3" />

        <div className="max-w-5xl mx-auto relative z-10">
          <p className="flex items-center gap-2.5 text-[13px] tracking-[3px] text-[#75706c] font-semibold uppercase mb-3"><span className="w-[9px] h-[9px] rounded-full bg-gold flex-shrink-0" />The method</p>
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4 pb-4 border-b-2 border-[#eae5e1]">
            One business, three lenses
          </h2>
          <p className="text-[#75706c] mb-16 max-w-2xl">
            We read the same business three ways - and each lens is run at a resolution a
            spreadsheet can&apos;t reach: on your actual data, line by line, not category averages.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[14px] p-7 shadow-[0_2px_14px_rgba(30,33,38,0.06)] border-t-2 border-gold">
              <p className="text-[#75706c] text-xs font-semibold uppercase tracking-wider mb-2">Lens 1</p>
              <h3 className="text-xl font-semibold text-[#1e2126] mb-3">Financial clarity</h3>
              <p className="text-[#75706c] mb-3">
                Are the numbers real, and where&apos;s the money? Unit economics, working capital,
                margin durability and cash - the profit machine, read line by line.
              </p>
              <p className="text-[#c24a36] text-sm font-medium">The first thing diligence-ready numbers runs.</p>
            </div>

            <div className="bg-white rounded-[14px] p-7 shadow-[0_2px_14px_rgba(30,33,38,0.06)] border-t-2 border-gold">
              <p className="text-[#75706c] text-xs font-semibold uppercase tracking-wider mb-2">Lens 2</p>
              <h3 className="text-xl font-semibold text-[#1e2126] mb-3">Operational clarity</h3>
              <p className="text-[#75706c] mb-3">
                Can the operation actually deliver the plan? Capacity, the one true bottleneck,
                and where it breaks under load - read from the operational log, not a site visit.
              </p>
              <p className="text-[#c24a36] text-sm font-medium">The question growth is really asking.</p>
            </div>

            <div className="bg-white rounded-[14px] p-7 shadow-[0_2px_14px_rgba(30,33,38,0.06)] border-t-2 border-gold">
              <p className="text-[#75706c] text-xs font-semibold uppercase tracking-wider mb-2">Lens 3</p>
              <h3 className="text-xl font-semibold text-[#1e2126] mb-3">Leadership clarity</h3>
              <p className="text-[#75706c] mb-3">
                How much of the business depends on you, or a handful of key people? Founder and
                key-person dependency, measured from what the systems reveal - not the org chart.
              </p>
              <p className="text-[#c24a36] text-sm font-medium">What walks out the door if they do.</p>
            </div>
          </div>

          <p className="text-[#1e2126] text-center mt-12 max-w-3xl mx-auto">
            Read the plan like a finance person, name the constraint like an operator, compute it
            like a data scientist. That bridge is the whole point.
          </p>

          <div className="text-center mt-8">
            <a
              href="/methodology"
              className="text-[#1e2126] underline underline-offset-4 font-semibold hover:text-gold transition-colors"
            >
              See the full methodology &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* The three services */}
      <section id="services" className="py-20 px-6 relative overflow-hidden scroll-mt-24">
        <div className="absolute top-16 right-[5%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float1" />
        <div className="absolute top-36 right-[12%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float3" />
        <div className="absolute bottom-20 left-[5%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float2" />
        <div className="absolute bottom-36 left-[11%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float1" />

        <div className="max-w-5xl mx-auto relative z-10">
          <p className="flex items-center gap-2.5 text-[13px] tracking-[3px] text-[#75706c] font-semibold uppercase mb-3"><span className="w-[9px] h-[9px] rounded-full bg-gold flex-shrink-0" />What we do</p>
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4 pb-4 border-b-2 border-[#eae5e1]">
            Three services. One skill. Prices on the page.
          </h2>
          <p className="text-[#75706c] mb-14 max-w-2xl">
            The same work, checking whether the numbers hold up at transaction level, sold at the
            three moments it matters: before someone looks at yours, before you rely on someone
            else&apos;s, and every month after.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.n}
                className={`flex flex-col rounded-[14px] p-7 border shadow-[0_2px_14px_rgba(30,33,38,0.06)] ${
                  svc.highlight
                    ? "bg-gradient-to-br from-[#e85d47]/10 to-[#ff9a82]/20 border-gold/30"
                    : "bg-white border-[#eae5e1]"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold text-[#2b1209] text-sm font-bold flex items-center justify-center">{svc.n}</span>
                  <span className="text-[#75706c] text-xs font-semibold uppercase tracking-wider">{svc.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1e2126] mb-2">{svc.name}</h3>
                <p className="font-mono text-sm text-[#c24a36] mb-4">{svc.time} &middot; {svc.fee}</p>
                <p className="text-[#1e2126] text-sm font-medium mb-3">{svc.who}</p>
                <p className="text-[#75706c] text-sm leading-relaxed mb-5">{svc.what}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {svc.chips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#faf7f5] border border-[#eae5e1] text-[#1e2126] text-xs font-medium"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#75706c] text-sm mt-10 max-w-2xl">
            Not sure which one? Say what&apos;s coming up on the call and we&apos;ll tell you, including
            if the honest answer is &ldquo;none of them yet&rdquo;.
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
                <p className="text-[#75706c] text-xs font-semibold uppercase tracking-wider mb-2">Who you&apos;d be working with</p>
                <h2 className="text-2xl font-bold text-[#1e2126] mb-4">Lu Luo, founder</h2>
                <div className="space-y-4 text-[#75706c] leading-relaxed">
                  <p>
                    I trained in accounting and economics and started out in accounting and
                    corporate finance. Then I moved into data science and engineering, and spent
                    years building the systems that finance teams report from. That mix is rare:
                    most people who can build the system can&apos;t read a P&amp;L, and most who can
                    read the P&amp;L can&apos;t build the system. I do both, and Brightmere is me doing it
                    for you.
                  </p>
                  <p>
                    The job I keep being asked to do is the same one. Someone is about to put a
                    business&apos;s numbers in front of people with money, and wants to know what
                    those people will find before they find it. At a fast-growing B2B commerce
                    platform preparing for investment, the growth story was strong: sales up
                    quarter after quarter. Nobody had run the cohorts. When I did, the customers behind that
                    growth were mostly new ones, and most of them didn&apos;t come back. The
                    headline was true. The business underneath it was different, and leadership
                    needed to know that before the investors&apos; analysts told them. The same
                    gap, between what the numbers say and what the transactions show, is in
                    almost every business I open.
                  </p>
                  <p className="text-[#1e2126]">
                    That is what I built Brightmere to do: hand owners numbers they can run the
                    business on, and defend in front of a board, a lender or a buyer. I work from
                    London, with clients in the UK and the US, and I do the work myself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The story - teaser */}
      <section className="py-16 px-6 border-y border-[#eae5e1]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="flex items-center justify-center gap-2.5 text-[13px] tracking-[3px] text-[#75706c] font-semibold uppercase mb-3"><span className="w-[9px] h-[9px] rounded-full bg-gold flex-shrink-0" />Where this started</p>
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4">
            Does your board pack know what your order book knows?
          </h2>
          <p className="text-[#75706c] text-lg mb-6 max-w-2xl mx-auto">
            A fast-growing business preparing for investment, a top line everyone trusted, and
            the cohorts nobody had run. Same company, two records, one of them right. It is why
            Brightmere joins operations to finance at the transaction.
          </p>
          <a
            href="/story"
            className="text-[#1e2126] underline underline-offset-4 font-semibold hover:text-gold transition-colors"
          >
            Read the story &rarr;
          </a>
        </div>
      </section>

      {/* Why Us - Team Background */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4 pb-4 border-b-2 border-[#eae5e1]">
            Accounting Brain. Data-Science Hands.
          </h2>
          <p className="text-[#75706c] mb-12 max-w-2xl">
            Most data consultants can build the model but can&apos;t read the P&amp;L. Most accountants
            can read the P&amp;L but can&apos;t build the model. We do both - which is why we know
            where to look and how to actually go and get it.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
              <div className="w-12 h-12 bg-[#e85d47]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#e85d47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[#1e2126] font-semibold text-lg mb-2">We Speak Both Languages</h3>
              <p className="text-[#75706c] text-sm">
                A finance and accounting background, plus the engineering to build the system. We read
                the P&amp;L and the operation, and translate cleanly between them - which is the whole job.
              </p>
            </div>

            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
              <div className="w-12 h-12 bg-[#e85d47]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#e85d47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z M4 9h16 M9 4v16" />
                </svg>
              </div>
              <h3 className="text-[#1e2126] font-semibold text-lg mb-2">We Work at Line Level</h3>
              <p className="text-[#75706c] text-sm">
                Excel chokes around a million rows. Your business has tens of millions of
                transaction lines once you join stock, sales, returns, and terms. We work where
                the cash actually is.
              </p>
            </div>

            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
              <div className="w-12 h-12 bg-[#e85d47]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#e85d47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-[#1e2126] font-semibold text-lg mb-2">Every Finding Sized in Pounds</h3>
              <p className="text-[#75706c] text-sm">
                Not &ldquo;your inventory is high.&rdquo; We tell you how much cash is trapped, in which
                lines, and what it&apos;s worth to free it. If we can&apos;t find it, we say so.
              </p>
            </div>

            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
              <div className="w-12 h-12 bg-[#e85d47]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#e85d47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-[#1e2126] font-semibold text-lg mb-2">Three Weeks, Not Three Months</h3>
              <p className="text-[#75706c] text-sm">
                Deals run on a clock. A sharp answer before the other side asks beats a perfect
                answer delivered after the price has moved.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* How we price - the services above carry the numbers; this is the principle */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4">
            Fixed fees, agreed before we start
          </h2>
          <p className="text-[#75706c] mb-6">
            No day rates and no meter running. The fee is on the page, every finding carries a
            pound figure you can weigh it against, and if the first look says the prize is small,
            we say so and stop.
          </p>
          <a
            href="/pricing"
            className="text-[#1e2126] underline underline-offset-4 font-semibold hover:text-gold transition-colors"
          >
            How we price, in full &rarr;
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e2126] mb-12 pb-4 border-b-2 border-[#eae5e1]">
            Questions We Get Asked
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Why wouldn't I just ask my accountant?",
                a: "Because this isn't their job, and most will say so. Your accountant works from the ledger and records what happened, correctly. A buyer's or lender's team works from the transactions and asks whether the business is what you say it is: how concentrated the revenue is, which customers and products really make money, whether the working capital is normal or flattered. Answering that means joining the order book, the job sheets and the bank to the accounts, line by line. That's engineering as much as accounting, and it's the part most firms can't do. We do it before the other side does."
              },
              {
                q: "Is this a quality of earnings report?",
                a: "No, and we won't call it one. A QoE is a chartered firm's validation of your earnings, and a lender or buyer may still insist on one. What we produce sits before it or alongside it: the transaction-level read that tells you what that report will find, with time to fix it. If you need a QoE, we'll say so and point you to a firm."
              },
              {
                q: "Isn't a strong fractional CFO already doing this?",
                a: "For ongoing finance leadership, often yes, and we're not a replacement for that relationship. But when the answer lives below the averages - which 20 customers drove last quarter's margin move, including freight, returns and the cost of slow payment - most fractional CFOs hit a tooling wall. We're the answer engine for the moments the question gets too granular for a spreadsheet, and we're happy to work alongside yours."
              },
              {
                q: "What if our data is a mess?",
                a: "Most is. The first few days of every engagement map what's actually usable before we commit to the findings. You'd be surprised: basic finance, sales and operational exports usually carry more than enough signal. We work with what you have, not what you wish you had."
              },
              {
                q: "Do you replace our ERP or BI tools?",
                a: "No. We plug into whatever you're running - Sage, NetSuite, Xero, QuickBooks, your warehouse system - and read it. We make your existing investment more valuable; we don't rip it out."
              },
              {
                q: "How do you handle sensitive financial data?",
                a: "Data stays in your environment - we work via secure, read-only access, not data transfers. Happy to walk through our security posture on a call before anything is connected."
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
                <h3 className="flex items-center gap-3 text-[#1e2126] font-semibold mb-3"><span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />{item.q}</h3>
                <p className="text-[#75706c] leading-relaxed">{item.a}</p>
              </div>
            ))}
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
            Let&apos;s See If We&apos;re a Fit
          </h2>
          <p className="text-[#75706c] mb-8">
            30-minute call. No pitch deck. Tell us what&apos;s coming - a raise, a sale, a
            refinance, a deal - and we&apos;ll tell you honestly whether your numbers need the work.
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
                What&apos;s coming up, and when?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-white border border-[#eae5e1] rounded-lg text-[#1e2126] placeholder-[#b5aca6] focus:ring-2 focus:ring-gold focus:border-gold"
                placeholder="e.g., We're raising in Q1 and I'm not sure the margin numbers will stand up..."
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
          href="#contact"
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
