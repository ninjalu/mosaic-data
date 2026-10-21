import Emblem from "./Emblem";

// The Brightmere mark (gold sun cut by three lines) next to the serif wordmark.
// `onDark` picks the light wordmark; the mark stays gold on every background.
export default function Logo({ onDark = false, size = 26 }: { onDark?: boolean; size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Emblem size={Math.round(size * 1.05)} />
      <span
        className={`font-serif font-normal tracking-[-0.03em] leading-none whitespace-nowrap ${
          onDark ? "text-paper" : "text-ink"
        }`}
        style={{ fontSize: size }}
        data-wordmark
      >
        brightmere
      </span>
    </span>
  );
}
