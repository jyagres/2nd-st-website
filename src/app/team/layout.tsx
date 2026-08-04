import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The team behind 2nd St Strategy. Principal-led commercial due diligence and growth strategy for middle-market private equity.",
  alternates: { canonical: "https://2ndststrategy.com/team" },
  openGraph: {
    title: "Team | 2nd St Strategy",
    description:
      "The team behind 2nd St Strategy. Principal-led commercial due diligence and growth strategy for middle-market private equity.",
    url: "https://2ndststrategy.com/team",
    type: "website",
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
