import Link from "next/link";



const services = [
  {
    href: "/services#ai",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    label: "AI Analytics",
    bullets: [
      "Custom tools and dashboards",
      "Public and proprietary data analysis",
      "Full leverage of current and emerging capabilities",
      "Human-in-the-loop validation with a senior strategy consultant",
    ],
  },
  {
    href: "/services#cdd",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    label: "Commercial Due Diligence",
    bullets: [
      "Buy-side and sell-side mandates",
      "Market sizing and growth dynamics, competitive positioning, customer purchasing",
      "Informed by primary research: VOM interviews, customer interviews, B2B & B2C online surveys, web scrapers",
      "Delivered on LOI-to-close timelines",
    ],
  },
  {
    href: "/services#growth",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    label: "Growth Strategy",
    bullets: [
      "Organic vs. inorganic growth path analysis",
      "Market entry and go-to-market roadmaps informed by AI analytics and VOM research",
      "Actionable and pragmatic output in 3-6 weeks",
      "Built for PE hold-period realities",
    ],
  },
];

const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "200+", label: "PE processes supported" },
  { value: "3,000+", label: "Expert interviews conducted" },
  { value: "80+", label: "B2B and B2C Surveys executed" },
  { value: "15", label: "AI analytics deal evaluation tools developed" },
];

const sectors = [
  "Technology",
  "Built Environment",
  "Business Services",
  "Industrials",
  "Healthcare",
  "Consumer",
];

