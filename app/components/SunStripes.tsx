// Brand device: the emblem's risen sun drawn as horizontal water lines, so the logo itself
// becomes the corner graphic on photos and cards (HaysMac does this with its star).
// Stripes thicken towards the horizon, like the emblem's three bars.
export default function SunStripes({
  className = "",
  color = "#fbf9f6",
  stripes = 9,
}: {
  className?: string;
  color?: string;
  stripes?: number;
}) {
  const rows = Array.from({ length: stripes }, (_, i) => {
    const t = (i + 1) / stripes;
    const y = 60 * Math.pow(t, 0.85);
    const h = 1 + t * 3.2;
    return { y: y - h, h };
  });
  return (
    <svg viewBox="0 0 120 60" className={className} aria-hidden="true">
      <defs>
        <clipPath id="sunClip">
          <path d="M0,60 A60,60 0 0 1 120,60 Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#sunClip)" fill={color}>
        {rows.map((r, i) => (
          <rect key={i} className="sun-stripe" style={{ animationDelay: `${i * 70}ms` }} x="0" y={r.y.toFixed(2)} width="120" height={r.h.toFixed(2)} />
        ))}
      </g>
    </svg>
  );
}
