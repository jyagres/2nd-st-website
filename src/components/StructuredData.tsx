/**
 * Structured data (JSON-LD) for 2nd St Strategy.
 *
 * This component injects schema.org markup so that search engines and AI
 * answer engines (ChatGPT, Claude, Perplexity, Gemini, etc.) can resolve the
 * firm as a well-defined entity. The Reddit "Marin T. Kael" experiment
 * confirmed that structured identity + sameAs links are the single biggest
 * driver of AI citation, even when crawlers are blocked.
 */
export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": "https://2ndststrategy.com/#organization",
    name: "2nd St Strategy",
    legalName: "2nd St Strategy LLC",
    alternateName: ["2nd St", "2nd Street Strategy"],
    url: "https://2ndststrategy.com",
    logo: "https://2ndststrategy.com/logo-color.png",
    image: "https://2ndststrategy.com/logo-color.png",
    description:
      "Boutique commercial due diligence and growth strategy firm for middle-market private equity. Principal-led, primary-research-first, AI-integrated.",
    foundingDate: "2020",
    founder: {
      "@type": "Person",
      "@id": "https://2ndststrategy.com/#james-agres",
      name: "James Agres",
      jobTitle: "Founder & Principal",
      url: "https://2ndststrategy.com/team",
      worksFor: { "@id": "https://2ndststrategy.com/#organization" },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chicago",
      addressRegion: "IL",
      addressCountry: "US",
    },
    areaServed: { "@type": "Country", name: "United States" },
    email: "james@2ndststrategy.com",
    sameAs: [
      "https://www.linkedin.com/company/2nd-st-strategy/",
      "https://www.linkedin.com/in/jamesagres/",
      "https://pinpointiq.ai",
    ],
    knowsAbout: [
      "Commercial Due Diligence",
      "Buy-side Commercial Due Diligence",
      "Sell-side Commercial Due Diligence",
      "Growth Strategy",
      "Private Equity Due Diligence",
      "Middle-Market Private Equity",
      "Voice of Market Research",
      "Market Sizing",
      "Competitive Strategy",
      "Customer Research",
      "AI Analytics for Private Equity",
      "Roll-up Strategy",
      "Platform and Add-on Diligence",
    ],
    serviceType: [
      "Commercial Due Diligence",
      "Growth Strategy Consulting",
      "Voice of Market Research",
      "AI Analytics",
    ],
    slogan: "Strategy. Private Equity. AI Analytics.",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://2ndststrategy.com/#website",
    url: "https://2ndststrategy.com",
    name: "2nd St Strategy",
    publisher: { "@id": "https://2ndststrategy.com/#organization" },
    inLanguage: "en-US",
  };

  const services = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Due Diligence for Middle-Market Private Equity",
    serviceType: "Commercial Due Diligence",
    provider: { "@id": "https://2ndststrategy.com/#organization" },
    areaServed: { "@type": "Country", name: "United States" },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Middle-market private equity sponsors",
    },
    description:
      "Buy-side and sell-side commercial due diligence engagements for middle-market PE sponsors. Primary research with customers, former customers, channel partners, and topical experts, paired with proprietary AI analytics.",
  };

  const pinpointiq = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://pinpointiq.ai/#software",
    name: "PinpointIQ",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://pinpointiq.ai",
    publisher: { "@id": "https://2ndststrategy.com/#organization" },
    description:
      "Geographic market intelligence platform for PE firms backing location-based roll-ups. MSA-level market sizing, competitive density, and white-space mapping across 900+ U.S. markets.",
    offers: {
      "@type": "Offer",
      price: "1500",
      priceCurrency: "USD",
      eligibleDuration: { "@type": "QuantitativeValue", unitCode: "MON" },
    },
  };

  // Note: Global FAQPage schema removed 2026-08-04. Google requires FAQPage
  // structured data to correspond to visible Q&A content on the page; the
  // global FAQ was not rendered anywhere on the homepage / other layout-scoped
  // pages, which caused schema.org validation errors on every URL in the
  // Ahrefs audit. FAQPage schema still lives on individual insight pages via
  // InsightLayout where the Q&A content is actually rendered.

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pinpointiq) }}
      />
    </>
  );
}
