"use client";

import { useState } from "react";
import Image from "next/image";

// --- Data ---

const CONTEXT_QUESTIONS = [
  {
    id: "revenue",
    label: "What's your approximate annual revenue?",
    options: ["Under $5M", "$5M - $20M", "$20M - $50M", "$50M - $100M", "$100M+"],
  },
  {
    id: "type",
    label: "What best describes your business?",
    options: ["PE-backed", "VC-backed", "Bootstrapped", "Public", "Other"],
  },
  {
    id: "role",
    label: "What's your role?",
    options: ["CFO / Finance", "CEO / Founder", "COO / Ops", "Data / Analytics", "Other"],
  },
];

type Dimension = {
  key: string;
  name: string;
  shortName: string;
  questions: { text: string; options: { label: string; score: number }[] }[];
  recommendation: string;
};

const DIMENSIONS: Dimension[] = [
  {
    key: "revenue_clarity",
    name: "Revenue Clarity",
    shortName: "Revenue",
    questions: [
      {
        text: "Can you show revenue broken down by customer segment or product line on demand?",
        options: [
          { label: "Yes, automated and updated daily/weekly", score: 4 },
          { label: "Yes, but someone pulls it manually - takes a few hours", score: 3 },
          { label: "Sort of - we have the data but it takes days to assemble", score: 2 },
          { label: "No - we only see total revenue, not by segment", score: 1 },
        ],
      },
      {
        text: "Do you know which customers or segments are actually profitable (revenue minus cost to serve)?",
        options: [
          { label: "Yes, we track unit economics by segment regularly", score: 4 },
          { label: "We have a rough idea but it's not precise or regular", score: 3 },
          { label: "We know revenue by customer but not cost to serve", score: 2 },
          { label: "No - we've never calculated this", score: 1 },
        ],
      },
      {
        text: "Can you see how pricing and discounting affects your realised revenue vs list price?",
        options: [
          { label: "Yes, we track discount rates and realised price by rep/segment", score: 4 },
          { label: "We track some discounting but not systematically", score: 3 },
          { label: "We know discounts happen but don't measure the impact", score: 2 },
          { label: "We don't track this at all", score: 1 },
        ],
      },
    ],
    recommendation:
      "You're likely making pricing and growth decisions without seeing the full picture. Start with: pull revenue by your top 10 customers and calculate cost to serve for each.",
  },
  {
    key: "cash_visibility",
    name: "Cash Visibility",
    shortName: "Cash",
    questions: [
      {
        text: "How far ahead can you see your cash position with confidence?",
        options: [
          { label: "12+ weeks with scenario modelling", score: 4 },
          { label: "4-8 weeks with reasonable accuracy", score: 3 },
          { label: "2-4 weeks, mostly based on current AR/AP", score: 2 },
          { label: "We check the bank balance", score: 1 },
        ],
      },
      {
        text: "Can your team produce a cash flow forecast without manually assembling it from multiple sources?",
        options: [
          { label: "Yes, it's automated or near-automated", score: 4 },
          { label: "Mostly - some manual steps but manageable", score: 3 },
          { label: "It's a significant manual effort every time", score: 2 },
          { label: "We don't produce one regularly", score: 1 },
        ],
      },
      {
        text: "Do you know your cash conversion cycle by customer or segment?",
        options: [
          { label: "Yes, tracked and monitored regularly", score: 4 },
          { label: "We know DSO at a company level but not by segment", score: 3 },
          { label: "We have a general sense but no precise data", score: 2 },
          { label: "No idea", score: 1 },
        ],
      },
    ],
    recommendation:
      "Your cash position is less visible than it needs to be. Start with: build a simple 8-week forward view from AR ageing and AP schedule.",
  },
  {
    key: "reporting_speed",
    name: "Reporting Speed",
    shortName: "Reporting",
    questions: [
      {
        text: "How many working days does your month-end close take?",
        options: [
          { label: "5 or fewer", score: 4 },
          { label: "6-8 days", score: 3 },
          { label: "9-12 days", score: 2 },
          { label: "13+ days", score: 1 },
        ],
      },
      {
        text: 'If your board asked "why did margins change last quarter" - how fast could you get the answer?',
        options: [
          { label: "Same day - the data is there, just need to look", score: 4 },
          { label: "Within a few days - need to pull and analyse", score: 3 },
          { label: "A week or more - requires significant digging", score: 2 },
          { label: "We couldn't answer confidently", score: 1 },
        ],
      },
      {
        text: "What percentage of your finance/data team's time is spent producing reports vs analysing them?",
        options: [
          { label: "Mostly analysing - reports are largely automated", score: 4 },
          { label: "About 50/50", score: 3 },
          { label: "Mostly producing - very little time for analysis", score: 2 },
          { label: "Almost all production - no time for analysis", score: 1 },
        ],
      },
    ],
    recommendation:
      "Your team is spending too much time producing numbers and not enough analysing them. Start with: identify the single most time-consuming manual step in your close and automate it.",
  },
  {
    key: "system_connection",
    name: "System Connection",
    shortName: "Systems",
    questions: [
      {
        text: "How many separate systems hold data that feeds into your financial or operational reporting?",
        options: [
          { label: "1-2 well-integrated systems", score: 4 },
          { label: "3-5 with some integration", score: 3 },
          { label: "3-5 with manual joining required", score: 2 },
          { label: "6+ and mostly disconnected", score: 1 },
        ],
      },
      {
        text: "When two systems show different numbers for the same metric, what happens?",
        options: [
          { label: "Rarely happens - we have a defined source of truth per metric", score: 4 },
          { label: "It happens occasionally and we have a process to resolve it", score: 3 },
          { label: "It happens regularly and someone makes a judgement call", score: 2 },
          { label: "It happens constantly and different people use different numbers", score: 1 },
        ],
      },
    ],
    recommendation:
      "Your data lives in silos that don't talk to each other. Start with: pick the one metric that matters most and trace it from source to board pack. Fix that join first.",
  },
  {
    key: "decision_confidence",
    name: "Decision Confidence",
    shortName: "Confidence",
    questions: [
      {
        text: "When you see a number in a report, what's your first instinct?",
        options: [
          { label: "Trust it - our data is reliable and validated", score: 4 },
          { label: "Mostly trust it but occasionally spot-check", score: 3 },
          { label: "Check it against another source before acting on it", score: 2 },
          { label: "Rebuild it myself or ask someone to verify", score: 1 },
        ],
      },
      {
        text: "In the last 12 months, has a business decision been made on data that turned out to be materially wrong?",
        options: [
          { label: "No", score: 4 },
          { label: "Possibly, but nothing major", score: 3 },
          { label: "Yes, at least once", score: 2 },
          { label: "Yes, multiple times or we wouldn't know", score: 1 },
        ],
      },
    ],
    recommendation:
      "Your team doesn't fully trust the numbers. Start with: pick 3-5 metrics that actually drive decisions, get those right, and ignore the rest.",
  },
  {
    key: "scalability",
    name: "Scalability",
    shortName: "Scale",
    questions: [
      {
        text: "If your finance lead left tomorrow, could someone else produce a trustworthy board pack within one week?",
        options: [
          { label: "Yes - processes are documented and systematised", score: 4 },
          { label: "Probably, with some difficulty", score: 3 },
          { label: "It would take weeks to figure out", score: 2 },
          { label: "No - critical knowledge would leave with them", score: 1 },
        ],
      },
      {
        text: "Are the rules for your key financial metrics (revenue recognition, cost allocation, margin calculations) documented?",
        options: [
          { label: "Yes, fully documented and version-controlled", score: 4 },
          { label: "Mostly documented but some gaps", score: 3 },
          { label: "Partially - key person knows the rest", score: 2 },
          { label: "It's mostly in people's heads", score: 1 },
        ],
      },
    ],
    recommendation:
      "Your finance function is built around people, not processes. Start with: document the revenue recognition and cost allocation logic that lives in someone's head.",
  },
];

