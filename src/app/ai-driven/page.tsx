import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI-Driven - 2nd St Strategy",
  description:
    "What it means to fully embrace AI for deal work. AI-powered due diligence, market intelligence platforms, and AI strategy for middle-market private equity.",
};

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
      "Deep expertise from 200+ CDD engagements to understand what moves the needle",
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

export default function AiDrivenPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="pt-20 md:pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="container-tight relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent-blue" />
            <span className="label-tag">AI-Driven</span>
          </div>
          <h1 className="heading-xl text-navy-900 mb-5">
            What it means to fully{" "}
            <span className="text-gradient-blue">embrace AI for deal work.</span>
          </h1>
          <p className="body-lg max-w-2xl text-slate-600">
            AI doesn&apos;t replace the commercial judgment that makes CDD credible. It removes the ceiling on what&apos;s possible within the deal window.
          </p>
        </div>
      </section>

      {/* ─── AI PERSPECTIVE ─── */}
      <section className="section-pad bg-white border-b border-slate-100">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                CDD has always been constrained by time. LOI-to-close windows don&apos;t move — but the depth of analysis required to give a sponsor real conviction has only grown. The firms that thrive are the ones that find ways to do <span className="text-accent-blue font-semibold">more, faster, without sacrificing rigor.</span>
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                AI doesn&apos;t replace human judgment - <span className="text-accent-blue font-semibold">AI removes the ceiling on what&apos;s possible in the time available.</span> Market sizing models that once took weeks can be built and iterated overnight, with dynamic analysis. Interview transcripts that would take a week to synthesize can be pattern-matched across 200+ prior engagements in hours. Web data that was simply out of reach can now inform competitive positioning in real time. Ad hoc tools and analyses deliver insights to decision-making.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                The human element — the commercial judgment, the ability to challenge a thesis, the expertise to know what the data is actually telling you honed with <span className="text-accent-blue font-semibold">15+ years of strategic consulting experience</span> that doesn&apos;t go away. It gets sharper, because it&apos;s now working with a richer evidence base than was ever available before.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "More signal, same timeline",
                  body: "AI tools surface patterns across datasets and prior engagements that would take weeks to find manually — delivered within the deal window.",
                },
                {
                  title: "Human judgment, amplified",
                  body: "Every output is reviewed and interpreted by a senior principal. AI accelerates the evidence base; experience determines what it means.",
                },
                {
                  title: "Insights that weren't possible before",
                  body: "Geographic market models, video analysis, web scrapers, custom survey tools — capabilities that simply didn't exist for boutique CDD firms until now.",
                },
                {
                  title: "Built for PE timelines, not research labs",
                  body: "Everything we build is designed to answer specific deal questions under real time pressure — not to showcase technology for its own sake.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent-blue mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">{title}</p>
                    <p className="text-slate-500 text-sm mt-0.5 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── AI CAPABILITIES ─── */}
      <section id="ai" className="section-pad relative overflow-hidden" style={{ background: "linear-gradient(135deg, #eef6ff 0%, #f8fafc 50%, #fffbf0 100%)" }}>
        <div className="absolute inset-0 bg-grid-blue" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-blue via-accent-gold to-accent-blue" />
        <div className="container-tight relative z-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent-blue" />
              <span className="label-tag">AI Analytics</span>
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

      {/* ─── AI CASE STUDIES ─── */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent-blue" />
              <span className="label-tag">Selected Work</span>
            </div>
            <h2 className="heading-lg text-navy-900">
              AI in action.{" "}
              <span className="text-gradient-blue">Real engagements.</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">

            {/* Project 20 — GSP01 */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-accent-blue/30 transition-all duration-200">
              <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
                <img
                  src="/case-studies/project-20/animation.gif"
                  alt="GSP01 SFX Pipeline"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-700 text-white">Business Services</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border border-rose-500 text-rose-500">AI Analytics</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border border-accent-blue text-accent-blue">Buy-Side DD</span>
                </div>
                <h3 className="text-navy-900 font-bold text-base mb-3 leading-snug">
                  Do recent trends in live entertainment create tailwinds for a special effects company?
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  A sports and entertainment investment firm needed a systematic way to catalog the use of special effects across thousands of live concert performances. 2nd St Strategy designed and deployed a custom AI-powered video analysis pipeline to review concert footage at scale across 2,000+ shows.
                </p>
                <ul className="space-y-1.5 mb-4">
                  {[
                    "Built a proprietary SFX database covering 2,000+ concerts — not available from any existing source",
                    "Reduced research time from months of manual review to automated overnight processing via custom AI pipeline",
                  ].map((o) => (
                    <li key={o} className="flex items-start gap-2 text-xs text-slate-600">
                      <svg className="w-3.5 h-3.5 text-accent-blue mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {o}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["AI Video Analysis Pipeline (Gemini 2.5 on Vertex AI)", "2,000+ Concert Video Corpus", "Multi-Stage Frame Verification Workflow", "Structured SFX Database"].map((h) => (
                    <span key={h} className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-navy-700 rounded-lg border border-slate-200">{h}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 19 — Pinpoint IQ */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-accent-blue/30 transition-all duration-200">
              <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
                <img
                  src="/case-studies/project-19/animation.gif"
                  alt="Pinpoint IQ"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-700 text-white">Business Services</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border border-rose-500 text-rose-500">AI Analytics</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border border-purple-500 text-purple-600">Roll-Up Strategy</span>
                </div>
                <h3 className="text-navy-900 font-bold text-base mb-3 leading-snug">
                  How can a geographic market intelligence platform accelerate roll-up strategy for PE-backed businesses?
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  A PE-focused strategy firm needed a scalable way to deliver MSA-level market intelligence to clients evaluating acquisition targets in fragmented, geography-driven industries. 2nd St Strategy designed and built Pinpoint IQ, a proprietary SaaS platform replacing manual market sizing with dynamic, map-based analytics.
                </p>
                <ul className="space-y-1.5 mb-4">
                  {[
                    "Replaced weeks of manual market analysis with on-demand geographic intelligence across 939 U.S. MSAs",
                    "Enables consistent, data-driven acquisition targeting for PE-backed roll-up strategies",
                  ].map((o) => (
                    <li key={o} className="flex items-start gap-2 text-xs text-slate-600">
                      <svg className="w-3.5 h-3.5 text-accent-blue mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {o}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["Market Sizing by MSA and Census Tract", "Business Density and Competitive Mapping", "GDP, Income, and Demographic Overlays", "Roll-Up Target Identification"].map((h) => (
                    <span key={h} className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-navy-700 rounded-lg border border-slate-200">{h}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
          <div className="mt-8 text-center">
            <Link href="/work" className="text-sm font-medium text-accent-blue hover:underline">
              View all case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-navy-950">
        <div className="container-tight text-center">
          <h2 className="heading-lg text-white mb-4">Ready to talk about AI for your deal?</h2>
          <p className="body-lg text-slate-300 mb-8 max-w-xl mx-auto">
            Tell us about the process — sector, stage, timeline. We move fast.
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
