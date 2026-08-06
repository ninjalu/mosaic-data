import Image from "next/image";

export const metadata = {
  title: "Your Financial Model Has 60 Tabs. Nobody Trusts It. | Mosaic Data",
  description:
    "The problem isn't the spreadsheet. It's that Excel is being asked to do ETL, transformation, scenario modelling, reporting, and collaboration all at once.",
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#EDEDED] text-slate-800">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#EDEDED]/90 backdrop-blur-md z-50 border-b border-slate-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/logo-icon.png"
              alt="Mosaic Data"
              width={48}
              height={31}
              className="rounded"
            />
            <span className="text-xl font-semibold text-slate-800">
              Mosaic Data
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href="/blog"
              className="px-5 py-2 text-slate-600 font-medium hover:text-slate-900 transition-colors hidden md:block"
            >
              Insights
            </a>
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

      {/* Article */}
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Meta */}
          <div className="mb-8">
            <a
              href="/blog"
              className="text-coral text-sm font-medium hover:text-coral-light transition-colors"
            >
              &larr; Back to Insights
            </a>
          </div>

          <p className="text-coral text-sm font-medium uppercase tracking-wider mb-4">
            Financial Modelling
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Your Financial Model Has 60 Tabs. Nobody Trusts It.
          </h1>
          <p className="text-slate-500 text-sm mb-10">April 2026</p>

          {/* Content */}
          <div className="prose-mosaic space-y-6 text-slate-700 leading-relaxed">
            <p>
              Here&apos;s a pattern we keep seeing.
            </p>

            <p>
              Someone built the financial model two years ago. Someone else
              &ldquo;fixed&rdquo; a few things. The new finance hire added tabs.
              An investor asked for a new scenario and someone copy-pasted a
              couple more tabs.
            </p>

            <p>
              Now it&apos;s 60+ tabs, hidden columns, and a formula that
              references a cell that references another cell that
              references&hellip; a hardcoded number from 2022.
            </p>

            <p>
              We call this a <strong>Franken-model</strong>.
            </p>

            <p>
              The model exists. Nobody trusts it. And nobody trusts it because
              nobody knows how it works.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
              The real problem isn&apos;t the spreadsheet
            </h2>

            <p>
              When the board asks a scenario question&mdash;&ldquo;what happens
              if we lose our second-largest customer?&rdquo;&mdash;the answer is
              &ldquo;give me a week.&rdquo;
            </p>

            <p>
              That&apos;s not a spreadsheet problem. It&apos;s what happens when
              Excel gets asked to do everything: ETL, data transformation,
              scenario modelling, reporting, and collaboration. All at once. In
              one file.
            </p>

            <p>That&apos;s how you end up at 60 tabs. And nobody wants that.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
              Why finance teams stick with spreadsheets anyway
            </h2>

            <p>
              Before we talk about fixing it, it&apos;s worth understanding why
              the spreadsheet persists. It&apos;s not ignorance. It&apos;s
              rational.
            </p>

            <ul className="space-y-3 ml-1">
              <li className="flex items-start gap-3">
                <span className="text-coral mt-1 flex-shrink-0">&#8226;</span>
                <span>
                  <strong>Transparency equals trust.</strong> You can see every
                  formula. You can click on a cell and trace where the number
                  came from. A Python script doesn&apos;t give you that.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-coral mt-1 flex-shrink-0">&#8226;</span>
                <span>
                  <strong>Tactile control.</strong> Change an assumption, watch
                  it flow through. That immediacy matters when you&apos;re
                  thinking through scenarios.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-coral mt-1 flex-shrink-0">&#8226;</span>
                <span>
                  <strong>Career fluency.</strong> Most finance professionals
                  built their careers in Excel. It&apos;s how they think.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-coral mt-1 flex-shrink-0">&#8226;</span>
                <span>
                  <strong>External expectations.</strong> Auditors and investors
                  expect spreadsheets. &ldquo;Show me the model&rdquo; means
                  &ldquo;send me the Excel.&rdquo;
                </span>
              </li>
            </ul>

            <p>
              These are legitimate reasons. Telling a CFO to &ldquo;just use
              Python&rdquo; is about as helpful as telling a developer to
              &ldquo;just use Excel.&rdquo;
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
              The fix isn&apos;t killing the spreadsheet
            </h2>

            <p>
              It&apos;s shrinking it back to what it&apos;s good at.
            </p>

            <p>
              The Franken-model problem isn&apos;t that Excel is bad. It&apos;s
              that Excel is doing five jobs. A financial model should do one
              thing: turn assumptions into outputs through clear logic. Everything
              else&mdash;pulling data from systems, reconciling sources,
              generating reports&mdash;should happen outside the model.
            </p>

            <p>Here&apos;s what a clean setup looks like:</p>

            <div className="bg-white border border-slate-200 rounded-xl p-6 my-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-coral font-bold mt-0.5">1.</span>
                  <span>
                    <strong>Inputs on a single tab.</strong> Assumptions change
                    once and flow through. No hunting across sheets to update a
                    growth rate.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral font-bold mt-0.5">2.</span>
                  <span>
                    <strong>Flat architecture.</strong> Assumptions feed a build.
                    The build feeds outputs. Nothing hiding in between.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral font-bold mt-0.5">3.</span>
                  <span>
                    <strong>Scenarios as a toggle, not duplicate copies.</strong>{" "}
                    One model with a dropdown. Not three identical models that
                    slowly diverge.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral font-bold mt-0.5">4.</span>
                  <span>
                    <strong>Logic that reads left to right.</strong> No chasing
                    formulas across four sheets to understand one number.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral font-bold mt-0.5">5.</span>
                  <span>
                    <strong>A map at the front.</strong> A single tab that says:
                    here&apos;s what this does, here&apos;s how it flows,
                    here&apos;s what not to touch. A stranger should be able to
                    orient themselves in five minutes.
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
              What should be automated
            </h2>

            <p>
              The plumbing. Not the thinking.
            </p>

            <p>
              Data collection and consolidation from CRM, finance systems, and
              ops tools. Reconciliation between sources that currently takes
              someone half a day every month. Scenario analysis that runs a
              thousand variations instead of three. Reporting outputs that flow
              to board decks without someone copy-pasting numbers.
            </p>

            <p>
              Automate the plumbing, and the model stays clean. Data flows in
              validated and reconciled. The model does what models should
              do&mdash;assumptions and logic. Outputs flow out without human
              error.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
              The board question test
            </h2>

            <p>
              Here&apos;s the benchmark: when the board asks &ldquo;what if we
              lose our top three customers?&rdquo;&mdash;can you answer in
              minutes or does it take a week?
            </p>

            <p>
              If it takes a week, the problem isn&apos;t your finance
              team&apos;s speed. It&apos;s that they&apos;re manually doing work
              that should be automated so they can focus on the judgment calls
              that actually matter.
            </p>

            <p>
              The goal isn&apos;t replacing spreadsheets. It&apos;s giving your
              finance team their time back by taking the plumbing off their
              plate.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-[#D4705A]/10 to-[#E8A090]/20 border border-coral/30 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              How visible is your financial data?
            </h3>
            <p className="text-slate-600 mb-6">
              Take our 2-minute assessment and find out where your blind spots
              are costing you money.
            </p>
            <a
              href="/assess"
              className="inline-block px-8 py-4 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors"
            >
              Take the 2-min assessment &rarr;
            </a>
          </div>
        </div>
      </article>

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
            <a
              href="mailto:info@mosaic-data.co"
              className="text-slate-600 hover:text-coral text-sm transition-colors"
            >
              info@mosaic-data.co
            </a>
            <p className="text-slate-500 text-sm">&copy; 2026 Mosaic Data</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
