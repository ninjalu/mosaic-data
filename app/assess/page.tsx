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
  const gapPercent = (100 - score) / 100;
  const factor = gapPercent * 0.008;
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
      {levels.map((level) => {
        const pts = dimensions.map((_, i) => getPoint(i, level));
        const path = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";
        return <path key={level} d={path} fill="none" stroke="#e2e8f0" strokeWidth="1" />;
      })}
      {dimensions.map((_, i) => {
        const p = getPoint(i, 100);
        return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#e2e8f0" strokeWidth="1" />;
      })}
      <path d={dataPath} fill="rgba(212, 112, 90, 0.2)" stroke="#D4705A" strokeWidth="2.5" />
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill="#D4705A" />
      ))}
      {dimensions.map((d, i) => {
        const p = getPoint(i, 125);
        const angle = angleStep * i - Math.PI / 2;
        const textAnchor = Math.abs(Math.cos(angle)) < 0.1 ? "middle" : Math.cos(angle) > 0 ? "start" : "end";
        return (
          <text key={i} x={p.x} y={p.y} textAnchor={textAnchor} dominantBaseline="middle" className="text-[11px] fill-slate-600 font-medium">
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
    <div className="relative w-44 h-44 mx-auto">
      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
        <circle cx="60" cy="60" r="54" fill="none" stroke="#e2e8f0" strokeWidth="8" />
        <circle
          cx="60" cy="60" r="54" fill="none" stroke={band.color} strokeWidth="8"
          strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-bold text-slate-900">{score}</span>
        <span className="text-sm text-slate-500">/100</span>
      </div>
    </div>
  );
}

// --- Main Component ---

type Phase = "landing" | "capture" | "context" | "questions" | "results";

export default function AssessPage() {
  const [phase, setPhase] = useState<Phase>("landing");
  const [leadInfo, setLeadInfo] = useState({ firstName: "", email: "" });
  const [contextAnswers, setContextAnswers] = useState<Record<string, string>>({});
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentQ, setCurrentQ] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const allQuestions = DIMENSIONS.flatMap((d) =>
    d.questions.map((q, qi) => ({ ...q, dimensionKey: d.key, dimensionName: d.name, qIndex: qi }))
  );

  const contextComplete = CONTEXT_QUESTIONS.every((q) => contextAnswers[q.id]);

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
      // Submit lead + scores to Formspree, then show results
      const dimScores = calculateScoresFromAnswers({ ...answers, [key]: score });
      const overall = getOverallScore(dimScores);
      const band = getScoreBand(overall);
      const costEst = estimateCost(overall, contextAnswers.revenue || "$5M - $20M");

      const formData = new FormData();
      formData.append("_subject", `Financial Visibility Score: ${leadInfo.firstName} (${overall}/100)`);
      formData.append("first_name", leadInfo.firstName);
      formData.append("email", leadInfo.email);
      formData.append("overall_score", String(overall));
      formData.append("score_band", band.label);
      formData.append("revenue_range", contextAnswers.revenue || "");
      formData.append("business_type", contextAnswers.type || "");
      formData.append("role", contextAnswers.role || "");
      formData.append("dimension_scores", DIMENSIONS.map((d) => `${d.name}: ${dimScores[d.key]}/100`).join(", "));
      formData.append("estimated_cost", `${formatCurrency(costEst.low)} - ${formatCurrency(costEst.high)}`);

      fetch("https://formspree.io/f/mwvvkjnb", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      setPhase("results");
    }
  }

  function calculateScoresFromAnswers(ans: Record<string, number>) {
    const dimScores: Record<string, number> = {};
    for (const dim of DIMENSIONS) {
      const qScores = dim.questions.map((_, qi) => ans[`${dim.key}_${qi}`] || 0);
      const avg = qScores.reduce((a, b) => a + b, 0) / qScores.length;
      dimScores[dim.key] = Math.round((avg / 4) * 100);
    }
    return dimScores;
  }

  function handleBack() {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  }

  async function handleLeadCapture(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Small delay to feel intentional
    await new Promise((r) => setTimeout(r, 300));
    setSubmitting(false);
    setPhase("context");
    window.scrollTo(0, 0);
  }

  const dimScores = calculateScores();
  const overallScore = getOverallScore(dimScores);
  const band = getScoreBand(overallScore);
  const costEstimate = estimateCost(overallScore, contextAnswers.revenue || "$5M - $20M");
  const weakest = [...DIMENSIONS].sort((a, b) => (dimScores[a.key] || 0) - (dimScores[b.key] || 0)).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#EDEDED] text-slate-800">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#EDEDED]/90 backdrop-blur-md z-50 border-b border-slate-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src="/logo-icon.png" alt="Mosaic Data" width={48} height={31} className="rounded" />
            <span className="text-xl font-semibold text-slate-800">Mosaic Data</span>
          </a>
          <a href="/#contact" className="px-5 py-2 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors">
            Book a call
          </a>
        </div>
      </header>

      {/* ========== LANDING PHASE ========== */}
      {phase === "landing" && (
        <>
          {/* Hero */}
          <section className="pt-32 pb-16 px-6 relative overflow-hidden">
            <div className="absolute top-28 left-[5%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float1" />
            <div className="absolute top-44 left-[12%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float2" />
            <div className="absolute top-36 right-[6%] w-6 h-6 bg-[#D4705A]/35 rounded-sm animate-float3" />
            <div className="absolute top-52 right-[14%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float1" />
            <div className="absolute bottom-12 left-[8%] w-6 h-6 bg-[#D4705A]/30 rounded-sm animate-float3" />
            <div className="absolute bottom-24 right-[10%] w-6 h-6 bg-[#D4705A]/25 rounded-sm animate-float2" />

            <div className="max-w-3xl mx-auto text-center relative z-10">
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                  Instant results
                </span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                  Personalised insights
                </span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                  2 minutes
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] mb-6">
                Do you know where your business is{" "}
                <span className="text-coral">leaking profit?</span>
              </h1>

              <p className="text-xl text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed">
                Most growing companies are bleeding money in places they don&apos;t even know
                to look. This scorecard shows you exactly where.
              </p>

              <button
                onClick={() => { setPhase("capture"); window.scrollTo(0, 0); }}
                className="inline-block px-10 py-5 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors text-lg"
              >
                Discover your score &rarr;
              </button>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-20 px-6 bg-white/50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
                How it works
              </h2>
              <p className="text-slate-600 text-center mb-14 max-w-lg mx-auto">
                Answer 15 research-backed questions across 6 critical dimensions of financial visibility.
              </p>

              <div className="grid md:grid-cols-3 gap-10">
                <div className="text-center">
                  <div className="w-14 h-14 bg-coral/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Answer honestly</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    15 multiple-choice questions about how your business tracks revenue, cash, and decisions. No preparation needed.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-14 h-14 bg-coral/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Get your scores</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    See your overall Financial Visibility Score plus a breakdown across 6 dimensions with a visual radar chart.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-14 h-14 bg-coral/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Know where to focus</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Get personalised recommendations for your 3 biggest opportunities, plus an estimate of what blind spots are costing you.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What You'll Discover */}
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-14">
                Your score covers 6 critical dimensions
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {DIMENSIONS.map((d) => (
                  <div key={d.key} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">{d.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {d.key === "revenue_clarity" && "Do you know where the money comes from - and which segments actually make you money?"}
                      {d.key === "cash_visibility" && "Can you see your cash position with confidence, or are you checking the bank balance?"}
                      {d.key === "reporting_speed" && "How fast can you answer a hard question from the board?"}
                      {d.key === "system_connection" && "Do your systems talk to each other, or does someone reconcile by hand?"}
                      {d.key === "decision_confidence" && "When you see a number in a report, do you trust it?"}
                      {d.key === "scalability" && "If your finance lead left tomorrow, would the knowledge leave with them?"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-20 px-6 bg-white/50">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Ready to find out?
              </h2>
              <p className="text-slate-600 mb-8">
                Takes 2 minutes. No sales call. Just clarity on where to focus.
              </p>
              <button
                onClick={() => { setPhase("capture"); window.scrollTo(0, 0); }}
                className="inline-block px-10 py-5 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors text-lg"
              >
                Discover your score &rarr;
              </button>
            </div>
          </section>
        </>
      )}

      {/* ========== LEAD CAPTURE PHASE ========== */}
      {phase === "capture" && (
        <main className="pt-28 pb-20 px-6">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-3">
                Where should we send your results?
              </h1>
              <p className="text-slate-600">
                Your personalised scorecard and recommendations will be ready instantly.
              </p>
            </div>

            <form onSubmit={handleLeadCapture} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-5">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  value={leadInfo.firstName}
                  onChange={(e) => setLeadInfo((prev) => ({ ...prev, firstName: e.target.value }))}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-coral focus:border-coral"
                  placeholder="Your first name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={leadInfo.email}
                  onChange={(e) => setLeadInfo((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-coral focus:border-coral"
                  placeholder="you@company.com"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors text-lg"
              >
                {submitting ? "Starting..." : "Start the assessment"}
              </button>

              <p className="text-xs text-slate-500 text-center">
                Your results will be emailed to you along with relevant tips. No spam, ever.
              </p>
            </form>
          </div>
        </main>
      )}

      {/* ========== CONTEXT PHASE ========== */}
      {phase === "context" && (
        <main className="pt-28 pb-20 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                A few things about your business
              </h1>
              <p className="text-slate-600">
                This helps us tailor your results, {leadInfo.firstName}.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-8">
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
                onClick={() => { if (contextComplete) { setPhase("questions"); window.scrollTo(0, 0); } }}
                disabled={!contextComplete}
                className={`w-full py-4 rounded-lg font-semibold transition-colors text-lg ${
                  contextComplete
                    ? "bg-coral text-white hover:bg-coral-light"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                Start the questions &rarr;
              </button>
            </div>
          </div>
        </main>
      )}

      {/* ========== QUESTIONS PHASE ========== */}
      {phase === "questions" && (
        <main className="pt-28 pb-20 px-6">
          <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
                <span className="font-medium text-slate-700">{allQuestions[currentQ].dimensionName}</span>
                <span>
                  {currentQ + 1} of {allQuestions.length}
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-coral rounded-full transition-all duration-300"
                  style={{ width: `${((currentQ + 1) / allQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900 mb-8 leading-snug">
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
        </main>
      )}

      {/* ========== RESULTS PHASE ========== */}
      {phase === "results" && (
        <main className="pt-28 pb-20 px-6">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <p className="text-sm text-slate-500 mb-2">
                {leadInfo.firstName ? `${leadInfo.firstName}, here are your results` : "Here are your results"}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Your Financial Visibility Score
              </h1>
            </div>

            {/* Score + Radar */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <ScoreCircle score={overallScore} />
                  <div className="mt-5">
                    <span
                      className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white"
                      style={{ backgroundColor: band.color }}
                    >
                      {band.label}
                    </span>
                  </div>
                  <p className="text-slate-600 mt-3 text-sm max-w-[240px] mx-auto">{band.description}</p>
                </div>
                <RadarChart dimensions={DIMENSIONS} scores={dimScores} />
              </div>
            </div>

            {/* Cost Estimate */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8 md:p-10 text-center">
              <p className="text-sm text-slate-500 uppercase tracking-wider font-medium mb-3">
                Estimated annual cost of blind spots
              </p>
              <p className="text-4xl md:text-5xl font-bold text-slate-900">
                {formatCurrency(costEstimate.low)} &ndash; {formatCurrency(costEstimate.high)}
              </p>
              <p className="text-sm text-slate-500 mt-3">
                Based on companies your size with similar scores
              </p>
            </div>

            {/* Dimension Breakdown */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Score breakdown</h3>
              <div className="space-y-4">
                {DIMENSIONS.map((d) => {
                  const score = dimScores[d.key] || 0;
                  const scoreBand = getScoreBand(score);
                  return (
                    <div key={d.key}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-slate-700">{d.name}</span>
                        <span className="text-sm font-semibold" style={{ color: scoreBand.color }}>
                          {score}/100
                        </span>
                      </div>
                      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
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
                Your top 3 opportunities
              </h3>
              <div className="space-y-6">
                {weakest.map((d, i) => (
                  <div key={d.key} className="flex gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-coral/10 flex items-center justify-center">
                      <span className="text-coral font-bold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{d.name}</h4>
                      <p className="text-slate-600 text-sm mt-1 leading-relaxed">{d.recommendation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#D4705A]/10 to-[#E8A090]/20 border border-coral/30 rounded-2xl p-8 md:p-10 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                Want to talk through your results?
              </h3>
              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                Book a free 30-minute call. We&apos;ll walk through your scores, answer questions,
                and tell you honestly if we can help.
              </p>
              <a
                href="/#contact"
                className="inline-block px-8 py-4 bg-coral text-white rounded-lg font-semibold hover:bg-coral-light transition-colors text-lg"
              >
                Book a free call &rarr;
              </a>
              <p className="text-slate-500 text-sm mt-3">
                No pitch. No obligation.
              </p>
            </div>

            {/* Retake */}
            <div className="text-center">
              <button
                onClick={() => {
                  setPhase("landing");
                  setLeadInfo({ firstName: "", email: "" });
                  setContextAnswers({});
                  setAnswers({});
                  setCurrentQ(0);
                  window.scrollTo(0, 0);
                }}
                className="text-sm text-slate-500 hover:text-slate-700 underline transition-colors"
              >
                Retake assessment
              </button>
            </div>
          </div>
        </main>
      )}

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
