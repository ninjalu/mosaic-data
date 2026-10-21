import Emblem from "./Emblem";

// The full Brightmere mark (sun over three water lines) next to the serif wordmark.
// `onDark` picks the light wordmark; the Emblem keeps its own colours.
export default function Logo({ onDark = false, size = 26 }: { onDark?: boolean; size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Emblem width={size * 1.45} height={size * 1.32} light={!onDark} />
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
