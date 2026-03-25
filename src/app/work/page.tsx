"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: number;
  sector: string[];
  serviceType: string[];
  title: string;
  outcomes: string[];
  description: string;
  highlights: string[];
  images: string[];
};

const projects: Project[] = [
  {
    id: 20,
    sector: ["Business Services"],
    serviceType: ["Buy-Side DD", "AI Analytics"],
    title: "Do recent trends in live entertainment create tailwinds for a special effects company?",
    outcomes: [
      "Built a proprietary SFX database covering 2,000+ concerts — not available from any existing source",
      "Reduced research time from months of manual review to automated overnight processing via custom AI pipeline",
    ],
    description:
      "A sports and entertainment investment firm needed a systematic way to catalog the use of special effects — lasers, pyrotechnics, CO2 jets, confetti cannons, flame jets, and pixel walls — across thousands of live concert performances. 2nd St Strategy designed and deployed a custom AI-powered video analysis pipeline to review concert footage at scale, identifying and timestamping special effects across 2,000+ shows across genres and venues.",
    highlights: ["AI Video Analysis Pipeline (Gemini 2.5 on Vertex AI)", "2,000+ Concert Video Corpus (5 Genres × 2 Years)", "Multi-Stage Frame Verification Workflow", "Structured SFX Database by Show, Venue, Artist, and Genre"],
    images: ["/case-studies/project-20/animation.gif"],
  },
  {
    id: 19,
    sector: ["Business Services"],
    serviceType: ["Roll-Up Strategy", "AI Analytics"],
    title: "How can a geographic market intelligence platform accelerate roll-up strategy for PE-backed businesses?",
    outcomes: [
      "Replaced weeks of manual market analysis with on-demand geographic intelligence across 939 U.S. MSAs",
      "Enables consistent, data-driven acquisition targeting for PE-backed roll-up strategies",
    ],
    description:
      "A private equity-focused strategy consulting firm needed a scalable way to deliver MSA-level and census tract-level market intelligence to clients evaluating acquisition targets in fragmented, geography-driven industries. 2nd St Strategy designed and built Pinpoint IQ, a proprietary SaaS platform to replace manual market sizing with dynamic, map-based analytics.",
    highlights: ["Market Sizing by MSA and Census Tract", "Business Density and Competitive Mapping", "GDP, Income, and Demographic Overlays", "Roll-Up Target Identification Framework"],
    images: ["/case-studies/project-19/animation.gif"],
  },
  {
    id: 11,
    sector: ["Technology", "Consumer"],
    serviceType: ["Buy-Side DD"],
    title: "What is the growth potential for a self-publishing author support platform in a stagnant marketplace?",
    outcomes: [
      "~$500M TAM for self-publishing support services",
      "Self-publishing increasingly viewed as a legitimate publishing path, supporting market growth",
    ],
    description:
      "A Private Equity firm considered an investment into a platform supporting self-published authors with editing, cover art, marketing, and distribution services. 2nd St Strategy assessed market size, growth dynamics, and competitive positioning.",
    highlights: ["Customer Selection Process", "Competitive Evaluation", "Customer Segmentation", "Author interviews", "Competitor expert interviews", "Consumer survey"],
    images: [
      "/case-studies/project-11/image-1.png",
      "/case-studies/project-11/image-2.png",
      "/case-studies/project-11/image-3.png",
    ],
  },
  {
    id: 12,
    sector: ["Technology", "Business Services"],
    serviceType: ["Buy-Side DD"],
    title: "What are the growth opportunities and strategic requirements for a specialized Governance, Risk, and Compliance advisory firm in the SMB and middle-market segments?",
    outcomes: [
      "2025 U.S. GRC support services TAM is ~$1.8B, projected to reach $3.6B by 2030 at 15% CAGR",
      "Target NPS of 83 driven by deep expertise and a human-centered service model",
    ],
    description:
      "A middle-market private equity firm and its portfolio company explored an add-on acquisition of a GRC professional services firm. 2nd St Strategy sized the market, assessed competitive dynamics, and validated customer loyalty.",
    highlights: ["TAM Growth by Segment", "Purchasing Triggers", "Competitive Evaluation", "~30 GRC services user interviews"],
    images: [
      "/case-studies/project-12/image-1.png",
      "/case-studies/project-12/image-2.png",
      "/case-studies/project-12/image-3.png",
    ],
  },
  {
    id: 14,
    sector: ["Technology", "Healthcare"],
    serviceType: ["Buy-Side DD"],
    title: "What is the competitive differentiation for dental practice management software in its target market segment?",
    outcomes: [
      "~$600M TAM for core market segments, growing at a 5% CAGR",
      "Strong adoption dynamics driven by cloud transition from legacy on-premise software",
    ],
    description:
      "A middle-market PE firm invested in a SaaS-based dental practice management platform and needed to assess addressable market size, understand competitive dynamics, and validate customer switching behavior.",
    highlights: ["TAM, Segmentation, and Growth", "Competitive Landscape by Segment", "Switching Behavior", "DSO and dental practice interviews", "DSO and dental office survey"],
    images: [
      "/case-studies/project-14/image-1.png",
      "/case-studies/project-14/image-2.png",
      "/case-studies/project-14/image-3.png",
    ],
  },
  {
    id: 21,
    sector: ["Technology"],
    serviceType: ["Sell-Side DD"],
    title: "Can a configurable clinical trial workflow platform displace entrenched solutions and capture meaningful share in a growing but complex market?",
    outcomes: [
      "2024 TAM for clinical trial process management is $1.8B, projected to grow at 8.4% CAGR through 2029",
      "Judi received strong appraisal from clinical trial professionals — significant advancement over existing solutions; low market awareness identified as primary near-term constraint",
    ],
    description:
      "A private equity investor evaluated an investment in Judi, a configurable workflow automation platform designed to manage clinical trial processes for pharmaceutical companies and CROs. 2nd St Strategy sized the addressable market, assessed unmet needs in the clinical trial management software landscape, and evaluated Judi's competitive positioning and go-to-market strategy against entrenched incumbents.",
    highlights: ["TAM Sizing and Growth Modeling", "Unmet Needs Assessment: Current Software Gaps", "Competitive Landscape and Solution Evaluation", "51-respondent clinical trial manager survey", "In-depth interviews with Pharma and CRO executives", "AI Adoption Perspectives and Opportunity Assessment"],
    images: [
      "/case-studies/project-21/image-1.png",
      "/case-studies/project-21/image-2.png",
      "/case-studies/project-21/image-3.png",
    ],
  },
  {
    id: 10,
    sector: ["Technology"],
    serviceType: ["Strategy"],
    title: "What is the product-market fit for a call center speech analytics software platform?",
    outcomes: [
      "16M call center agents globally with ~50% speech analytics adoption rate as of 2021",
      "Significant variance in adoption across call center types and use cases; clear adjacent market opportunity identified",
    ],
    description:
      "A provider of call center technology was looking to expand its speech analytics product beyond its current use. 2nd St Strategy assessed the product-market fit across target segments and built an adoption curve framework.",
    highlights: ["Global Market Sizing", "Competitive Landscape", "Product Adoption Curve", "VOM interviews across target segments"],
    images: [
      "/case-studies/project-10/image-1.png",
      "/case-studies/project-10/image-2.png",
      "/case-studies/project-10/image-3.png",
    ],
  },
  {
    id: 1,
    sector: ["Built Environment", "Business Services"],
    serviceType: ["Buy-Side DD", "Roll-Up Strategy"],
    title: "Are kitchen exhaust hood cleaning services a synergistic add-on opportunity to fire protection services?",
    outcomes: [
      "Kitchen exhaust hood cleaning is a $1B+ U.S. market with attractive growth profile",
      "FPS and KEC markets are natural adjacencies with same decision makers and similar purchasing criteria",
    ],
    description:
      "A Private Equity firm that invested in a Fire Protection Services (FPS) company was interested in assessing kitchen exhaust hood cleaning (KEC) as a potential adjacent market to enter through M&A. 2nd St Strategy sized the market, assessed synergies, and evaluated competitive dynamics.",
    highlights: ["Industry Overview", "Market Sizing and Segmentation", "Synergy Assessment", "VOM interviews with restaurants and institutional kitchens"],
    images: [
      "/case-studies/project-1/image-1.png",
      "/case-studies/project-1/image-2.png",
      "/case-studies/project-1/image-3.png",
    ],
  },
  {
    id: 3,
    sector: ["Built Environment", "Business Services"],
    serviceType: ["Buy-Side DD", "Roll-Up Strategy"],
    title: "How can a rental unit turnover services provider find success expanding its services across North America?",
    outcomes: [
      "2025 U.S. turnover market is ~$15B with highly variable third-party service utilization across geographies",
      "Market concentrated among national operators; regional fragmentation creates roll-up opportunity",
    ],
    description:
      "A Private Equity firm assessed a potential investment in a provider of unit turnover and renovation services to property managers in Ontario. The goal was to evaluate where the target's services could gain traction across the U.S. market.",
    highlights: ["TAM and SAM Segmentation", "Market Drivers Assessment", "Utilization of Service Provider Types", "~30 property manager interviews", "250-respondent survey"],
    images: [
      "/case-studies/project-3/image-1.png",
      "/case-studies/project-3/image-2.png",
      "/case-studies/project-3/image-3.png",
    ],
  },
  {
    id: 4,
    sector: ["Built Environment", "Business Services"],
    serviceType: ["Buy-Side DD", "Roll-Up Strategy"],
    title: "How can a leading MEP installation services provider leverage its regional scale to capture growth in the expanding residential construction markets of the Southern U.S.?",
    outcomes: [
      "Core target market TAM is ~$12B, with Texas offering a ~$10B expansion opportunity",
      "Markets forecast to grow at 4.4% CAGR; builders prioritize reliability and build quality above price",
    ],
    description:
      "A private equity firm conducted commercial due diligence on a provider of HVAC, plumbing, and electrical (MEP) installation services. The goal was to assess TAM across core regions and evaluate builder purchasing dynamics.",
    highlights: ["Market Growth Drivers", "Contractor Evaluation Criteria", "Switching Behavior", "15 homebuilder executive interviews", "U.S. Census TAM model"],
    images: [
      "/case-studies/project-4/image-1.png",
      "/case-studies/project-4/image-2.png",
      "/case-studies/project-4/image-3.png",
    ],
  },
  {
    id: 5,
    sector: ["Built Environment", "Business Services"],
    serviceType: ["Buy-Side DD", "Roll-Up Strategy"],
    title: "Can a ready mixed concrete supplier expand to new markets adjacent to its rapidly growing DFW home base?",
    outcomes: [
      "Multi-billion TAM available in the fastest-growing metro area in the U.S.",
      "Central mix plant is a key differentiator enabling service to large road construction companies",
    ],
    description:
      "A private equity firm considered an investment into a mid-sized provider of ready mixed concrete (RMC) in the DFW Metroplex. The firm wanted to analyze the market, customer decision-making, and competitive dynamics across current and target expansion markets.",
    highlights: ["RMC Cost Structure", "Market Growth Drivers", "Competitive Segmentation", "~25 RMC decision maker interviews"],
    images: [
      "/case-studies/project-5/image-1.png",
      "/case-studies/project-5/image-2.png",
      "/case-studies/project-5/image-3.png",
    ],
  },
  {
    id: 2,
    sector: ["Built Environment"],
    serviceType: ["Strategy"],
    title: "How can a manufacturer of residential steel deck framing capitalize on shifting preference toward durable outdoor living solutions?",
    outcomes: [
      "Developed market size and growth trajectory for U.S. residential steel framing",
      "Aligned on cost and durability value proposition for contractors and homebuilders",
    ],
    description:
      "A large building materials manufacturer assessed the feasibility of acquiring a manufacturer of residential steel deck framing systems. The goal was to determine U.S. market size, growth trajectory, and the value proposition of steel vs. traditional wood framing.",
    highlights: ["Geographic Market Drivers", "Product Cost Assessment", "TAM Geographic Segmentation", "Contractor interviews"],
    images: [
      "/case-studies/project-2/image-1.png",
      "/case-studies/project-2/image-2.png",
      "/case-studies/project-2/image-3.png",
    ],
  },
  {
    id: 6,
    sector: ["Built Environment"],
    serviceType: ["Strategy"],
    title: "How can a building materials manufacturer reestablish growth in its struggling luxury louvered pergola business?",
    outcomes: [
      "~$1B underserved market exists for motorized louvered pergolas in the U.S.",
      "Growth constrained by high-interest rate housing slowdown and post-Covid demand normalization",
    ],
    description:
      "A large building materials company acquired a manufacturer of luxury louvered pergolas. Two years after acquisition, the business was struggling to achieve projected growth targets. 2nd St Strategy assessed the market opportunity and identified growth levers.",
    highlights: ["Gap to Goal Assessment by State", "Competitive Positioning", "Dealer Network Assessment", "~25 dealer-installer interviews"],
    images: [
      "/case-studies/project-6/image-1.png",
      "/case-studies/project-6/image-2.png",
      "/case-studies/project-6/image-3.png",
    ],
  },
  {
    id: 7,
    sector: ["Business Services"],
    serviceType: ["Buy-Side DD"],
    title: "How can a leading appliance parts distributor grow in an evolving market for household appliance repair?",
    outcomes: [
      "$1.1–1.5B TAM for appliance part distribution in the U.S., growing at ~2.5% CAGR",
      "Headwinds from Korean OEM growth and Right to Repair trends tempering near-term growth",
    ],
    description:
      "A Private Equity investor assessed a distributor of parts used in repair of major household appliances. 2nd St Strategy developed perspectives on appliance market evolution, repair economics, and distribution competitive dynamics.",
    highlights: ["Market Growth Dynamics", "Customer Purchasing Journey", "Pricing Dynamics", "Repair tech and distributor interviews"],
    images: [
      "/case-studies/project-7/image-1.png",
      "/case-studies/project-7/image-2.png",
      "/case-studies/project-7/image-3.png",
    ],
  },
  {
    id: 9,
    sector: ["Business Services"],
    serviceType: ["Buy-Side DD"],
    title: "How can a fractional finance and marketing professional services provider scale its business model in the fragmented middle-market sector?",
    outcomes: [
      "2025 U.S. TAM for fractional professional services is ~$2.0B, with ~15% CAGR through 2030",
      "Target achieves high loyalty via subject matter expertise and a human-centered approach",
    ],
    description:
      "A private equity firm evaluated the acquisition of a professional services provider specializing in fractional CFO and CMO services. The key objective was to validate market size, growth dynamics, and customer retention drivers.",
    highlights: ["Survey Composition", "TAM Modeling", "Drivers of Decision-Making", "~25 expert interviews", "150-respondent SMB survey"],
    images: [
      "/case-studies/project-9/image-1.png",
      "/case-studies/project-9/image-2.png",
      "/case-studies/project-9/image-3.png",
    ],
  },
  {
    id: 18,
    sector: ["Consumer", "Business Services"],
    serviceType: ["Strategy"],
    title: "How can a specialized heat transfers manufacturer maintain its competitive edge in the rapidly evolving custom apparel and screen-printing market?",
    outcomes: [
      "DTF transition likely to accelerate — clear benefit demonstrated for ~90% of custom apparel",
      "Outlined key strategic challenges the company must overcome to capitalize on the technology shift",
    ],
    description:
      "A middle-market PE firm invested in a manufacturer of heat transfers used to customize apparel. New Direct-to-Film (DTF) technology was disrupting the market. 2nd St Strategy modeled the technology transition and outlined strategic requirements.",
    highlights: ["Technology Transition Modeling", "Preferred Tech by Product Type", "Competitive Landscape", "~30 custom apparel industry decision maker interviews"],
    images: [
      "/case-studies/project-18/image-1.png",
      "/case-studies/project-18/image-2.png",
      "/case-studies/project-18/image-3.png",
    ],
  },
  {
    id: 8,
    sector: ["Industrials"],
    serviceType: ["Buy-Side DD"],
    title: "Does a provider of specialized electronic components for OEM and MRO applications have a sustainable growth trajectory in an increasingly competitive market?",
    outcomes: [
      "Sensors are highly application-specific; engineers specify commodity sensors where possible, creating moat in specialized segments",
      "Target's competitive position is durable in specialized applications with high switching costs",
    ],
    description:
      "A Private Equity firm considered an investment into a leading designer and manufacturer of specialized pressure transducers and digital sensors used in industrial OEM and MRO applications.",
    highlights: ["Sensor & Transducer Spec Overview", "Purchasing Process Overview", "Competitive Landscape", "~15 industrial decision maker interviews"],
    images: [
      "/case-studies/project-8/image-1.png",
      "/case-studies/project-8/image-2.png",
      "/case-studies/project-8/image-3.png",
    ],
  },
  {
    id: 22,
    sector: ["Industrials"],
    serviceType: ["Sell-Side DD"],
    title: "Can a manufacturer of upholstered furniture frame components leverage its supply chain capabilities to sustain growth in an outsourcing-driven market?",
    outcomes: [
      "Validated target's leading market position; identified outsourcing tailwinds driven by CAPEX constraints and wood supply chain complexity",
      "Sequencing capabilities and supply chain management identified as key competitive differentiators supporting investor thesis",
    ],
    description:
      "A private equity firm engaged 2nd St Strategy to prepare a sell-side market assessment for Industrial Timber, a manufacturer of wood frame components supplying upholstered furniture producers. The study assessed market size, growth dynamics, customer purchasing behavior, and the target's competitive positioning to support investor diligence.",
    highlights: ["Market Size and Segmentation", "Market Growth Drivers Assessment", "Customer Purchasing Decision Dynamics", "Competitive Landscape and Positioning", "Growth Opportunity Assessment", "Competitor and furniture manufacturer interviews"],
    images: [
      "/case-studies/project-22/image-1.png",
      "/case-studies/project-22/image-2.png",
      "/case-studies/project-22/image-3.png",
    ],
  },
  {
    id: 13,
    sector: ["Healthcare"],
    serviceType: ["Buy-Side DD"],
    title: "Can a novel advanced energy surgical instrument platform gain adoption with gynecological surgeons?",
    outcomes: [
      "Market for the surgical platform is ~$50M growing at <3% CAGR due to flat growth of underlying health conditions",
      "Surgeons indicated positive experience but market size limits upside",
    ],
    description:
      "A MedTech manufacturer considered an investment into an advanced energy surgical instruments platform. 2nd St Strategy sized the addressable market based on payer data and conducted surgeon interviews to assess adoption potential.",
    highlights: ["Market Sizing and Segmentation", "Survey Participants Characteristics", "Competitive Landscape", "Surgeon interviews across specialties"],
    images: [
      "/case-studies/project-13/image-1.png",
      "/case-studies/project-13/image-2.png",
      "/case-studies/project-13/image-3.png",
    ],
  },
  {
    id: 15,
    sector: ["Healthcare", "Industrials"],
    serviceType: ["Buy-Side DD"],
    title: "How can a manufacturer of heat-sealing equipment for medical devices achieve required levels of growth in a mature market?",
    outcomes: [
      "Medical heat-sealing equipment TAM is $80M in the U.S., with tray sealers representing 70%",
      "Low customer churn driven by validation and regulatory switching costs",
    ],
    description:
      "A Private Equity firm evaluated a carve-out of a division manufacturing heat-sealing equipment serving medical device packaging and other industrial end markets. 2nd St Strategy assessed TAM, competitive structure, and purchasing decision drivers.",
    highlights: ["Equipment Overview", "TAM and Market Shares", "Purchasing Selection Criteria", "~30 medical device manufacturer interviews"],
    images: [
      "/case-studies/project-15/image-2.png",
      "/case-studies/project-15/image-3.png",
      "/case-studies/project-15/image-4.png",
    ],
  },
  {
    id: 16,
    sector: ["Healthcare", "Consumer"],
    serviceType: ["Buy-Side DD", "Roll-Up Strategy"],
    title: "How can a specialized veterinary surgery platform address systemic industry burnout to capture market share in a high-demand, supply-constrained sector?",
    outcomes: [
      "Industry procedure wait times exceed 3 weeks; Target maintains a 1-week wait time — a significant GP referral driver",
      "Surgeons in corporate practices rate work-life sustainability lower; Target's model is a competitive differentiator",
    ],
    description:
      "A Private Equity firm evaluated an investment into a provider of veterinary specialty surgery. The objective was to assess whether the target could offer a differentiated work-life balance proposition to attract and retain surgeons.",
    highlights: ["Likelihood to Remain at Employer", "Wait Times Assessment", "Supply-Demand Imbalance Analysis", "40 veterinary surgeon interviews", "~150-hospital telephone survey"],
    images: [
      "/case-studies/project-16/image-2.png",
      "/case-studies/project-16/image-3.png",
      "/case-studies/project-16/image-4.png",
    ],
  },
  {
    id: 17,
    sector: ["Consumer"],
    serviceType: ["Strategy"],
    title: "How can a manufacturer of bowhunting accessories revitalize its brand positioning and capture growth in a fragmented outdoor sporting goods market?",
    outcomes: [
      "Identified six distinct consumer personas from 'True Novice' to 'Professional' to tailor brand and product positioning",
      "Sized market across product types and channels; identified category expansion potential",
    ],
    description:
      "A leading manufacturer of bowhunting accessories saw sales peak during Covid-19 and decline thereafter. 2nd St Strategy executed a comprehensive market segmentation and brand positioning study to identify growth levers.",
    highlights: ["Share by Product Type and Persona", "Channel Evaluation of Company Brands", "Category Expansion Potential", "250-respondent survey of bowhunters"],
    images: [
      "/case-studies/project-17/image-1.png",
      "/case-studies/project-17/image-2.png",
      "/case-studies/project-17/image-3.png",
    ],
  },
];

