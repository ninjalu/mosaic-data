// The Brightmere mark (Lu, 21 Oct 2026): a gold sun cut by three horizontal lines that thin
// towards the bottom - the sun meeting clear water, and the lines below the surface.
// Drawn as four solid bands of one circle (cx 60, cy 60, r 42) so it needs no clip or mask ids.
export const MARK_BANDS = [
  "M60,18 A42,42 0 0 1 101.95,62 L18.05,62 A42,42 0 0 1 60,18 Z",
  "M18.98,69 L101.02,69 A42,42 0 0 1 98.83,76 L21.17,76 A42,42 0 0 1 18.98,69 Z",
  "M23.63,81 L96.37,81 A42,42 0 0 1 91.3,88 L28.7,88 A42,42 0 0 1 23.63,81 Z",
  "M32.22,91.5 L87.78,91.5 A42,42 0 0 1 60,102 A42,42 0 0 1 32.22,91.5 Z",
];
export const MARK_GOLD = "#e3b23c";

export default function Emblem({
  size = 40,
  color = MARK_GOLD,
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="18 18 84 84" aria-hidden="true">
      {MARK_BANDS.map((d) => (
        <path key={d} d={d} fill={color} />
      ))}
    </svg>
  );
}
