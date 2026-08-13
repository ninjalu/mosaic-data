import Wordmark from "./components/Wordmark";
import Emblem from "./components/Emblem";

export default function Home() {
  const valueLadder = [
    {
      tag: "Start here",
      headline: "Free up the cash",
      lead: "We start by freeing the cash trapped in your operations - often enough to fund everything that follows.",
      items: ["Working capital release - stock, receivables, supplier terms"],
      highlight: true,
    },
    {
      tag: "Then go deeper",
      headline: "Find the profit",
      lead: "Now the data is clean and connected, the same foundation exposes where profit quietly leaks.",
      items: [
        "Money-losing customers & products",
        "Pricing & discount optimisation",
        "Supplier terms & procurement",
        "Quote-to-cash velocity",
        "EBITDA & margin bridge",
        "Customer concentration & retention",
      ],
      highlight: false,
    },
    {
      tag: "Then plan ahead",
      headline: "Plan the future",
      lead: "Then we point it forward, so cash and stock stop catching you out.",
      items: [
        "Stock & demand planning",
        "Cash forecasting (rolling 13-week)",
        "Scenario & what-if modelling",
      ],
      highlight: false,
    },
    {
      tag: "And prove it",
      headline: "Prove the numbers",
      lead: "Until your numbers are clean enough to put in front of a board, a lender, or a buyer.",
      items: ["Investor-grade reporting", "Exit & QoE readiness"],
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
          <p className="flex items-center justify-center gap-2.5 text-[13px] tracking-[3px] text-greenmuted font-semibold uppercase mb-5"><span className="w-[9px] h-[9px] rounded-full bg-gold flex-shrink-0" />Operational + financial clarity</p>
          <h1 className="text-4xl md:text-5xl font-bold text-offwhite leading-[1.15] tracking-[-1px] mb-6">
            Profitable on paper. Short of cash. Buried in messy data.
            <br />
            <span className="text-[#ff7a5c] [text-shadow:0_0_26px_rgba(255,122,92,0.4)]">Flying half-blind</span> on the decisions that matter.
          </h1>

          <p className="text-xl text-greenmuted max-w-2xl mx-auto mb-6 leading-relaxed">
            When your operations and your finances don&apos;t speak the same language, the cost
            shows up everywhere it hurts:
          </p>
          <ul className="inline-block text-left mx-auto mb-8 space-y-2.5">
            {[
              "Cash that’s tight even when you’re profitable",
              "Growth that makes things harder, not easier",
              "Data scattered and messy, so nobody fully trusts the numbers",
              "Big decisions made on averages instead of evidence",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-greenmuted text-lg">
                <span className="mt-[9px] w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-greenmuted max-w-2xl mx-auto mb-6 leading-relaxed">
            That gap - between what your operation does and what your finance records - is where
            the money and the clarity hide. We close it.
          </p>
          <p className="text-base text-greenmuted max-w-2xl mx-auto mb-10 leading-relaxed">
            Thinking about AI? It only works on data it can trust. Bolt it onto messy numbers and
            you&apos;re <span className="text-gold font-medium">building on sand</span>. We lay the
            foundation first, so what you build on top actually holds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gold text-[#2b1209] rounded-full font-bold shadow-[0_6px_30px_rgba(232,93,71,0.3)] hover:bg-gold-deep transition-colors text-lg"
            >
              Book a call &rarr;
            </a>
            <a
              href="/methodology"
              className="inline-block px-8 py-4 border-2 border-gold/55 text-offwhite rounded-full font-semibold hover:border-gold transition-colors text-lg"
            >
              See the methodology
            </a>
          </div>
        </div>
      </section>

      {/* Sound familiar? - the symptoms */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4 pb-4 border-b-2 border-[#eae5e1]">
            Sound familiar?
          </h2>
          <p className="text-[#75706c] mb-12 max-w-2xl">
            These rarely show up one at a time. They&apos;re usually the same root cause wearing
            different clothes.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Profitable on paper, but cash is always tight.",
              "The board pack, the sales report and the finance number never quite agree.",
              "You find out what happened at month-end - weeks too late to do anything about it.",
              "You can’t say which customers or products actually make money.",
              "Growth is making it harder, not easier - and you’re not sure the plan is even deliverable.",
              "Too much still runs through you, or one or two key people.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-[14px] p-5 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
                <span className="mt-[7px] w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />
                <span className="text-[#1e2126]">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-[#1e2126] text-lg mt-12 max-w-2xl">
            These aren&apos;t six problems. They&apos;re one: your operations and your finances
            aren&apos;t connected. Brightmere connects them - clarity you can run the business on,
            and numbers that survive a buyer&apos;s scrutiny.
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
            Hundreds or thousands of SKUs, customers, jobs or transactions - more than anyone can
            track by hand, where the average hides the answer and the money is buried in the detail.
            Owner-led or PE-backed. Whichever side of a deal you&apos;re on.
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
              <div className="text-[#75706c] text-sm font-medium uppercase tracking-wider mb-4">Today</div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-[#1e2126] mb-6"><span className="w-2.5 h-2.5 rounded-full bg-gold/40 flex-shrink-0" />Flying blind</h3>
              <ul className="space-y-4">
                {[
                  "The bank balance is the only number everyone trusts",
                  "Basic questions - what makes money, can we deliver the plan - take a week to answer",
                  "Sales, ops and finance report different numbers for the same thing",
                  "Decisions get made on averages, weeks after the fact",
                  "Data is scattered across systems no one has joined up",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#75706c]">
                    <span className="mt-[7px] w-2 h-2 rounded-full bg-gold/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#e85d47]/10 to-[#ff9a82]/20 border border-gold/30 rounded-[14px] p-8">
              <div className="text-[#75706c] text-sm font-medium uppercase tracking-wider mb-4">With Brightmere</div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-[#1e2126] mb-6"><span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />One clear picture</h3>
              <ul className="space-y-4">
                {[
                  "One reconciled view where operations and finance finally agree",
                  "Which customers and products actually make money - named and sized",
                  "Whether the growth plan is physically deliverable, and where it breaks first",
                  "A clean data foundation solid enough to automate on",
                  "Numbers you can steer by - and trust in front of a board, a lender or a buyer",
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
              <p className="text-[#c24a36] text-sm font-medium">Usually where we start: the Cash X-Ray.</p>
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

      {/* Where the cash hides */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Decorative floating dots */}
        <div className="absolute top-16 left-[3%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float2" />
        <div className="absolute top-40 left-[8%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float1" />
        <div className="absolute top-28 left-[14%] w-6 h-6 bg-[#e85d47]/35 rounded-full animate-float3" />
        <div className="absolute bottom-20 right-[4%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float3" />
        <div className="absolute bottom-40 right-[10%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float2" />
        <div className="absolute bottom-28 right-[16%] w-6 h-6 bg-[#e85d47]/35 rounded-full animate-float1" />
        <div className="absolute top-24 right-[6%] w-6 h-6 bg-[#e85d47]/20 rounded-full animate-float1" />

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4 pb-4 border-b-2 border-[#eae5e1]">
            A foundation solid enough to automate on
          </h2>
          <p className="text-[#75706c] mb-12 max-w-2xl">
            Everyone wants to point AI at their business. But AI is only as good as the data beneath it -
            bolt it onto scattered, unreconciled numbers and you just automate the mess faster. The
            clean, reconciled layer we build to answer your questions is the same foundation your AI,
            forecasting and automation have to stand on. Get it right once, and what you build on top holds.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[14px] p-7 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
              <h3 className="text-lg font-semibold text-[#1e2126] mb-2">One source of truth</h3>
              <p className="text-[#75706c] text-sm">Every number traces back to source, and the &ldquo;three teams, three numbers&rdquo; problem goes away. One definition, documented and agreed.</p>
            </div>
            <div className="bg-white rounded-[14px] p-7 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
              <h3 className="text-lg font-semibold text-[#1e2126] mb-2">Reconciled to the pound</h3>
              <p className="text-[#75706c] text-sm">Audit-grade, tied back to the accounts - so a model can trust its inputs, and you can trust its outputs enough to act on them.</p>
            </div>
            <div className="bg-white rounded-[14px] p-7 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
              <h3 className="text-lg font-semibold text-[#1e2126] mb-2">Built to build on</h3>
              <p className="text-[#75706c] text-sm">A clean transaction layer that automation, forecasting and AI can sit on top of without collapsing. Rock, not sand.</p>
            </div>
          </div>

          <p className="text-[#1e2126] mt-12 max-w-2xl">
            This is the unglamorous work most people skip - and it&apos;s what earns the right to talk
            about AI at all.
          </p>
        </div>
      </section>

      {/* What We Can Do - the value ladder */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-16 right-[5%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float1" />
        <div className="absolute top-36 right-[12%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float3" />
        <div className="absolute bottom-20 left-[5%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float2" />
        <div className="absolute bottom-36 left-[11%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float1" />

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4 pb-4 border-b-2 border-[#eae5e1]">
            We start where it pays back fastest. Then it compounds.
          </h2>
          <p className="text-[#75706c] mb-14 max-w-2xl">
            Freeing trapped cash usually funds everything that follows. And because it all runs on the
            same clean foundation, each step makes the next one faster - from cash, to profit, to
            planning, to numbers that stand up to a buyer.
          </p>

          {/* Desktop: ascending value staircase - each box top sits higher */}
          <div className="hidden lg:flex gap-4">
            {/* Y-axis: value rises upward */}
            <div className="flex flex-col items-center justify-end pb-4">
              <span className="text-gold text-lg leading-none">&#8593;</span>
              <span className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-[#75706c] [writing-mode:vertical-rl] rotate-180">
                Value to you
              </span>
            </div>

            <div className="flex-1">
              <div className="flex items-start gap-6">
                {valueLadder.map((stage, si) => (
                  <div
                    key={si}
                    className="flex-1"
                    style={{ marginTop: `${(valueLadder.length - 1 - si) * 64}px` }}
                  >
                    <div
                      className={`relative rounded-[14px] p-5 border shadow-[0_2px_14px_rgba(30,33,38,0.06)] ${
                        stage.highlight
                          ? "bg-gradient-to-br from-[#e85d47]/10 to-[#ff9a82]/20 border-gold/30"
                          : "bg-white border-[#eae5e1]"
                      }`}
                    >
                      {/* Connector arrow climbing to the next step */}
                      {si < valueLadder.length - 1 && (
                        <div className="absolute top-1/2 -translate-y-1/2 -right-[23px] z-20 text-gold text-2xl font-bold leading-none">
                          &#8599;
                        </div>
                      )}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold text-[#2b1209] text-sm font-bold flex items-center justify-center">{si + 1}</span>
                        <span className="text-[#75706c] text-xs font-semibold uppercase tracking-wider">{stage.tag}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#1e2126] mb-2">{stage.headline}</h3>
                      {/* Value meter - fills further each step */}
                      <div className="flex items-center gap-1 mb-3">
                        {[0, 1, 2, 3].map((n) => (
                          <span key={n} className={`h-1.5 w-5 rounded-full ${n <= si ? "bg-gold" : "bg-[#eae5e1]"}`} />
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {stage.items.map((it, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#faf7f5] border border-[#eae5e1] text-[#1e2126] text-xs font-medium"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-right text-xs font-medium text-[#75706c] mt-4">As we dig deeper, each stage is worth more &#8594;</p>
            </div>
          </div>

          {/* Mobile / tablet: numbered ascending stack */}
          <div className="lg:hidden max-w-2xl mx-auto">
            {valueLadder.map((stage, si, arr) => (
              <div key={si} className="relative flex gap-4 pb-5 last:pb-0">
                {/* Connecting spine */}
                {si < arr.length - 1 && (
                  <div className="absolute left-5 top-12 -bottom-1 w-0.5 bg-gold/25" />
                )}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-gold text-[#2b1209] flex items-center justify-center font-bold ring-4 ring-[#faf7f5]">
                  {si + 1}
                </div>
                <div
                  className={`flex-1 rounded-[14px] p-5 border shadow-[0_2px_14px_rgba(30,33,38,0.06)] ${
                    stage.highlight
                      ? "bg-gradient-to-br from-[#e85d47]/10 to-[#ff9a82]/20 border-gold/30"
                      : "bg-white border-[#eae5e1]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className="text-[#75706c] text-xs font-semibold uppercase tracking-wider">{stage.tag}</span>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {[0, 1, 2, 3].map((n) => (
                        <span key={n} className={`h-1.5 w-4 rounded-full ${n <= si ? "bg-gold" : "bg-[#eae5e1]"}`} />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#1e2126] mb-2">{stage.headline}</h3>
                  <p className="text-[#75706c] text-sm mb-3 leading-relaxed">{stage.lead}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.items.map((it, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#faf7f5] border border-[#eae5e1] text-[#1e2126] text-xs font-medium"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
              <h3 className="text-[#1e2126] font-semibold text-lg mb-2">One Week, Not One Quarter</h3>
              <p className="text-[#75706c] text-sm">
                Bias for action. A sharp answer in days beats a perfect answer delivered after
                the cash crunch has already happened.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Founder Story */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Decorative floating dots */}
        <div className="absolute top-12 right-[8%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float1" />
        <div className="absolute top-32 right-[4%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float2" />
        <div className="absolute top-24 right-[14%] w-6 h-6 bg-[#e85d47]/35 rounded-full animate-float3" />
        <div className="absolute bottom-16 left-[6%] w-6 h-6 bg-[#e85d47]/30 rounded-full animate-float3" />
        <div className="absolute bottom-36 left-[12%] w-6 h-6 bg-[#e85d47]/25 rounded-full animate-float1" />
        <div className="absolute bottom-24 left-[3%] w-6 h-6 bg-[#e85d47]/35 rounded-full animate-float2" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="bg-white rounded-[14px] p-8 md:p-12 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 bg-[#eae5e1] rounded-[14px] flex-shrink-0 flex items-center justify-center text-3xl font-bold text-[#75706c]">
                Lu
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1e2126] mb-4">Why I Started Brightmere</h2>
                <div className="space-y-4 text-[#75706c] leading-relaxed">
                  <p>
                    I&apos;m Lu. I started in accounting and corporate finance before moving into
                    data and engineering. The gap between those two worlds - what a business does,
                    and what its numbers record - is where I&apos;ve spent my career, because that
                    gap is where the money and the clarity hide.
                  </p>
                  <p>
                    Operationally complex companies are sitting on answers they can&apos;t see: cash
                    trapped in the detail, growth that&apos;s harder than it should be, decisions made
                    on averages. The answer is usually already in their own systems. They just
                    don&apos;t have anyone who can read the P&amp;L <em>and</em> get into the data to find it.
                  </p>
                  <p className="text-[#1e2126]">
                    So I built Brightmere to do both - and to hand owners something rare: numbers they
                    can actually run the business on, and trust in front of a board, a lender, or a buyer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1e2126] mb-4">
            Start With a Cash X-Ray
          </h2>
          <p className="text-[#75706c] mb-12">
            Priced as an investment, not an hourly bill. If we find $200K stuck in your
            business, the fee pays for itself many times over.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(30,33,38,0.06)]">
              <div className="text-[#75706c] text-sm font-medium uppercase tracking-wider mb-2">Stage 1 &middot; Discovery</div>
              <h3 className="flex items-center gap-3 text-xl font-bold text-[#1e2126] mb-2"><span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />The Data Map</h3>
              <p className="font-mono text-sm text-[#c24a36] mb-6">2&ndash;3 days &middot; fixed fee</p>
              <p className="text-[#75706c] text-sm">
                We map what&apos;s actually in your finance and ERP systems - what&apos;s accessible,
                what&apos;s clean, what&apos;s missing - and scope the X-Ray precisely. Useful on its
                own, even if you go no further.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#e85d47]/10 to-[#ff9a82]/20 border border-gold/30 rounded-[14px] p-8">
              <div className="text-[#75706c] text-sm font-medium uppercase tracking-wider mb-2">Stage 2 &middot; The Cash X-Ray</div>
              <h3 className="flex items-center gap-3 text-xl font-bold text-[#1e2126] mb-2"><span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />The Diagnostic</h3>
              <p className="font-mono text-sm text-[#c24a36] mb-6">2&ndash;3 weeks &middot; fixed fee</p>
              <p className="text-[#1e2126] text-sm">
                A clear findings document: where your cash is trapped, sized in pounds, ranked by
                impact and speed - with the specific moves to free it. Every number traced back
                to your own data.
              </p>
            </div>
          </div>

          <p className="text-[#75706c] text-sm mt-8 max-w-xl mx-auto">
            What it earns into: an ongoing <span className="font-medium text-[#1e2126]">Cashflow Operating System</span> retainer - a
            live forecast and a cadence that keeps cash visible for good.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 px-8 py-4 bg-gold text-[#2b1209] rounded-full font-bold hover:bg-gold-deep transition-colors"
          >
            Let&apos;s Talk
          </a>
          <p className="text-[#75706c] text-sm mt-4">
            No commitment. We&apos;ll tell you honestly if we can help.
          </p>
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
                q: "Couldn't our finance team do this themselves?",
                a: "In theory, yes - and most CFOs ask exactly that. In practice, three things stop them. Bandwidth: the team is running close and board reporting, with no slack for a three-week deep-dive. Tooling: Excel chokes at SKU-level, 24-month, cross-system data - you need a real database. And the data engineering: joining ERP, billing, and inventory into one clean transaction layer is where most internal projects die. We show up, do all three, and get to an answer in weeks."
              },
              {
                q: "Isn't a strong fractional CFO already doing this?",
                a: "For ongoing operations, often yes - and we're not a replacement for that relationship. But when the answer lives below the averages - which 20 customers drove last quarter's margin move, including freight, returns, and the cost of slow payment - most fractional CFOs hit a tooling wall. We're the answer engine for the moments the question gets too granular for a spreadsheet."
              },
              {
                q: "Isn't the answer just a bigger bank facility?",
                a: "Sometimes you do need more headroom. But borrowing to cover cash that's trapped in your own operations is the expensive way - you're paying interest to a lender for money you've already earned. We find that cash first. Often it's enough that the facility conversation changes entirely."
              },
              {
                q: "What if our data is a mess?",
                a: "Most is. That's exactly why Stage 1 exists - we map what's actually usable before committing to scope. You'd be surprised: basic finance and inventory data usually has more than enough signal to find trapped cash. We work with what you have, not what you wish you had."
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
            30-minute call. No pitch deck. We&apos;ll ask about your business and tell you
            honestly if there&apos;s cash worth going after.
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
                Where do you suspect your cash is getting stuck?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-white border border-[#eae5e1] rounded-lg text-[#1e2126] placeholder-[#b5aca6] focus:ring-2 focus:ring-gold focus:border-gold"
                placeholder="e.g., We're growing but cash is always tight, and our inventory keeps creeping up..."
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
