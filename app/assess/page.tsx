"use client";

import { useState } from "react";
import Wordmark from "../components/Wordmark";

// --- Data ---

const CONTEXT_QUESTIONS = [
  {
    id: "revenue",
    label: "What's your approximate annual revenue?",
    options: ["Under $5M", "$5M - $20M", "$20M - $50M", "$50M - $100M", "$100M+"],
  },
  {
    id: "sector",
    label: "What best describes your business?",
    options: ["Manufacturing", "Distribution / Wholesale", "DTC", "Retail", "Other"],
  },
  {
    id: "scale",
    label: "Roughly how many SKUs or customers do you manage?",
    options: ["Under 100", "100 - 1,000", "1,000 - 10,000", "10,000+"],
  },
  {
    id: "role",
    label: "What's your role?",
    options: ["CFO / Finance", "CEO / Founder", "COO / Ops", "Other"],
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
    key: "inventory_health",
    name: "Inventory Health",
    shortName: "Inventory",
    questions: [
      {
        text: "Do you know which SKUs are slow-moving or dead stock right now?",
        options: [
          { label: "Yes - we track stock ageing and rate-of-sale by SKU continuously", score: 4 },
          { label: "We review it periodically, but it's a manual exercise", score: 3 },
          { label: "Only when we do a stock-take or a clear-out", score: 2 },
          { label: "No - we don't have a clear view of slow movers", score: 1 },
        ],
      },
      {
        text: "Can you see your days inventory outstanding (DIO) and how it's trending?",
        options: [
          { label: "Yes - by product line and over time", score: 4 },
          { label: "At a total company level only", score: 3 },
          { label: "We could calculate it but don't track it", score: 2 },
          { label: "We don't measure DIO", score: 1 },
        ],
      },
      {
        text: "How are your stock and safety-stock levels set?",
        options: [
          { label: "Data-driven reorder points per SKU, based on demand and lead time", score: 4 },
          { label: "A mix of rules and judgement", score: 3 },
          { label: "Mostly experience and gut feel", score: 2 },
          { label: "We order when we notice we're running low", score: 1 },
        ],
      },
    ],
    recommendation:
      "Cash is likely sitting on your shelves. Start with: rank SKUs by value × days-in-stock and look hard at the slowest-moving 20%.",
  },
  {
    key: "receivables",
    name: "Receivables & Collections",
    shortName: "Receivables",
    questions: [
      {
        text: "Do you know your days sales outstanding (DSO) - and by customer?",
        options: [
          { label: "Yes - DSO by customer and segment, monitored regularly", score: 4 },
          { label: "Total company DSO only", score: 3 },
          { label: "A rough sense, but not measured", score: 2 },
          { label: "No - we don't track DSO", score: 1 },
        ],
      },
      {
        text: "How do you manage collections on overdue invoices?",
        options: [
          { label: "A systematic, prioritised chase process with clear ownership", score: 4 },
          { label: "We chase, but it's reactive and ad hoc", score: 3 },
          { label: "Only when cash gets tight", score: 2 },
          { label: "We rarely chase proactively", score: 1 },
        ],
      },
      {
        text: "Do you know which customers consistently pay late - and what it costs you?",
        options: [
          { label: "Yes - named accounts, the day-impact, and the cost of the delay", score: 4 },
          { label: "We know the worst offenders informally", score: 3 },
          { label: "Not really", score: 2 },
          { label: "No idea", score: 1 },
        ],
      },
    ],
    recommendation:
      "Slow-paying customers are funding their business with your cash. Start with: pull an AR ageing by customer and quantify the cash tied up beyond terms.",
  },
  {
    key: "payables",
    name: "Payables & Terms",
    shortName: "Payables",
    questions: [
      {
        text: "Do you track days payable outstanding (DPO) against the terms you've actually negotiated?",
        options: [
          { label: "Yes - DPO vs agreed terms, by supplier", score: 4 },
          { label: "Total DPO only", score: 3 },
          { label: "We don't measure it", score: 2 },
          { label: "No", score: 1 },
        ],
      },
      {
        text: "Are you paying suppliers earlier than you need to?",
        options: [
          { label: "No - payment timing is deliberate and optimised", score: 4 },
          { label: "Sometimes; we haven't looked closely", score: 3 },
          { label: "Probably - we mostly pay on receipt or early", score: 2 },
          { label: "We don't know", score: 1 },
        ],
      },
    ],
    recommendation:
      "You may be funding the whole cycle out of your own pocket. Start with: compare actual payment dates to agreed terms across your top 20 suppliers.",
  },
  {
    key: "cash_conversion",
    name: "Cash Conversion Cycle",
    shortName: "Cash Cycle",
    questions: [
      {
        text: "Do you know your cash conversion cycle (DSO + DIO − DPO)?",
        options: [
          { label: "Yes - tracked and understood by segment", score: 4 },
          { label: "We've calculated it once, or at a high level", score: 3 },
          { label: "We know the pieces but not the cycle", score: 2 },
          { label: "No", score: 1 },
        ],
      },
      {
        text: "When the business grows, what happens to cash?",
        options: [
          { label: "We model the working-capital need ahead of growth", score: 4 },
          { label: "It gets tighter, but we manage it", score: 3 },
          { label: "It surprises us - growth eats cash unexpectedly", score: 2 },
          { label: "We don't connect growth to cash", score: 1 },
        ],
      },
    ],
    recommendation:
      "If growth tightens cash, your working capital is scaling against you. Start with: calculate your cash conversion cycle and model it at next year's revenue.",
  },
  {
    key: "cash_forecasting",
    name: "Cash Forecasting",
    shortName: "Forecast",
    questions: [
      {
        text: "How far ahead can you see your cash position with confidence?",
        options: [
          { label: "13+ weeks, with scenario modelling", score: 4 },
          { label: "4-8 weeks with reasonable accuracy", score: 3 },
          { label: "2-4 weeks, mostly from current AR/AP", score: 2 },
          { label: "We check the bank balance", score: 1 },
        ],
      },
      {
        text: "Can your team produce a cash forecast without manually assembling it each time?",
        options: [
          { label: "Yes - it's automated or near-automated", score: 4 },
          { label: "Mostly - some manual steps but manageable", score: 3 },
          { label: "It's a significant manual effort every time", score: 2 },
          { label: "We don't produce one regularly", score: 1 },
        ],
      },
      {
        text: "When cash gets tight, what's the usual first move?",
        options: [
          { label: "We saw it coming and planned for it", score: 4 },
          { label: "We manage within existing headroom", score: 3 },
          { label: "We call the bank for more facility", score: 2 },
          { label: "We firefight", score: 1 },
        ],
      },
    ],
    recommendation:
      "You're steering cash by the rear-view mirror. Start with: build a rolling 13-week cash forecast from your AR ageing and AP schedule.",
  },
  {
    key: "data_granularity",
    name: "Data Granularity",
    shortName: "Detail",
    questions: [
      {
        text: "Can you analyse margin and cash by SKU and by customer - not just totals?",
        options: [
          { label: "Yes - down to line level, on demand", score: 4 },
          { label: "Some cuts, with manual effort", score: 3 },
          { label: "Only high-level categories", score: 2 },
          { label: "Totals only", score: 1 },
        ],
      },
      {
        text: "When the numbers live across stock, sales, and finance systems, can you join them up?",
        options: [
          { label: "Yes - we can get one clean view across systems", score: 4 },
          { label: "With effort - someone reconciles it by hand", score: 3 },
          { label: "Rarely - the systems don't really talk", score: 2 },
          { label: "No", score: 1 },
        ],
      },
    ],
    recommendation:
      "With hundreds of SKUs and customers, the average hides the answer. Start with: join one month of sales, stock, and AR at transaction level and look for the outliers.",
  },
];

