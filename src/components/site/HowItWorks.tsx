"use client";

import { motion } from "framer-motion";
import { ClipboardList, Target, Handshake } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, itemVariants } from "./Reveal";

const STEPS = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Join the VIP List",
    desc: "Fill out the 30-second form with your buyer type and target areas.",
  },
  {
    n: "02",
    icon: Target,
    title: "Get Matched Deals",
    desc: "We send off-market properties that fit your criteria and budget.",
  },
  {
    n: "03",
    icon: Handshake,
    title: "Close Below Market",
    desc: "We help you negotiate and secure the property at the best price.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#f5f8fb] section-pad scroll-anchor">
      <div className="container-max">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title={
            <>
              Three Steps to Your <span className="text-[#0ea5a4]">Next Deal</span>
            </>
          }
          subtext="No cold-calling, no driving for dollars. We do the sourcing — you do the closing."
        />

        <div className="relative mt-14">
          {/* Dashed connector line behind cards (desktop only) */}
          <div
            className="hidden lg:block absolute top-[64px] left-[16.66%] right-[16.66%] border-t-2 border-dashed border-[#0ea5a4]/40"
            aria-hidden
          />

          <RevealGroup
            className="grid gap-6 lg:grid-cols-3"
            stagger={0.12}
          >
            {STEPS.map((s) => (
              <motion.article
                key={s.n}
                variants={itemVariants}
                className="relative rounded-[16px] bg-white border border-[#e2e8f0] p-7 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <span
                  className="block text-[44px] font-extrabold leading-none tracking-tight"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px #0ea5a4",
                  }}
                  aria-hidden
                >
                  {s.n}
                </span>
                <span className="mt-5 grid place-items-center h-12 w-12 mx-auto rounded-[12px] bg-[#ccfbf1]">
                  <s.icon className="h-6 w-6 text-[#0ea5a4]" strokeWidth={1.5} />
                </span>
                <h3 className="mt-4 text-[20px] font-bold text-[#0b1f3a]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-[#64748b]">
                  {s.desc}
                </p>
              </motion.article>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
