import Wordmark from "../components/Wordmark";

export default function MethodologyPage() {
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
              href="/assess"
              className="text-rosemuted text-[15px] hover:text-offwhite transition-colors hidden sm:block"
            >
              2-min assessment
            </a>
            <a
              href="/#contact"
              className="px-5 py-2.5 bg-pink text-white rounded-full font-semibold text-[15px] hover:bg-pink-deep transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden bg-[linear-gradient(110deg,#2c0a11_0%,#330d14_55%,#43101a_100%)]">
        <div className="absolute top-28 left-[5%] w-6 h-6 bg-[#ff3d7e]/30 rounded-full animate-float1" />
        <div className="absolute top-44 right-[8%] w-6 h-6 bg-[#ff3d7e]/25 rounded-full animate-float2" />
        <div className="absolute bottom-16 left-[12%] w-6 h-6 bg-[#ff3d7e]/35 rounded-full animate-float3" />
        <div className="absolute bottom-28 right-[6%] w-6 h-6 bg-[#ff3d7e]/30 rounded-full animate-float1" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="flex items-center justify-center gap-2.5 text-[13px] tracking-[3px] text-rosemuted font-semibold uppercase mb-4"><span className="w-[9px] h-[9px] rounded-full bg-pink flex-shrink-0" />Our methodology</p>
          <h1 className="text-4xl md:text-5xl font-bold text-offwhite leading-[1.1] tracking-[-1px] mb-6">
            The <span className="text-pink [text-shadow:0_0_28px_rgba(255,61,126,0.4)]">Profit</span> Machine Method
          </h1>
          <p className="text-xl text-rosemuted max-w-2xl mx-auto leading-relaxed">
            Every business is a profit machine - it turns inputs into profit.
            The question isn&apos;t whether the machine works. It&apos;s whether it works{" "}
            <span className="text-pink font-medium">well</span>, whether you can{" "}
            <span className="text-pink font-medium">see</span> it working, and whether it keeps
            working <span className="text-pink font-medium">predictably</span>.
          </p>
        </div>
      </section>

      {/* Three Cornerstones */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="flex items-center gap-2.5 text-[13px] tracking-[3px] text-[#8a6b74] font-semibold uppercase mb-3"><span className="w-[9px] h-[9px] rounded-full bg-pink flex-shrink-0" />Layer 1</p>
          <h2 className="text-3xl font-bold text-[#3a2028] mb-4 pb-4 border-b-2 border-[#eaddda]">
            Three cornerstones of a healthy business
          </h2>
          <p className="text-[#8a6b74] mb-14 max-w-2xl">
            If a business is healthy across all three, the machine is working.
            If not, something is broken - and usually measurable.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <div className="w-12 h-12 bg-[#ff3d7e]/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#ff3d7e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#4d141e] mb-3">Unit economics</h3>
              <p className="text-[#8a6b74] leading-relaxed mb-4">
                Do you make money on every unit you sell? Revenue growth with declining unit economics
                is a leaky bucket - you&apos;re feeding the machine faster, but profit is falling out the bottom.
              </p>
              <ul className="text-[#8a6b74] text-sm space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-pink flex-shrink-0" />Revenue by volume, price, and mix</li>
                <li className="flex items-start gap-2"><span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-pink flex-shrink-0" />Margin by customer and product</li>
                <li className="flex items-start gap-2"><span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-pink flex-shrink-0" />Customer concentration risk</li>
              </ul>
            </div>

            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <div className="w-12 h-12 bg-[#ff3d7e]/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#ff3d7e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#4d141e] mb-3">Capital efficiency</h3>
              <p className="text-[#8a6b74] leading-relaxed mb-4">
                Does capital flow through the machine or get stuck? Strong earnings don&apos;t matter
                if working capital is invisible across five systems.
              </p>
              <ul className="text-[#8a6b74] text-sm space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-pink flex-shrink-0" />Cash conversion cycle by segment</li>
                <li className="flex items-start gap-2"><span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-pink flex-shrink-0" />Working capital trends</li>
                <li className="flex items-start gap-2"><span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-pink flex-shrink-0" />Capital generating value vs tied up</li>
              </ul>
            </div>

            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <div className="w-12 h-12 bg-[#ff3d7e]/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#ff3d7e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#4d141e] mb-3">Margin consistency</h3>
              <p className="text-[#8a6b74] leading-relaxed mb-4">
                Can you predict your output from your input? When margin varies 30+ points within the same
                business, you don&apos;t have an industry ceiling - you have a consistency problem.
              </p>
              <ul className="text-[#8a6b74] text-sm space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-pink flex-shrink-0" />Margin variance across segments</li>
                <li className="flex items-start gap-2"><span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-pink flex-shrink-0" />Discount depth analysis</li>
                <li className="flex items-start gap-2"><span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-pink flex-shrink-0" />Forecast accuracy by line item</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Four Failure Modes */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="flex items-center gap-2.5 text-[13px] tracking-[3px] text-[#8a6b74] font-semibold uppercase mb-3"><span className="w-[9px] h-[9px] rounded-full bg-pink flex-shrink-0" />Layer 2</p>
          <h2 className="text-3xl font-bold text-[#3a2028] mb-4 pb-4 border-b-2 border-[#eaddda]">
            Four ways machines break
          </h2>
          <p className="text-[#8a6b74] mb-14 max-w-2xl">
            When a business underperforms, it&apos;s always one or more of these failure modes.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink/10 rounded-lg flex items-center justify-center">
                  <span className="text-pink font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-[#3a2028]">Fragmentation</h3>
              </div>
              <p className="text-[#8a6b74] text-sm font-medium mb-3">The machine is blind</p>
              <p className="text-[#8a6b74] text-sm leading-relaxed mb-4">
                Data exists across disconnected systems. Nobody has joined it up.
                Basic questions take a week to answer instead of an hour.
              </p>
              <div className="bg-[#faf4f2] rounded-lg p-4">
                <p className="text-[#8a6b74] text-xs italic">
                  &ldquo;A $400M company had $80M in working capital invisible because data
                  lived in five systems. Leadership couldn&apos;t answer basic questions about cash conversion.&rdquo;
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink/10 rounded-lg flex items-center justify-center">
                  <span className="text-pink font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-[#3a2028]">Inherited belief</h3>
              </div>
              <p className="text-[#8a6b74] text-sm font-medium mb-3">The machine is misjudged</p>
              <p className="text-[#8a6b74] text-sm leading-relaxed mb-4">
                Assumptions that stopped being questioned. The machine is capable of more,
                but everyone believes the current output is the ceiling.
              </p>
              <div className="bg-[#faf4f2] rounded-lg p-4">
                <p className="text-[#8a6b74] text-xs italic">
                  &ldquo;Executives believed margins were capped by the industry. Disaggregation
                  revealed 30-point variance - bottom at 15%, top at 45%.&rdquo;
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink/10 rounded-lg flex items-center justify-center">
                  <span className="text-pink font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-[#3a2028]">Handoff leaks</h3>
              </div>
              <p className="text-[#8a6b74] text-sm font-medium mb-3">The machine is leaking</p>
              <p className="text-[#8a6b74] text-sm leading-relaxed mb-4">
                Value drains between functions. Order to ship to invoice to cash  - 
                each handoff is where revenue gets won but profit gets lost.
              </p>
              <div className="bg-[#faf4f2] rounded-lg p-4">
                <p className="text-[#8a6b74] text-xs italic">
                  &ldquo;Revenue leakage runs 1-5% of total revenue for mid-market companies.
                  On $50M, that&apos;s $500K-$2.5M annually - often invisible across functional boundaries.&rdquo;
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink/10 rounded-lg flex items-center justify-center">
                  <span className="text-pink font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-[#3a2028]">Political silence</h3>
              </div>
              <p className="text-[#8a6b74] text-sm font-medium mb-3">The machine is protected</p>
              <p className="text-[#8a6b74] text-sm leading-relaxed mb-4">
                The people closest to the data know it&apos;s broken but won&apos;t say so.
                Problems are visible from the inside but invisible from the top.
              </p>
              <div className="bg-[#faf4f2] rounded-lg p-4">
                <p className="text-[#8a6b74] text-xs italic">
                  &ldquo;Visibility creates accountability. Accountability has owners.
                  Owners have careers to protect. This is exactly why outside assessment matters.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Method - 4 Stages */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="flex items-center gap-2.5 text-[13px] tracking-[3px] text-[#8a6b74] font-semibold uppercase mb-3"><span className="w-[9px] h-[9px] rounded-full bg-pink flex-shrink-0" />Layer 3</p>
          <h2 className="text-3xl font-bold text-[#3a2028] mb-4 pb-4 border-b-2 border-[#eaddda]">
            How we work
          </h2>
          <p className="text-[#8a6b74] mb-14 max-w-2xl">
            Diagnose before prescribe. Each stage has a clear purpose and deliverable.
          </p>

          <div className="space-y-6">
            {/* Stage 1 */}
            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-pink rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#3a2028] mb-1">X-Ray</h3>
                  <p className="text-[#8a6b74] text-sm font-medium mb-3">See the machine</p>
                  <p className="text-[#8a6b74] leading-relaxed mb-4">
                    Connect data sources and make the machine visible. We map actual data flows,
                    surface manual workarounds, and produce a first-pass view of all three cornerstones.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#f3e7e4] rounded-full text-xs font-medium text-[#8a6b74]">5 business days</span>
                    <span className="px-3 py-1 bg-[#f3e7e4] rounded-full text-xs font-medium text-[#8a6b74]">Fixed fee</span>
                    <span className="px-3 py-1 bg-[#f3e7e4] rounded-full text-xs font-medium text-[#8a6b74]">Top 3 opportunities identified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-pink rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#3a2028] mb-1">Diagnosis</h3>
                  <p className="text-[#8a6b74] text-sm font-medium mb-3">Size the gaps</p>
                  <p className="text-[#8a6b74] leading-relaxed mb-4">
                    Disaggregate every average, test inherited beliefs with data, and size each gap in pounds.
                    Not &ldquo;you have a pricing problem&rdquo; - but &ldquo;your bottom-quartile deals are 22 points
                    below median margin, representing $1.8M in annual EBITDA.&rdquo;
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#f3e7e4] rounded-full text-xs font-medium text-[#8a6b74]">Every gap sized in pounds</span>
                    <span className="px-3 py-1 bg-[#f3e7e4] rounded-full text-xs font-medium text-[#8a6b74]">Prioritised by impact and speed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-pink rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#3a2028] mb-1">Intervention</h3>
                  <p className="text-[#8a6b74] text-sm font-medium mb-3">Fix the leaks</p>
                  <p className="text-[#8a6b74] leading-relaxed mb-4">
                    Build the specific measurement systems that close the diagnosed gaps. Automate
                    manual workarounds, eliminate key-person dependencies, and create systems that
                    trigger action - not just produce reports.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#f3e7e4] rounded-full text-xs font-medium text-[#8a6b74]">Action-triggering systems</span>
                    <span className="px-3 py-1 bg-[#f3e7e4] rounded-full text-xs font-medium text-[#8a6b74]">Survives personnel changes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-pink rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#3a2028] mb-1">Machine health</h3>
                  <p className="text-[#8a6b74] text-sm font-medium mb-3">Keep it visible</p>
                  <p className="text-[#8a6b74] leading-relaxed mb-4">
                    Ongoing monitoring of all three cornerstones. Threshold alerts, leading indicators,
                    and reporting that&apos;s management-grade and investor-grade at the same time.
                    The machine stays visible permanently.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#f3e7e4] rounded-full text-xs font-medium text-[#8a6b74]">Real-time health dashboard</span>
                    <span className="px-3 py-1 bg-[#f3e7e4] rounded-full text-xs font-medium text-[#8a6b74]">Early warning alerts</span>
                    <span className="px-3 py-1 bg-[#f3e7e4] rounded-full text-xs font-medium text-[#8a6b74]">Investor-grade reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-12 left-[6%] w-6 h-6 bg-[#ff3d7e]/25 rounded-full animate-float2" />
        <div className="absolute top-28 right-[10%] w-6 h-6 bg-[#ff3d7e]/30 rounded-full animate-float1" />
        <div className="absolute bottom-16 left-[14%] w-6 h-6 bg-[#ff3d7e]/35 rounded-full animate-float3" />
        <div className="absolute bottom-28 right-[5%] w-6 h-6 bg-[#ff3d7e]/25 rounded-full animate-float2" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-[#ff3d7e]/10 to-[#ff9dbf]/20 border border-pink/30 rounded-[14px] p-10 md:p-14 text-center">
            <h2 className="text-3xl font-bold text-[#3a2028] mb-4">
              Where is your machine leaking?
            </h2>
            <p className="text-lg text-[#8a6b74] mb-8 max-w-xl mx-auto">
              Take our 2-minute assessment and find out which cornerstones need attention
              and where your blind spots are costing you money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/assess"
                className="px-8 py-4 bg-pink text-white rounded-full font-semibold shadow-[0_6px_30px_rgba(255,61,126,0.35)] hover:bg-pink-deep transition-colors text-lg"
              >
                Take the 2-min assessment &rarr;
              </a>
              <a
                href="/#contact"
                className="px-8 py-4 border-2 border-pink/55 text-oxblood rounded-full font-semibold hover:border-pink transition-colors text-lg"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 text-center bg-[linear-gradient(110deg,#2c0a11_0%,#330d14_60%,#3f1019_100%)]">
        <a href="/" className="inline-block">
          <Wordmark dark big />
        </a>
        <p className="mt-4 text-sm tracking-[5px] uppercase text-rosemuted">London, UK</p>
        <a
          href="/#contact"
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
