import Wordmark from "./components/Wordmark";

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
    <div className="min-h-screen bg-[#faf4f2] text-[#3a2028]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#2c0a11]/90 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <Wordmark dark />
          </a>
          <div className="flex items-center gap-8">
            <a
              href="/methodology"
              className="text-rosemuted text-[15px] hover:text-offwhite transition-colors hidden md:block"
            >
              Methodology
            </a>
            <a
              href="/assess"
              className="text-rosemuted text-[15px] hover:text-offwhite transition-colors hidden sm:block"
            >
              2-min assessment
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-pink text-white rounded-full font-semibold text-[15px] hover:bg-pink-deep transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-36 pb-44 px-6 relative overflow-hidden bg-[linear-gradient(110deg,#2c0a11_0%,#330d14_55%,#43101a_100%)]">
        {/* Noise-to-signal graphic */}
        <svg
          className="absolute left-0 bottom-0 w-full h-auto opacity-85 pointer-events-none"
          viewBox="0 0 1440 330"
          fill="none"
          aria-hidden="true"
        >
          <g fill="#ff3d7e">
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
            stroke="#ff3d7e"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.7"
          />
          <circle cx="1370" cy="54" r="9" fill="#ff3d7e" />
          <circle cx="1370" cy="54" r="24" fill="#ff3d7e" opacity="0.18" />
        </svg>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="flex items-center justify-center gap-2.5 text-[13px] tracking-[3px] text-rosemuted font-semibold uppercase mb-5"><span className="w-[9px] h-[9px] rounded-full bg-pink flex-shrink-0" />The Cash X-Ray</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite leading-[1.1] tracking-[-1px] mb-6">
            Find the <span className="text-pink [text-shadow:0_0_28px_rgba(255,61,126,0.4)]">Cash</span>
            <br />
            Trapped in Your Business.
          </h1>

          <p className="text-xl text-rosemuted max-w-2xl mx-auto mb-10 leading-relaxed">
            It&apos;s stuck in inventory you don&apos;t need, invoices you&apos;re not chasing,
            and supplier terms you&apos;re paying too early. We read your actual ledgers - line
            by line, not category averages - and show you exactly where your cash is and
            what it&apos;s worth. In one week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-pink text-white rounded-full font-semibold shadow-[0_6px_30px_rgba(255,61,126,0.35)] hover:bg-pink-deep transition-colors text-lg"
            >
              Book a Cash X-Ray &rarr;
            </a>
            <a
              href="/assess"
              className="inline-block px-8 py-4 border-2 border-pink/55 text-offwhite rounded-full font-semibold hover:border-pink transition-colors text-lg"
            >
              Take the 2-min assessment
            </a>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-12 px-6 border-y border-[#eaddda]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#8a6b74] text-sm uppercase tracking-[1.5px] mb-6">
            Built for inventory-heavy mid-market businesses - <span className="font-mono font-semibold text-pink normal-case">$15&ndash;50M</span> revenue
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[#3a2028] font-semibold text-lg">
            <span>Manufacturing</span>
            <span className="inline-block w-2 h-2 rounded-full bg-pink/40" />
            <span>Distribution &amp; Wholesale</span>
            <span className="inline-block w-2 h-2 rounded-full bg-pink/40" />
            <span>DTC</span>
            <span className="inline-block w-2 h-2 rounded-full bg-pink/40" />
            <span>Retail</span>
          </div>
          <p className="text-[#8a6b74] text-sm mt-6 max-w-2xl mx-auto">
            The kind of business with hundreds or thousands of SKUs or customers - more than
            anyone can track by hand, where the average hides the answer and the cash is buried
            in the detail.
          </p>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3a2028] mb-4 pb-4 border-b-2 border-[#eaddda]">
            Four Ways Your Cash Gets Trapped
          </h2>
          <p className="text-[#8a6b74] mb-12 max-w-2xl">
            The bank balance looks fine, so no one looks closer. Meanwhile your own money is
            sitting still in four places you can&apos;t see.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <div className="flex items-center gap-3 text-2xl font-bold text-[#4d141e] mb-2"><span className="w-2.5 h-2.5 rounded-full bg-pink flex-shrink-0" />Stuck in stock</div>
              <div className="text-[#8a6b74] text-sm">
                Slow movers, phantom lines, and safety stock no one sized. Cash sitting
                on a shelf instead of in your account.
              </div>
            </div>
            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <div className="flex items-center gap-3 text-2xl font-bold text-[#4d141e] mb-2"><span className="w-2.5 h-2.5 rounded-full bg-pink flex-shrink-0" />Slow receivables</div>
              <div className="text-[#8a6b74] text-sm">
                Invoices drifting past terms. Every extra day is your cash funding your
                customer&apos;s business instead of yours.
              </div>
            </div>
            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <div className="flex items-center gap-3 text-2xl font-bold text-[#4d141e] mb-2"><span className="w-2.5 h-2.5 rounded-full bg-pink flex-shrink-0" />Paying too early</div>
              <div className="text-[#8a6b74] text-sm">
                Settling suppliers faster than your customers pay you - funding the
                whole cycle out of your own pocket.
              </div>
            </div>
            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <div className="flex items-center gap-3 text-2xl font-bold text-[#4d141e] mb-2"><span className="w-2.5 h-2.5 rounded-full bg-pink flex-shrink-0" />Growth that eats cash</div>
              <div className="text-[#8a6b74] text-sm">
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
            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <div className="text-[#8a6b74] text-sm font-medium uppercase tracking-wider mb-4">Today</div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-[#4d141e] mb-6"><span className="w-2.5 h-2.5 rounded-full bg-pink/40 flex-shrink-0" />Flying Blind on Cash</h3>
              <ul className="space-y-4">
                {[
                  "The bank balance is the only cash number anyone trusts",
                  "\"Where's our cash tied up?\" takes a week to answer",
                  "The forecast is a spreadsheet someone updates on Fridays",
                  "When cash gets tight, the reflex is to call the bank for a bigger facility",
                  "Everyone manages the average; the answer lives below it",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8a6b74]">
                    <span className="mt-[7px] w-2 h-2 rounded-full bg-pink/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#ff3d7e]/10 to-[#ff9dbf]/20 border border-pink/30 rounded-[14px] p-8">
              <div className="text-[#8a6b74] text-sm font-medium uppercase tracking-wider mb-4">With Brightmere</div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-[#4d141e] mb-6"><span className="w-2.5 h-2.5 rounded-full bg-pink flex-shrink-0" />See Where Every Pound Is</h3>
              <ul className="space-y-4">
                {[
                  "Your cash conversion cycle, broken down by product line and customer",
                  "The exact SKUs and customers eating your cash - named and sized",
                  "DSO by customer: who's slow, by how much, what it costs",
                  "A 13-week cash forecast you can actually steer",
                  "The cheapest capital you have - the cash you've already earned - freed",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#3a2028]">
                    <span className="mt-[7px] w-2 h-2 rounded-full bg-pink flex-shrink-0" />
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
        <div className="absolute top-12 right-[5%] w-6 h-6 bg-[#ff3d7e]/25 rounded-full animate-float1" />
        <div className="absolute top-32 right-[12%] w-6 h-6 bg-[#ff3d7e]/30 rounded-full animate-float3" />
        <div className="absolute top-24 right-[3%] w-6 h-6 bg-[#ff3d7e]/35 rounded-full animate-float2" />
        <div className="absolute bottom-16 left-[4%] w-6 h-6 bg-[#ff3d7e]/30 rounded-full animate-float2" />
        <div className="absolute bottom-32 left-[10%] w-6 h-6 bg-[#ff3d7e]/25 rounded-full animate-float1" />
        <div className="absolute bottom-24 left-[16%] w-6 h-6 bg-[#ff3d7e]/35 rounded-full animate-float3" />
        <div className="absolute top-20 left-[3%] w-6 h-6 bg-[#ff3d7e]/20 rounded-full animate-float3" />

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-[#3a2028] mb-4 pb-4 border-b-2 border-[#eaddda]">
            Find the Cash. Free It. Keep It Visible.
          </h2>
          <p className="text-[#8a6b74] mb-16 max-w-2xl">
            We start with a one-week diagnostic, fix the specific leaks it finds, then keep
            your cash visible on an ongoing rhythm.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-pink rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <div className="pl-8">
                <h3 className="text-xl font-semibold text-[#3a2028] mb-3">Cash X-Ray</h3>
                <p className="text-[#8a6b74]">
                  One week. We connect your finance and ERP systems and trace cash from sale to
                  bank - finding where it&apos;s trapped and sizing each gap in pounds.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-pink rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <div className="pl-8">
                <h3 className="text-xl font-semibold text-[#3a2028] mb-3">Release</h3>
                <p className="text-[#8a6b74]">
                  We fix the specific leaks - inventory discipline, collection priorities,
                  supplier terms - and turn the findings into cash back in your account.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-pink rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <div className="pl-8">
                <h3 className="text-xl font-semibold text-[#3a2028] mb-3">Cashflow Operating System</h3>
                <p className="text-[#8a6b74]">
                  An ongoing layer that keeps cash visible: a live 13-week forecast, early-warning
                  alerts, and a cadence that makes cash a business habit - not a fire drill.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/methodology"
              className="text-[#4d141e] underline underline-offset-4 font-semibold hover:text-pink transition-colors"
            >
              See the full methodology &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Where the cash hides */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Decorative floating dots */}
        <div className="absolute top-16 left-[3%] w-6 h-6 bg-[#ff3d7e]/25 rounded-full animate-float2" />
        <div className="absolute top-40 left-[8%] w-6 h-6 bg-[#ff3d7e]/30 rounded-full animate-float1" />
        <div className="absolute top-28 left-[14%] w-6 h-6 bg-[#ff3d7e]/35 rounded-full animate-float3" />
        <div className="absolute bottom-20 right-[4%] w-6 h-6 bg-[#ff3d7e]/30 rounded-full animate-float3" />
        <div className="absolute bottom-40 right-[10%] w-6 h-6 bg-[#ff3d7e]/25 rounded-full animate-float2" />
        <div className="absolute bottom-28 right-[16%] w-6 h-6 bg-[#ff3d7e]/35 rounded-full animate-float1" />
        <div className="absolute top-24 right-[6%] w-6 h-6 bg-[#ff3d7e]/20 rounded-full animate-float1" />

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-[#3a2028] mb-4 pb-4 border-b-2 border-[#eaddda]">
            Where the Cash Hides
          </h2>
          <p className="text-[#8a6b74] mb-12 max-w-2xl">
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
              <div key={i} className="bg-white rounded-[14px] p-6 transition-all shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
                <h3 className="flex items-center gap-3 font-semibold text-[#4d141e] text-lg mb-2"><span className="w-2.5 h-2.5 rounded-full bg-pink flex-shrink-0" />{item.title}</h3>
                <p className="text-[#8a6b74] mb-4">{item.result}</p>
                <div className="font-mono text-sm text-pink font-semibold">
                  {item.lever}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Can Do - the value ladder */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-16 right-[5%] w-6 h-6 bg-[#ff3d7e]/25 rounded-full animate-float1" />
        <div className="absolute top-36 right-[12%] w-6 h-6 bg-[#ff3d7e]/30 rounded-full animate-float3" />
        <div className="absolute bottom-20 left-[5%] w-6 h-6 bg-[#ff3d7e]/30 rounded-full animate-float2" />
        <div className="absolute bottom-36 left-[11%] w-6 h-6 bg-[#ff3d7e]/25 rounded-full animate-float1" />

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-[#3a2028] mb-4 pb-4 border-b-2 border-[#eaddda]">
            We Start With Cash. Then We Go Deeper.
          </h2>
          <p className="text-[#8a6b74] mb-14 max-w-2xl">
            The Cash X-Ray frees the quick wins. Once your data is clean and connected, the same
            foundation powers the deeper profit work - so every engagement compounds.
          </p>

          {/* Desktop: ascending value staircase - each box top sits higher */}
          <div className="hidden lg:flex gap-4">
            {/* Y-axis: value rises upward */}
            <div className="flex flex-col items-center justify-end pb-4">
              <span className="text-pink text-lg leading-none">&#8593;</span>
              <span className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-[#8a6b74] [writing-mode:vertical-rl] rotate-180">
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
                      className={`relative rounded-[14px] p-5 border shadow-[0_2px_14px_rgba(77,20,30,0.06)] ${
                        stage.highlight
                          ? "bg-gradient-to-br from-[#ff3d7e]/10 to-[#ff9dbf]/20 border-pink/30"
                          : "bg-white border-[#eaddda]"
                      }`}
                    >
                      {/* Connector arrow climbing to the next step */}
                      {si < valueLadder.length - 1 && (
                        <div className="absolute top-1/2 -translate-y-1/2 -right-[23px] z-20 text-pink text-2xl font-bold leading-none">
                          &#8599;
                        </div>
                      )}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-pink text-white text-sm font-bold flex items-center justify-center">{si + 1}</span>
                        <span className="text-[#8a6b74] text-xs font-semibold uppercase tracking-wider">{stage.tag}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#3a2028] mb-2">{stage.headline}</h3>
                      {/* Value meter - fills further each step */}
                      <div className="flex items-center gap-1 mb-3">
                        {[0, 1, 2, 3].map((n) => (
                          <span key={n} className={`h-1.5 w-5 rounded-full ${n <= si ? "bg-pink" : "bg-[#eaddda]"}`} />
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {stage.items.map((it, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#faf4f2] border border-[#eaddda] text-[#3a2028] text-xs font-medium"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-right text-xs font-medium text-[#8a6b74] mt-4">As we dig deeper, each stage is worth more &#8594;</p>
            </div>
          </div>

          {/* Mobile / tablet: numbered ascending stack */}
          <div className="lg:hidden max-w-2xl mx-auto">
            {valueLadder.map((stage, si, arr) => (
              <div key={si} className="relative flex gap-4 pb-5 last:pb-0">
                {/* Connecting spine */}
                {si < arr.length - 1 && (
                  <div className="absolute left-5 top-12 -bottom-1 w-0.5 bg-pink/25" />
                )}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-pink text-white flex items-center justify-center font-bold ring-4 ring-[#faf4f2]">
                  {si + 1}
                </div>
                <div
                  className={`flex-1 rounded-[14px] p-5 border shadow-[0_2px_14px_rgba(77,20,30,0.06)] ${
                    stage.highlight
                      ? "bg-gradient-to-br from-[#ff3d7e]/10 to-[#ff9dbf]/20 border-pink/30"
                      : "bg-white border-[#eaddda]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className="text-[#8a6b74] text-xs font-semibold uppercase tracking-wider">{stage.tag}</span>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {[0, 1, 2, 3].map((n) => (
                        <span key={n} className={`h-1.5 w-4 rounded-full ${n <= si ? "bg-pink" : "bg-[#eaddda]"}`} />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#3a2028] mb-2">{stage.headline}</h3>
                  <p className="text-[#8a6b74] text-sm mb-3 leading-relaxed">{stage.lead}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.items.map((it, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#faf4f2] border border-[#eaddda] text-[#3a2028] text-xs font-medium"
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
          <h2 className="text-3xl font-bold text-[#3a2028] mb-4 pb-4 border-b-2 border-[#eaddda]">
            Accounting Brain. Data-Science Hands.
          </h2>
          <p className="text-[#8a6b74] mb-4 max-w-2xl">
            Most data consultants can build the model but can&apos;t read the P&amp;L. Most accountants
            can read the P&amp;L but can&apos;t build the model. We do both - which is why we know
            where to look and how to actually go and get it.
          </p>
          <p className="text-[#8a6b74] text-center text-sm mb-12">
            Working with manufacturers, distributors, DTC brands, and retailers.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <h3 className="flex items-center gap-3 text-[#4d141e] font-semibold text-lg mb-2"><span className="w-2.5 h-2.5 rounded-full bg-pink flex-shrink-0" />We Think in Cash</h3>
              <p className="text-[#8a6b74] text-sm">
                Finance and accounting background means we understand working capital, the cash
                conversion cycle, and what actually frees money - not just a tidy dashboard.
              </p>
            </div>

            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <h3 className="flex items-center gap-3 text-[#4d141e] font-semibold text-lg mb-2"><span className="w-2.5 h-2.5 rounded-full bg-pink flex-shrink-0" />We Work at Line Level</h3>
              <p className="text-[#8a6b74] text-sm">
                Excel chokes around a million rows. Your business has tens of millions of
                transaction lines once you join stock, sales, returns, and terms. We work where
                the cash actually is.
              </p>
            </div>

            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <h3 className="flex items-center gap-3 text-[#4d141e] font-semibold text-lg mb-2"><span className="w-2.5 h-2.5 rounded-full bg-pink flex-shrink-0" />Every Finding Sized in Pounds</h3>
              <p className="text-[#8a6b74] text-sm">
                Not &ldquo;your inventory is high.&rdquo; We tell you how much cash is trapped, in which
                lines, and what it&apos;s worth to free it. If we can&apos;t find it, we say so.
              </p>
            </div>

            <div className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <h3 className="flex items-center gap-3 text-[#4d141e] font-semibold text-lg mb-2"><span className="w-2.5 h-2.5 rounded-full bg-pink flex-shrink-0" />One Week, Not One Quarter</h3>
              <p className="text-[#8a6b74] text-sm">
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
        <div className="absolute top-12 right-[8%] w-6 h-6 bg-[#ff3d7e]/25 rounded-full animate-float1" />
        <div className="absolute top-32 right-[4%] w-6 h-6 bg-[#ff3d7e]/30 rounded-full animate-float2" />
        <div className="absolute top-24 right-[14%] w-6 h-6 bg-[#ff3d7e]/35 rounded-full animate-float3" />
        <div className="absolute bottom-16 left-[6%] w-6 h-6 bg-[#ff3d7e]/30 rounded-full animate-float3" />
        <div className="absolute bottom-36 left-[12%] w-6 h-6 bg-[#ff3d7e]/25 rounded-full animate-float1" />
        <div className="absolute bottom-24 left-[3%] w-6 h-6 bg-[#ff3d7e]/35 rounded-full animate-float2" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="bg-white rounded-[14px] p-8 md:p-12 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 bg-[#eaddda] rounded-[14px] flex-shrink-0 flex items-center justify-center text-3xl font-bold text-[#8a6b74]">
                Lu
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#3a2028] mb-4">Why I Started Brightmere</h2>
                <div className="space-y-4 text-[#8a6b74] leading-relaxed">
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
                  <p className="text-[#3a2028]">
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
          <h2 className="text-3xl font-bold text-[#3a2028] mb-4">
            Start With a Cash X-Ray
          </h2>
          <p className="text-[#8a6b74] mb-12">
            Priced as an investment, not an hourly bill. If we find $200K stuck in your
            business, the fee pays for itself many times over.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <div className="text-[#8a6b74] text-sm font-medium uppercase tracking-wider mb-2">Stage 1 &middot; Discovery</div>
              <h3 className="flex items-center gap-3 text-xl font-bold text-[#4d141e] mb-2"><span className="w-2.5 h-2.5 rounded-full bg-pink flex-shrink-0" />The Data Map</h3>
              <p className="font-mono text-sm text-pink mb-6">2&ndash;3 days &middot; fixed fee</p>
              <p className="text-[#8a6b74] text-sm">
                We map what&apos;s actually in your finance and ERP systems - what&apos;s accessible,
                what&apos;s clean, what&apos;s missing - and scope the X-Ray precisely. Useful on its
                own, even if you go no further.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#ff3d7e]/10 to-[#ff9dbf]/20 border border-pink/30 rounded-[14px] p-8">
              <div className="text-[#8a6b74] text-sm font-medium uppercase tracking-wider mb-2">Stage 2 &middot; The Cash X-Ray</div>
              <h3 className="flex items-center gap-3 text-xl font-bold text-[#4d141e] mb-2"><span className="w-2.5 h-2.5 rounded-full bg-pink flex-shrink-0" />The Diagnostic</h3>
              <p className="font-mono text-sm text-pink mb-6">2&ndash;3 weeks &middot; fixed fee</p>
              <p className="text-[#3a2028] text-sm">
                A clear findings document: where your cash is trapped, sized in pounds, ranked by
                impact and speed - with the specific moves to free it. Every number traced back
                to your own data.
              </p>
            </div>
          </div>

          <p className="text-[#8a6b74] text-sm mt-8 max-w-xl mx-auto">
            What it earns into: an ongoing <span className="font-medium text-[#3a2028]">Cashflow Operating System</span> retainer - a
            live forecast and a cadence that keeps cash visible for good.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 px-8 py-4 bg-pink text-white rounded-full font-semibold hover:bg-pink-deep transition-colors"
          >
            Let&apos;s Talk
          </a>
          <p className="text-[#8a6b74] text-sm mt-4">
            No commitment. We&apos;ll tell you honestly if we can help.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3a2028] mb-12 pb-4 border-b-2 border-[#eaddda]">
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
              <div key={i} className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
                <h3 className="flex items-center gap-3 text-[#4d141e] font-semibold mb-3"><span className="w-2.5 h-2.5 rounded-full bg-pink flex-shrink-0" />{item.q}</h3>
                <p className="text-[#8a6b74] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment CTA */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-16 left-[6%] w-6 h-6 bg-[#ff3d7e]/30 rounded-full animate-float1" />
        <div className="absolute top-32 right-[8%] w-6 h-6 bg-[#ff3d7e]/25 rounded-full animate-float2" />
        <div className="absolute bottom-20 left-[10%] w-6 h-6 bg-[#ff3d7e]/35 rounded-full animate-float3" />
        <div className="absolute bottom-32 right-[5%] w-6 h-6 bg-[#ff3d7e]/30 rounded-full animate-float1" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="bg-gradient-to-br from-[#ff3d7e]/10 to-[#ff9dbf]/20 border border-pink/30 rounded-[14px] p-10 md:p-14">
            <h2 className="text-3xl font-bold text-[#3a2028] mb-4">
              How Much Cash Is Trapped in Your Business?
            </h2>
            <p className="text-lg text-[#8a6b74] mb-3 max-w-xl mx-auto">
              Take our 2-minute assessment and find out where your working capital is leaking - and
              roughly what it&apos;s costing you.
            </p>
            <p className="text-[#8a6b74] mb-8">
              A few questions. Instant results. No sales call required.
            </p>
            <a
              href="/assess"
              className="inline-block px-8 py-4 bg-pink text-white rounded-full font-semibold shadow-[0_6px_30px_rgba(255,61,126,0.35)] hover:bg-pink-deep transition-colors text-lg"
            >
              Take the 2-min assessment &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 relative overflow-hidden">
        {/* Decorative floating dots */}
        <div className="absolute top-12 left-[5%] w-6 h-6 bg-[#ff3d7e]/25 rounded-full animate-float2" />
        <div className="absolute top-28 left-[10%] w-6 h-6 bg-[#ff3d7e]/30 rounded-full animate-float1" />
        <div className="absolute top-44 left-[3%] w-6 h-6 bg-[#ff3d7e]/35 rounded-full animate-float3" />
        <div className="absolute top-20 right-[6%] w-6 h-6 bg-[#ff3d7e]/30 rounded-full animate-float3" />
        <div className="absolute top-40 right-[12%] w-6 h-6 bg-[#ff3d7e]/25 rounded-full animate-float2" />
        <div className="absolute top-56 right-[4%] w-6 h-6 bg-[#ff3d7e]/35 rounded-full animate-float1" />
        <div className="absolute bottom-16 right-[8%] w-6 h-6 bg-[#ff3d7e]/20 rounded-full animate-float1" />
        <div className="absolute bottom-32 left-[8%] w-6 h-6 bg-[#ff3d7e]/25 rounded-full animate-float3" />

        <div className="max-w-xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-[#3a2028] mb-4 pb-4 border-b-2 border-[#eaddda]">
            Let&apos;s See If We&apos;re a Fit
          </h2>
          <p className="text-[#8a6b74] mb-8">
            30-minute call. No pitch deck. We&apos;ll ask about your business and tell you
            honestly if there&apos;s cash worth going after.
          </p>

          <form
            action="https://formspree.io/f/mwvvkjnb"
            method="POST"
            className="bg-white rounded-[14px] p-8 space-y-6 shadow-[0_2px_14px_rgba(77,20,30,0.06)]"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#3a2028] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-white border border-[#eaddda] rounded-lg text-[#3a2028] placeholder-[#c4a9b1] focus:ring-2 focus:ring-pink focus:border-pink"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#3a2028] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white border border-[#eaddda] rounded-lg text-[#3a2028] placeholder-[#c4a9b1] focus:ring-2 focus:ring-pink focus:border-pink"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="referral" className="block text-sm font-medium text-[#3a2028] mb-2">
                How did you hear about us?
              </label>
              <select
                id="referral"
                name="referral"
                defaultValue=""
                className="w-full px-4 py-3 bg-white border border-[#eaddda] rounded-lg text-[#3a2028] focus:ring-2 focus:ring-pink focus:border-pink"
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
              <label htmlFor="message" className="block text-sm font-medium text-[#3a2028] mb-2">
                Where do you suspect your cash is getting stuck?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-white border border-[#eaddda] rounded-lg text-[#3a2028] placeholder-[#c4a9b1] focus:ring-2 focus:ring-pink focus:border-pink"
                placeholder="e.g., We're growing but cash is always tight, and our inventory keeps creeping up..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-pink text-white rounded-full font-semibold hover:bg-pink-deep transition-colors"
            >
              Start a Conversation
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 text-center bg-[linear-gradient(110deg,#2c0a11_0%,#330d14_60%,#3f1019_100%)]">
        <a href="/" className="inline-block">
          <Wordmark dark big />
        </a>
        <p className="mt-4 text-sm tracking-[5px] uppercase text-rosemuted">London, UK</p>
        <a
          href="#contact"
          className="inline-block mt-9 px-9 py-4 bg-pink text-white rounded-full font-bold shadow-[0_6px_30px_rgba(255,61,126,0.35)] hover:bg-pink-deep transition-colors"
        >
          Book a call
        </a>
        <p className="mt-11 text-[13px] text-[#8a6b74]">
          <a href="mailto:lu@brightmerehq.com" className="hover:text-pink transition-colors">
            lu@brightmerehq.com
          </a>
          {" "}&middot; &copy; 2026 Brightmere
        </p>
      </footer>
    </div>
  );
}