const TOTAL_QUESTIONS = DIMENSIONS.reduce((sum, d) => sum + d.questions.length, 0);

// --- Helpers ---

function getScoreBand(score: number) {
  if (score >= 80) return { label: "Strong", color: "#22c55e", description: "You're ahead of most. Focus on optimisation." };
  if (score >= 60) return { label: "Functional", color: "#eab308", description: "The basics work but gaps are costing you money." };
  if (score >= 40) return { label: "At Risk", color: "#f97316", description: "Significant blind spots likely costing you $200K-$500K+ annually." };
  return { label: "Critical", color: "#ef4444", description: "You're making major decisions without the data to support them." };
}

function estimateCost(score: number, revenueRange: string) {
  const revMidpoints: Record<string, number> = {
    "Under $5M": 3_000_000,
    "$5M - $20M": 12_500_000,
    "$20M - $50M": 35_000_000,
    "$50M - $100M": 75_000_000,
    "$100M+": 150_000_000,
  };
  const rev = revMidpoints[revenueRange] || 12_500_000;
  // Higher gap = higher inefficiency factor
  const gapPercent = (100 - score) / 100;
  const factor = gapPercent * 0.008; // ~0.4-0.8% of revenue for typical gaps
  const cost = rev * factor;
  const low = Math.round(cost * 0.7 / 10000) * 10000;
  const high = Math.round(cost * 1.3 / 10000) * 10000;
  return { low: Math.max(low, 50000), high: Math.max(high, 100000) };
}

