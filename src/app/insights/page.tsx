import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Insights on commercial due diligence, growth strategy, AI analytics, and middle-market private equity from 2nd St Strategy.",
  alternates: { canonical: "https://2ndststrategy.com/insights" },
};

const posts = [
  {
    slug: "commercial-due-diligence",
    title: "Commercial Due Diligence for Middle-Market Private Equity",
    excerpt:
      "What commercial due diligence actually is, what a good CDD report looks like, and how the work is done at 2nd St Strategy.",
  },
  {
    slug: "cdd-for-roll-ups",
    title: "Commercial Due Diligence for Roll-Ups and Platform Acquisitions",
    excerpt:
      "How CDD for a platform-and-add-on roll-up differs from a standalone business, and what to look for in the local services categories PE is consolidating.",
  },
  {
    slug: "voice-of-market-research",
    title: "Voice of Market Research: What Most CDD Reports Get Wrong",
    excerpt:
      "The customer interview is the most important artifact in a CDD process. Here is how 2nd St runs voice-of-market research and what we look for.",
  },
  {
    slug: "ai-tools-pe-diligence",
    title: "AI Tools for Private Equity Due Diligence",
    excerpt:
      "Where AI actually adds leverage in a CDD process, where it does not, and what the tooling looks like at a CDD firm using it well.",
  },
];

export default function InsightsIndexPage() {
  return (
    <>
      <section className="pt-20 md:pt-32 pb-16 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="container-tight relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent-blue" />
            <span className="label-tag">Insights</span>
          </div>
          <h1 className="heading-xl text-navy-900 mb-5">
            Notes from the work.
          </h1>
          <p className="body-lg max-w-2xl text-slate-600">
            Long-form writing on commercial due diligence, growth strategy, and
            AI analytics for middle-market private equity.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-tight max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {posts.map(({ slug, title, excerpt }) => (
              <Link
                key={slug}
                href={`/insights/${slug}`}
                className="card-base hover:shadow-md transition-shadow"
              >
                <h2 className="font-bold text-navy-900 text-lg mb-3 leading-snug">
                  {title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {excerpt}
                </p>
                <span className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-accent-blue">
                  Read more
                  <svg
                    className="w-3.5 h-3.5"
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
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
