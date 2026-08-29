import Link from "next/link";
import { Building2, Phone, Mail, MapPin } from "lucide-react";

const QUICK_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Who It's For", href: "#who-its-for" },
  { label: "Areas We Serve", href: "#areas" },
  { label: "FAQ", href: "#faq" },
  { label: "Join VIP List", href: "#join" },
];

const AREAS = ["DC", "Maryland", "Northern Virginia", "Baltimore", "Tampa Bay", "Atlanta", "Memphis, TN"];

export function Footer() {
  return (
    <footer className="relative bg-[#071527] text-white border-t-[2px] border-[#0ea5a4]">
      <div className="container-max py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Mission + logo */}
          <div>
            <Link
              href="#top"
              className="flex items-center gap-2.5 focus-ring rounded-[10px] px-1"
            >
              <span className="grid place-items-center h-9 w-9 rounded-[10px] bg-white/10">
                <Building2 className="h-5 w-5 text-[#0ea5a4]" strokeWidth={1.5} />
              </span>
              <span className="text-[19px] font-extrabold tracking-tight text-white">
                Real Estate <span className="text-[#0ea5a4]">24/7</span>
              </span>
            </Link>
            <p className="mt-4 text-[14px] leading-[1.7] text-[#cbd5e1] max-w-xs">
              We connect investors with off-market, distressed properties up to 70%
              below market value — so you save hours and thousands in marketing costs.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#0ea5a4]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[15px] text-[#cbd5e1] hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#0ea5a4]">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+15713270741"
                  className="inline-flex items-center gap-2.5 text-[15px] text-[#cbd5e1] hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#0ea5a4]" strokeWidth={1.5} />
                  (571) 327-0741
                </a>
              </li>
              <li>
                <a
                  href="mailto:iamrealestate247@gmail.com"
                  className="inline-flex items-center gap-2.5 text-[15px] text-[#cbd5e1] hover:text-white transition-colors break-all"
                >
                  <Mail className="h-4 w-4 text-[#0ea5a4] shrink-0" strokeWidth={1.5} />
                  iamrealestate247@gmail.com
                </a>
              </li>
              <li className="pt-1">
                <span className="inline-flex items-start gap-2.5 text-[14px] text-[#94a3b8]">
                  <MapPin className="h-4 w-4 text-[#0ea5a4] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span>Serving DC, MD, VA, Baltimore, Tampa Bay, Atlanta &amp; Memphis</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Areas served chips row */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#94a3b8] mb-3">
            Areas Served
          </p>
          <div className="flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <span
                key={a}
                className="rounded-full border border-white/15 px-3 py-1 text-[12px] font-medium text-[#cbd5e1]"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[#94a3b8] text-center sm:text-left">
            © 2025 Real Estate 24/7 · Real Estate Investing Made Easy
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0ea5a4]/50 px-3 py-1 text-[12px] font-semibold text-[#0ea5a4]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0ea5a4] animate-pulse-glow" />
            Property Portal — Coming Soon
          </span>
        </div>
      </div>
    </footer>
  );
}
