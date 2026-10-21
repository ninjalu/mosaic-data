import SunStripes from "./SunStripes";
import { BOOKING_URL } from "./booking";

// "Key contacts" block, after HaysMac's service pages: a blush contact card beside the form.
export default function ContactBlock({ id = "contact", title = "Talk to us" }: { id?: string; title?: string }) {
  return (
    <section id={id} className="px-6 md:px-8 py-24 md:py-32 scroll-mt-36 font-dm">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-[48px] md:text-[80px] leading-none tracking-[-0.035em]">{title}</h2>
        <div className="mt-14 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 relative bg-blush chamfer-r p-8 md:p-10 overflow-hidden">
            <p className="text-[14px] text-ink/60">Let&apos;s talk</p>
            <div className="mt-8 md:ml-16">
              <a href="/about" className="flex items-center justify-between font-serif text-[30px] tracking-[-0.02em] group">
                Lu Luo <span className="text-[20px] group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
              <p className="font-serif text-[22px] text-ink/60 leading-snug mt-2 pb-5 rule-dot">Founder. Scopes and runs every engagement.</p>
              <a href="mailto:lu@brightmerehq.com" className="flex items-center justify-between py-4 rule-dot hover:text-coral">
                lu@brightmerehq.com <span>&rarr;</span>
              </a>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-4 rule-dot hover:text-coral">
                Book 30 minutes on Google Meet <span>&rarr;</span>
              </a>
            </div>
            <SunStripes color="#162d27" className="absolute right-6 bottom-0 w-28 h-auto opacity-60" />
          </div>

          <form action="https://formspree.io/f/mwvvkjnb" method="POST" className="lg:col-span-7 grid sm:grid-cols-2 gap-x-6 gap-y-5">
            {[
              { id: "name", label: "Name", type: "text", req: true },
              { id: "company", label: "Company", type: "text", req: false },
              { id: "email", label: "Email address", type: "email", req: true },
              { id: "role", label: "Your role", type: "text", req: false },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="block text-[14px] text-slate mb-1.5">{f.label}</label>
                <input id={f.id} name={f.id} type={f.type} required={f.req} className="w-full bg-field px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-mustard" />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label htmlFor="referral" className="block text-[14px] text-slate mb-1.5">How did you hear about us?</label>
              <select id="referral" name="referral" defaultValue="" className="w-full bg-field px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-mustard">
                <option value="" disabled>Select one</option>
                <option value="ai-assistant">AI assistant (ChatGPT, Claude, Gemini, Perplexity)</option>
                <option value="google-search">Google or other search engine</option>
                <option value="linkedin">LinkedIn</option>
                <option value="referral">Referral / word of mouth</option>
                <option value="podcast-newsletter">Podcast or newsletter</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-[14px] text-slate mb-1.5">What are you buying, and when?</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="e.g., £8m revenue distributor, heads of terms signed, six weeks of exclusivity..."
                className="w-full bg-field px-4 py-3.5 placeholder-slate/60 focus:bg-white focus:ring-2 focus:ring-mustard"
              />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-paper hover:bg-ink-soft transition-colors">
                Send <span className="text-mustard">&rarr;</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
