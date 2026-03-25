import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact - 2nd St Strategy",
  description:
    "Get in touch with 2nd St Strategy for commercial due diligence, growth strategy, or AI-powered analytics engagements.",
};

const faqs = [
  {
    q: "How quickly can you mobilize on a deal?",
    a: "Typically 24-48 hours from initial call to scope alignment. We're built for compressed PE timelines.",
  },
  {
    q: "What's your typical engagement size?",
    a: "CDD engagements run 3-6 weeks. Growth strategy projects run 3 weeks. We're flexible based on deal needs.",
  },
  {
    q: "Do you work on both buy-side and sell-side?",
    a: "Yes. We're sector-agnostic and work with both sponsors and management teams on either side of a process.",
  },
  {
    q: "Is everything principal-led?",
    a: "Yes. James Agres runs every engagement personally. You hire him - he does the work.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="pt-20 md:pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="container-tight relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent-blue" />
            <span className="label-tag">Contact</span>
          </div>
          <h1 className="heading-xl text-navy-900 mb-5">
            Have a deal on{" "}
            <span className="text-gradient-blue">your desk?</span>
          </h1>
          <p className="body-lg max-w-2xl text-slate-600">
            Tell us about the engagement - sector, stage, timeline, and core commercial questions. We respond within 24 hours. Usually faster.
          </p>
        </div>
      </section>

      {/* ─── FORM + SIDEBAR ─── */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Form - 2/3 width */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Sidebar - 1/3 width */}
            <div className="space-y-8">
              {/* Direct contact */}
              <div className="card-base border-t-4 border-t-accent-blue">
                <p className="label-tag mb-4">Direct contact</p>
                <div className="space-y-3">
                  <a
                    href="mailto:james@2ndststrategy.com"
                    className="flex items-center gap-3 text-navy-800 hover:text-accent-blue transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-accent-blue/10 group-hover:text-accent-blue transition-colors flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <span className="text-sm">james@2ndststrategy.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-slate-500">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <span className="text-sm">Chicago, IL - serving sponsors nationally</span>
                  </div>
                </div>
              </div>

              {/* What to include */}
              <div className="card-base">
                <p className="label-tag mb-4">What to include</p>
                <ul className="space-y-2.5">
                  {[
                    "Target sector and brief description",
                    "Buy-side or sell-side",
                    "Rough timeline and stage",
                    "Core commercial questions",
                    "Any known constraints",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                      <div className="w-1 h-1 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response time */}
              <div className="card-base bg-navy-900 border-navy-800 text-center py-6">
                <p className="text-3xl font-black text-white mb-1">&lt;24h</p>
                <p className="text-slate-400 text-sm">Response time</p>
                <p className="text-slate-500 text-xs mt-2">Usually much faster on active deals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-pad bg-slate-50 border-t border-slate-200">
        <div className="container-tight">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent-blue" />
              <span className="label-tag">FAQ</span>
            </div>
            <h2 className="heading-lg text-navy-900">Common questions.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
            {faqs.map((faq) => (
              <div key={faq.q} className="card-base hover:border-accent-blue/20 transition-colors">
                <p className="font-semibold text-navy-900 text-sm mb-2">{faq.q}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ALTERNATE CTA ─── */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container-tight text-center">
          <p className="text-slate-500 text-sm mb-4">
            Want to see the work first?
          </p>
          <Link href="/work" className="btn-outline text-sm">
            View selected engagements →
          </Link>
        </div>
      </section>
    </>
  );
}
