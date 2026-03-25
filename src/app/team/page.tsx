"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CareersForm from "@/components/CareersForm";

export default function TeamPage() {
  const [modal, setModal] = useState<string | null>(null); // role name or null

  return (
    <>
      {/* ─── MODAL ─── */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-navy-900 font-bold text-lg mb-1">{modal}</h3>
            <p className="text-slate-500 text-sm mb-5">Tell us a bit about yourself and why you&apos;re interested.</p>
            <CareersForm role={modal} onClose={() => setModal(null)} />
          </div>
        </div>
      )}

      {/* ─── HERO ─── */}
      <section className="section-pad pt-20 md:pt-32 bg-white border-b border-slate-100">
        <div className="container-tight">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent-blue" />
            <span className="label-tag">The team</span>
          </div>
          <h1 className="heading-xl text-navy-900 mb-4">
            The people behind{" "}
            <span className="text-gradient-blue">the work.</span>
          </h1>
          <p className="body-lg text-slate-500 max-w-2xl">
            Small by design. Principal-led from start to finish.
          </p>
        </div>
      </section>

      {/* ─── JAMES CARD ─── */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <div className="card-base max-w-2xl mb-16">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl overflow-hidden">
                  <Image
                    src="/james-headshot.jpg"
                    alt="James Agres"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-navy-900 font-bold text-xl mb-0.5">James Agres</h3>
                <p className="text-accent-blue text-sm font-semibold mb-3">Founder &amp; Principal</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  James founded 2nd St Strategy after 15+ years driving commercial due diligence and growth strategy engagements. He&apos;s led 180+ buy-side and sell-side processes across technology, built environment, industrials &amp; business services sectors — and built the AI tooling delivering unique insights for every project.
                </p>
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-2">Past Experience</p>
                  <ul className="space-y-1">
                    {["McKinsey & Co.", "Houlihan Lokey", "EY-Parthenon"].map((firm) => (
                      <li key={firm} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1 h-1 rounded-full bg-accent-gold flex-shrink-0" />
                        {firm}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:james@2ndststrategy.com"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue-dark transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    james@2ndststrategy.com
                  </a>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-navy-900 transition-colors">
                    Get in touch →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ─── JOIN US ─── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-gold">Join Us</span>
            </div>
            <h3 className="heading-md text-navy-900 mb-2">Work with us.</h3>
            <p className="text-slate-500 text-sm mb-8 max-w-lg">
              We&apos;re a small, high-caliber shop. We keep it that way - and we need sharp people to deliver distinctive client work.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Analysts & Associates */}
              <div className="card-base border-t-4 border-t-accent-blue hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <h4 className="text-navy-900 font-bold text-base">Analysts &amp; Associates</h4>
                </div>
                <p className="text-slate-500 text-sm mb-4">
                  Sharp people who want real deal exposure - not slide farms. You&apos;ll be in the work.
                </p>
                <ul className="space-y-2 mb-5">
                  {[
                    "Commercial due diligence on live PE deals",
                    "Primary market research and VOM",
                    "Competitive and financial analysis",
                    "AI analytics tool development",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-500">
                      <div className="w-1 h-1 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-2">Apply If You</p>
                  <ul className="space-y-2">
                    {[
                      "Have 1-3 years working on CDD projects at a PE-focused consultancy",
                      "Want to develop independent deal perspective, not simply confirm the deal thesis for the IC",
                      "Have an entrepreneurial streak and want to join a growing independent consultancy",
                      "Developed hands-on interest in building ad hoc solutions with Claude Code, Codex, or OpenClaw",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-500">
                        <div className="w-1 h-1 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => setModal("Analyst / Associate")}
                  className="btn-primary text-sm py-2.5"
                >
                  Get in touch
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Subcontractors & Experts */}
              <div className="card-base border-t-4 border-t-accent-gold hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <h4 className="text-navy-900 font-bold text-base">Subcontractors &amp; CDD Experts</h4>
                </div>
                <p className="text-slate-500 text-sm mb-4">
                  Independent consultants with prior experience leading CDD engagements. Project-based work from anywhere in the world.
                </p>
                <ul className="space-y-2 mb-5">
                  {[
                    "Leading growth strategy and commercial due diligence workstreams and engagements",
                    "Independent work supported by an established firm infrastructure",
                    "Sector-specific experience across our six verticals",
                    "Project-by-project - no long commitments",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-500">
                      <div className="w-1 h-1 rounded-full bg-accent-gold mt-2 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-2">Apply If You</p>
                  <ul className="space-y-2">
                    {[
                      "Have led CDD projects as an Engagement Manager in a PE-focused consultancy or as an independent advisor",
                      "Have sector expertise in Technology, Built Environment, Business Services, Industrial, or Healthcare",
                      "Are interested in the application of AI to due diligence and strategy consulting",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-500">
                        <div className="w-1 h-1 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => setModal("Subcontractor / Expert")}
                  className="btn-outline text-sm py-2.5"
                >
                  Work with us
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-navy-950">
        <div className="container-tight text-center">
          <h2 className="heading-lg text-white mb-4">Ready to talk?</h2>
          <p className="body-lg text-slate-300 mb-8 max-w-lg mx-auto">
            Active deal process, portfolio question, or just want to connect - we respond within 24 hours.
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
