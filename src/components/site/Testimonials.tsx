"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, itemVariants } from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Real Estate 24/7 sent me a Baltimore property 60% under ARV before it ever hit the MLS. We closed in 9 days and I netted $42K on the flip.",
    name: "Marcus T.",
    role: "Flipper — Baltimore, MD",
    avatar: "avatar-1",
  },
  {
    quote:
      "As a wholesaler, my pipeline lives and dies on inventory. These off-market deals keep my assignment fees consistent month after month.",
    name: "Dana R.",
    role: "Wholesaler — Northern Virginia",
    avatar: "avatar-2",
  },
  {
    quote:
      "I stopped driving for dollars. The deals land in my inbox matched to my criteria — I just review, tour, and close. Game changer for my schedule.",
    name: "Andre W.",
    role: "Developer — Atlanta, GA",
    avatar: "avatar-3",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white section-pad hairline-top">
      <div className="container-max">
        <SectionHeading
          eyebrow="SOCIAL PROOF"
          title={
            <>
              What Investors <span className="text-[#0ea5a4]">Say</span>
            </>
          }
          subtext="Real results from buyers working our off-market pipeline."
        />

        <RevealGroup
          className="mt-12 grid gap-5 md:grid-cols-3"
          stagger={0.1}
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={itemVariants}
              className="relative rounded-[16px] border border-[#e2e8f0] bg-white p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <Quote
                className="absolute top-5 right-5 h-8 w-8 text-[#ccfbf1]"
                strokeWidth={1}
                aria-hidden
              />
              <div className="flex gap-0.5 text-[#f5b942]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-[1.65] text-[#1e293b]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="h-10 w-10 rounded-full overflow-hidden bg-[#f5f8fb] shrink-0">
                  <img
                    src={`/images/${t.avatar}.png`}
                    alt={`Portrait of ${t.name}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </span>
                <span>
                  <span className="block text-[14px] font-bold text-[#0b1f3a]">
                    {t.name}
                  </span>
                  <span className="block text-[13px] text-[#64748b]">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </RevealGroup>
        <p className="mt-6 text-center text-[12px] text-[#94a3b8]">
          Testimonials shown are representative examples for client review.
        </p>
      </div>
    </section>
  );
}
