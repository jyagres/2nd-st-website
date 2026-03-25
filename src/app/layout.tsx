import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Commercial Due Diligence & Growth Strategy with AI Analytics | 2nd St Strategy",
    template: "%s | 2nd St Strategy",
  },
  description:
    "Commercial Due Diligence & Growth Strategy with AI Analytics for middle-market private equity.",
  keywords: [
    "commercial due diligence",
    "private equity",
    "CDD",
    "growth strategy",
    "voice of market",
    "middle market",
    "buy-side diligence",
    "sell-side diligence",
  ],
  openGraph: {
    title: "2nd St Strategy — Commercial Due Diligence & Growth Strategy",
    description:
      "Boutique commercial due diligence and growth strategy for middle-market private equity. 150+ engagements. $6B+ EV evaluated.",
    url: "https://2ndststrategy.com",
    siteName: "2nd St Strategy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
