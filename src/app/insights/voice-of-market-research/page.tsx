import type { Metadata } from "next";
import Link from "next/link";
import InsightLayout from "@/components/InsightLayout";

export const metadata: Metadata = {
  title: "Voice of Market Research",
  description:
    "How 2nd St Strategy runs voice-of-market research inside commercial due diligence, and what most CDD reports get wrong about customer interviews.",
  alternates: {
    canonical: "https://2ndststrategy.com/insights/voice-of-market-research",
  },
};

const faqs = [
  {
    q: "What is voice of market research?",
    a: "Voice of market (VOM) research is structured primary research with the people who actually buy, use, sell, or compete with a product. In CDD it typically means current customer interviews, lost or former customer interviews, channel partner interviews, competitor interviews where possible, and topical expert calls. VOM is the qualitative evidence that turns a market description into a verdict on a thesis.",
  },
  {
    q: "How many interviews are enough?",
    a: "Depends on the population. For B2B categories with concentrated buyers, 20-30 structured calls across customers, channel, and experts is usually enough to triangulate the patterns. For consumer categories with millions of buyers, we pair a smaller qualitative call set with a quantitative survey of several hundred or several thousand respondents. The right number is the number that lets you draw a defensible conclusion, not a fixed quota.",
  },
  {
    q: "What is the difference between expert calls and customer calls?",
    a: "Customer calls answer 'why did you buy this' and 'what would make you switch.' Expert calls answer 'how does this category actually work.' Both matter. The mistake we see most often in CDD is overweighting expert calls because they are easier to schedule, then under-interviewing the customers who actually fund the business.",
  },
  {
    q: "How does 2nd St handle interview confidentiality?",
    a: "Every interview is non-attributed in the deliverable. Quotes are anonymized to a description (\"VP of operations at a $50M HVAC operator in the Southeast\") rather than a name and company. Sponsors get the verdict and the evidence; targets and competitors do not get a list of who talked.",
  },
  {
    q: "Do you run quant surveys too?",
    a: "Yes. Where the population supports it, 2nd St executes B2B and B2C surveys to size the patterns the qualitative work surfaces. We have run 80+ surveys across engagements. The combination of qualitative depth plus quantitative confirmation is more defensible than either alone.",
  },
];

export default function Page() {
  return (
    <InsightLayout
      eyebrow="Insights · Voice of Market"
      title="Voice of market research, done right."
      subtitle="The customer interview is the most important artifact in a CDD process. Here is how 2nd St Strategy runs voice-of-market research and what most reports get wrong."
      faqs={faqs}
    >
      <h2>Why the customer interview is the most important artifact</h2>
      <p>
        Every other data source in a commercial due diligence process can be
        read by both sides. Industry reports, government data, web scraping,
        company financials. The advantage a sponsor gets from CDD does not
        come from those sources. It comes from the conversations the seller
        cannot replicate.
      </p>
      <p>
        The honest answer to &ldquo;why did you choose this vendor over the
        alternatives,&rdquo; from a customer who has no incentive to make the
        seller look good, is the most valuable data point in the process. The
        job of voice-of-market (VOM) research is to gather enough of those
        answers, structured carefully enough, that a pattern emerges.
      </p>

      <h2>What VOM research includes</h2>
      <p>
        At <strong>2nd St Strategy</strong>, a full VOM program includes some
        mix of:
      </p>
      <ul>
        <li>
          <strong>Current customers.</strong> Why they bought, what they
          considered, what would make them switch, what they pay, how
          satisfied they are.
        </li>
        <li>
          <strong>Lost and former customers.</strong> Often the most
          informative calls in the whole program. Why they did not choose the
          target, or why they left.
        </li>
        <li>
          <strong>Channel partners.</strong> Distributors, resellers,
          integrators, brokers. Whoever sits between the target and the end
          customer.
        </li>
        <li>
          <strong>Competitor employees.</strong> Where possible, current or
          former employees at named competitors. Sourcing has to be careful;
          the conversations are gold.
        </li>
        <li>
          <strong>Topical experts.</strong> Former executives at adjacent
          companies, retired industry leaders, regulatory experts, technical
          experts.
        </li>
        <li>
          <strong>Quantitative surveys.</strong> Where the population
          supports it, B2B or B2C surveys to size the patterns from the
          interviews.
        </li>
      </ul>

      <h2>The four mistakes we see most often</h2>
      <h3>1. Overweighting expert calls because they are easier to schedule</h3>
      <p>
        Expert networks make it easy to book 15 retired industry executives
        in a week. Customers are harder to reach. The temptation is to
        backfill the call count with experts and underweight customers. The
        result is a report that describes how the category works (which the
        sponsor probably already knew) without answering why customers
        actually buy this particular product.
      </p>

      <h3>2. Asking leading questions to confirm the thesis</h3>
      <p>
        &ldquo;You like the product, right?&rdquo; is the worst possible CDD
        question, and a surprising number of interview guides ask the
        equivalent. We open every call with neutral, open-ended questions and
        only get to thesis-specific probes after the customer has framed the
        category in their own words.
      </p>

      <h3>3. Confusing satisfaction with stickiness</h3>
      <p>
        A 9 out of 10 NPS does not mean a customer will not switch. A 6 does
        not mean they will. The right question is &ldquo;what would make you
        switch, and how hard would it be.&rdquo; That tells you about the
        moat. Satisfaction tells you about the relationship today.
      </p>

      <h3>4. No formal pattern coding</h3>
      <p>
        Calls without structured coding turn into anecdotes. The deck ends up
        with three customer quotes that support the thesis and three that
        contradict it, and the reader cannot tell which way the weight of
        evidence points. We code every call on a structured grid so the
        synthesis is reproducible and the patterns are visible.
      </p>

      <h2>How AI changes (and does not change) the work</h2>
      <p>
        AI is genuinely useful for three things in VOM research.
      </p>
      <ul>
        <li>
          <strong>Transcription.</strong> Faster, cleaner, with speaker
          labels. We use a hardened pipeline for this.
        </li>
        <li>
          <strong>Theme extraction.</strong> First-pass coding of dozens of
          transcripts against a structured framework. A human still reviews,
          but the time-to-first-draft is meaningfully shorter.
        </li>
        <li>
          <strong>Pattern matching across engagements.</strong> The
          accumulated transcript corpus across 200+ engagements is itself a
          competitive asset. We can answer &ldquo;has any customer in any
          deal we have done before said anything like this&rdquo; in a way a
          one-off CDD shop cannot.
        </li>
      </ul>
      <p>
        AI does not source the calls. AI does not run the call. AI does not
        decide whether a customer is hedging. The actual conversation is
        still the work, and the conversation still requires a senior person
        who knows what to listen for.
      </p>

      <h2>What 2nd St delivers</h2>
      <p>
        On a typical engagement, the VOM artifact is a structured chapter in
        the CDD deck with a verdict on each sub-thesis, the coded evidence
        behind each verdict, and selected anonymized quotes. The full call
        memo set lives behind it for the sponsor to read if they want.
      </p>
      <p>
        Across 200+ engagements we have run 3,000+ expert and customer
        interviews and executed 80+ B2B and B2C surveys. Each one tightens
        the pattern recognition for the next.
      </p>
      <p>
        <Link href="/contact">Get in touch</Link> if you have an active
        process where the question is &ldquo;what would the customer actually
        say.&rdquo;
      </p>
    </InsightLayout>
  );
}