function formatCurrency(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  return `$${(n / 1_000).toFixed(0)}K`;
}

// --- Radar Chart (pure SVG) ---

function RadarChart({ dimensions, scores }: { dimensions: Dimension[]; scores: Record<string, number> }) {
  const cx = 150, cy = 150, r = 110;
  const n = dimensions.length;
  const angleStep = (2 * Math.PI) / n;
  const levels = [25, 50, 75, 100];

  const getPoint = (i: number, value: number) => {
    const angle = angleStep * i - Math.PI / 2;
    const dist = (value / 100) * r;
    return { x: cx + dist * Math.cos(angle), y: cy + dist * Math.sin(angle) };
  };

  const dataPoints = dimensions.map((d, i) => getPoint(i, scores[d.key] || 0));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-[320px] mx-auto">
      {/* Grid levels */}
      {levels.map((level) => {
        const pts = dimensions.map((_, i) => getPoint(i, level));
        const path = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";
        return <path key={level} d={path} fill="none" stroke="#e2e8f0" strokeWidth="1" />;
      })}
      {/* Axes */}
      {dimensions.map((_, i) => {
        const p = getPoint(i, 100);
        return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#e2e8f0" strokeWidth="1" />;
      })}
      {/* Data area */}
      <path d={dataPath} fill="rgba(212, 112, 90, 0.2)" stroke="#D4705A" strokeWidth="2.5" />
      {/* Data points */}
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill="#D4705A" />
      ))}
      {/* Labels */}
      {dimensions.map((d, i) => {
        const p = getPoint(i, 125);
        const angle = angleStep * i - Math.PI / 2;
        const textAnchor = Math.abs(Math.cos(angle)) < 0.1 ? "middle" : Math.cos(angle) > 0 ? "start" : "end";
        return (
          <text
            key={i}
            x={p.x}
            y={p.y}
            textAnchor={textAnchor}
            dominantBaseline="middle"
            className="text-[11px] fill-slate-600 font-medium"
          >
            {d.shortName}
          </text>
        );
      })}
    </svg>
  );
}

// --- Score Circle ---

function ScoreCircle({ score }: { score: number }) {
  const band = getScoreBand(score);
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-40 h-40 mx-auto">
      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
        <circle cx="60" cy="60" r="54" fill="none" stroke="#e2e8f0" strokeWidth="8" />
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke={band.color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-slate-900">{score}</span>
        <span className="text-sm text-slate-500">/100</span>
      </div>
    </div>
  );
}

// --- Main Component ---

