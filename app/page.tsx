import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Mosaic Data"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-semibold text-gray-900">Mosaic Data</span>
          </div>
          <a
            href="#contact"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-6">
            For PE Operating Partners
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            A Fractional Data Science Team
            <span className="text-indigo-600"> at the Price of One FTE</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Deploy AI-powered analytics across your entire portfolio.
            Drive value creation with predictive insights, not just dashboards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg"
            >
              Schedule a Demo
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-lg font-semibold hover:border-gray-300 transition-colors text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">47%</div>
              <div className="text-gray-600">of PE returns now come from value creation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">5-20x</div>
              <div className="text-gray-600">portfolio companies served per relationship</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">70%</div>
              <div className="text-gray-600">less cost than building an internal team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            The Portfolio Analytics Challenge
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Mid-market portfolio companies need data-driven insights but can&apos;t justify full-time data science headcount.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-red-100 rounded-xl bg-red-50/50">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-red-500">&#10007;</span> Traditional BI Firms
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>Generic dashboards that sit unused</li>
                <li>No predictive capabilities</li>
                <li>$30K+/month for basic reporting</li>
                <li>3-6 month implementation timelines</li>
              </ul>
            </div>
            <div className="p-6 border border-green-100 rounded-xl bg-green-50/50">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-green-500">&#10003;</span> Mosaic Data
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>AI-powered predictive analytics</li>
                <li>Industry-specific models from day one</li>
                <li>$12-20K/month for full service</li>
                <li>Value delivery in 30 days</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            One relationship with your firm. Analytics capabilities across your entire portfolio.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Portfolio Assessment</h3>
              <p className="text-gray-600">
                We assess data maturity and identify highest-impact opportunities across your portfolio companies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deploy AI Models</h3>
              <p className="text-gray-600">
                Industry-specific predictive models for demand forecasting, churn prediction, pricing optimization, and more.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Drive Value Creation</h3>
              <p className="text-gray-600">
                Monthly insights briefings and ongoing model refinement. Measurable impact on portfolio performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            AI-Powered Insights
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Predictive analytics that drive decisions, not just describe the past.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Demand Forecasting", desc: "Predict inventory needs 90 days out with 95%+ accuracy" },
              { title: "Churn Prediction", desc: "Identify at-risk customers before they leave" },
              { title: "Pricing Optimization", desc: "Dynamic pricing models that maximize margin" },
              { title: "Operational Efficiency", desc: "Identify bottlenecks and optimization opportunities" },
            ].map((item, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-xl hover:border-indigo-200 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-white/90 italic mb-6">
            &ldquo;We deployed Mosaic across 8 portfolio companies in 6 months.
            The predictive models identified $4M in margin improvement opportunities
            that our traditional BI would have missed.&rdquo;
          </p>
          <p className="text-indigo-200">
            — Operating Partner, Mid-Market PE Firm
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 mb-12">
            Fractional data science at a fraction of the cost.
          </p>
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-200 max-w-xl mx-auto">
            <div className="text-sm text-indigo-600 font-medium mb-2">PORTFOLIO SUBSCRIPTION</div>
            <div className="text-4xl font-bold text-gray-900 mb-2">
              $12-20K<span className="text-xl font-normal text-gray-500">/month</span>
            </div>
            <p className="text-gray-600 mb-6">per portfolio company</p>
            <ul className="text-left space-y-3 mb-8">
              {[
                "Dedicated data science team (15-20 hrs/month)",
                "Industry-specific predictive models",
                "Monthly insights briefings",
                "Slack/Teams integration for ad-hoc questions",
                "Portfolio-wide pattern identification",
                "Executive dashboards included",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">&#10003;</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block w-full py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Let&apos;s Talk
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Schedule a 30-minute call to discuss your portfolio&apos;s analytics needs.
          </p>
          <form
            action="https://formspree.io/f/mwvvkjnb"
            method="POST"
            className="bg-white p-8 rounded-xl shadow-sm space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Work Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@firm.com"
              />
            </div>
            <div>
              <label htmlFor="firm" className="block text-sm font-medium text-gray-700 mb-2">
                Firm Name
              </label>
              <input
                type="text"
                id="firm"
                name="firm"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your PE firm"
              />
            </div>
            <div>
              <label htmlFor="portfolio_size" className="block text-sm font-medium text-gray-700 mb-2">
                Portfolio Size
              </label>
              <select
                id="portfolio_size"
                name="portfolio_size"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select portfolio size</option>
                <option value="1-5">1-5 companies</option>
                <option value="6-10">6-10 companies</option>
                <option value="11-20">11-20 companies</option>
                <option value="20+">20+ companies</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                What analytics challenges are you facing?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Tell us about your portfolio's data and analytics needs..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Request a Demo
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Mosaic Data"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-semibold text-gray-900">Mosaic Data</span>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; 2026 Mosaic Data. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
