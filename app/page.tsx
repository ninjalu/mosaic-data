import Image from "next/image";

export default function Home() {
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
              href="/assess"
              className="px-5 py-2 border border-coral text-coral rounded-lg font-semibold hover:bg-coral/5 transition-colors"
            >
              2-Min Assessment
            </a>
            <a
              href="#contact"
              className="px-5 py-2 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors"
            >
              Book a Call
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
            Stop Losing Profit
            <br />
            <span className="text-coral">
              You Can&apos;t See.
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Take our 2-minute assessment and find out if your company is leaking
            money in places you don&apos;t even know to look.
          </p>

          <a
            href="/assess"
            className="inline-block px-8 py-4 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors text-lg"
          >
            Take the 2-Min Assessment →
          </a>

        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            The Revenue You Can&apos;t See Is Costing You
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Most growing companies are bleeding money in places they don&apos;t even know to look.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-red-500 mb-2">Silent churn</div>
              <div className="text-slate-600 text-sm">
                Customers leaving before anyone notices. No early warning. No intervention. Just lost revenue.
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-red-500 mb-2">Wrong prices</div>
              <div className="text-slate-600 text-sm">
                Leaving margin on the table—or pricing yourself out of deals. No system to find the sweet spot.
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-red-500 mb-2">Bad forecasts</div>
              <div className="text-slate-600 text-sm">
                Too much inventory. Too little. Stockouts and write-offs. Cash tied up in the wrong places.
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-red-500 mb-2">Gut decisions</div>
              <div className="text-slate-600 text-sm">
                Important calls made on instinct because no one knows what the data actually says.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Comparison */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/70 border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="text-red-500 text-sm font-medium uppercase tracking-wider mb-4">Today</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Flying Blind</h3>
              <ul className="space-y-4">
                {[
                  "Dashboards that describe the past, not predict the future",
                  "No early warning when customers are about to leave",
                  "Pricing based on competitors, not customer value",
                  "Forecasts that miss by 30%+ every quarter",
                  "Data exists, but no one knows what it's saying",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span className="text-red-500 mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#D4705A]/10 to-[#E8A090]/20 border border-coral/30 rounded-2xl p-8">
              <div className="text-coral text-sm font-medium uppercase tracking-wider mb-4">With Mosaic</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">See What You&apos;ve Been Missing</h3>
              <ul className="space-y-4">
                {[
                  "Know which customers will churn—60 days before they do",
                  "Find the pricing headroom you didn't know existed",
                  "Forecast demand accurately enough to act on",
                  "Turn gut decisions into data-backed confidence",
                  "Systems that keep capturing value, not one-off reports",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="text-coral mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-white/50 relative overflow-hidden">
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
            Find the Levers. Build the Systems.
          </h2>
          <p className="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            We diagnose where you&apos;re losing money, build systems to capture it, and make sure your team actually uses them.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-coral rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <div className="pl-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Diagnose</h3>
                <p className="text-slate-600">
                  We dig into your business and data to find where you&apos;re bleeding money.
                  Not what&apos;s technically interesting—what actually moves the needle.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-coral rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <div className="pl-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Build</h3>
                <p className="text-slate-600">
                  We create systems that surface opportunities and risks automatically.
                  Integrated into your workflow—not reports that sit in someone&apos;s inbox.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-coral rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <div className="pl-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Drive Adoption</h3>
                <p className="text-slate-600">
                  Technology only works if people use it. We work with your team to make
                  sure insights turn into action—and action turns into results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 relative overflow-hidden">
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
            Where Companies Find Hidden Revenue
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            These are the levers that move the needle. The question is: which ones are you missing?
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Customers About to Leave",
                result: "Know who's at risk 60 days before they churn",
                lever: "Intervene early. Save the relationship. Protect recurring revenue."
              },
              {
                title: "Cash Trapped in Inventory",
                result: "See what you'll actually need, 90 days out",
                lever: "Less capital tied up. Fewer stockouts. Better cash flow."
              },
              {
                title: "Margin Left on the Table",
                result: "Find what customers are actually willing to pay",
                lever: "Price based on value, not competitors. Capture what you're worth."
              },
              {
                title: "Sales Effort Wasted on Bad Leads",
                result: "Know which deals will close before you invest the time",
                lever: "Focus on winners. Stop chasing deals that were never going to happen."
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-md transition-all shadow-sm">
                <h3 className="font-semibold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.result}</p>
                <div className="text-sm text-coral font-medium">
                  ↳ {item.lever}
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
            Business Judgment First. Technology Second.
          </h2>
          <p className="text-slate-600 text-center mb-4 max-w-2xl mx-auto">
            AI can write code. It can&apos;t diagnose your business problems, earn your team&apos;s trust, or
            make sure insights actually change behavior. That&apos;s what we do.
          </p>
          <p className="text-coral/70 text-center text-sm mb-12">
            Working with companies in B2B SaaS, distribution, and professional services.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#D4705A]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-slate-900 font-semibold text-lg mb-2">We Think Like Operators</h3>
              <p className="text-slate-600 text-sm">
                Finance and accounting background means we understand P&L impact, working capital,
                and what actually matters to your board—not just model accuracy.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#D4705A]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-slate-900 font-semibold text-lg mb-2">We Find the Problems</h3>
              <p className="text-slate-600 text-sm">
                You don&apos;t need to know what to ask for. We dig into your business,
                find where you&apos;re losing money, and bring opportunities to you.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#D4705A]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-slate-900 font-semibold text-lg mb-2">We Build Systems</h3>
              <p className="text-slate-600 text-sm">
                Not one-off analyses. We build systems that keep capturing value—automatically
                surfacing risks and opportunities so nothing slips through.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#D4705A]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-slate-900 font-semibold text-lg mb-2">We Drive Adoption</h3>
              <p className="text-slate-600 text-sm">
                Insights that sit in dashboards don&apos;t create value. We work with your team to make
                sure what we build actually gets used.
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
                    I&apos;m Lu—I started in accounting and corporate finance before moving into data science.
                    That path taught me something important: the hard part isn&apos;t the technology.
                    It&apos;s knowing what questions to ask.
                  </p>
                  <p>
                    Most companies have the data. What they don&apos;t have is someone who can diagnose
                    where they&apos;re bleeding money, design the right systems to capture it, and actually
                    get their teams to use them. That&apos;s what I do.
                  </p>
                  <p className="text-slate-700">
                    AI is getting better at the technical work every day. But it can&apos;t understand your
                    board pressures, your team dynamics, or what will actually change behavior in your organization.
                    That&apos;s a human judgment problem—and that&apos;s where the real value is.
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
            Revenue Intelligence Partnership
          </h2>
          <p className="text-slate-600 mb-12">
            We find the money. You keep it.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 max-w-xl mx-auto shadow-sm">
            <div className="text-coral text-sm font-medium uppercase tracking-wider mb-2">Monthly Retainer</div>
            <div className="text-4xl font-bold text-slate-900 mb-2">
              From £4K<span className="text-xl font-normal text-slate-500">/month</span>
            </div>
            <p className="text-slate-500 mb-8">Flat fee. No hourly billing. No surprises.</p>

            <ul className="text-left space-y-4 mb-8">
              {[
                "Ongoing diagnosis: we keep finding new opportunities",
                "Systems that capture value automatically",
                "Adoption support: making sure your team actually uses it",
                "Monthly strategy briefing with leadership",
                "Direct access for questions and priorities",
                "AI-accelerated delivery—results in weeks, not months",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-coral mt-1">✓</span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="block w-full py-4 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors text-center"
            >
              Let&apos;s Talk
            </a>
            <p className="text-slate-500 text-sm mt-4">
              No commitment. We&apos;ll tell you honestly if we can help.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Questions We Get Asked
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How do you find opportunities we haven't seen?",
                a: "We've done this before. We know the patterns—where companies typically bleed money without realizing it. Churn signals hiding in usage data. Pricing headroom no one's tested. Forecasting errors that compound every quarter. We dig into your business looking for these specific patterns."
              },
              {
                q: "What if our data is a mess?",
                a: "Most is. We start by finding what's usable today. You'd be surprised—basic CRM and billing data often has enough signal to identify at-risk customers or pricing opportunities. We work with what you have, not what you wish you had."
              },
              {
                q: "How is this different from hiring a data scientist?",
                a: "A data scientist writes code. We diagnose business problems, design what to measure, and make sure your team actually uses the insights. The technical work is increasingly AI-assisted—the strategic work requires human judgment. That's what we focus on."
              },
              {
                q: "Won't AI replace what you do?",
                a: "It's replacing the technical work—and we embrace that. AI helps us move faster. But it can't sit in a room with your leadership team, understand your board dynamics, or figure out why your sales team ignores the CRM. That's the hard part, and that's what we do."
              },
              {
                q: "Do you replace our existing BI tools?",
                a: "No. We plug into whatever you're using—Tableau, Looker, Metabase. We make your existing investment more valuable by adding the predictive layer on top."
              },
              {
                q: "How do you handle sensitive financial data?",
                a: "SOC 2 Type II compliant. Data stays in your cloud (AWS, GCP, Azure). We work via secure access, not data transfers. Happy to walk through our security posture on a call."
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
              How Visible Is Your Financial Data?
            </h2>
            <p className="text-lg text-slate-600 mb-3 max-w-xl mx-auto">
              Take our 2-minute Financial Visibility Score and find out where your blind spots are costing you money.
            </p>
            <p className="text-slate-500 mb-8">
              15 questions. Instant results. No sales call required.
            </p>
            <a
              href="/assess"
              className="inline-block px-8 py-4 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors text-lg"
            >
              Take the 2-Min Assessment &rarr;
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
            honestly if we can help.
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
                Where do you think you might be leaving money on the table?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-coral focus:border-coral"
                placeholder="e.g., Customers churning and we don't know why until it's too late..."
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
