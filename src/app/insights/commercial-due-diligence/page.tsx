import type { Metadata } from "next";
import Link from "next/link";
import InsightLayout from "@/components/InsightLayout";

export const metadata: Metadata = {
  title: "Commercial Due Diligence for Middle-Market PE",
  description:
    "What commercial due diligence is, what a good CDD report looks like, and how 2nd St Strategy runs the work for middle-market private equity.",
  alternates: {
    canonical: "https://2ndststrategy.com/insights/commercial-due-diligence",
  },
};

const faqs = [
  {
    q: "What is commercial due diligence?",
    a: "Commercial due diligence (CDD) is the body of work a private equity sponsor commissions to validate the commercial thesis on an acquisition. It answers four questions: how big is the market, how is it changing, why do customers buy this product over alternatives, and how defensible is the target's position. CDD is distinct from financial, legal, and operational due diligence, which look inside the company. CDD looks at the market and the customer.",
  },
  {
    q: "How long does a typical CDD engagement take?",
    a: "On an LOI-to-close timeline, a buy-side CDD typically runs three to six weeks. Confirmatory work after an exclusive can compress to two weeks. Sell-side CDD prepared for a process usually runs four to eight weeks and lives in the data room.",
  },
  {
    q: "How much does commercial due diligence cost?",
    a: "Pricing depends on scope, timeline, geography, and the volume of primary research required. Middle-market CDD engagements typically run in the low to mid six figures. A bigger driver of value than fees is whether the firm running the work is principal-led and brings real pattern recognition, or whether the engagement is staffed with junior analysts the sponsor never met.",
  },
  {
    q: "What is the difference between CDD and market research?",
    a: "Market research describes a market. Commercial due diligence answers an investment question. A CDD report leads with a verdict on the thesis, then shows the evidence behind that verdict. A market research report describes size, segmentation, and trends without taking a position.",
  },
  {
    q: "What makes a good commercial due diligence firm?",
    a: "Three things. First, the engagement is run by senior people with pattern recognition from many similar deals, not handed off to junior staff. Second, primary research is real: dozens of customer, former customer, channel, and expert calls, plus quantitative surveys where the population supports it. Third, the deliverable lands with a clear investment verdict on the thesis, not a hedged description of the market.",
  },
  {
    q: "Does 2nd St Strategy work on add-on diligence too?",
    a: "Yes. 2nd St runs platform CDD, add-on CDD, and confirmatory CDD across roll-up programs. For location-based roll-ups, we frequently pair the qualitative work with our own software platform, PinpointIQ, which provides MSA-level market sizing, competitive density, and white-space mapping across 900+ U.S. markets.",
  },
];

