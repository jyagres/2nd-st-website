import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — 2nd St Strategy",
  description:
    "About 2nd St Strategy — principal-led commercial due diligence and growth strategy for middle-market private equity.",
};

const principles = [
  {
    title: "Primary research is the foundation.",
    body: "Secondary data describes what happened. Customers tell you why — and what's next. Every engagement starts with talking to the market.",
  },
  {
    title: "AI accelerates. It doesn't replace.",
    body: "Our custom tools help synthesize faster and pattern-match across engagements. But the commercial judgment still requires experience.",
  },
  {
    title: "Principals run the work.",
    body: "No hand-offs to analysts you've never met. The person you hire is the person who does the work.",
  },
  {
    title: "Honest over comfortable.",
    body: "We'll challenge a thesis if the evidence points elsewhere. The value is in the rigor — not in confirming what you already believe.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="pt-20 md:pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="container-tight relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent-blue" />
            <span className="label-tag">About</span>
          </div>
          <h1 className="heading-xl text-navy-900 mb-5">
            The firm behind{" "}
            <span className="text-gradient-blue">the work.</span>
          </h1>
          <p className="body-lg max-w-2xl text-slate-600">
            2nd St Strategy is a boutique commercial due diligence and growth strategy firm built for middle-market private equity. Principal-led, primary-research-first, AI-integrated.
          </p>
        </div>
      </section>

      {/* ─── FIRM STORY ─── */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-accent-blue" />
                <span className="label-tag">The firm</span>
              </div>
              <h2 className="heading-lg text-navy-900 mb-6">Built for the way PE actually works.</h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Boutique firm — no overhead, no politics",
                  "Every engagement principal-led by James Agres",
                  "15+ years of top-tier strategy and M&A diligence",
                  "200+ buy-side and sell-side processes",
                  "$6B+ in combined enterprise value evaluated",
                  "Six sectors, deep pattern recognition",
                  "Chicago, IL — serving PE sponsors nationally",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-slate-600 text-sm">
                    <svg className="w-4 h-4 text-accent-blue mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary text-sm">
                Get in touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="space-y-4">
              {/* Quick stat cards */}
              {[
                { val: "15+", label: "Years of experience", sub: "" },
                { val: "180+", label: "PE processes supported", sub: "Buy-side and sell-side" },
                { val: "3,000+", label: "Expert interviews conducted", sub: "Customers, competitors, experts" },
                { val: "80+", label: "B2B and B2C surveys executed", sub: "" },
                { val: "15", label: "AI analytics tools developed", sub: "" },
              ].map(({ val, label, sub }) => (
                <div key={val} className="card-base flex items-center gap-6 py-5">
                  <p className="text-4xl font-black text-navy-900 flex-shrink-0">{val}</p>
                  <div>
                    <p className="font-semibold text-navy-800 text-sm">{label}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLIENT LOGOS ─── */}
      <section className="py-12 bg-white">
        <div className="container-tight">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 text-center mb-8">Trusted by leading private investors and their portfolio companies</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 items-center">
            {[
              { name: "Ampleo",                      logo: "/clients/ampleo.png" },
              { name: "Ancor Capital Partners",      logo: "/clients/ancor-capital.png" },
              { name: "ArchStar Capital",            logo: "/clients/archstar-capital.png" },
              { name: "Banyan Software",             logo: "/clients/banyan-software.png" },
              { name: "Beacon Software",             logo: "/clients/beacon-software.png" },
              { name: "Clearwell Group",             logo: "/clients/clearwell-group.svg" },
              { name: "Dragoneer Investments",       logo: "/clients/dragoneer.svg" },
              { name: "EMKO Capital",                logo: "/clients/emko-capital.png" },
              { name: "Everberg Capital",            logo: "/clients/everberg-capital.png" },
              { name: "Francisco Partners",          logo: "/clients/francisco-partners.png" },
              { name: "GSE Partners",                logo: "/clients/gse-partners.svg" },
              { name: "HGGC",                        logo: "/clients/hggc.png" },
              { name: "Kohlberg & Company",          logo: "/clients/kohlberg.svg" },
              { name: "Level Equity",                logo: "/clients/level-equity.png" },
              { name: "Northwood Partners",          logo: "/clients/northwood-partners.png" },
              { name: "Peterson Partners",           logo: "/clients/peterson-partners.svg" },
              { name: "Rockwood Equity",             logo: "/clients/rockwood-equity.svg" },
              { name: "Rosewood Private Investments",logo: "/clients/rosewood.png" },
              { name: "Sentinel Capital",            logo: "/clients/sentinel-capital.svg" },
              { name: "Serata Capital",              logo: "/clients/serata-capital.png" },
              { name: "TA Associates",               logo: "/clients/ta-associates.png" },
              { name: "Unity Partners",              logo: "/clients/unity-partners.png" },
            ].map(({ name, logo }) => (
              <div key={name} className="flex items-center justify-center h-12 px-2">
                {logo ? (
                  <img
                    src={logo}
                    alt={name}
                    title={name}
                    className="w-[150px] h-[50px] object-contain grayscale opacity-40 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <span className="text-xs font-semibold text-slate-400 text-center leading-tight">{name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRINCIPLES ─── */}
      <section className="section-pad bg-slate-50 border-y border-slate-200">
        <div className="container-tight">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent-blue" />
              <span className="label-tag">How we work</span>
            </div>
            <h2 className="heading-lg text-navy-900">Four principles.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <div key={p.title} className="card-base border-t-4 border-t-accent-blue hover:shadow-md transition-shadow">
                <span className="text-accent-blue/30 text-4xl font-black leading-none block mb-3">0{i + 1}</span>
                <h3 className="text-navy-900 font-bold text-base mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-navy-950">
        <div className="container-tight text-center">
          <h2 className="heading-lg text-white mb-4">
            Ready to talk?
          </h2>
          <p className="body-lg text-slate-300 mb-8 max-w-lg mx-auto">
            Active deal process, portfolio question, or just want to connect — we respond within 24 hours.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
