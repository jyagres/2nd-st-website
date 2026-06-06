import { MetadataRoute } from "next";

// Explicitly allow AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) plus
// traditional search bots. We want AI engines to ingest the site so it shows up
// in answers to commercial-due-diligence / middle-market PE questions.
export default function robots(): MetadataRoute.Robots {
  const aiAndSearchBots = [
    "*",
    // OpenAI
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    // Anthropic
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    // Google AI
    "Google-Extended",
    "Googlebot",
    "GoogleOther",
    // Perplexity
    "PerplexityBot",
    "Perplexity-User",
    // Microsoft / Bing
    "bingbot",
    "msnbot",
    // Meta
    "FacebookBot",
    "meta-externalagent",
    // Apple
    "Applebot",
    "Applebot-Extended",
    // Common Crawl (feeds many LLM training sets)
    "CCBot",
    // Misc
    "DuckDuckBot",
    "YandexBot",
    "Bytespider",
  ];

  return {
    rules: aiAndSearchBots.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
    sitemap: "https://2ndststrategy.com/sitemap.xml",
    host: "https://2ndststrategy.com",
  };
}
