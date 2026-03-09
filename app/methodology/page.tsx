import Image from "next/image";

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-[#EDEDED] text-slate-800">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#EDEDED]/90 backdrop-blur-md z-50 border-b border-slate-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src="/logo-icon.png" alt="Mosaic Data" width={48} height={31} className="rounded" />
            <span className="text-xl font-semibold text-slate-800">Mosaic Data</span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href="/assess"
              className="px-5 py-2 border border-coral text-coral rounded-lg font-semibold hover:bg-coral/5 transition-colors"
            >
              2-min assessment
            </a>
            <a
              href="/#contact"
              className="px-5 py-2 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-28 left-[5%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float1" />
        <div className="absolute top-44 right-[8%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float2" />
        <div className="absolute bottom-16 left-[12%] w-6 h-6 bg-[#D4705A]/35 rounded-sm animate-float3" />
        <div className="absolute bottom-28 right-[6%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float1" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-coral text-sm font-medium uppercase tracking-wider mb-4">Our methodology</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-6">
            The Profit Machine Method
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every business is a profit machine &mdash; it turns inputs into profit.
            The question isn&apos;t whether the machine works. It&apos;s whether it works{" "}
            <span className="text-coral font-medium">well</span>, whether you can{" "}
            <span className="text-coral font-medium">see</span> it working, and whether it keeps
            working <span className="text-coral font-medium">predictably</span>.
          </p>
        </div>
      </section>

      {/* Three Cornerstones */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-coral text-sm font-medium uppercase tracking-wider text-center mb-3">Layer 1</p>
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Three cornerstones of a healthy business
          </h2>
          <p className="text-slate-600 text-center mb-14 max-w-2xl mx-auto">
            If a business is healthy across all three, the machine is working.
            If not, something is broken &mdash; and usually measurable.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Unit economics</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Do you make money on every unit you sell? Revenue growth with declining unit economics
                is a leaky bucket &mdash; you&apos;re feeding the machine faster, but profit is falling out the bottom.
              </p>
              <ul className="text-slate-500 text-sm space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-coral mt-0.5">&#8226;</span>Revenue by volume, price, and mix</li>
                <li className="flex items-start gap-2"><span className="text-coral mt-0.5">&#8226;</span>Margin by customer and product</li>
                <li className="flex items-start gap-2"><span className="text-coral mt-0.5">&#8226;</span>Customer concentration risk</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Capital efficiency</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Does capital flow through the machine or get stuck? Strong earnings don&apos;t matter
                if working capital is invisible across five systems.
              </p>
              <ul className="text-slate-500 text-sm space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-coral mt-0.5">&#8226;</span>Cash conversion cycle by segment</li>
                <li className="flex items-start gap-2"><span className="text-coral mt-0.5">&#8226;</span>Working capital trends</li>
                <li className="flex items-start gap-2"><span className="text-coral mt-0.5">&#8226;</span>Capital generating value vs tied up</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Margin consistency</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Can you predict your output from your input? When margin varies 30+ points within the same
                business, you don&apos;t have an industry ceiling &mdash; you have a consistency problem.
              </p>
              <ul className="text-slate-500 text-sm space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-coral mt-0.5">&#8226;</span>Margin variance across segments</li>
                <li className="flex items-start gap-2"><span className="text-coral mt-0.5">&#8226;</span>Discount depth analysis</li>
                <li className="flex items-start gap-2"><span className="text-coral mt-0.5">&#8226;</span>Forecast accuracy by line item</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Four Failure Modes */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-coral text-sm font-medium uppercase tracking-wider text-center mb-3">Layer 2</p>
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Four ways machines break
          </h2>
          <p className="text-slate-600 text-center mb-14 max-w-2xl mx-auto">
            When a business underperforms, it&apos;s always one or more of these failure modes.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                  <span className="text-red-500 font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Fragmentation</h3>
              </div>
              <p className="text-coral text-sm font-medium mb-3">The machine is blind</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Data exists across disconnected systems. Nobody has joined it up.
                Basic questions take a week to answer instead of an hour.
              </p>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-slate-500 text-xs italic">
                  &ldquo;A $400M company had $80M in working capital invisible because data
                  lived in five systems. Leadership couldn&apos;t answer basic questions about cash conversion.&rdquo;
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                  <span className="text-red-500 font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Inherited belief</h3>
              </div>
              <p className="text-coral text-sm font-medium mb-3">The machine is misjudged</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Assumptions that stopped being questioned. The machine is capable of more,
                but everyone believes the current output is the ceiling.
              </p>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-slate-500 text-xs italic">
                  &ldquo;Executives believed margins were capped by the industry. Disaggregation
                  revealed 30-point variance &mdash; bottom at 15%, top at 45%.&rdquo;
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                  <span className="text-red-500 font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Handoff leaks</h3>
              </div>
              <p className="text-coral text-sm font-medium mb-3">The machine is leaking</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Value drains between functions. Order to ship to invoice to cash &mdash;
                each handoff is where revenue gets won but profit gets lost.
              </p>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-slate-500 text-xs italic">
                  &ldquo;Revenue leakage runs 1-5% of total revenue for mid-market companies.
                  On $50M, that&apos;s $500K-$2.5M annually &mdash; often invisible across functional boundaries.&rdquo;
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                  <span className="text-red-500 font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Political silence</h3>
              </div>
              <p className="text-coral text-sm font-medium mb-3">The machine is protected</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                The people closest to the data know it&apos;s broken but won&apos;t say so.
                Problems are visible from the inside but invisible from the top.
              </p>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-slate-500 text-xs italic">
                  &ldquo;Visibility creates accountability. Accountability has owners.
                  Owners have careers to protect. This is exactly why outside assessment matters.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Method - 4 Stages */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-coral text-sm font-medium uppercase tracking-wider text-center mb-3">Layer 3</p>
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            How we work
          </h2>
          <p className="text-slate-600 text-center mb-14 max-w-2xl mx-auto">
            Diagnose before prescribe. Each stage has a clear purpose and deliverable.
          </p>

          <div className="space-y-6">
            {/* Stage 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-coral rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">X-Ray</h3>
                  <p className="text-coral text-sm font-medium mb-3">See the machine</p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Connect data sources and make the machine visible. We map actual data flows,
                    surface manual workarounds, and produce a first-pass view of all three cornerstones.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">5 business days</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">Fixed fee</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">Top 3 opportunities identified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-coral rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">Diagnosis</h3>
                  <p className="text-coral text-sm font-medium mb-3">Size the gaps</p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Disaggregate every average, test inherited beliefs with data, and size each gap in pounds.
                    Not &ldquo;you have a pricing problem&rdquo; &mdash; but &ldquo;your bottom-quartile deals are 22 points
                    below median margin, representing &pound;1.8M in annual EBITDA.&rdquo;
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">Every gap sized in pounds</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">Prioritised by impact and speed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-coral rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">Intervention</h3>
                  <p className="text-coral text-sm font-medium mb-3">Fix the leaks</p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Build the specific measurement systems that close the diagnosed gaps. Automate
                    manual workarounds, eliminate key-person dependencies, and create systems that
                    trigger action &mdash; not just produce reports.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">Action-triggering systems</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">Survives personnel changes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-coral rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">Machine health</h3>
                  <p className="text-coral text-sm font-medium mb-3">Keep it visible</p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Ongoing monitoring of all three cornerstones. Threshold alerts, leading indicators,
                    and reporting that&apos;s management-grade and investor-grade at the same time.
                    The machine stays visible permanently.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">Real-time health dashboard</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">Early warning alerts</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">Investor-grade reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-12 left-[6%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float2" />
        <div className="absolute top-28 right-[10%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float1" />
        <div className="absolute bottom-16 left-[14%] w-6 h-6 bg-[#D4705A]/35 rounded-sm animate-float3" />
        <div className="absolute bottom-28 right-[5%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float2" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-[#D4705A]/10 to-[#E8A090]/20 border border-coral/30 rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Where is your machine leaking?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
              Take our 2-minute assessment and find out which cornerstones need attention
              and where your blind spots are costing you money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/assess"
                className="px-8 py-4 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors text-lg"
              >
                Take the 2-min assessment &rarr;
              </a>
              <a
                href="/#contact"
                className="px-8 py-4 border border-slate-400 text-slate-700 rounded-lg font-semibold hover:border-slate-500 hover:text-slate-900 transition-colors text-lg"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-300 bg-white/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo-icon.png" alt="Mosaic Data" width={40} height={26} className="rounded" />
            <span className="font-semibold text-slate-800">Mosaic Data</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-500 text-sm">London, UK</span>
            <a href="mailto:info@mosaic-data.co" className="text-slate-600 hover:text-coral text-sm transition-colors">
              info@mosaic-data.co
            </a>
            <p className="text-slate-500 text-sm">&copy; 2026 Mosaic Data</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
