import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import BrandPhoto from "../components/BrandPhoto";
import ContactBlock from "../components/ContactBlock";
import LakePhoto from "../components/LakePhoto";
import { PRINCIPLES } from "../components/content";

export const metadata: Metadata = {
  title: "About | Brightmere",
  description:
    "Brightmere does operator due diligence for people buying a £5-50m UK business. Founded and run by Lu Luo: accounting and corporate finance, then data science and engineering. London.",
};

// About page, after HaysMac's About: hero + in-page menu, statement beside a feature panel,
// values block (here: commitments true of every engagement), the person, the story.
const SECTIONS = [
  { id: "why", label: "Why Brightmere" },
  { id: "how-we-work", label: "How we work" },
  { id: "lu", label: "Lu Luo" },
  { id: "name", label: "The name" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-paper text-ink font-dm">
      <Header current="/about" />
      <PageHero
        eyebrow="About"
        title="About Brightmere"
        standfirst="Brightmere does operator due diligence for people buying a £5-50m UK business: the target's own transactions, joined to its ledger, so you know whether the business underneath the headline is the one you are paying for, before you sign."
        sections={SECTIONS}
      />

      <section id="why" className="grid lg:grid-cols-2 scroll-mt-36">
        <div className="px-6 md:px-8 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] py-24 md:py-28">
          <h2 className="font-serif text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.025em]">
            Financial due diligence tells you the numbers are right.{" "}
            <span className="text-coral">Operator diligence tells you what they mean for the price.</span>
          </h2>
          <div className="mt-10 space-y-5 text-slate text-[17px] leading-relaxed max-w-xl">
            <p>
              The ledger knows how much was sold. The operational system knows who bought, what it
              cost to serve them and whether they came back. The answer lives in the join, below the
              trial balance.
            </p>
            <p>
              That join has usually been a large-deal luxury. Brightmere exists to bring it to
              buyers of £5-50m businesses, at a fixed fee and inside exclusivity.
            </p>
          </div>
        </div>
        <div className="bg-blush px-6 md:px-12 py-16 md:py-24 flex flex-col justify-center">
          <a href="/story" className="relative block bg-ink text-paper chamfer overflow-hidden aspect-[4/3] group">
            <LakePhoto src="/story-ice.jpg" crop="shore" className="transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-ink)_20%,transparent)_0%,color-mix(in_srgb,var(--color-ink)_85%,transparent)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <p className="text-[12px] tracking-[0.22em] uppercase text-mustard mb-3">The story</p>
              <p className="font-serif text-[30px] md:text-[40px] leading-[1.05] tracking-[-0.025em]">
                The headline was true. <span className="italic text-coral-soft">The business underneath it was different.</span>
              </p>
              <span className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-paper text-ink group-hover:bg-mustard transition-colors">
                Read the story <span className="text-coral">&rarr;</span>
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* How we work, after HaysMac's "Our Values" */}
      <section id="how-we-work" className="bg-tint px-6 md:px-8 py-24 md:py-32 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <h2 className="display text-center text-[56px] md:text-[104px]">How we work</h2>
          <div className="mt-16 grid lg:grid-cols-2 gap-12">
            <p className="font-serif text-[24px] md:text-[28px] leading-[1.3]">
              Four commitments hold on every engagement. They are what you can expect before the
              first file is shared, and what you can hold us to at the end.
            </p>
            <div className="border-t border-dotted border-ink/50">
              {PRINCIPLES.map((p) => (
                <div key={p.t} className="rule-dot py-7">
                  <h3 className="font-serif text-[30px] md:text-[36px] leading-none tracking-[-0.02em]">{p.t}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-ink/80">{p.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The person */}
      <section id="lu" className="px-6 md:px-8 py-24 md:py-32 scroll-mt-36">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <BrandPhoto src="/lu-headshot-2.jpg" alt="Lu Luo, founder of Brightmere" className="aspect-[4/5] max-w-[320px]" />
            <p className="mt-6 font-serif text-[36px] tracking-[-0.02em] leading-none">Lu Luo</p>
            <p className="mt-2 text-slate">Founder, London</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="font-serif text-[30px] md:text-[42px] leading-[1.12] tracking-[-0.02em]">
              &ldquo;That is the gap I look for in every target: between what the numbers say{" "}
              <span className="text-coral">and what the transactions show.</span>&rdquo;
            </p>
            <div className="mt-10 space-y-5 text-slate text-[17px] leading-relaxed">
              <p>
                I trained in accounting and economics and started out in accounting and corporate
                finance, so I know how the ledger gets built: the real world happens, then it is
                recorded, closed and averaged. Then I moved into data science and engineering, and
                spent years building the systems that finance teams report from.
              </p>
              <p>
                Most people who can read a P&amp;L can&apos;t pull apart millions of transaction
                lines, and most who can pull them apart can&apos;t read the P&amp;L. Diligence below
                the trial balance needs both. Brightmere is built to read both records, and join them.
              </p>
              <p className="text-ink">I lead every engagement from London, and every finding is reviewed by me before it reaches you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The name */}
      <section id="name" className="relative overflow-hidden bg-ink text-paper px-6 md:px-8 py-24 md:py-32 scroll-mt-36">
        <LakePhoto crop="below" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-ink)_95%,transparent)_0%,color-mix(in_srgb,var(--color-ink)_60%,transparent)_55%,color-mix(in_srgb,var(--color-ink)_10%,transparent)_100%)]" />
        <div className="max-w-7xl mx-auto relative">
          <p className="text-[13px] tracking-[0.28em] uppercase text-paper/60 mb-6">The name</p>
          <h2 className="display text-[48px] md:text-[80px] max-w-4xl">
            A mere is still water. <span className="italic text-coral-soft">Bright light shows what is under the surface.</span>
          </h2>
          <p className="mt-10 text-paper/75 text-[18px] leading-relaxed max-w-2xl">
            The mark is a sun over three lines of water. The line it rises from is the trial
            balance. The work happens underneath it.
          </p>
        </div>
      </section>

      <ContactBlock title="Talk to us" />
      <Footer />
    </div>
  );
}
