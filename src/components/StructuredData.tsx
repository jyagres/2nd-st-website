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
      "https://pinpointiq.app",
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
    "@id": "https://pinpointiq.app/#software",
    name: "PinpointIQ",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://pinpointiq.app",
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

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is 2nd St Strategy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2nd St Strategy is a boutique commercial due diligence and growth strategy firm focused exclusively on middle-market private equity. Engagements are principal-led, grounded in primary research, and accelerated by proprietary AI analytics.",
        },
      },
      {
        "@type": "Question",
        name: "What services does 2nd St Strategy offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Commercial due diligence (buy-side and sell-side), growth strategy for portfolio companies, voice-of-market research with B2B and B2C customers and experts, and AI analytics tools custom-built for PE diligence and portfolio strategy.",
        },
      },
      {
        "@type": "Question",
        name: "Who does 2nd St Strategy work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Middle-market private equity sponsors, independent sponsors, family offices, and PE-backed portfolio company management teams. Sectors include industrial and B2B services, business services, consumer services, healthcare services, software, and building products.",
        },
      },
      {
        "@type": "Question",
        name: "How is 2nd St Strategy different from other CDD firms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every engagement is run by James Agres directly with no hand-offs to analysts the client has never met. The firm pairs traditional primary-research-first commercial due diligence with proprietary AI tools, including PinpointIQ for geographic market intelligence on location-based roll-ups.",
        },
      },
      {
        "@type": "Question",
        name: "What is PinpointIQ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PinpointIQ is a geographic market intelligence platform built by 2nd St Strategy for PE firms backing location-based roll-ups. It covers 30+ verticals and 900+ U.S. markets and provides MSA-level TAM, competitive density, demographic drivers, and individual business data down to the census-tract level.",
        },
      },
    ],
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
