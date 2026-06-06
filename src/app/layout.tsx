import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://2ndststrategy.com"),
  title: {
    default: "Commercial Due Diligence & Growth Strategy with AI Analytics | 2nd St Strategy",
    template: "%s | 2nd St Strategy",
  },
  description:
    "Boutique commercial due diligence and growth strategy for middle-market private equity. Principal-led by James Agres. 200+ buy-side and sell-side engagements. AI-integrated.",
  keywords: [
    "commercial due diligence",
    "private equity",
    "CDD",
    "growth strategy",
    "voice of market",
    "middle market",
    "buy-side diligence",
    "sell-side diligence",
    "AI analytics for private equity",
    "James Agres",
    "PinpointIQ",
    "roll-up strategy",
    "platform and add-on diligence",
  ],
  authors: [{ name: "James Agres", url: "https://2ndststrategy.com/team" }],
  creator: "2nd St Strategy",
  publisher: "2nd St Strategy LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://2ndststrategy.com",
  },
  openGraph: {
    title: "2nd St Strategy. Commercial Due Diligence & Growth Strategy for Middle-Market PE.",
    description:
      "Boutique commercial due diligence and growth strategy for middle-market private equity. Principal-led by James Agres. 200+ buy-side and sell-side engagements.",
    url: "https://2ndststrategy.com",
    siteName: "2nd St Strategy",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "2nd St Strategy. Commercial Due Diligence & Growth Strategy.",
    description:
      "Boutique CDD and growth strategy for middle-market private equity. Principal-led, AI-integrated.",
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
        <StructuredData />
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
