export default function Emblem({
  width = 42,
  height = 38,
  light = false,
}: {
  width?: number;
  height?: number;
  light?: boolean;
}) {
  const bars = light ? "#e85d47" : "#ff9a82";
  return (
    <svg width={width} height={height} viewBox="0 0 130 120" aria-hidden="true">
      <path d="M20,62 A45,45 0 0 1 110,62 Z" fill="#e3b23c" />
      <rect x="8" y="70" width="114" height="7" rx="3.5" fill={bars} opacity=".7" />
      <rect x="24" y="84" width="82" height="6" rx="3" fill={bars} opacity=".4" />
      <rect x="40" y="97" width="50" height="5" rx="2.5" fill={bars} opacity=".22" />
    </svg>
  );
}
