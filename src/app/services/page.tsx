import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services - 2nd St Strategy",
  description:
    "Commercial due diligence, growth strategy, voice of market research, and AI-powered analytics for middle-market private equity.",
};

const cddProcess = [
  { step: "1", title: "Scope alignment", body: "Define core due diligence questions." },
  { step: "2", title: "Research design", body: "Identify decision makers and other key parties, draft interview guide, recruit survey participant panel, design secondary data framework – bespoke analysis based on deal needs." },
  { step: "3", title: "AI analytics", body: "Design and develop custom tools and scripts required to answer core diligence questions." },
  { step: "4", title: "Desktop research", body: "Identify key data sources, use traditional and AI analysis to build TAM and SAM models." },
  { step: "5", title: "Primary research fieldwork", body: "Conduct structured interviews - customers, competitors, experts. Execute B2B and B2C surveys." },
  { step: "6", title: "AI-assisted synthesis", body: "Pattern recognition and cross-engagement benchmarking." },
  { step: "7", title: "Final delivery", body: "Tight deck, clear verdicts, investment committee ready." },
];

const sectors = [
  { name: "Technology",          items: ["Vertical and Horizontal SaaS", "Technology Services", "Workflow Automation Platforms", "AI Strategy"] },
  { name: "Built Environment",   items: ["Construction Services, Equipment and Technology", "Property Management & Maintenance", "Building Materials & Components", "Outdoor Living & Home Improvement"] },
  { name: "Business Services",   items: ["Professional Services", "Specialty Distribution & Supply Chain", "Custom Manufacturing Services", "AI-Powered Research Tools"] },
  { name: "Industrials",         items: ["Industrial Components & Services", "Specialty Manufacturing", "Aerospace & Defense Components", "Medical Device Equipment"] },
  { name: "Healthcare",          items: ["Healthcare IT & Software", "Medical Device Packaging", "Provider Services"] },
  { name: "Consumer",            items: ["Outdoor & Sporting Goods", "Specialty DTC Brands", "Custom Apparel & Accessories", "Consumer Health & Services"] },
];

const aiCapabilities = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    label: "AI-Powered Due Diligence",
    tag: "CDD",
    detail: "AI analytics combined with 15+ years of due diligence work. Our custom tooling goes beyond interview synthesis – we design and build custom solutions to surface patterns and insights that traditional CDD analysis cannot deliver - all in compressed deal timelines.",
    bullets: [
      "Faster synthesis across public and proprietary datasets",
      "Deep expertise from 150+ CDD engagements to understand what moves the needle",
      "Expert interview insight analysis and theme extraction",
      "Dynamic market sizing and what-if analysis",
      "Competitive benchmarking that incorporates web scraping to build a full picture",
      "Delivered on LOI-to-close timelines",
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    label: "Market Intelligence Platforms",
    tag: "Data Products",
    detail: "We build proprietary data tools for due diligence and strategy for PE-backed companies. Local market analytics, video or image analysis, customer sentiment analysis, and ad hoc tools and scripts to inform strategy and deal dynamics.",
    bullets: [
      "Pinpoint IQ - geographic market intelligence platform for roll-up target identification",
      "Geographic white space analysis at MSA level",
      "Population, penetration, and opportunity sizing",
      "Identification of product usage through video or image analysis",
      "Recurring intelligence, not one-time reports",
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    label: "AI Strategy & Implementation",
    tag: "AI Advisory",
    detail: "We help portfolio companies and management teams understand where AI creates real competitive advantage - then we actually build it. Not just a roadmap. Not just recommendations. Execution.",
    bullets: [
      "AI opportunity assessment for portfolio companies",
      "Build vs. buy vs. partner analysis",
      "Custom AI tool and bot development",
      "Management team AI fluency programs",
      "Emerging technology identification",
    ],
  },
];

// Note: Services page AI section headline/body updated to match home page framing per copy doc.

