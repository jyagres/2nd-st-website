import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://2ndststrategy.com";
  const now = new Date();

  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly" | "yearly";
  }> = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ai-driven", priority: 0.9, changeFrequency: "monthly" },
    { path: "/work", priority: 0.9, changeFrequency: "monthly" },
    { path: "/team", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