// --- Helpers ---

function getScoreBand(score: number) {
  if (score >= 80) return { label: "Tight", color: "#22c55e", description: "Your cash cycle is in good shape. Focus on holding the discipline." };
  if (score >= 60) return { label: "Functional", color: "#eab308", description: "The basics work, but cash is still trapped in the gaps." };
  if (score >= 40) return { label: "At Risk", color: "#f97316", description: "Significant cash is likely trapped in stock, receivables, and terms." };
  return { label: "Critical", color: "#ef4444", description: "Cash is almost certainly stuck across your operations - and largely invisible." };
}

function estimateCashTrapped(score: number, revenueRange: string) {
  const revMidpoints: Record<string, number> = {
    "Under $5M": 3_000_000,
    "$5M - $20M": 12_500_000,
    "$20M - $50M": 35_000_000,
    "$50M - $100M": 75_000_000,
    "$100M+": 150_000_000,
  };
  const rev = revMidpoints[revenueRange] || 12_500_000;
  const gapPercent = (100 - score) / 100;
  // Trapped working capital scales with revenue; the score gap proxies how much is recoverable.
  const trapped = rev * 0.12 * gapPercent;
  const low = Math.round(trapped * 0.7 / 10000) * 10000;
  const high = Math.round(trapped * 1.3 / 10000) * 10000;
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
        return <path key={level} d={path} fill="none" stroke="#eaddda" strokeWidth="1" />;
      })}
      {dimensions.map((_, i) => {
        const p = getPoint(i, 100);
        return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#eaddda" strokeWidth="1" />;
      })}
      <path d={dataPath} fill="rgba(255, 61, 126, 0.2)" stroke="#ff3d7e" strokeWidth="2.5" />
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill="#ff3d7e" />
      ))}
      {dimensions.map((d, i) => {
        const p = getPoint(i, 125);
        const angle = angleStep * i - Math.PI / 2;
        const textAnchor = Math.abs(Math.cos(angle)) < 0.1 ? "middle" : Math.cos(angle) > 0 ? "start" : "end";
        return (
          <text key={i} x={p.x} y={p.y} textAnchor={textAnchor} dominantBaseline="middle" className="text-[11px] fill-[#8a6b74] font-medium">
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
        <circle cx="60" cy="60" r="54" fill="none" stroke="#eaddda" strokeWidth="8" />
        <circle
          cx="60" cy="60" r="54" fill="none" stroke={band.color} strokeWidth="8"
          strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-5xl font-bold text-[#4d141e]">{score}</span>
        <span className="text-sm text-[#8a6b74]">/100</span>
      </div>
    </div>
  );
}

// --- Main Component ---

type Phase = "landing" | "context" | "questions" | "capture" | "results";

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
      setPhase("capture");
      window.scrollTo(0, 0);
    }
  }

  function handleBack() {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  }

  async function handleLeadCapture(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const dimScores = calculateScores();
    const overall = getOverallScore(dimScores);
    const scoreBand = getScoreBand(overall);
    const cashEst = estimateCashTrapped(overall, contextAnswers.revenue || "$5M - $20M");

    const formData = new FormData();
    formData.append("_subject", `Cash Health Score: ${leadInfo.firstName} (${overall}/100)`);
    formData.append("first_name", leadInfo.firstName);
    formData.append("email", leadInfo.email);
    formData.append("overall_score", String(overall));
    formData.append("score_band", scoreBand.label);
    formData.append("revenue_range", contextAnswers.revenue || "");
    formData.append("sector", contextAnswers.sector || "");
    formData.append("scale", contextAnswers.scale || "");
    formData.append("role", contextAnswers.role || "");
    formData.append("dimension_scores", DIMENSIONS.map((d) => `${d.name}: ${dimScores[d.key]}/100`).join(", "));
    formData.append("estimated_cash_trapped", `${formatCurrency(cashEst.low)} - ${formatCurrency(cashEst.high)}`);

    await fetch("https://formspree.io/f/mwvvkjnb", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    setSubmitting(false);
    setPhase("results");
    window.scrollTo(0, 0);
  }

  const leadValid = leadInfo.firstName.trim() !== "" && leadInfo.email.trim() !== "" && leadInfo.email.includes("@");

  const dimScores = calculateScores();
  const overallScore = getOverallScore(dimScores);
  const band = getScoreBand(overallScore);
  const cashTrapped = estimateCashTrapped(overallScore, contextAnswers.revenue || "$5M - $20M");
  const weakest = [...DIMENSIONS].sort((a, b) => (dimScores[a.key] || 0) - (dimScores[b.key] || 0)).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#faf4f2] text-[#3a2028]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#2c0a11]/90 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <Wordmark dark />
          </a>
          <a href="/#contact" className="px-5 py-2.5 bg-pink text-white rounded-full font-semibold text-[15px] hover:bg-pink-deep transition-colors">
            Book a call
          </a>
        </div>
      </header>

      {/* ========== LANDING PHASE ========== */}
      {phase === "landing" && (
        <>
          {/* Hero + Lead Capture */}
          <section className="pt-36 pb-20 px-6 relative overflow-hidden bg-[linear-gradient(110deg,#2c0a11_0%,#330d14_55%,#43101a_100%)]">
            <div className="absolute top-28 left-[5%] w-6 h-6 bg-[#ff3d7e]/30 rounded-full animate-float1" />
            <div className="absolute top-44 left-[12%] w-6 h-6 bg-[#ff3d7e]/25 rounded-full animate-float2" />
            <div className="absolute top-36 right-[6%] w-6 h-6 bg-[#ff3d7e]/35 rounded-full animate-float3" />
            <div className="absolute top-52 right-[14%] w-6 h-6 bg-[#ff3d7e]/25 rounded-full animate-float1" />
            <div className="absolute bottom-12 left-[8%] w-6 h-6 bg-[#ff3d7e]/30 rounded-full animate-float3" />
            <div className="absolute bottom-24 right-[10%] w-6 h-6 bg-[#ff3d7e]/25 rounded-full animate-float2" />

            <div className="max-w-3xl mx-auto relative z-10">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <span className="px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-medium text-offwhite">
                    Instant results
                  </span>
                  <span className="px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-medium text-offwhite">
                    Personalised insights
                  </span>
                  <span className="px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-medium text-offwhite">
                    2 minutes
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-offwhite leading-[1.1] tracking-[-1px] mb-6">
                  How much <span className="text-pink [text-shadow:0_0_28px_rgba(255,61,126,0.4)]">cash</span> is{" "}
                  trapped in your business?
                </h1>

                <p className="text-xl text-rosemuted max-w-xl mx-auto mb-10 leading-relaxed">
                  Most growing manufacturers, distributors, and retailers are sitting on cash
                  they can&apos;t see - stuck in stock, slow invoices, and terms paid too early.
                  This scorecard shows you where.
                </p>
              </div>

              <div className="text-center">
                <button
                  onClick={() => { setPhase("context"); window.scrollTo(0, 0); }}
                  className="inline-block px-10 py-5 bg-pink text-white rounded-full font-semibold shadow-[0_6px_30px_rgba(255,61,126,0.35)] hover:bg-pink-deep transition-colors text-lg"
                >
                  Start the assessment &rarr;
                </button>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#3a2028] mb-4 pb-4 border-b-2 border-[#eaddda]">
                How it works
              </h2>
              <p className="text-[#8a6b74] mb-14 max-w-lg">
                Answer 15 questions across 6 dimensions of your cash cycle - stock, receivables, payables, and forecasting.
              </p>

              <div className="grid md:grid-cols-3 gap-10">
                <div className="text-center">
                  <div className="w-14 h-14 bg-[#ff3d7e]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-[#ff3d7e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#4d141e] mb-2">Answer honestly</h3>
                  <p className="text-[#8a6b74] text-sm leading-relaxed">
                    15 multiple-choice questions about how cash moves through your business - stock, receivables, payables. No preparation needed.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-14 h-14 bg-[#ff3d7e]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-[#ff3d7e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#4d141e] mb-2">Get your scores</h3>
                  <p className="text-[#8a6b74] text-sm leading-relaxed">
                    See your overall Cash Health Score plus a breakdown across 6 dimensions with a visual radar chart.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-14 h-14 bg-[#ff3d7e]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-[#ff3d7e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#4d141e] mb-2">Know where to focus</h3>
                  <p className="text-[#8a6b74] text-sm leading-relaxed">
                    Get personalised recommendations for your 3 biggest opportunities to free up cash, plus an estimate of how much is trapped.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What You'll Discover */}
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#3a2028] mb-14 pb-4 border-b-2 border-[#eaddda]">
                Your score covers 6 dimensions of cash
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {DIMENSIONS.map((d) => (
                  <div key={d.key} className="bg-white rounded-[14px] p-6 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
                    <h3 className="flex items-center gap-3 font-semibold text-[#4d141e] mb-2"><span className="w-2.5 h-2.5 rounded-full bg-pink flex-shrink-0" />{d.name}</h3>
                    <p className="text-[#8a6b74] text-sm leading-relaxed">
                      {d.key === "inventory_health" && "Is cash sitting on your shelves in slow movers and dead stock?"}
                      {d.key === "receivables" && "Are slow-paying customers funding their business with your cash?"}
                      {d.key === "payables" && "Are you paying suppliers earlier than your terms require?"}
                      {d.key === "cash_conversion" && "Does growth generate cash for you - or quietly eat it?"}
                      {d.key === "cash_forecasting" && "Can you see your cash 13 weeks out, or just the bank balance?"}
                      {d.key === "data_granularity" && "Can you see cash by SKU and customer, or only in totals?"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-20 px-6">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#3a2028] mb-4">
                Ready to find out?
              </h2>
              <p className="text-[#8a6b74] mb-8">
                Takes 2 minutes. No sales call. Just clarity on where to focus.
              </p>
              <button
                onClick={() => { setPhase("context"); window.scrollTo(0, 0); }}
                className="inline-block px-10 py-5 bg-pink text-white rounded-full font-semibold shadow-[0_6px_30px_rgba(255,61,126,0.35)] hover:bg-pink-deep transition-colors text-lg"
              >
                Start the assessment &rarr;
              </button>
            </div>
          </section>
        </>
      )}

      {/* ========== CONTEXT PHASE ========== */}
      {phase === "context" && (
        <main className="pt-28 pb-20 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-[#3a2028] mb-3">
                A few things about your business
              </h1>
              <p className="text-[#8a6b74]">
                This helps us tailor your results.
              </p>
            </div>

            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(77,20,30,0.06)] space-y-8">
              {CONTEXT_QUESTIONS.map((q) => (
                <div key={q.id}>
                  <label className="block text-[#3a2028] font-medium mb-3">{q.label}</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {q.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleContextSelect(q.id, opt)}
                        className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                          contextAnswers[q.id] === opt
                            ? "border-pink bg-[#ff3d7e]/10 text-pink"
                            : "border-[#eaddda] text-[#8a6b74] hover:border-[#eaddda]"
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
                className={`w-full py-4 rounded-full font-semibold transition-colors text-lg ${
                  contextComplete
                    ? "bg-pink text-white hover:bg-pink-deep"
                    : "bg-[#eaddda] text-[#8a6b74] cursor-not-allowed"
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
              <div className="flex items-center justify-between text-sm text-[#8a6b74] mb-2">
                <span className="font-medium text-[#3a2028]">{allQuestions[currentQ].dimensionName}</span>
                <span>
                  {currentQ + 1} of {allQuestions.length}
                </span>
              </div>
              <div className="w-full h-2.5 bg-[#eaddda] rounded-full overflow-hidden">
                <div
                  className="h-full bg-pink rounded-full transition-all duration-300"
                  style={{ width: `${((currentQ + 1) / allQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <h2 className="text-xl font-semibold text-[#3a2028] mb-8 leading-snug">
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
                      className={`w-full text-left px-5 py-4 rounded-[14px] border transition-all ${
                        isSelected
                          ? "border-pink bg-[#ff3d7e]/10 text-[#3a2028]"
                          : "border-[#eaddda] text-[#3a2028] hover:border-[#eaddda] hover:bg-[#faf4f2]"
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
                  className="mt-6 text-sm text-[#8a6b74] hover:text-[#3a2028] transition-colors"
                >
                  &larr; Previous question
                </button>
              )}
            </div>
          </div>
        </main>
      )}

      {/* ========== CAPTURE PHASE ========== */}
      {phase === "capture" && (
        <main className="pt-28 pb-20 px-6">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-pink/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#3a2028] mb-3">
                Your score is ready
              </h1>
              <p className="text-[#8a6b74]">
                Where should we send your personalised results and recommendations?
              </p>
            </div>

            <form onSubmit={handleLeadCapture} className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(77,20,30,0.06)] space-y-5">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-[#3a2028] mb-2">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  value={leadInfo.firstName}
                  onChange={(e) => setLeadInfo((prev) => ({ ...prev, firstName: e.target.value }))}
                  className="w-full px-4 py-3 bg-white border border-[#eaddda] rounded-lg text-[#3a2028] placeholder-[#c4a9b1] focus:ring-2 focus:ring-pink focus:border-pink"
                  placeholder="Your first name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#3a2028] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={leadInfo.email}
                  onChange={(e) => setLeadInfo((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 bg-white border border-[#eaddda] rounded-lg text-[#3a2028] placeholder-[#c4a9b1] focus:ring-2 focus:ring-pink focus:border-pink"
                  placeholder="you@company.com"
                />
              </div>

              <button
                type="submit"
                disabled={submitting || !leadValid}
                className={`w-full py-4 rounded-full font-semibold transition-colors text-lg ${
                  leadValid
                    ? "bg-pink text-white hover:bg-pink-deep"
                    : "bg-[#eaddda] text-[#8a6b74] cursor-not-allowed"
                }`}
              >
                {submitting ? "Generating your report..." : "See my results \u2192"}
              </button>

              <p className="text-xs text-[#8a6b74] text-center">
                We&apos;ll also email you a copy of your results. No spam, ever.
              </p>
            </form>
          </div>
        </main>
      )}

      {/* ========== RESULTS PHASE ========== */}
      {phase === "results" && (
        <main className="pt-28 pb-20 px-6">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <p className="text-sm text-[#8a6b74] mb-2">
                {leadInfo.firstName ? `${leadInfo.firstName}, here are your results` : "Here are your results"}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#3a2028] mb-2">
                Your Cash Health Score
              </h1>
            </div>

            {/* Score + Radar */}
            <div className="bg-white rounded-[14px] p-8 md:p-10 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
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
                  <p className="text-[#8a6b74] mt-3 text-sm max-w-[240px] mx-auto">{band.description}</p>
                </div>
                <RadarChart dimensions={DIMENSIONS} scores={dimScores} />
              </div>
            </div>

            {/* Cash Trapped Estimate */}
            <div className="bg-gradient-to-br from-[#ff3d7e]/10 to-[#ff9dbf]/20 border border-pink/30 rounded-[14px] p-8 md:p-10 text-center">
              <p className="text-sm text-[#8a6b74] uppercase tracking-wider font-medium mb-3">
                Estimated cash trapped in your operations
              </p>
              <p className="font-mono text-4xl md:text-5xl font-bold text-[#4d141e]">
                {formatCurrency(cashTrapped.low)} &ndash; {formatCurrency(cashTrapped.high)}
              </p>
              <p className="text-sm text-[#8a6b74] mt-3">
                A rough estimate based on businesses your size with similar scores
              </p>
            </div>

            {/* Dimension Breakdown */}
            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <h3 className="flex items-center gap-3 text-lg font-semibold text-[#4d141e] mb-6"><span className="w-2.5 h-2.5 rounded-full bg-pink flex-shrink-0" />Score breakdown</h3>
              <div className="space-y-4">
                {DIMENSIONS.map((d) => {
                  const score = dimScores[d.key] || 0;
                  const scoreBand = getScoreBand(score);
                  return (
                    <div key={d.key}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-[#3a2028]">{d.name}</span>
                        <span className="text-sm font-semibold" style={{ color: scoreBand.color }}>
                          {score}/100
                        </span>
                      </div>
                      <div className="w-full h-3 bg-[#f3e7e4] rounded-full overflow-hidden">
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
            <div className="bg-white rounded-[14px] p-8 shadow-[0_2px_14px_rgba(77,20,30,0.06)]">
              <h3 className="flex items-center gap-3 text-lg font-semibold text-[#4d141e] mb-6"><span className="w-2.5 h-2.5 rounded-full bg-pink flex-shrink-0" />Your top 3 opportunities</h3>
              <div className="space-y-6">
                {weakest.map((d, i) => (
                  <div key={d.key} className="flex gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-pink/10 flex items-center justify-center">
                      <span className="text-pink font-bold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#3a2028]">{d.name}</h4>
                      <p className="text-[#8a6b74] text-sm mt-1 leading-relaxed">{d.recommendation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#ff3d7e]/10 to-[#ff9dbf]/20 border border-pink/30 rounded-[14px] p-8 md:p-10 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-[#3a2028] mb-3">
                Want to talk through your results?
              </h3>
              <p className="text-[#8a6b74] mb-6 max-w-md mx-auto">
                Book a free 30-minute call. We&apos;ll walk through your scores, answer questions,
                and tell you honestly if we can help.
              </p>
              <a
                href="/#contact"
                className="inline-block px-8 py-4 bg-pink text-white rounded-full font-semibold shadow-[0_6px_30px_rgba(255,61,126,0.35)] hover:bg-pink-deep transition-colors text-lg"
              >
                Book a free call &rarr;
              </a>
              <p className="text-[#8a6b74] text-sm mt-3">
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
                className="text-sm text-[#4d141e] underline hover:text-pink transition-colors"
              >
                Retake assessment
              </button>
            </div>
          </div>
        </main>
      )}

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
