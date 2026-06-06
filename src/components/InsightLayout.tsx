import Link from "next/link";
import type { ReactNode } from "react";

interface FAQ {
  q: string;
  a: string;
}

interface InsightLayoutProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  faqs: FAQ[];
  children: ReactNode;
}

/**
 * Standard layout for long-form insight pages on 2ndststrategy.com.
 *
 * Includes:
 * - Hero section with eyebrow / H1 / lede
 * - Main article body (markdown-rendered via children)
 * - FAQ section with FAQPage JSON-LD schema (high-leverage for AI answer
 *   engines per the "Marin T. Kael" GEO experiment)
 * - CTA back to contact
 */
export default function InsightLayout({
  eyebrow,
  title,
  subtitle,
  faqs,
  children,
}: InsightLayoutProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="pt-20 md:pt-32 pb-16 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="container-tight relative z-10 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent-blue" />
            <span className="label-tag">{eyebrow}</span>
          </div>
          <h1 className="heading-xl text-navy-900 mb-5">{title}</h1>
          <p className="body-lg max-w-3xl text-slate-600">{subtitle}</p>
        </div>
      </section>

      {/* BODY */}
      <section className="section-pad bg-white">
        <div className="container-tight max-w-3xl">
          <article className="prose-insight">{children}</article>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="section-pad bg-slate-50 border-y border-slate-200">
          <div className="container-tight max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent-blue" />
              <span className="label-tag">FAQ</span>
            </div>
            <h2 className="heading-lg text-navy-900 mb-10">
              Common questions.
            </h2>
            <div className="space-y-6">
              {faqs.map(({ q, a }) => (
                <div key={q} className="card-base">
                  <h3 className="font-bold text-navy-900 text-base mb-2">{q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-navy-950">
        <div className="container-tight text-center">
          <h2 className="heading-lg text-white mb-4">
            Have an active deal or strategy question?
          </h2>
          <p className="body-lg text-slate-300 mb-8 max-w-lg mx-auto">
            Reach out. We respond within 24 hours.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in touch
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
