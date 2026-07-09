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
    <div className="min-h-screen bg-[#f4f7f3] text-[#1e352b]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#0a231b]/90 backdrop-blur-md z-50">
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
              href="/assess"
              className="text-greenmuted text-[15px] hover:text-offwhite transition-colors hidden sm:block"
            >
              2-min assessment
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-gold text-[#123b2d] rounded-full font-semibold text-[15px] hover:bg-gold-deep transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-36 pb-44 px-6 relative overflow-hidden bg-[linear-gradient(110deg,#0a231b_0%,#0d2b21_55%,#12382a_100%)]">
        {/* Noise-to-signal graphic */}
        <svg
          className="absolute left-0 bottom-0 w-full h-auto opacity-85 pointer-events-none"
          viewBox="0 0 1440 330"
          fill="none"
          aria-hidden="true"
        >
          <g fill="#e3b23c">
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
            stroke="#e3b23c"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.7"
          />
          <circle cx="1370" cy="54" r="9" fill="#e3b23c" />
          <circle cx="1370" cy="54" r="24" fill="#e3b23c" opacity="0.18" />
        </svg>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="flex items-center justify-center gap-2.5 text-[13px] tracking-[3px] text-greenmuted font-semibold uppercase mb-5"><span className="w-[9px] h-[9px] rounded-full bg-gold flex-shrink-0" />The Cash X-Ray</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite leading-[1.1] tracking-[-1px] mb-6">
            Find the <span className="text-gold [text-shadow:0_0_28px_rgba(227,178,60,0.34)]">Cash</span>
            <br />
            Trapped in Your Business.
          </h1>

          <p className="text-xl text-greenmuted max-w-2xl mx-auto mb-10 leading-relaxed">
            It&apos;s stuck in inventory you don&apos;t need, invoices you&apos;re not chasing,
            and supplier terms you&apos;re paying too early. We read your actual ledgers - line
            by line, not category averages - and show you exactly where your cash is and
            what it&apos;s worth. In one week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gold text-[#123b2d] rounded-full font-semibold shadow-[0_6px_30px_rgba(227,178,60,0.3)] hover:bg-gold-deep transition-colors text-lg"
            >
              Book a Cash X-Ray &rarr;
            </a>
            <a
              href="/assess"
              className="inline-block px-8 py-4 border-2 border-gold/55 text-offwhite rounded-full font-semibold hover:border-gold transition-colors text-lg"
            >
              Take the 2-min assessment
            </a>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-12 px-6 border-y border-[#dde8e0]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#6f8a7c] text-sm uppercase tracking-[1.5px] mb-6">
            Built for inventory-heavy mid-market businesses - <span className="font-mono font-semibold text-[#c9992e] normal-case">$15&ndash;50M</span> revenue
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[#1e352b] font-semibold text-lg">
            <span>Manufacturing</span>
            <span className="inline-block w-2 h-2 rounded-full bg-gold/40" />
            <span>Distribution &amp; Wholesale</span>
            <span className="inline-block w-2 h-2 rounded-full bg-gold/40" />
            <span>DTC</span>
            <span className="inline-block w-2 h-2 rounded-full bg-gold/40" />
            <span>Retail</span>
          </div>
          <p className="text-[#6f8a7c] text-sm mt-6 max-w-2xl mx-auto">
            The kind of business with hundreds or thousands of SKUs or customers - more than
            anyone can track by hand, where the average hides the answer and the cash is buried
            in the detail.
          </p>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e352b] mb-4 pb-4 border-b-2 border-[#dde8e0]">
            Four Ways Your Cash Gets Trapped
          </h2>
          <p className="text-[#6f8a7c] mb-12 max-w-2xl">
            The bank balance looks fine, so no one looks closer. Meanwhile your own money is
            sitting still in four places you can&apos;t see.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(18,59,45,0.06)]">
              <div className="flex items-center gap-3 text-2xl font-bold text-[#123b2d] mb-2"><span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />Stuck in stock</div>
              <div className="text-[#6f8a7c] text-sm">
                Slow movers, phantom lines, and safety stock no one sized. Cash sitting
                on a shelf instead of in your account.
              </div>
            </div>
            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(18,59,45,0.06)]">
              <div className="flex items-center gap-3 text-2xl font-bold text-[#123b2d] mb-2"><span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />Slow receivables</div>
              <div className="text-[#6f8a7c] text-sm">
                Invoices drifting past terms. Every extra day is your cash funding your
                customer&apos;s business instead of yours.
              </div>
            </div>
            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(18,59,45,0.06)]">
              <div className="flex items-center gap-3 text-2xl font-bold text-[#123b2d] mb-2"><span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />Paying too early</div>
              <div className="text-[#6f8a7c] text-sm">
                Settling suppliers faster than your customers pay you - funding the
                whole cycle out of your own pocket.
              </div>
            </div>
            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(18,59,45,0.06)]">
              <div className="flex items-center gap-3 text-2xl font-bold text-[#123b2d] mb-2"><span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />Growth that eats cash</div>
              <div className="text-[#6f8a7c] text-sm">
                Overtrading: the faster you grow, the tighter cash gets - and no one
                can explain why the profit isn&apos;t in the bank.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Comparison */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(18,59,45,0.06)]">
              <div className="text-[#6f8a7c] text-sm font-medium uppercase tracking-wider mb-4">Today</div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-[#123b2d] mb-6"><span className="w-2.5 h-2.5 rounded-full bg-gold/40 flex-shrink-0" />Flying Blind on Cash</h3>
              <ul className="space-y-4">
                {[
                  "The bank balance is the only cash number anyone trusts",
                  "\"Where's our cash tied up?\" takes a week to answer",
                  "The forecast is a spreadsheet someone updates on Fridays",
                  "When cash gets tight, the reflex is to call the bank for a bigger facility",
                  "Everyone manages the average; the answer lives below it",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#6f8a7c]">
                    <span className="mt-[7px] w-2 h-2 rounded-full bg-gold/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#e3b23c]/10 to-[#8fc0a9]/20 border border-gold/30 rounded-[14px] p-8">
              <div className="text-[#6f8a7c] text-sm font-medium uppercase tracking-wider mb-4">With Brightmere</div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-[#123b2d] mb-6"><span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />See Where Every Pound Is</h3>
              <ul className="space-y-4">
                {[
                  "Your cash conversion cycle, broken down by product line and customer",
                  "The exact SKUs and customers eating your cash - named and sized",
                  "DSO by customer: who's slow, by how much, what it costs",
                  "A 13-week cash forecast you can actually steer",
                  "The cheapest capital you have - the cash you've already earned - freed",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#1e352b]">
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
        <div className="absolute top-12 right-[5%] w-6 h-6 bg-[#e3b23c]/25 rounded-full animate-float1" />
        <div className="absolute top-32 right-[12%] w-6 h-6 bg-[#e3b23c]/30 rounded-full animate-float3" />
        <div className="absolute top-24 right-[3%] w-6 h-6 bg-[#e3b23c]/35 rounded-full animate-float2" />
        <div className="absolute bottom-16 left-[4%] w-6 h-6 bg-[#e3b23c]/30 rounded-full animate-float2" />
        <div className="absolute bottom-32 left-[10%] w-6 h-6 bg-[#e3b23c]/25 rounded-full animate-float1" />
        <div className="absolute bottom-24 left-[16%] w-6 h-6 bg-[#e3b23c]/35 rounded-full animate-float3" />
        <div className="absolute top-20 left-[3%] w-6 h-6 bg-[#e3b23c]/20 rounded-full animate-float3" />

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-[#1e352b] mb-4 pb-4 border-b-2 border-[#dde8e0]">
            Find the Cash. Free It. Keep It Visible.
          </h2>
          <p className="text-[#6f8a7c] mb-16 max-w-2xl">
            We start with a one-week diagnostic, fix the specific leaks it finds, then keep
            your cash visible on an ongoing rhythm.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-[#123b2d] font-bold text-sm">1</div>
              <div className="pl-8">
                <h3 className="text-xl font-semibold text-[#1e352b] mb-3">Cash X-Ray</h3>
                <p className="text-[#6f8a7c]">
                  One week. We connect your finance and ERP systems and trace cash from sale to
                  bank - finding where it&apos;s trapped and sizing each gap in pounds.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-[#123b2d] font-bold text-sm">2</div>
              <div className="pl-8">
                <h3 className="text-xl font-semibold text-[#1e352b] mb-3">Release</h3>
                <p className="text-[#6f8a7c]">
                  We fix the specific leaks - inventory discipline, collection priorities,
                  supplier terms - and turn the findings into cash back in your account.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-[#123b2d] font-bold text-sm">3</div>
              <div className="pl-8">
                <h3 className="text-xl font-semibold text-[#1e352b] mb-3">Cashflow Operating System</h3>
                <p className="text-[#6f8a7c]">
                  An ongoing layer that keeps cash visible: a live 13-week forecast, early-warning
                  alerts, and a cadence that makes cash a business habit - not a fire drill.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/methodology"
              className="text-[#123b2d] underline underline-offset-4 font-semibold hover:text-gold transition-colors"
            >
              See the full methodology &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Where the cash hides */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Decorative floating dots */}
        <div className="absolute top-16 left-[3%] w-6 h-6 bg-[#e3b23c]/25 rounded-full animate-float2" />
        <div className="absolute top-40 left-[8%] w-6 h-6 bg-[#e3b23c]/30 rounded-full animate-float1" />
        <div className="absolute top-28 left-[14%] w-6 h-6 bg-[#e3b23c]/35 rounded-full animate-float3" />
        <div className="absolute bottom-20 right-[4%] w-6 h-6 bg-[#e3b23c]/30 rounded-full animate-float3" />
        <div className="absolute bottom-40 right-[10%] w-6 h-6 bg-[#e3b23c]/25 rounded-full animate-float2" />
        <div className="absolute bottom-28 right-[16%] w-6 h-6 bg-[#e3b23c]/35 rounded-full animate-float1" />
        <div className="absolute top-24 right-[6%] w-6 h-6 bg-[#e3b23c]/20 rounded-full animate-float1" />

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-[#1e352b] mb-4 pb-4 border-b-2 border-[#dde8e0]">
            Where the Cash Hides
          </h2>
          <p className="text-[#6f8a7c] mb-12 max-w-2xl">
            Once you have hundreds of SKUs or customers, the cash story stops matching the P&amp;L.
            These are the cuts owners almost never see - because they only show up at the line level.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "The Aristocrat",
                result: "High margin that flatters the P&L - and quietly suffocates cash",
                lever: "Bloated inventory and long terms hide behind a great margin. We find them."
              },
              {
                title: "The Workhorse",
                result: "Low margin, unloved - and the product actually funding your business",
                lever: "Negative working capital, paid fast. Kill it for 'low margin' and you lose your funding."
              },
              {
                title: "Trapped Inventory",
                result: "The 200 SKUs eating your cash, three levels below the category view",
                lever: "Disciplined SKU-level analysis typically frees 15–30% of inventory value."
              },
              {
                title: "Receivables Drift",
                result: "Which customers are slow, by how many days, and what it costs you",
                lever: "Not 'DSO is up.' The named accounts, the exact day-impact, the cash to recover."
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[14px] p-6 transition-all shadow-[0_2px_14px_rgba(18,59,45,0.06)]">
                <h3 className="flex items-center gap-3 font-semibold text-[#123b2d] text-lg mb-2"><span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />{item.title}</h3>
                <p className="text-[#6f8a7c] mb-4">{item.result}</p>
                <div className="font-mono text-sm text-[#c9992e] font-semibold">
                  {item.lever}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Can Do - the value ladder */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-16 right-[5%] w-6 h-6 bg-[#e3b23c]/25 rounded-full animate-float1" />
        <div className="absolute top-36 right-[12%] w-6 h-6 bg-[#e3b23c]/30 rounded-full animate-float3" />
        <div className="absolute bottom-20 left-[5%] w-6 h-6 bg-[#e3b23c]/30 rounded-full animate-float2" />
        <div className="absolute bottom-36 left-[11%] w-6 h-6 bg-[#e3b23c]/25 rounded-full animate-float1" />

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-[#1e352b] mb-4 pb-4 border-b-2 border-[#dde8e0]">
            We Start With Cash. Then We Go Deeper.
          </h2>
          <p className="text-[#6f8a7c] mb-14 max-w-2xl">
            The Cash X-Ray frees the quick wins. Once your data is clean and connected, the same
            foundation powers the deeper profit work - so every engagement compounds.
          </p>

          {/* Desktop: ascending value staircase - each box top sits higher */}
          <div className="hidden lg:flex gap-4">
            {/* Y-axis: value rises upward */}
            <div className="flex flex-col items-center justify-end pb-4">
              <span className="text-gold text-lg leading-none">&#8593;</span>
              <span className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-[#6f8a7c] [writing-mode:vertical-rl] rotate-180">
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
                      className={`relative rounded-[14px] p-5 border shadow-[0_2px_14px_rgba(18,59,45,0.06)] ${
                        stage.highlight
                          ? "bg-gradient-to-br from-[#e3b23c]/10 to-[#8fc0a9]/20 border-gold/30"
                          : "bg-white border-[#dde8e0]"
                      }`}
                    >
                      {/* Connector arrow climbing to the next step */}
                      {si < valueLadder.length - 1 && (
                        <div className="absolute top-1/2 -translate-y-1/2 -right-[23px] z-20 text-gold text-2xl font-bold leading-none">
                          &#8599;
                        </div>
                      )}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold text-[#123b2d] text-sm font-bold flex items-center justify-center">{si + 1}</span>
                        <span className="text-[#6f8a7c] text-xs font-semibold uppercase tracking-wider">{stage.tag}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#1e352b] mb-2">{stage.headline}</h3>
                      {/* Value meter - fills further each step */}
                      <div className="flex items-center gap-1 mb-3">
                        {[0, 1, 2, 3].map((n) => (
                          <span key={n} className={`h-1.5 w-5 rounded-full ${n <= si ? "bg-gold" : "bg-[#dde8e0]"}`} />
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {stage.items.map((it, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#f4f7f3] border border-[#dde8e0] text-[#1e352b] text-xs font-medium"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-right text-xs font-medium text-[#6f8a7c] mt-4">As we dig deeper, each stage is worth more &#8594;</p>
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
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-gold text-[#123b2d] flex items-center justify-center font-bold ring-4 ring-[#f4f7f3]">
                  {si + 1}
                </div>
                <div
                  className={`flex-1 rounded-[14px] p-5 border shadow-[0_2px_14px_rgba(18,59,45,0.06)] ${
                    stage.highlight
                      ? "bg-gradient-to-br from-[#e3b23c]/10 to-[#8fc0a9]/20 border-gold/30"
                      : "bg-white border-[#dde8e0]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className="text-[#6f8a7c] text-xs font-semibold uppercase tracking-wider">{stage.tag}</span>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {[0, 1, 2, 3].map((n) => (
                        <span key={n} className={`h-1.5 w-4 rounded-full ${n <= si ? "bg-gold" : "bg-[#dde8e0]"}`} />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#1e352b] mb-2">{stage.headline}</h3>
                  <p className="text-[#6f8a7c] text-sm mb-3 leading-relaxed">{stage.lead}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.items.map((it, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#f4f7f3] border border-[#dde8e0] text-[#1e352b] text-xs font-medium"
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
          <h2 className="text-3xl font-bold text-[#1e352b] mb-4 pb-4 border-b-2 border-[#dde8e0]">
            Accounting Brain. Data-Science Hands.
          </h2>
          <p className="text-[#6f8a7c] mb-4 max-w-2xl">
            Most data consultants can build the model but can&apos;t read the P&amp;L. Most accountants
            can read the P&amp;L but can&apos;t build the model. We do both - which is why we know
            where to look and how to actually go and get it.
          </p>
          <p className="text-[#6f8a7c] text-center text-sm mb-12">
            Working with manufacturers, distributors, DTC brands, and retailers.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(18,59,45,0.06)]">
              <div className="w-12 h-12 bg-[#e3b23c]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#e3b23c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[#123b2d] font-semibold text-lg mb-2">We Think in Cash</h3>
              <p className="text-[#6f8a7c] text-sm">
                Finance and accounting background means we understand working capital, the cash
                conversion cycle, and what actually frees money - not just a tidy dashboard.
              </p>
            </div>

            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(18,59,45,0.06)]">
              <div className="w-12 h-12 bg-[#e3b23c]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#e3b23c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z M4 9h16 M9 4v16" />
                </svg>
              </div>
              <h3 className="text-[#123b2d] font-semibold text-lg mb-2">We Work at Line Level</h3>
              <p className="text-[#6f8a7c] text-sm">
                Excel chokes around a million rows. Your business has tens of millions of
                transaction lines once you join stock, sales, returns, and terms. We work where
                the cash actually is.
              </p>
            </div>

            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(18,59,45,0.06)]">
              <div className="w-12 h-12 bg-[#e3b23c]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#e3b23c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-[#123b2d] font-semibold text-lg mb-2">Every Finding Sized in Pounds</h3>
              <p className="text-[#6f8a7c] text-sm">
                Not &ldquo;your inventory is high.&rdquo; We tell you how much cash is trapped, in which
                lines, and what it&apos;s worth to free it. If we can&apos;t find it, we say so.
              </p>
            </div>

            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(18,59,45,0.06)]">
              <div className="w-12 h-12 bg-[#e3b23c]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#e3b23c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-[#123b2d] font-semibold text-lg mb-2">One Week, Not One Quarter</h3>
              <p className="text-[#6f8a7c] text-sm">
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
        <div className="absolute top-12 right-[8%] w-6 h-6 bg-[#e3b23c]/25 rounded-full animate-float1" />
        <div className="absolute top-32 right-[4%] w-6 h-6 bg-[#e3b23c]/30 rounded-full animate-float2" />
        <div className="absolute top-24 right-[14%] w-6 h-6 bg-[#e3b23c]/35 rounded-full animate-float3" />
        <div className="absolute bottom-16 left-[6%] w-6 h-6 bg-[#e3b23c]/30 rounded-full animate-float3" />
        <div className="absolute bottom-36 left-[12%] w-6 h-6 bg-[#e3b23c]/25 rounded-full animate-float1" />
        <div className="absolute bottom-24 left-[3%] w-6 h-6 bg-[#e3b23c]/35 rounded-full animate-float2" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="bg-white rounded-[14px] p-8 md:p-12 shadow-[0_2px_14px_rgba(18,59,45,0.06)]">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 bg-[#dde8e0] rounded-[14px] flex-shrink-0 flex items-center justify-center text-3xl font-bold text-[#6f8a7c]">
                Lu
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1e352b] mb-4">Why I Started Brightmere</h2>
                <div className="space-y-4 text-[#6f8a7c] leading-relaxed">
                  <p>
                    I&apos;m Lu - I started in accounting and corporate finance before moving into
                    data science. Cash is where those two worlds meet, and it&apos;s where most
                    businesses are quietly losing.
                  </p>
                  <p>
                    Owner-led companies with hundreds or thousands of SKUs or customers are sitting
                    on cash they can&apos;t see - trapped in stock, in slow invoices, in terms paid too early.
                    The answer is in their own ledgers. They just don&apos;t have anyone who can read
                    the P&amp;L <em>and</em> get into the data to find it.
                  </p>
                  <p className="text-[#1e352b]">
                    The cheapest capital any business has is the cash it&apos;s already earned. Before you
                    call the bank for a bigger facility, it&apos;s worth knowing how much of your own
                    money is just sitting still. That&apos;s what I find.
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
          <h2 className="text-3xl font-bold text-[#1e352b] mb-4">
            Start With a Cash X-Ray
          </h2>
          <p className="text-[#6f8a7c] mb-12">
            Priced as an investment, not an hourly bill. If we find $200K stuck in your
            business, the fee pays for itself many times over.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(18,59,45,0.06)]">
              <div className="text-[#6f8a7c] text-sm font-medium uppercase tracking-wider mb-2">Stage 1 &middot; Discovery</div>
              <h3 className="flex items-center gap-3 text-xl font-bold text-[#123b2d] mb-2"><span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />The Data Map</h3>
              <p className="font-mono text-sm text-[#c9992e] mb-6">2&ndash;3 days &middot; fixed fee</p>
              <p className="text-[#6f8a7c] text-sm">
                We map what&apos;s actually in your finance and ERP systems - what&apos;s accessible,
                what&apos;s clean, what&apos;s missing - and scope the X-Ray precisely. Useful on its
                own, even if you go no further.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#e3b23c]/10 to-[#8fc0a9]/20 border border-gold/30 rounded-[14px] p-8">
              <div className="text-[#6f8a7c] text-sm font-medium uppercase tracking-wider mb-2">Stage 2 &middot; The Cash X-Ray</div>
              <h3 className="flex items-center gap-3 text-xl font-bold text-[#123b2d] mb-2"><span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />The Diagnostic</h3>
              <p className="font-mono text-sm text-[#c9992e] mb-6">2&ndash;3 weeks &middot; fixed fee</p>
              <p className="text-[#1e352b] text-sm">
                A clear findings document: where your cash is trapped, sized in pounds, ranked by
                impact and speed - with the specific moves to free it. Every number traced back
                to your own data.
              </p>
            </div>
          </div>

          <p className="text-[#6f8a7c] text-sm mt-8 max-w-xl mx-auto">
            What it earns into: an ongoing <span className="font-medium text-[#1e352b]">Cashflow Operating System</span> retainer - a
            live forecast and a cadence that keeps cash visible for good.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 px-8 py-4 bg-gold text-[#123b2d] rounded-full font-semibold hover:bg-gold-deep transition-colors"
          >
            Let&apos;s Talk
          </a>
          <p className="text-[#6f8a7c] text-sm mt-4">
            No commitment. We&apos;ll tell you honestly if we can help.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e352b] mb-12 pb-4 border-b-2 border-[#dde8e0]">
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
              <div key={i} className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(18,59,45,0.06)]">
                <h3 className="flex items-center gap-3 text-[#123b2d] font-semibold mb-3"><span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />{item.q}</h3>
                <p className="text-[#6f8a7c] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment CTA */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-16 left-[6%] w-6 h-6 bg-[#e3b23c]/30 rounded-full animate-float1" />
        <div className="absolute top-32 right-[8%] w-6 h-6 bg-[#e3b23c]/25 rounded-full animate-float2" />
        <div className="absolute bottom-20 left-[10%] w-6 h-6 bg-[#e3b23c]/35 rounded-full animate-float3" />
        <div className="absolute bottom-32 right-[5%] w-6 h-6 bg-[#e3b23c]/30 rounded-full animate-float1" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="bg-gradient-to-br from-[#e3b23c]/10 to-[#8fc0a9]/20 border border-gold/30 rounded-[14px] p-10 md:p-14">
            <h2 className="text-3xl font-bold text-[#1e352b] mb-4">
              How Much Cash Is Trapped in Your Business?
            </h2>
            <p className="text-lg text-[#6f8a7c] mb-3 max-w-xl mx-auto">
              Take our 2-minute assessment and find out where your working capital is leaking - and
              roughly what it&apos;s costing you.
            </p>
            <p className="text-[#6f8a7c] mb-8">
              A few questions. Instant results. No sales call required.
            </p>
            <a
              href="/assess"
              className="inline-block px-8 py-4 bg-gold text-[#123b2d] rounded-full font-semibold shadow-[0_6px_30px_rgba(227,178,60,0.3)] hover:bg-gold-deep transition-colors text-lg"
            >
              Take the 2-min assessment &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 relative overflow-hidden">
        {/* Decorative floating dots */}
        <div className="absolute top-12 left-[5%] w-6 h-6 bg-[#e3b23c]/25 rounded-full animate-float2" />
        <div className="absolute top-28 left-[10%] w-6 h-6 bg-[#e3b23c]/30 rounded-full animate-float1" />
        <div className="absolute top-44 left-[3%] w-6 h-6 bg-[#e3b23c]/35 rounded-full animate-float3" />
        <div className="absolute top-20 right-[6%] w-6 h-6 bg-[#e3b23c]/30 rounded-full animate-float3" />
        <div className="absolute top-40 right-[12%] w-6 h-6 bg-[#e3b23c]/25 rounded-full animate-float2" />
        <div className="absolute top-56 right-[4%] w-6 h-6 bg-[#e3b23c]/35 rounded-full animate-float1" />
        <div className="absolute bottom-16 right-[8%] w-6 h-6 bg-[#e3b23c]/20 rounded-full animate-float1" />
        <div className="absolute bottom-32 left-[8%] w-6 h-6 bg-[#e3b23c]/25 rounded-full animate-float3" />

        <div className="max-w-xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-[#1e352b] mb-4 pb-4 border-b-2 border-[#dde8e0]">
            Let&apos;s See If We&apos;re a Fit
          </h2>
          <p className="text-[#6f8a7c] mb-8">
            30-minute call. No pitch deck. We&apos;ll ask about your business and tell you
            honestly if there&apos;s cash worth going after.
          </p>

          <form
            action="https://formspree.io/f/mwvvkjnb"
            method="POST"
            className="bg-white rounded-[14px] p-8 space-y-6 shadow-[0_2px_14px_rgba(18,59,45,0.06)]"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#1e352b] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-white border border-[#dde8e0] rounded-lg text-[#1e352b] placeholder-[#a9bfb2] focus:ring-2 focus:ring-gold focus:border-gold"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1e352b] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white border border-[#dde8e0] rounded-lg text-[#1e352b] placeholder-[#a9bfb2] focus:ring-2 focus:ring-gold focus:border-gold"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="referral" className="block text-sm font-medium text-[#1e352b] mb-2">
                How did you hear about us?
              </label>
              <select
                id="referral"
                name="referral"
                defaultValue=""
                className="w-full px-4 py-3 bg-white border border-[#dde8e0] rounded-lg text-[#1e352b] focus:ring-2 focus:ring-gold focus:border-gold"
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
              <label htmlFor="message" className="block text-sm font-medium text-[#1e352b] mb-2">
                Where do you suspect your cash is getting stuck?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-white border border-[#dde8e0] rounded-lg text-[#1e352b] placeholder-[#a9bfb2] focus:ring-2 focus:ring-gold focus:border-gold"
                placeholder="e.g., We're growing but cash is always tight, and our inventory keeps creeping up..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gold text-[#123b2d] rounded-full font-semibold hover:bg-gold-deep transition-colors"
            >
              Start a Conversation
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 text-center bg-[linear-gradient(110deg,#0a231b_0%,#0d2b21_60%,#12382a_100%)]">
        <a href="/" className="inline-block">
          <span className="flex justify-center mb-[18px]"><Emblem width={86} height={79} /></span>
          <Wordmark dark big />
        </a>
        <p className="mt-4 text-sm tracking-[5px] uppercase text-greenmuted">London, UK</p>
        <a
          href="#contact"
          className="inline-block mt-9 px-9 py-4 bg-gold text-[#123b2d] rounded-full font-bold shadow-[0_6px_30px_rgba(227,178,60,0.3)] hover:bg-gold-deep transition-colors"
        >
          Book a call
        </a>
        <p className="mt-11 text-[13px] text-[#6f8a7c]">
          <a href="mailto:lu@brightmerehq.com" className="hover:text-gold transition-colors">
            lu@brightmerehq.com
          </a>
          {" "}&middot; &copy; 2026 Brightmere
        </p>
      </footer>
    </div>
  );
}
