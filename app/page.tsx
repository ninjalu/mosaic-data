import Image from "next/image";

export default function Home() {
  const valueLadder = [
    {
      tag: "Start here",
      headline: "Free up the cash",
      lead: "We start by freeing the cash trapped in your operations—often enough to fund everything that follows.",
      items: ["Working capital release — stock, receivables, supplier terms"],
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
    <div className="min-h-screen bg-[#EDEDED] text-slate-800">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#EDEDED]/90 backdrop-blur-md z-50 border-b border-slate-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-icon.png"
              alt="Mosaic Data"
              width={48}
              height={31}
              className="rounded"
            />
            <span className="text-xl font-semibold text-slate-800">Mosaic Data</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/methodology"
              className="px-5 py-2 text-slate-600 font-medium hover:text-slate-900 transition-colors hidden md:block"
            >
              Methodology
            </a>
            <a
              href="/assess"
              className="px-5 py-2 border border-coral text-coral rounded-lg font-semibold hover:bg-coral/5 transition-colors"
            >
              2-min assessment
            </a>
            <a
              href="#contact"
              className="px-5 py-2 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Decorative mosaic squares */}
        <div className="absolute top-24 left-[6%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float1" />
        <div className="absolute top-40 left-[3%] w-6 h-6 bg-[#D4705A]/40 rounded-sm animate-float2" />
        <div className="absolute top-56 left-[10%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float3" />
        <div className="absolute top-32 left-[15%] w-6 h-6 bg-[#D4705A]/35 rounded-sm animate-float1" />
        <div className="absolute top-28 right-[5%] w-6 h-6 bg-[#D4705A]/35 rounded-sm animate-float2" />
        <div className="absolute top-48 right-[10%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float1" />
        <div className="absolute top-64 right-[3%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float3" />
        <div className="absolute top-36 right-[16%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float2" />
        <div className="absolute bottom-16 left-[12%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float2" />
        <div className="absolute bottom-32 left-[5%] w-6 h-6 bg-[#D4705A]/35 rounded-sm animate-float1" />
        <div className="absolute bottom-48 left-[18%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float3" />
        <div className="absolute bottom-24 right-[8%] w-6 h-6 bg-[#D4705A]/40 rounded-sm animate-float3" />
        <div className="absolute bottom-40 right-[15%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float2" />
        <div className="absolute bottom-56 right-[4%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float1" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-coral text-sm font-medium uppercase tracking-wider mb-5">
            The Cash X-Ray
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
            Find the Cash
            <br />
            <span className="text-coral">
              Trapped in Your Business.
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            It&apos;s stuck in inventory you don&apos;t need, invoices you&apos;re not chasing,
            and supplier terms you&apos;re paying too early. We read your actual ledgers&mdash;line
            by line, not category averages&mdash;and show you exactly where your cash is and
            what it&apos;s worth. In one week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors text-lg"
            >
              Book a Cash X-Ray &rarr;
            </a>
            <a
              href="/assess"
              className="inline-block px-8 py-4 border border-slate-400 text-slate-700 rounded-lg font-semibold hover:border-slate-500 hover:text-slate-900 transition-colors text-lg"
            >
              Take the 2-min assessment
            </a>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-12 px-6 bg-white/50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-slate-500 text-sm uppercase tracking-wider mb-6">
            Built for inventory-heavy mid-market businesses &mdash; $15&ndash;50M revenue
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-700 font-semibold text-lg">
            <span>Manufacturing</span>
            <span className="text-coral/40">&#9642;</span>
            <span>Distribution &amp; Wholesale</span>
            <span className="text-coral/40">&#9642;</span>
            <span>DTC</span>
            <span className="text-coral/40">&#9642;</span>
            <span>Retail</span>
          </div>
          <p className="text-slate-500 text-sm mt-6 max-w-2xl mx-auto">
            The kind of business with hundreds or thousands of SKUs or customers&mdash;more than
            anyone can track by hand, where the average hides the answer and the cash is buried
            in the detail.
          </p>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Four Ways Your Cash Gets Trapped
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            The bank balance looks fine, so no one looks closer. Meanwhile your own money is
            sitting still in four places you can&apos;t see.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-red-500 mb-2">Stuck in stock</div>
              <div className="text-slate-600 text-sm">
                Slow movers, phantom lines, and safety stock no one sized. Cash sitting
                on a shelf instead of in your account.
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-red-500 mb-2">Slow receivables</div>
              <div className="text-slate-600 text-sm">
                Invoices drifting past terms. Every extra day is your cash funding your
                customer&apos;s business instead of yours.
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-red-500 mb-2">Paying too early</div>
              <div className="text-slate-600 text-sm">
                Settling suppliers faster than your customers pay you&mdash;funding the
                whole cycle out of your own pocket.
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-red-500 mb-2">Growth that eats cash</div>
              <div className="text-slate-600 text-sm">
                Overtrading: the faster you grow, the tighter cash gets&mdash;and no one
                can explain why the profit isn&apos;t in the bank.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Comparison */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/70 border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="text-red-500 text-sm font-medium uppercase tracking-wider mb-4">Today</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Flying Blind on Cash</h3>
              <ul className="space-y-4">
                {[
                  "The bank balance is the only cash number anyone trusts",
                  "\"Where's our cash tied up?\" takes a week to answer",
                  "The forecast is a spreadsheet someone updates on Fridays",
                  "When cash gets tight, the reflex is to call the bank for a bigger facility",
                  "Everyone manages the average; the answer lives below it",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span className="text-red-500 mt-0.5">&#10005;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#D4705A]/10 to-[#E8A090]/20 border border-coral/30 rounded-2xl p-8">
              <div className="text-coral text-sm font-medium uppercase tracking-wider mb-4">With Mosaic</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">See Where Every Pound Is</h3>
              <ul className="space-y-4">
                {[
                  "Your cash conversion cycle, broken down by product line and customer",
                  "The exact SKUs and customers eating your cash—named and sized",
                  "DSO by customer: who's slow, by how much, what it costs",
                  "A 13-week cash forecast you can actually steer",
                  "The cheapest capital you have—the cash you've already earned—freed",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="text-coral mt-0.5">&#10003;</span>
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
        {/* Decorative mosaic squares */}
        <div className="absolute top-12 right-[5%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float1" />
        <div className="absolute top-32 right-[12%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float3" />
        <div className="absolute top-24 right-[3%] w-6 h-6 bg-[#D4705A]/35 rounded-sm animate-float2" />
        <div className="absolute bottom-16 left-[4%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float2" />
        <div className="absolute bottom-32 left-[10%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float1" />
        <div className="absolute bottom-24 left-[16%] w-6 h-6 bg-[#D4705A]/35 rounded-sm animate-float3" />
        <div className="absolute top-20 left-[3%] w-6 h-6 bg-[#D4705A]/20 rounded-sm animate-float3" />

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Find the Cash. Free It. Keep It Visible.
          </h2>
          <p className="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            We start with a one-week diagnostic, fix the specific leaks it finds, then keep
            your cash visible on an ongoing rhythm.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-coral rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <div className="pl-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Cash X-Ray</h3>
                <p className="text-slate-600">
                  One week. We connect your finance and ERP systems and trace cash from sale to
                  bank&mdash;finding where it&apos;s trapped and sizing each gap in pounds.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-coral rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <div className="pl-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Release</h3>
                <p className="text-slate-600">
                  We fix the specific leaks&mdash;inventory discipline, collection priorities,
                  supplier terms&mdash;and turn the findings into cash back in your account.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-coral rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <div className="pl-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Cashflow Operating System</h3>
                <p className="text-slate-600">
                  An ongoing layer that keeps cash visible: a live 13-week forecast, early-warning
                  alerts, and a cadence that makes cash a business habit&mdash;not a fire drill.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/methodology"
              className="text-coral font-semibold hover:text-coral-light transition-colors"
            >
              See the full methodology &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Where the cash hides */}
      <section className="py-20 px-6 bg-white/50 relative overflow-hidden">
        {/* Decorative mosaic squares */}
        <div className="absolute top-16 left-[3%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float2" />
        <div className="absolute top-40 left-[8%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float1" />
        <div className="absolute top-28 left-[14%] w-6 h-6 bg-[#D4705A]/35 rounded-sm animate-float3" />
        <div className="absolute bottom-20 right-[4%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float3" />
        <div className="absolute bottom-40 right-[10%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float2" />
        <div className="absolute bottom-28 right-[16%] w-6 h-6 bg-[#D4705A]/35 rounded-sm animate-float1" />
        <div className="absolute top-24 right-[6%] w-6 h-6 bg-[#D4705A]/20 rounded-sm animate-float1" />

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Where the Cash Hides
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Once you have hundreds of SKUs or customers, the cash story stops matching the P&amp;L.
            These are the cuts owners almost never see&mdash;because they only show up at the line level.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "The Aristocrat",
                result: "High margin that flatters the P&L—and quietly suffocates cash",
                lever: "Bloated inventory and long terms hide behind a great margin. We find them."
              },
              {
                title: "The Workhorse",
                result: "Low margin, unloved—and the product actually funding your business",
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
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-md transition-all shadow-sm">
                <h3 className="font-semibold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.result}</p>
                <div className="text-sm text-coral font-medium">
                  &#8627; {item.lever}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Can Do - the value ladder */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-16 right-[5%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float1" />
        <div className="absolute top-36 right-[12%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float3" />
        <div className="absolute bottom-20 left-[5%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float2" />
        <div className="absolute bottom-36 left-[11%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float1" />

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            We Start With Cash. Then We Go Deeper.
          </h2>
          <p className="text-slate-600 text-center mb-14 max-w-2xl mx-auto">
            The Cash X-Ray frees the quick wins. Once your data is clean and connected, the same
            foundation powers the deeper profit work&mdash;so every engagement compounds.
          </p>

          {/* Desktop: ascending value graph */}
          <div className="hidden lg:block">
            <div className="flex items-end gap-5">
              {valueLadder.map((stage, si) => (
                <div key={si} className="flex-1 flex flex-col">
                  <div
                    className={`rounded-2xl p-5 border shadow-sm ${
                      stage.highlight
                        ? "bg-gradient-to-br from-[#D4705A]/10 to-[#E8A090]/20 border-coral/30"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-coral text-white text-xs font-bold flex items-center justify-center">{si + 1}</span>
                      <span className="text-coral text-xs font-semibold uppercase tracking-wider">{stage.tag}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{stage.headline}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {stage.items.map((it, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Riser leg — taller each step, so the cards climb */}
                  <div
                    className="mx-auto w-2.5 rounded-t-md bg-gradient-to-b from-coral/40 to-coral/5"
                    style={{ height: `${16 + si * 52}px` }}
                  />
                </div>
              ))}
            </div>
            <div className="h-0.5 bg-coral/25 rounded-full" />
            <p className="text-right text-xs text-slate-400 mt-2">Each stage builds on the last &mdash; and is worth more &#8599;</p>
          </div>

          {/* Mobile / tablet: numbered stack */}
          <div className="lg:hidden max-w-2xl mx-auto space-y-5">
            {valueLadder.map((stage, si) => (
              <div key={si} className="flex gap-4">
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-coral text-white flex items-center justify-center font-bold ring-4 ring-[#EDEDED]">
                  {si + 1}
                </div>
                <div
                  className={`flex-1 rounded-2xl p-5 border shadow-sm ${
                    stage.highlight
                      ? "bg-gradient-to-br from-[#D4705A]/10 to-[#E8A090]/20 border-coral/30"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <div className="text-coral text-xs font-semibold uppercase tracking-wider mb-1">{stage.tag}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{stage.headline}</h3>
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed">{stage.lead}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.items.map((it, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium"
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
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Accounting Brain. Data-Science Hands.
          </h2>
          <p className="text-slate-600 text-center mb-4 max-w-2xl mx-auto">
            Most data consultants can build the model but can&apos;t read the P&amp;L. Most accountants
            can read the P&amp;L but can&apos;t build the model. We do both&mdash;which is why we know
            where to look and how to actually go and get it.
          </p>
          <p className="text-coral/70 text-center text-sm mb-12">
            Working with manufacturers, distributors, DTC brands, and retailers.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#D4705A]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-slate-900 font-semibold text-lg mb-2">We Think in Cash</h3>
              <p className="text-slate-600 text-sm">
                Finance and accounting background means we understand working capital, the cash
                conversion cycle, and what actually frees money&mdash;not just a tidy dashboard.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#D4705A]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z M4 9h16 M9 4v16" />
                </svg>
              </div>
              <h3 className="text-slate-900 font-semibold text-lg mb-2">We Work at Line Level</h3>
              <p className="text-slate-600 text-sm">
                Excel chokes around a million rows. Your business has tens of millions of
                transaction lines once you join stock, sales, returns, and terms. We work where
                the cash actually is.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#D4705A]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-slate-900 font-semibold text-lg mb-2">Every Finding Sized in Pounds</h3>
              <p className="text-slate-600 text-sm">
                Not &ldquo;your inventory is high.&rdquo; We tell you how much cash is trapped, in which
                lines, and what it&apos;s worth to free it. If we can&apos;t find it, we say so.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#D4705A]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-slate-900 font-semibold text-lg mb-2">One Week, Not One Quarter</h3>
              <p className="text-slate-600 text-sm">
                Bias for action. A sharp answer in days beats a perfect answer delivered after
                the cash crunch has already happened.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Founder Story */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Decorative mosaic squares */}
        <div className="absolute top-12 right-[8%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float1" />
        <div className="absolute top-32 right-[4%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float2" />
        <div className="absolute top-24 right-[14%] w-6 h-6 bg-[#D4705A]/35 rounded-sm animate-float3" />
        <div className="absolute bottom-16 left-[6%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float3" />
        <div className="absolute bottom-36 left-[12%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float1" />
        <div className="absolute bottom-24 left-[3%] w-6 h-6 bg-[#D4705A]/35 rounded-sm animate-float2" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 bg-slate-200 rounded-xl flex-shrink-0 flex items-center justify-center text-3xl font-bold text-slate-500">
                Lu
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Why I Started Mosaic</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    I&apos;m Lu&mdash;I started in accounting and corporate finance before moving into
                    data science. Cash is where those two worlds meet, and it&apos;s where most
                    businesses are quietly losing.
                  </p>
                  <p>
                    Owner-led companies with hundreds or thousands of SKUs or customers are sitting
                    on cash they can&apos;t see&mdash;trapped in stock, in slow invoices, in terms paid too early.
                    The answer is in their own ledgers. They just don&apos;t have anyone who can read
                    the P&amp;L <em>and</em> get into the data to find it.
                  </p>
                  <p className="text-slate-700">
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
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Start With a Cash X-Ray
          </h2>
          <p className="text-slate-600 mb-12">
            Priced as an investment, not an hourly bill. If we find $200K stuck in your
            business, the fee pays for itself many times over.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="text-coral text-sm font-medium uppercase tracking-wider mb-2">Stage 1 &middot; Discovery</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">The Data Map</h3>
              <p className="text-slate-500 text-sm mb-6">2&ndash;3 days &middot; fixed fee</p>
              <p className="text-slate-600 text-sm">
                We map what&apos;s actually in your finance and ERP systems&mdash;what&apos;s accessible,
                what&apos;s clean, what&apos;s missing&mdash;and scope the X-Ray precisely. Useful on its
                own, even if you go no further.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#D4705A]/10 to-[#E8A090]/20 border border-coral/30 rounded-2xl p-8">
              <div className="text-coral text-sm font-medium uppercase tracking-wider mb-2">Stage 2 &middot; The Cash X-Ray</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">The Diagnostic</h3>
              <p className="text-slate-500 text-sm mb-6">2&ndash;3 weeks &middot; fixed fee</p>
              <p className="text-slate-700 text-sm">
                A clear findings document: where your cash is trapped, sized in pounds, ranked by
                impact and speed&mdash;with the specific moves to free it. Every number traced back
                to your own data.
              </p>
            </div>
          </div>

          <p className="text-slate-500 text-sm mt-8 max-w-xl mx-auto">
            What it earns into: an ongoing <span className="font-medium text-slate-700">Cashflow Operating System</span> retainer&mdash;a
            live forecast and a cadence that keeps cash visible for good.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 px-8 py-4 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors"
          >
            Let&apos;s Talk
          </a>
          <p className="text-slate-500 text-sm mt-4">
            No commitment. We&apos;ll tell you honestly if we can help.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Questions We Get Asked
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Couldn't our finance team do this themselves?",
                a: "In theory, yes—and most CFOs ask exactly that. In practice, three things stop them. Bandwidth: the team is running close and board reporting, with no slack for a three-week deep-dive. Tooling: Excel chokes at SKU-level, 24-month, cross-system data—you need a real database. And the data engineering: joining ERP, billing, and inventory into one clean transaction layer is where most internal projects die. We show up, do all three, and get to an answer in weeks."
              },
              {
                q: "Isn't a strong fractional CFO already doing this?",
                a: "For ongoing operations, often yes—and we're not a replacement for that relationship. But when the answer lives below the averages—which 20 customers drove last quarter's margin move, including freight, returns, and the cost of slow payment—most fractional CFOs hit a tooling wall. We're the answer engine for the moments the question gets too granular for a spreadsheet."
              },
              {
                q: "Isn't the answer just a bigger bank facility?",
                a: "Sometimes you do need more headroom. But borrowing to cover cash that's trapped in your own operations is the expensive way—you're paying interest to a lender for money you've already earned. We find that cash first. Often it's enough that the facility conversation changes entirely."
              },
              {
                q: "What if our data is a mess?",
                a: "Most is. That's exactly why Stage 1 exists—we map what's actually usable before committing to scope. You'd be surprised: basic finance and inventory data usually has more than enough signal to find trapped cash. We work with what you have, not what you wish you had."
              },
              {
                q: "Do you replace our ERP or BI tools?",
                a: "No. We plug into whatever you're running—Sage, NetSuite, Xero, QuickBooks, your warehouse system—and read it. We make your existing investment more valuable; we don't rip it out."
              },
              {
                q: "How do you handle sensitive financial data?",
                a: "Data stays in your environment—we work via secure, read-only access, not data transfers. Happy to walk through our security posture on a call before anything is connected."
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-3">{item.q}</h3>
                <p className="text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment CTA */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-16 left-[6%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float1" />
        <div className="absolute top-32 right-[8%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float2" />
        <div className="absolute bottom-20 left-[10%] w-6 h-6 bg-[#D4705A]/35 rounded-sm animate-float3" />
        <div className="absolute bottom-32 right-[5%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float1" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="bg-gradient-to-br from-[#D4705A]/10 to-[#E8A090]/20 border border-coral/30 rounded-2xl p-10 md:p-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              How Much Cash Is Trapped in Your Business?
            </h2>
            <p className="text-lg text-slate-600 mb-3 max-w-xl mx-auto">
              Take our 2-minute assessment and find out where your working capital is leaking&mdash;and
              roughly what it&apos;s costing you.
            </p>
            <p className="text-slate-500 mb-8">
              A few questions. Instant results. No sales call required.
            </p>
            <a
              href="/assess"
              className="inline-block px-8 py-4 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors text-lg"
            >
              Take the 2-min assessment &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 relative overflow-hidden">
        {/* Decorative mosaic squares */}
        <div className="absolute top-12 left-[5%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float2" />
        <div className="absolute top-28 left-[10%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float1" />
        <div className="absolute top-44 left-[3%] w-6 h-6 bg-[#D4705A]/35 rounded-sm animate-float3" />
        <div className="absolute top-20 right-[6%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float3" />
        <div className="absolute top-40 right-[12%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float2" />
        <div className="absolute top-56 right-[4%] w-6 h-6 bg-[#D4705A]/35 rounded-sm animate-float1" />
        <div className="absolute bottom-16 right-[8%] w-6 h-6 bg-[#D4705A]/20 rounded-sm animate-float1" />
        <div className="absolute bottom-32 left-[8%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float3" />

        <div className="max-w-xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Let&apos;s See If We&apos;re a Fit
          </h2>
          <p className="text-slate-600 text-center mb-8">
            30-minute call. No pitch deck. We&apos;ll ask about your business and tell you
            honestly if there&apos;s cash worth going after.
          </p>

          <form
            action="https://formspree.io/f/mwvvkjnb"
            method="POST"
            className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6 shadow-sm"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-coral focus:border-coral"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-coral focus:border-coral"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Where do you suspect your cash is getting stuck?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-coral focus:border-coral"
                placeholder="e.g., We're growing but cash is always tight, and our inventory keeps creeping up..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors"
            >
              Start a Conversation
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-300 bg-white/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-icon.png"
              alt="Mosaic Data"
              width={40}
              height={26}
              className="rounded"
            />
            <span className="font-semibold text-slate-800">Mosaic Data</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-500 text-sm">London, UK</span>
            <a href="mailto:info@mosaic-data.co" className="text-slate-600 hover:text-coral text-sm transition-colors">
              info@mosaic-data.co
            </a>
            <p className="text-slate-500 text-sm">
              &copy; 2026 Mosaic Data
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