export default function ServicesPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="pt-20 md:pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="container-tight relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent-blue" />
            <span className="label-tag">Services</span>
          </div>
          <h1 className="heading-xl text-navy-900 mb-5">
            What we{" "}
            <span className="text-gradient-blue">deliver.</span>
          </h1>
          <p className="body-lg max-w-2xl text-slate-600">
            Four service lines - all built around the same engine: distinctive commercial due diligence expertise; primary research excellence, deep sector knowledge, and AI-powered analysis.
          </p>
        </div>
      </section>

      {/* ─── AI CAPABILITIES ─── (Distinct section - positioned prominently) */}
      <section id="ai" className="section-pad relative overflow-hidden" style={{ background: "linear-gradient(135deg, #eef6ff 0%, #f8fafc 50%, #fffbf0 100%)" }}>
        <div className="absolute inset-0 bg-grid-blue" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-blue via-accent-gold to-accent-blue" />
        <div className="container-tight relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent-blue" />
              <span className="label-tag">AI Analytics</span>
              <span className="text-xs bg-accent-blue/10 text-accent-blue font-semibold px-2.5 py-0.5 rounded-full border border-accent-blue/20">New</span>
            </div>
            <h2 className="heading-lg text-navy-900 max-w-2xl">
              AI analytics and custom tools to inform{" "}
              <span className="text-gradient-blue">primary research and growth strategy.</span>
            </h2>
            <p className="body-lg max-w-2xl mt-4 text-slate-600">
              We&apos;ve spent years building deep CDD and strategy expertise alongside AI analytics capabilities - and it&apos;s the combination that makes the difference on complex deal work in a highly competitive market.
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
                  <span className="text-xs font-semibold text-slate-400 border border-slate-200 px-2 py-1 rounded-md">{cap.tag}</span>
                </div>
                <h3 className="text-navy-900 font-bold text-base mb-3">{cap.label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{cap.detail}</p>
                <ul className="space-y-1.5">
                  {cap.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-slate-500">
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
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-gold via-accent-blue to-accent-gold" />
      </section>

      {/* ─── CDD ─── */}
      <section id="cdd" className="section-pad bg-white">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-accent-blue" />
                <span className="label-tag">Commercial Due Diligence</span>
              </div>
              <h2 className="heading-lg text-navy-900 mb-6">Buy-side and sell-side CDD.</h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Bespoke study design to validate or challenge investment thesis",
                  "Market sizing and segmentation and growth dynamics",
                  "Decision maker and competitor voice-of-the-market",
                  "B2B and B2C surveys delivered at scale",
                  "Customer concentration and churn risk",
                  "Competitive positioning moat assessment",
                  "Investment committee ready deliverables",
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
                Discuss a deal
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* CDD Process Steps */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">Our process</p>
              <div className="space-y-4">
                {cddProcess.map((step) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-navy-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {step.step}
                    </div>
                    <div className="card-base flex-1 py-4">
                      <p className="font-semibold text-navy-900 text-sm">{step.title}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GROWTH ─── */}
      <section id="growth" className="section-pad bg-slate-50 border-y border-slate-200">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-accent-blue" />
                <span className="label-tag">Growth Strategy</span>
              </div>
              <h2 className="heading-lg text-navy-900 mb-6">From question to roadmap.</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Built for PE hold-period realities: a fact base, clear prioritization, and a go-to-market roadmap in 3-6 weeks.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Organic vs. inorganic path analysis",
                  "Market entry and adjacency sizing",
                  "Go-to-market channel prioritization",
                  "TAM expansion and whitespace mapping",
                  "Build vs. buy vs. partner frameworks",
                  "100-day plan support for new platforms",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-slate-600 text-sm">
                    <svg className="w-4 h-4 text-accent-blue mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-base border-t-4 border-t-accent-gold">
              <p className="label-tag mb-4">Typical engagement</p>
              <div className="space-y-4">
                {[
                  { label: "Duration", val: "3-6 weeks" },
                  { label: "Deliverable", val: "Strategy deck and custom analytics tools to guide strategic decision making" },
                  { label: "Sources of Insight", val: "Desktop research, 5-25 primary interviews, customer surveys, AI analytics" },
                  { label: "Output", val: "Prioritized growth roadmap, executive and sponsor alignment" },
                  { label: "Engagement model", val: "Principal-led, fixed fee" },
                ].map(({ label, val }) => (
                  <div key={label} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm text-slate-500">{label}</span>
                    <span className="text-sm font-semibold text-navy-800">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VOM ─── */}
      <section id="vom" className="section-pad bg-white">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-accent-blue" />
                <span className="label-tag">Voice of Market</span>
              </div>
              <h2 className="heading-lg text-navy-900 mb-6">Primary research that moves deals.</h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Structured interview design and execution",
                  "Customer, competitor, and expert panels",
                  "Survey instrument design, panel recruitment, and analysis",
                  "Synthesis into investable insights",
                  "NPS, churn signals, and retention drivers",
                  "Cross-engagement benchmarking",
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
                Talk about your research needs
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">By the numbers</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "400+", label: "Structured interviews" },
                  { val: "50+", label: "Customer research programs" },
                  { val: "30+", label: "Interview VOM programs" },
                  { val: "6", label: "Core sectors covered" },
                ].map(({ val, label }) => (
                  <div key={val} className="card-base text-center py-6">
                    <p className="text-3xl font-black text-navy-900">{val}</p>
                    <p className="text-slate-500 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTORS ─── */}
      <section className="section-pad bg-slate-50 border-t border-slate-200">
        <div className="container-tight">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent-blue" />
              <span className="label-tag">Vertical Markets</span>
            </div>
            <h2 className="heading-lg text-navy-900">Where we have deep pattern recognition.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map((s) => (
              <div key={s.name} className="card-base hover:border-accent-blue/30 transition-colors">
                <h3 className="font-bold text-navy-900 text-sm mb-3 pb-2 border-b border-slate-100">{s.name}</h3>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-500 text-xs">
                      <span className="text-accent-gold text-xs">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-navy-950">
        <div className="container-tight text-center">
          <h2 className="heading-lg text-white mb-4">Have a process underway?</h2>
          <p className="body-lg text-slate-300 mb-8 max-w-xl mx-auto">
            We move fast. Tell us about the deal - sector, stage, timeline.
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