// ─── LIGHTBOX ───────────────────────────────────────────────────────────────

type LightboxState = { images: string[]; index: number } | null;

function Lightbox({ state, onClose, onNav }: {
  state: LightboxState;
  onClose: () => void;
  onNav: (delta: number) => void;
}) {
  useEffect(() => {
    if (!state) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [state, onClose, onNav]);

  if (!state) return null;

  const { images, index } = state;
  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
      onClick={onClose}
    >
      {/* Image container — click doesn't propagate to overlay */}
      <div
        className="relative max-w-5xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-video">
          <Image
            src={images[index]}
            alt={`Slide ${index + 1} of ${images.length}`}
            fill
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

        {/* Slide counter */}
        {images.length > 1 && (
          <p className="text-center text-white/60 text-xs mt-2">
            {index + 1} / {images.length}
          </p>
        )}
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev arrow */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onNav(-1); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Previous"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next arrow */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNav(1); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Next"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

// ─── COLOR MAPS ──────────────────────────────────────────────────────────────

const sectorColors: Record<string, string> = {
  "Built Environment":  "bg-navy-900 text-white",
  "Business Services":  "bg-slate-700 text-white",
  "Industrials":        "bg-slate-500 text-white",
  "Technology":         "bg-accent-blue text-white",
  "Healthcare":         "bg-emerald-700 text-white",
  "Consumer":           "bg-accent-gold text-navy-900",
};

const serviceTypeColors: Record<string, string> = {
  "Buy-Side DD":    "border-accent-blue text-accent-blue",
  "Sell-Side DD":   "border-accent-gold text-accent-gold",
  "Strategy":       "border-emerald-500 text-emerald-600",
  "Roll-Up Strategy": "border-purple-500 text-purple-600",
  "AI Analytics":             "border-rose-500 text-rose-500",
};

export default function WorkPage() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [activeSectorFilter, setActiveSectorFilter] = useState<string>("All");
  const [activeServiceFilter, setActiveServiceFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const [carouselIndex, setCarouselIndex] = useState<Record<number, number>>({});

  const sectors = ["All", "Technology", "Built Environment", "Business Services", "Industrials", "Healthcare", "Consumer"];
  const serviceLines = ["All", "AI Analytics", "Buy-Side DD", "Sell-Side DD", "Strategy", "Roll-Up Strategy"];

  const filtered = projects.filter((p) => {
    const sectorMatch = activeSectorFilter === "All" || p.sector.includes(activeSectorFilter);
    const serviceMatch = activeServiceFilter === "All" || p.serviceType.includes(activeServiceFilter);
    return sectorMatch && serviceMatch;
  });

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const navLightbox = useCallback((delta: number) => {
    setLightbox((prev) => {
      if (!prev) return null;
      const next = prev.index + delta;
      if (next < 0 || next >= prev.images.length) return prev;
      return { ...prev, index: next };
    });
  }, []);

  return (
    <>
      <Lightbox state={lightbox} onClose={closeLightbox} onNav={navLightbox} />

      {/* ─── HEADER ─── */}
      <section className="pt-20 md:pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="container-tight relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent-blue" />
            <span className="label-tag">Case Studies</span>
          </div>
          <h1 className="heading-xl text-navy-900 mb-5">
            200+ engagements.{" "}
            <span className="text-gradient-blue">Focused expertise.</span>
          </h1>
          <p className="body-lg max-w-2xl text-slate-600">
            AI analytics and primary research insights for commercial due diligence and growth strategy to private investors and middle market companies.
          </p>
        </div>
      </section>

      {/* ─── FILTER + GALLERY ─── */}
      <section className="section-pad bg-white">
        <div className="container-tight">

          {/* Sector filter row */}
          <div className="flex flex-wrap gap-2 mb-3">
            {sectors.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSectorFilter(s)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-150 ${
                  activeSectorFilter === s
                    ? "bg-navy-900 border-navy-900 text-white"
                    : "border-slate-300 text-slate-600 hover:border-navy-800 hover:text-navy-900"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Service line filter row */}
          <div className="flex flex-wrap gap-2 mb-10">
            {serviceLines.map((sl) => (
              <button
                key={sl}
                onClick={() => setActiveServiceFilter(sl)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-150 ${
                  activeServiceFilter === sl
                    ? "bg-accent-blue border-accent-blue text-white"
                    : "border-slate-300 text-slate-600 hover:border-accent-blue hover:text-accent-blue"
                }`}
              >
                {sl}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => {
              const isExpanded = expanded === project.id;
              const currentIdx = carouselIndex[project.id] ?? 0;

              return (
                <div
                  key={project.id}
                  className={`bg-white border rounded-xl overflow-hidden shadow-sm transition-all duration-200 ${
                    isExpanded ? "border-accent-blue shadow-md" : "border-slate-200 hover:shadow-md hover:border-slate-300"
                  }`}
                >
                  {/* Card body */}
                  <div className="p-5 pb-3 min-h-[96px] flex items-start">
                    {/* Title first */}
                    <h3 className="text-navy-900 font-bold text-base leading-snug line-clamp-3">{project.title}</h3>
                  </div>

                  {/* Carousel — only render if images exist */}
                  {project.images.length > 0 && (
                    <div className="relative w-full aspect-video bg-slate-900 overflow-hidden border-b border-slate-200">
                      {/* Current image */}
                      <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => setLightbox({ images: project.images, index: currentIdx })}
                      >
                        <Image
                          src={project.images[currentIdx]}
                          alt={`${project.title} — slide ${currentIdx + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>

                      {/* Left arrow */}
                      {project.images.length > 1 && currentIdx > 0 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCarouselIndex((prev) => ({ ...prev, [project.id]: currentIdx - 1 }));
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                          aria-label="Previous slide"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                      )}

                      {/* Right arrow */}
                      {project.images.length > 1 && currentIdx < project.images.length - 1 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCarouselIndex((prev) => ({ ...prev, [project.id]: currentIdx + 1 }));
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                          aria-label="Next slide"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      )}

                      {/* Dot indicators */}
                      {project.images.length > 1 && (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                          {project.images.map((_, i) => (
                            <button
                              key={i}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCarouselIndex((prev) => ({ ...prev, [project.id]: i }));
                              }}
                              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                i === currentIdx
                                  ? "bg-white"
                                  : "bg-transparent border border-white"
                              }`}
                              aria-label={`Go to slide ${i + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Card body — badges + toggle */}
                  <div className="p-5 pt-4">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.sector.map((s) => (
                        <span
                          key={s}
                          className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${sectorColors[s] ?? "bg-slate-700 text-white"}`}
                        >
                          {s}
                        </span>
                      ))}
                      {project.serviceType.map((st) => (
                        <span
                          key={st}
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${serviceTypeColors[st] ?? "border-slate-300 text-slate-500"}`}
                        >
                          {st}
                        </span>
                      ))}
                    </div>

                    {/* Toggle button */}
                    <button
                      onClick={() => setExpanded(isExpanded ? null : project.id)}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                        isExpanded ? "text-accent-blue" : "text-slate-400 hover:text-navy-900"
                      }`}
                    >
                      {isExpanded ? "Collapse" : "View details"}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Expanded content */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-100 space-y-4">
                        {/* Description */}
                        <p className="text-sm text-slate-600 leading-relaxed">{project.description}</p>

                        {/* Scope */}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Scope included</p>
                          <div className="flex flex-wrap gap-2">
                            {project.highlights.map((h) => (
                              <span key={h} className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-navy-700 rounded-lg border border-slate-200">
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Outcome bullets */}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Results</p>
                          <ul className="space-y-1.5">
                            {project.outcomes.map((o) => (
                              <li key={o} className="flex items-start gap-2 text-xs text-slate-600">
                                <svg className="w-3.5 h-3.5 text-accent-blue mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                {o}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA */}
                        <a
                          href="mailto:james@2ndststrategy.com?subject=CDD%20Inquiry"
                          className="inline-flex items-center gap-2 text-xs font-semibold text-accent-blue hover:text-accent-blue-dark transition-colors"
                        >
                          Discuss a similar engagement →
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Note */}
          <p className="text-slate-400 text-xs mt-10 text-center">
            All work is confidential. Sector, engagement type, and outcomes shown — company names withheld.
          </p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-navy-950">
        <div className="container-tight text-center">
          <h2 className="heading-lg text-white mb-4">
            Recognize a situation here?
          </h2>
          <p className="body-lg text-slate-300 mb-8 max-w-xl mx-auto">
            Active deal, portfolio question, or strategic inflection — let&apos;s talk.
          </p>
          <Link href="/contact" className="btn-primary">
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
