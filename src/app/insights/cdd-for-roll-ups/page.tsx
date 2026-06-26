import type { Metadata } from "next";
import Link from "next/link";
import InsightLayout from "@/components/InsightLayout";

export const metadata: Metadata = {
  title: "CDD for Roll-Ups and Platform Acquisitions",
  description:
    "How commercial due diligence on a platform-and-add-on roll-up differs from a standalone business, and what to look for in the local services categories PE is consolidating.",
  alternates: {
    canonical: "https://2ndststrategy.com/insights/cdd-for-roll-ups",
  },
};

const faqs = [
  {
    q: "What is different about CDD for a roll-up?",
    a: "Roll-up CDD has to validate two things, not one. First, that the platform itself has a defensible commercial position. Second, that the underlying market is structurally rollable: fragmented enough, with enough operators of the right size, with enough density in the right geographies to fund add-on growth. A roll-up thesis can be right on the platform and wrong on the rollability of the market.",
  },
  {
    q: "How do you size a market for a roll-up?",
    a: "Bottom-up by metropolitan statistical area (MSA). National TAM means very little when the platform operates and grows location by location. At 2nd St Strategy we work at the MSA level for every location-based or route-based business, decomposing TAM by segment, household, and demographic driver. Our software platform, PinpointIQ, covers 900+ U.S. MSAs across 30+ verticals for exactly this analysis.",
  },
  {
    q: "Which industries lend themselves to PE roll-ups right now?",
    a: "Location-based and route-based services with high fragmentation, recurring or repeatable demand, and underinvested operations. HVAC, plumbing, pest control, landscaping, funeral homes, auto services, veterinary, dental, physical therapy, childcare, hotels, self-storage, roofing, and pool service are all active categories. Each has its own dynamics on labor, regulation, and what density actually buys.",
  },
  {
    q: "What kills a roll-up thesis in diligence?",
    a: "Three patterns. First, the market is fragmented but not actually rollable: too many sub-scale operators, no real density advantage, customers do not care which brand shows up. Second, the platform's economics rely on synergies that historical add-ons did not realize. Third, labor or regulation makes scaling more expensive than the model assumes.",
  },
  {
    q: "How does 2nd St use PinpointIQ in roll-up CDD?",
    a: "Every location-based or route-based CDD engagement starts with PinpointIQ's MSA-level TAM, competitive density, and demographic data for the markets the platform operates in. That gives the deal team an objective read on rollability before the qualitative work starts. The qualitative work, customer and operator interviews, then tests whether the on-the-ground reality matches the data.",
  },
];