const aiCapabilities = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    label: "AI-Powered Due Diligence",
    tag: "CDD",
    bullets: [
      "Faster synthesis across large primary datasets",
      "Pattern recognition from 200+ prior CDD engagements",
      "Deeper market analysis in compressed deal timelines",
      "Custom AI tooling built specifically for CDD work",
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    label: "Market Intelligence Platforms",
    tag: "Data Products",
    bullets: [
      "Proprietary data tools for PE-backed companies",
      "Pinpoint IQ - geographic market intelligence for roll-ups",
      "White-space identification at the MSA level",
      "Built for operators, not just analysts",
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    label: "AI Strategy & Implementation",
    tag: "AI Advisory",
    bullets: [
      "Where AI creates real competitive advantage",
      "Not just recommendations - we build it",
      "Portfolio company AI roadmaps",
      "2-3 years ahead of the traditional consulting firm capabilities",
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {/* â”€â”€â”€ HERO â”€â”€â”€ */}
      <section className="pt-20 md:pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container-tight relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-accent-blue" />
            <span className="label-tag">Strategy. Private Equity. AI Analytics.</span>
          </div>
          <h1 className="heading-xl text-navy-900 mb-6 max-w-4xl">
            Deep strategy consulting and{" "}
            <span className="text-gradient-blue">AI analytics expertise</span>{" "}
            for middle-market PE and its portfolio companies.
          </h1>
          <p className="body-lg max-w-2xl mb-8">
            Top-tier commercial due diligence and growth strategy consulting combined with distinctive AI analytics and custom solution development capabilities â€“ delivering what most firms cannot.
          </p>
          <ul className="space-y-2.5 mb-10">
            {[
              "200+ buy-side and sell-side processes",
              "$8B+ in enterprise value evaluated",
              "Custom AI tools built on 15+ years of deal experience",
              "Senior principal-led to ensure highest levels of insight",
            ].map((b) => (
              <li key={b} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Start a conversation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/work" className="btn-outline">
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ STATS â”€â”€â”€ */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="container-tight">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-black text-navy-900 mb-1">{s.value}</p>
                <p className="text-sm text-slate-500 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ CLIENT LOGOS â”€â”€â”€ */}
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
            ].filter((v, i, a) => a.findIndex(x => x.name === v.name) === i)
             .map(({ name, logo }) => (
              <div
                key={name}
                className="flex items-center justify-center h-12 px-2"
              >
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

      {/* â”€â”€â”€ SERVICES PREVIEW â”€â”€â”€ */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent-blue" />
              <span className="label-tag">What we deliver</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="heading-lg text-navy-900">
                CDD & Growth Strategy +{" "}
                <span className="text-gradient-blue">AI Analytics</span>
              </h2>
              <Link href="/services" className="text-sm font-medium text-accent-blue hover:underline flex-shrink-0">
                View all services →
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="card-base group hover:shadow-md hover:border-accent-blue/30 hover:-translate-y-0.5 transition-all duration-200 border-t-4 border-t-accent-blue"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-accent-blue mb-5 group-hover:bg-accent-blue/10 transition-colors">
                  {svc.icon}
                </div>
                <h3 className="text-navy-900 font-bold text-base mb-4">{svc.label}</h3>
                <ul className="space-y-2">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-500">
                      <svg className="w-3.5 h-3.5 text-accent-blue mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ AI SECTION â”€â”€â”€ */}
      {/* Distinct visual treatment: blue-gold tinted gradient, separates from standard white sections */}
      <section className="section-pad relative overflow-hidden" style={{ background: "linear-gradient(135deg, #eef6ff 0%, #f8fafc 50%, #fffbf0 100%)" }}>
        <div className="absolute inset-0 bg-grid-blue" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-blue via-accent-gold to-accent-blue" />
        <div className="container-tight relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent-blue" />
              <span className="label-tag">AI Analytics + Deep CDD Expertise</span>
              <span className="text-xs bg-accent-blue/10 text-accent-blue font-semibold px-2.5 py-0.5 rounded-full border border-accent-blue/20">New</span>
            </div>
            <h2 className="heading-lg text-navy-900 max-w-2xl">
              The combination most firms{" "}
              <span className="text-gradient-blue">don&apos;t have.</span>
            </h2>
            <p className="body-lg max-w-2xl mt-4">
              Deep CDD expertise meets custom AI tooling and analytics. The result: faster synthesis, sharper pattern recognition, and more rigorous analysis than either alone.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {aiCapabilities.map((cap) => (
              <div
                key={cap.label}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-accent-blue/40 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                    {cap.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 border border-slate-200 px-2 py-1 rounded-md">
                    {cap.tag}
                  </span>
                </div>
                <h3 className="text-navy-900 font-bold text-base mb-4">{cap.label}</h3>
                <ul className="space-y-2">
                  {cap.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-500">
                      <svg className="w-3.5 h-3.5 text-accent-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <Link href="/services" className="btn-primary">
              Learn more about our capabilities
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-gold via-accent-blue to-accent-gold" />
      </section>

      {/* â”€â”€â”€ SELECTED WORK â”€â”€â”€ */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent-blue" />
              <span className="label-tag">Selected Work</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="heading-lg text-navy-900">
                200+ engagements.{" "}
                <span className="text-gradient-blue">Six priority sectors.</span>
              </h2>
              <Link href="/work" className="text-sm font-medium text-accent-blue hover:underline flex-shrink-0">
                View all work →
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map((s) => (
              <div key={s} className="card-base flex items-center gap-3 py-4 hover:border-accent-blue/30 transition-colors">
                <span className="text-accent-gold text-sm">•</span>
                <span className="text-navy-800 font-medium text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ WHY 2ND ST â”€â”€â”€ */}
      <section className="section-pad bg-slate-50 border-y border-slate-200">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-accent-blue" />
                <span className="label-tag">Why 2nd St Strategy</span>
              </div>
              <h2 className="heading-lg text-navy-900 mb-8">
                What makes the{" "}
                <span className="text-navy-900">difference.</span>
              </h2>
              <div className="space-y-5">
                {[
                  { t: "Principal-led, always", d: "Every engagement run by a Senior Principal. Insight generation from deep deal work experience." },
                  { t: "Primary research first", d: "We talk to the market - customers, competitors, channel partners â€“ using the right tools to gather its insights." },
                  { t: "AI-integrated workflows", d: "Custom tooling that accelerates synthesis, pattern recognition, and market modeling." },
                  { t: "PE-calibrated delivery", d: "Built for LOI-to-close timelines. Tight formats, clear recommendations." },
                ].map(({ t, d }) => (
                  <div key={t} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-navy-900 text-sm">{t}</p>
                      <p className="text-slate-500 text-sm mt-0.5">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote card */}
            <div className="card-base border-l-4 border-l-accent-gold bg-white p-8">
              <div className="text-4xl text-accent-gold/30 font-serif mb-3">&ldquo;</div>
              <blockquote className="text-navy-800 text-lg font-medium leading-relaxed mb-6">
                The combination of deep primary research and AI-powered analysis is what allows us to go places traditional CDD can&apos;t - faster and with more confidence.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  JA
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">James Agres</p>
                  <p className="text-slate-500 text-xs">Founder & Principal, 2nd St Strategy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ CTA â”€â”€â”€ */}
      <section className="py-20 bg-navy-950">
        <div className="container-tight text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent-blue" />
            <span className="label-tag">Get in touch</span>
            <div className="w-8 h-px bg-accent-blue" />
          </div>
          <h2 className="heading-lg text-white mb-4">
            Have a deal on your desk?
          </h2>
          <p className="body-lg text-slate-300 mb-8 max-w-xl mx-auto">
            We respond within 24 hours. Usually faster.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Start the conversation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
