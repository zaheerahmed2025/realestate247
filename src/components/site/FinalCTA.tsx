import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="relative bg-[#0b1f3a] text-white section-pad overflow-hidden">
      {/* Faint teal glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[360px] w-[560px] teal-glow opacity-80"
        aria-hidden
      />
      <div className="container-max relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">YOUR NEXT DEAL</span>
          <h2 className="heading-lg mt-4 text-white">
            Ready to See{" "}
            <span className="text-[#0ea5a4]">This Week&rsquo;s Deals?</span>
          </h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-[#cbd5e1]">
            Join the VIP Buyer&rsquo;s List and get off-market, below-market
            properties delivered before anyone else sees them.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="#join"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-[10px] bg-[#0ea5a4] text-white font-bold text-[15px] hover:bg-[#0d9488] hover:-translate-y-0.5 transition-all shadow-card focus-ring"
            >
              Join the VIP Buyer&rsquo;s List
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <a
              href="mailto:iamrealestate247@gmail.com"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-[10px] border-[1.5px] border-white/30 text-white font-semibold text-[15px] hover:border-white transition-colors focus-ring"
            >
              <Mail className="h-4 w-4 text-[#0ea5a4]" strokeWidth={1.5} />
              iamrealestate247@gmail.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
