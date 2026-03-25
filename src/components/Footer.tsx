import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-950">
      <div className="container-tight py-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

          {/* Brand */}
          <div className="space-y-2">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo-white.png"
                alt="2nd St Strategy"
                width={480}
                height={144}
                className="w-48 h-auto object-contain"
              />
            </Link>
            <p className="text-slate-500 text-sm max-w-xs">
              AI analytics, commercial due diligence, and growth strategy for middle-market private equity.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <div className="w-8 h-px bg-accent-blue" />
              <p className="text-white text-xs font-semibold tracking-widest uppercase">
                STRATEGY. PRIVATE EQUITY. AI ANALYTICS.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="space-y-2">
              <p className="label-tag">Navigation</p>
              <nav className="flex flex-col gap-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/ai-driven", label: "AI-Driven" },
                  { href: "/services", label: "Services" },
                  { href: "/work", label: "Work" },
                  { href: "/team", label: "Team" },
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-2">
              <p className="label-tag">Contact</p>
              <div className="space-y-2">
                <a
                  href="mailto:james@2ndststrategy.com"
                  className="block text-slate-400 hover:text-white text-sm transition-colors"
                >
                  james@2ndststrategy.com
                </a>
                <p className="text-slate-500 text-sm">
                  Chicago, IL
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-6 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} 2nd St Strategy LLC. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Chicago, IL · 2ndststrategy.com
          </p>
        </div>
      </div>
    </footer>
  );
}
