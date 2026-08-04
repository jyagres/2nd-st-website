import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected commercial due diligence and growth strategy case studies from 2nd St Strategy. Buy-side and sell-side engagements across industrial, healthcare, business services, consumer, software, and building products.",
  alternates: { canonical: "https://2ndststrategy.com/work" },
  openGraph: {
    title: "Work | 2nd St Strategy",
    description:
      "Selected commercial due diligence and growth strategy case studies. Buy-side and sell-side engagements across industrial, healthcare, business services, consumer, software, and building products.",
    url: "https://2ndststrategy.com/work",
    type: "website",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
