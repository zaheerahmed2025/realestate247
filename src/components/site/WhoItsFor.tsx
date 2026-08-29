"use client";

import { motion } from "framer-motion";
import { Banknote, RefreshCw, Home, HardHat } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, itemVariants } from "./Reveal";

const CARDS = [
  {
    icon: Banknote,
    title: "Cash Buyers",
    desc: "Move fast on discounted inventory with clean, cash-ready deals that close quickly.",
  },
  {
    icon: RefreshCw,
    title: "Wholesalers",
    desc: "Expand your pipeline with off-market leads you can assign before the competition sees them.",
  },
  {
    icon: Home,
    title: "Realtors",
    desc: "Surface pocket listings and distressed inventory your clients won't find on the MLS.",
  },
  {
    icon: HardHat,
    title: "Developers",
    desc: "Source teardowns and value-add projects with the margins your pro forma needs.",
  },
];

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="bg-white section-pad scroll-anchor">
      <div className="container-max">
        <SectionHeading
          eyebrow="WHO IT'S FOR"
          title={
            <>
              Built for <span className="text-[#0ea5a4]">Serious Investors</span>
            </>
          }
          subtext="Whether you buy, flip, assign, or build — we feed you the off-market inventory that fits your strategy."
        />

        <RevealGroup
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {CARDS.map((c) => (
            <motion.article
              key={c.title}
              variants={itemVariants}
              className="group rounded-[16px] border border-[#e2e8f0] bg-white p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <span className="grid place-items-center h-12 w-12 rounded-[12px] bg-[#ccfbf1]">
                <c.icon className="h-6 w-6 text-[#0ea5a4]" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-[18px] font-bold text-[#0b1f3a]">{c.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-[#64748b]">{c.desc}</p>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
