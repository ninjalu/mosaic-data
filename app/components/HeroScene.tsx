// Hero imagery built from the logo: the emblem's sun rising over the mere, with its
// reflection broken into the emblem's water lines below the horizon. Below the line is
// where the work happens ("we start below it"), so the reflection carries a faint field of
// transaction lines. Pure SVG + CSS, server-rendered, motion off for reduced-motion users.
export default function HeroScene() {
  const horizon = 430;
  const reflection = Array.from({ length: 16 }, (_, i) => {
    const t = i / 15;
    const y = horizon + 14 + i * 13 + i * i * 0.9;
    const w = 470 * (1 - t * 0.78);
    const h = 3 + t * 5;
    return { y, w, h, o: 0.85 - t * 0.6, d: i * 120 };
  });
  const field = Array.from({ length: 30 }, (_, i) => {
    const y0 = horizon + 20 + i * 11;
    const amp = 4 + (i % 5) * 3;
    const pts: string[] = [];
    for (let x = -40; x <= 1520; x += 40) {
      const y = y0 + Math.sin((x + i * 53) / 95) * amp;
      pts.push(`${x},${y.toFixed(1)}`);
    }
    return { d: `M${pts.join(" L")}`, o: 0.05 + (i % 4) * 0.025 };
  });

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sunGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#e2cf6c" stopOpacity="0.28" />
          <stop offset="0.6" stopColor="#e2cf6c" stopOpacity="0.08" />
          <stop offset="1" stopColor="#e2cf6c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sunFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f0dc7a" />
          <stop offset="1" stopColor="#e3b23c" />
        </linearGradient>
        <clipPath id="aboveHorizon">
          <rect x="-1440" y="0" width="2880" height={horizon} />
        </clipPath>
      </defs>

      {/* transaction field under the water */}
      <g className="field-drift">
        {field.map((l, i) => (
          <path key={i} d={l.d} fill="none" stroke="#f2a38f" strokeOpacity={l.o} strokeWidth="1" />
        ))}
      </g>

      {/* the sun, rising above the horizon */}
      <g transform="translate(1170 0)">
        <ellipse cx="0" cy={horizon} rx="520" ry="360" fill="url(#sunGlow)" className="sun-glow" />
        <g clipPath="url(#aboveHorizon)">
          <circle cx="0" cy={horizon} r="185" fill="url(#sunFill)" className="sun-rise" />
        </g>
        {/* reflection: the emblem's water lines */}
        {reflection.map((r, i) => (
          <rect
            key={i}
            x={-r.w / 2}
            y={r.y}
            width={r.w}
            height={r.h}
            rx={r.h / 2}
            fill={i % 3 === 0 ? "#e3b23c" : "#f2a38f"}
            fillOpacity={r.o}
            className="ripple"
            style={{ animationDelay: `${r.d}ms` }}
          />
        ))}
      </g>

      {/* the horizon: the trial balance */}
      <line x1="0" y1={horizon} x2="1440" y2={horizon} stroke="#fbf9f6" strokeOpacity="0.4" strokeWidth="1" />
    </svg>
  );
}
