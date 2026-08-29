import { Check, TrendingDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { getAssetUrl } from "@/lib/utils";

const BENEFITS = [
  "No marketing costs — we source the deals for you",
  "No endless cold-calling or driving for dollars",
  "Access to inventory you won't find on MLS or Zillow",
];

export function ValueProposition() {
  return (
    <section className="bg-white section-pad hairline-top">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: benefits */}
          <Reveal>
            <span className="eyebrow">WHY US</span>
            <h2 className="heading-lg mt-4 text-[#0b1f3a]">
              Save Time. Save Money.{" "}
              <span className="text-[#0ea5a4]">Close Faster.</span>
            </h2>
            <p className="mt-4 text-[17px] leading-[1.7] text-[#64748b] max-w-md">
              We handle the hardest part of investing — finding the deal — so your
              time goes into closing, not chasing.
            </p>

            <ul className="mt-7 space-y-4">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid place-items-center h-7 w-7 shrink-0 rounded-full bg-[#ccfbf1]">
                    <Check className="h-4 w-4 text-[#0ea5a4]" strokeWidth={2.5} />
                  </span>
                  <span className="text-[16px] leading-[1.6] text-[#1e293b] font-medium">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#join"
                className="inline-flex items-center justify-center h-12 px-6 rounded-[10px] bg-[#0ea5a4] text-white font-bold text-[15px] hover:bg-[#0d9488] hover:-translate-y-0.5 transition-all shadow-card focus-ring"
              >
                Join the VIP Buyer&rsquo;s List
              </a>
              <a
                href="tel:+15713270741"
                className="inline-flex items-center justify-center h-12 px-5 rounded-[10px] border-[1.5px] border-[#e2e8f0] text-[#0b1f3a] font-semibold text-[15px] hover:border-[#0b1f3a] transition-colors focus-ring"
              >
                Talk to us: (571) 327-0741
              </a>
            </div>
          </Reveal>

          {/* Right: image with floating stat card */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="relative rounded-[16px] overflow-hidden shadow-card aspect-[4/3] bg-[#f5f8fb]">
                <img
                  src={getAssetUrl("/images/value-prop.png")}
                  alt="Real estate investors closing a below-market deal"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating gold stat card overlapping bottom-left corner */}
              <div className="absolute -bottom-5 -left-3 sm:-left-5 rounded-[16px] bg-[#f5b942] text-[#3a2a05] shadow-card-hover p-4 w-[180px]">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wider">
                  <TrendingDown className="h-3.5 w-3.5" strokeWidth={2.5} />
                  Below Market
                </span>
                <p className="mt-1 text-[32px] font-extrabold leading-none">70%</p>
                <p className="mt-1 text-[12px] font-medium text-[#5a4308]">
                  Average discount on sourced deals
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