export default function Page() {
  return (
    <InsightLayout
      eyebrow="Insights · Roll-Ups"
      title="Commercial due diligence for roll-ups."
      subtitle="How CDD on a platform-and-add-on roll-up differs from a standalone business, and what to look for in the local services categories PE is consolidating."
      faqs={faqs}
    >
      <h2>Roll-up CDD validates two theses, not one</h2>
      <p>
        On a standalone business, CDD is about the company in its market.
        Roll-up CDD has to answer two questions, and they are not the same
        question.
      </p>
      <ol>
        <li>
          <strong>Is the platform itself defensible?</strong> The standard
          commercial thesis. Why customers buy, how the platform wins versus
          alternatives, how the unit economics actually work, what would have
          to be true post-close.
        </li>
        <li>
          <strong>Is the underlying market structurally rollable?</strong>{" "}
          Different question. Are there enough operators of the right size, in
          the right geographies, with sufficient density to fund add-on growth
          and realize the synergies the model assumes.
        </li>
      </ol>
      <p>
        We see roll-up theses fail at <em>(2)</em> all the time. The platform
        looks fine. The market does not actually roll.
      </p>

      <h2>What rollability means</h2>
      <p>
        A market is rollable when four conditions hold.
      </p>
      <ul>
        <li>
          <strong>Real fragmentation.</strong> Not just a long tail. Enough
          operators in the $1M&ndash;$15M revenue band, in the geographies
          the platform cares about, to source meaningful add-ons for years.
        </li>
        <li>
          <strong>Density advantage.</strong> The platform actually benefits
          from co-locating routes or sites within an MSA. A national footprint
          built from one-of-each in 50 cities is usually worse than a deep
          footprint in 10 MSAs.
        </li>
        <li>
          <strong>Synergy realism.</strong> The synergies the model assumes
          (back-office consolidation, procurement, cross-selling, route
          density) are achievable at the headcount and integration intensity
          the sponsor will fund.
        </li>
        <li>
          <strong>Labor and regulatory headroom.</strong> The labor pool
          supports growth at the assumed wage curve. Regulation does not
          punish scale in ways the model misses (licensing, reimbursement,
          franchise law).
        </li>
      </ul>

      <h2>How we size the market at the MSA level</h2>
      <p>
        National TAM is a vanity number for a roll-up. The platform does not
        grow nationally. It grows location by location, MSA by MSA. The TAM
        that matters is the TAM in the MSAs the platform operates in plus the
        MSAs it can realistically expand into.
      </p>
      <p>
        At <strong>2nd St Strategy</strong>, every roll-up CDD starts at the
        MSA level. We use our own software platform,{" "}
        <a href="https://pinpointiq.ai" target="_blank" rel="noopener">
          PinpointIQ
        </a>
        , which covers 900+ U.S. metropolitan statistical areas across 30+
        location-based and route-based verticals. For each MSA in the
        platform&rsquo;s footprint (and each candidate expansion market), we
        produce:
      </p>
      <ul>
        <li>
          Total addressable market, decomposed by segment and demographic
          driver.
        </li>
        <li>
          Competitive density: deduplicated operator counts with revenue,
          employee, and year-founded data where available.
        </li>
        <li>
          Demographic drivers at the census-tract level relevant to the
          vertical (household formation, age bands, household income, etc.).
        </li>
        <li>
          White-space maps highlighting under-served census tracts inside each
          MSA.
        </li>
      </ul>
      <p>
        That gives the deal team an objective starting read on rollability.
        The qualitative work tests whether the on-the-ground reality matches
        the data.
      </p>

      <h2>What we look for in the qualitative work</h2>
      <p>
        Customer interviews on roll-ups are different from standalone CDD. The
        question is not just &ldquo;why do you buy this brand.&rdquo; It is
        also &ldquo;do you experience this category as branded at all, or as
        commoditized.&rdquo;
      </p>
      <ul>
        <li>
          <strong>Brand sensitivity by segment.</strong> In some categories,
          customers actively prefer national brands (pest control, certain
          HVAC). In others, brand is invisible and the local relationship is
          the asset (funeral, dental, vet). The right answer changes the
          synergy story.
        </li>
        <li>
          <strong>Operator interviews.</strong> Talking to owners of
          add-on-sized businesses in the category. Why would they sell, at
          what multiples, to whom. What changes when a PE-backed roll-up
          shows up in their MSA.
        </li>
        <li>
          <strong>Former integration leads.</strong> What it actually costs
          and takes to integrate an add-on in this category. The model and
          the reality often differ by a factor of two on time, and the
          difference compounds.
        </li>
      </ul>

      <h2>What kills a roll-up thesis in diligence</h2>
      <p>Three patterns show up repeatedly.</p>
      <ol>
        <li>
          <strong>Fragmented but not rollable.</strong> Plenty of operators
          but they are too small, too geographically dispersed, or the
          customer does not care which brand shows up. Density does not buy
          anything.
        </li>
        <li>
          <strong>Synergies relied on growth that did not happen.</strong>{" "}
          Historical add-ons under the current platform did not actually
          realize the cost or revenue synergies the model assumes for new
          add-ons.
        </li>
        <li>
          <strong>Labor or regulation breaks the curve.</strong> The wage
          curve, the licensing burden, or the reimbursement environment
          punishes scale in ways the spreadsheet does not capture.
        </li>
      </ol>

      <h2>When to bring 2nd St in</h2>
      <p>
        Earlier than most sponsors do. We do a lot of pre-LOI screening on
        roll-up theses where the question is &ldquo;is this market actually
        rollable, before we go firm.&rdquo; The combination of qualitative
        depth and PinpointIQ&rsquo;s MSA-level data lets us call that
        directionally in two weeks.
      </p>
      <p>
        <Link href="/contact">Get in touch</Link>.
      </p>
    </InsightLayout>
  );
}