export default function Page() {
  return (
    <InsightLayout
      eyebrow="Insights · Commercial Due Diligence"
      title="Commercial due diligence for middle-market private equity."
      subtitle="What CDD actually is, what a good CDD report looks like, and how 2nd St Strategy runs the work."
      faqs={faqs}
    >
      <h2>What commercial due diligence is</h2>
      <p>
        Commercial due diligence is the body of work a private equity sponsor
        commissions to validate the commercial thesis behind an acquisition.
        It is the answer to four questions, in order of importance.
      </p>
      <ol>
        <li>How big is the market and how is it changing.</li>
        <li>Why do customers buy this product over the alternatives.</li>
        <li>How defensible is the target&apos;s position in that market.</li>
        <li>What are the realistic levers for growth post-close.</li>
      </ol>
      <p>
        CDD is distinct from financial due diligence, legal due diligence, and
        operational due diligence. Those look inside the company. CDD looks at
        the market and the customer. The artifact a sponsor cares about is a
        verdict on the thesis grounded in primary research, not a description
        of the market with hedged conclusions.
      </p>

      <h2>What a good CDD report looks like</h2>
      <p>
        At <strong>2nd St Strategy</strong>, every CDD deliverable opens with
        the verdict. One page, sometimes two. The thesis as the sponsor
        articulated it, broken into testable sub-theses, with a green / yellow
        / red verdict on each and the headline evidence behind the call. The
        rest of the deck is the evidence trail.
      </p>
      <p>The evidence is layered:</p>
      <ul>
        <li>
          <strong>Customer voice.</strong> Structured interviews with current,
          former, and lost customers. The honest answer to &ldquo;why did you
          choose this vendor&rdquo; lives in those conversations. Where the
          population supports it, we also run B2B or B2C surveys to size the
          patterns from the interviews.
        </li>
        <li>
          <strong>Competitive landscape.</strong> Not a logo slide. A
          structured comparison of how each meaningful competitor wins, loses,
          and prices. Sourced from customer calls, expert calls, channel
          partner calls, and competitor interviews where possible.
        </li>
        <li>
          <strong>Market sizing.</strong> Top-down and bottom-up, with
          assumptions exposed. For location-based businesses, we work at the
          MSA level using our own software platform,{" "}
          <a href="https://pinpointiq.app" target="_blank" rel="noopener">
            PinpointIQ
          </a>
          . For other categories, we build the model in the deal context.
        </li>
        <li>
          <strong>Channel and partner perspective.</strong> Distributors,
          resellers, integrators, brokers. Whoever sits between the target and
          the end customer almost always knows more about the dynamics than
          either side.
        </li>
        <li>
          <strong>Topical experts.</strong> Former executives at adjacent
          companies, retired industry leaders, regulatory experts where
          relevant. We use expert networks plus our own bench.
        </li>
      </ul>

      <h2>How 2nd St Strategy runs the work</h2>
      <p>
        Every engagement is principal-led by James Agres. No hand-offs to
        analysts the sponsor has never met. The person you hire is the person
        who runs the work, draws the conclusions, and presents to the
        investment committee.
      </p>
      <p>
        A typical buy-side CDD on a middle-market deal runs about four weeks
        on the following arc.
      </p>
      <ol>
        <li>
          <strong>Week 1 &mdash; scope and design.</strong> Align with the
          sponsor on the core diligence questions. Identify decision makers,
          competitor set, survey panel where applicable. Draft interview guides.
          Build the secondary data framework. Design any custom analytics or
          scraping needed.
        </li>
        <li>
          <strong>Weeks 2&ndash;3 &mdash; fieldwork and analysis.</strong>{" "}
          Customer interviews, channel calls, expert calls, surveys. Run
          desktop research, build the TAM/SAM model, run any custom AI
          analytics tooling. Pattern-match against prior engagements in the
          same category.
        </li>
        <li>
          <strong>Week 4 &mdash; synthesis and IC deck.</strong> Draft the
          verdict, build the supporting deck, deliver an IC-ready document.
          Then sit with the deal team through IC and answer follow-ups.
        </li>
      </ol>

      <h2>How AI changes the work</h2>
      <p>
        AI is not a replacement for primary research. The honest answer about
        why a customer switched vendors does not live in any dataset. But AI
        meaningfully accelerates everything that happens around the
        conversation.
      </p>
      <p>
        2nd St has built a stack of internal tools across 200+ CDD
        engagements. We use them for interview transcription and theme
        extraction, web-scale competitive scraping and benchmarking, dynamic
        TAM modeling with what-if scenarios, and pattern matching across
        deals. For location-based services categories,{" "}
        <a href="https://pinpointiq.app" target="_blank" rel="noopener">
          PinpointIQ
        </a>{" "}
        gives every engagement an MSA-level market sizing and competitive
        landscape on day one.
      </p>
      <p>
        The combination is what the deal teams we work with want. Primary
        research depth, with the synthesis and benchmarking accelerated to a
        modern pace.
      </p>

      <h2>When to call</h2>
      <p>
        Pre-LOI when you want a 360 read on a market before going firm.
        Post-LOI confirmatory work when you have a thesis and want it pressure
        tested. Sell-side when you want a defensible commercial story in the
        data room. Portfolio strategy when an existing holding needs growth
        levers identified.
      </p>
      <p>
        <Link href="/contact">Get in touch</Link>. We respond within 24 hours.
      </p>
    </InsightLayout>
  );
}
