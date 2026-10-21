import LakePhoto from "./LakePhoto";

// Keep money ranges like "£5-50m" on one line: browsers otherwise break at the hyphen.
function keepRanges(text: string) {
  return text.split(/(£\d+(?:\.\d+)?-\d+(?:\.\d+)?[mk]?)/).map((part, i) =>
    i % 2 ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    )
  );
}

// Sub-page template, after HaysMac's service pages: big serif title, serif standfirst,
// then a dark in-page menu that sticks under the header as you scroll.
export default function PageHero({
  eyebrow,
  title,
  accent,
  standfirst,
  sections,
  cta,
  image,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  standfirst: string;
  sections?: { id: string; label: string }[];
  cta?: { label: string; href: string };
  image?: string;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-paper pt-40 md:pt-48 pb-16 md:pb-20 px-6 md:px-8">
        <LakePhoto src={image} crop="shore" priority />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-ink)_88%,transparent)_0%,color-mix(in_srgb,var(--color-ink)_62%,transparent)_50%,color-mix(in_srgb,var(--color-ink)_25%,transparent)_100%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[13px] tracking-[0.28em] uppercase text-paper/60 mb-6">{eyebrow}</p>
          <h1 className="display text-[48px] sm:text-[64px] md:text-[72px] lg:text-[88px] max-w-[34rem] md:max-w-[38rem] lg:max-w-[46rem]">
            {keepRanges(title)}
            {accent && (
              <>
                {" "}
                <span className="italic text-coral-soft">{keepRanges(accent)}</span>
              </>
            )}
          </h1>
          <p className="mt-10 font-serif text-[21px] md:text-[25px] leading-[1.35] text-paper/90 max-w-[46rem]">{keepRanges(standfirst)}</p>
        </div>
      </section>
      {sections && (
        <nav className="sticky top-[72px] z-40 bg-ink border-t border-paper/10 px-6 md:px-8 font-dm">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 py-3 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-6 whitespace-nowrap">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="text-[15px] text-paper/75 hover:text-paper transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
            {cta && (
              <a href={cta.href} className="shrink-0 px-5 py-2 rounded-full bg-paper text-ink text-[14px] hover:bg-mustard transition-colors whitespace-nowrap">
                {cta.label}
              </a>
            )}
          </div>
        </nav>
      )}
    </>
  );
}