export default function AssessPage() {
  const [phase, setPhase] = useState<"context" | "questions" | "results">("context");
  const [contextAnswers, setContextAnswers] = useState<Record<string, string>>({});
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentQ, setCurrentQ] = useState(0);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Flatten all scored questions
  const allQuestions = DIMENSIONS.flatMap((d) =>
    d.questions.map((q, qi) => ({ ...q, dimensionKey: d.key, dimensionName: d.name, qIndex: qi }))
  );

  // Context phase
  const contextComplete = CONTEXT_QUESTIONS.every((q) => contextAnswers[q.id]);

  // Calculate scores
  function calculateScores() {
    const dimScores: Record<string, number> = {};
    for (const dim of DIMENSIONS) {
      const qScores = dim.questions.map((_, qi) => answers[`${dim.key}_${qi}`] || 0);
      const avg = qScores.reduce((a, b) => a + b, 0) / qScores.length;
      dimScores[dim.key] = Math.round((avg / 4) * 100);
    }
    return dimScores;
  }

  function getOverallScore(dimScores: Record<string, number>) {
    const values = Object.values(dimScores);
    return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
  }

  // Handlers
  function handleContextSelect(id: string, value: string) {
    setContextAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function handleAnswer(score: number) {
    const q = allQuestions[currentQ];
    const key = `${q.dimensionKey}_${q.qIndex}`;
    setAnswers((prev) => ({ ...prev, [key]: score }));

    if (currentQ < allQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setPhase("results");
    }
  }

  function handleBack() {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  }

  // Results
  const dimScores = calculateScores();
  const overallScore = getOverallScore(dimScores);
  const band = getScoreBand(overallScore);
  const costEstimate = estimateCost(overallScore, contextAnswers.revenue || "$5M - $20M");

  // Top 3 weakest dimensions
  const weakest = [...DIMENSIONS]
    .sort((a, b) => (dimScores[a.key] || 0) - (dimScores[b.key] || 0))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#EDEDED] text-slate-800">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#EDEDED]/90 backdrop-blur-md z-50 border-b border-slate-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src="/logo-icon.png" alt="Mosaic Data" width={48} height={31} className="rounded" />
            <span className="text-xl font-semibold text-slate-800">Mosaic Data</span>
          </a>
          <a
            href="/#contact"
            className="px-5 py-2 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors"
          >
            Book a Call
          </a>
        </div>
      </header>

      <main className="pt-28 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* --- CONTEXT PHASE --- */}
          {phase === "context" && (
            <div>
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  Financial Visibility Score
                </h1>
                <p className="text-lg text-slate-600 max-w-lg mx-auto">
                  2 minutes. 15 questions. Find out where your blind spots are costing you money.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-8">
                <p className="text-sm text-slate-500 uppercase tracking-wider font-medium">
                  A few things about you first
                </p>

                {CONTEXT_QUESTIONS.map((q) => (
                  <div key={q.id}>
                    <label className="block text-slate-900 font-medium mb-3">{q.label}</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {q.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleContextSelect(q.id, opt)}
                          className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                            contextAnswers[q.id] === opt
                              ? "border-coral bg-[#D4705A]/10 text-coral"
                              : "border-slate-200 text-slate-600 hover:border-slate-300"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => contextComplete && setPhase("questions")}
                  disabled={!contextComplete}
                  className={`w-full py-4 rounded-lg font-semibold transition-colors ${
                    contextComplete
                      ? "bg-coral text-white hover:bg-coral-light"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  Start Assessment
                </button>
              </div>
            </div>
          )}

          {/* --- QUESTIONS PHASE --- */}
          {phase === "questions" && (
            <div>
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
                  <span>{allQuestions[currentQ].dimensionName}</span>
                  <span>
                    {currentQ + 1} of {allQuestions.length}
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-coral rounded-full transition-all duration-300"
                    style={{ width: `${((currentQ + 1) / allQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900 mb-6 leading-snug">
                  {allQuestions[currentQ].text}
                </h2>

                <div className="space-y-3">
                  {allQuestions[currentQ].options.map((opt, i) => {
                    const key = `${allQuestions[currentQ].dimensionKey}_${allQuestions[currentQ].qIndex}`;
                    const isSelected = answers[key] === opt.score;
                    return (
                      <button
                        key={i}
                        onClick={() => handleAnswer(opt.score)}
                        className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                          isSelected
                            ? "border-coral bg-[#D4705A]/10 text-slate-900"
                            : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>

                {currentQ > 0 && (
                  <button
                    onClick={handleBack}
                    className="mt-6 text-sm text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    &larr; Previous question
                  </button>
                )}
              </div>
            </div>
          )}

          {/* --- RESULTS PHASE --- */}
          {phase === "results" && (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Your Financial Visibility Score</h1>
                <p className="text-slate-600">Here&apos;s where you stand.</p>
              </div>

              {/* Score + Radar */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center">
                    <ScoreCircle score={overallScore} />
                    <div className="mt-4">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-white"
                        style={{ backgroundColor: band.color }}
                      >
                        {band.label}
                      </span>
                    </div>
                    <p className="text-slate-600 mt-3 text-sm">{band.description}</p>
                  </div>
                  <RadarChart dimensions={DIMENSIONS} scores={dimScores} />
                </div>
              </div>

              {/* Cost Estimate */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8 text-center">
                <p className="text-sm text-slate-500 uppercase tracking-wider font-medium mb-2">
                  Estimated Annual Cost of Blind Spots
                </p>
                <p className="text-4xl font-bold text-slate-900">
                  {formatCurrency(costEstimate.low)} - {formatCurrency(costEstimate.high)}
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  Based on companies your size with similar scores
                </p>
              </div>

              {/* Dimension Breakdown */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-6">Score Breakdown</h3>
                <div className="space-y-4">
                  {DIMENSIONS.map((d) => {
                    const score = dimScores[d.key] || 0;
                    const scoreBand = getScoreBand(score);
                    return (
                      <div key={d.key}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-slate-700">{d.name}</span>
                          <span className="text-sm font-semibold" style={{ color: scoreBand.color }}>
                            {score}/100
                          </span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{ width: `${score}%`, backgroundColor: scoreBand.color }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Top 3 Recommendations */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-6">
                  Your Top 3 Opportunities
                </h3>
                <div className="space-y-6">
                  {weakest.map((d, i) => (
                    <div key={d.key} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center">
                        <span className="text-coral font-bold text-sm">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{d.name}</h4>
                        <p className="text-slate-600 text-sm mt-1">{d.recommendation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email CTA */}
              <div className="bg-gradient-to-br from-[#D4705A]/10 to-[#E8A090]/20 border border-coral/30 rounded-2xl p-8">
                {!emailSubmitted ? (
                  <>
                    <h3 className="text-xl font-bold text-slate-900 text-center mb-2">
                      Get Your Full Report with 90-Day Action Plan
                    </h3>
                    <p className="text-slate-600 text-center mb-6 text-sm">
                      Detailed breakdown by dimension, industry benchmarks, and a prioritised roadmap
                      to close your biggest gaps.
                    </p>
                    <form
                      action="https://formspree.io/f/mwvvkjnb"
                      method="POST"
                      onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.currentTarget;
                        const data = new FormData(form);
                        fetch(form.action, {
                          method: "POST",
                          body: data,
                          headers: { Accept: "application/json" },
                        }).then((res) => {
                          if (res.ok) setEmailSubmitted(true);
                        });
                      }}
                      className="max-w-md mx-auto"
                    >
                      {/* Hidden fields to include score data */}
                      <input type="hidden" name="_subject" value="Financial Visibility Score - Report Request" />
                      <input type="hidden" name="overall_score" value={overallScore} />
                      <input type="hidden" name="score_band" value={band.label} />
                      <input type="hidden" name="revenue_range" value={contextAnswers.revenue || ""} />
                      <input type="hidden" name="business_type" value={contextAnswers.type || ""} />
                      <input type="hidden" name="role" value={contextAnswers.role || ""} />
                      <input
                        type="hidden"
                        name="dimension_scores"
                        value={DIMENSIONS.map((d) => `${d.name}: ${dimScores[d.key]}/100`).join(", ")}
                      />
                      <input
                        type="hidden"
                        name="estimated_cost"
                        value={`${formatCurrency(costEstimate.low)} - ${formatCurrency(costEstimate.high)}`}
                      />

                      <div className="flex gap-2">
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Enter your email"
                          className="flex-1 px-4 py-3 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-coral focus:border-coral"
                        />
                        <button
                          type="submit"
                          className="px-6 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral-light transition-colors whitespace-nowrap"
                        >
                          Send My Report
                        </button>
                      </div>
                      <p className="text-xs text-slate-500 mt-2 text-center">
                        No spam. We&apos;ll send your personalised report and that&apos;s it.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <div className="text-3xl mb-3">&#10003;</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Check your inbox</h3>
                    <p className="text-slate-600">
                      We&apos;ll send your full Financial Visibility Report with your personalised 90-day action plan.
                    </p>
                  </div>
                )}
              </div>

              {/* Secondary CTA */}
              <div className="text-center">
                <p className="text-slate-600 mb-4">
                  Want to talk through your results with someone who&apos;s seen this before?
                </p>
                <a
                  href="/#contact"
                  className="inline-block px-8 py-4 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors"
                >
                  Book a Free 30-Min Call
                </a>
                <p className="text-slate-500 text-sm mt-2">
                  No pitch. We&apos;ll tell you honestly if we can help.
                </p>
              </div>

              {/* Retake */}
              <div className="text-center">
                <button
                  onClick={() => {
                    setPhase("context");
                    setContextAnswers({});
                    setAnswers({});
                    setCurrentQ(0);
                    setEmailSubmitted(false);
                    window.scrollTo(0, 0);
                  }}
                  className="text-sm text-slate-500 hover:text-slate-700 underline transition-colors"
                >
                  Retake assessment
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

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
