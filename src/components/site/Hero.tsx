"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, Phone, MapPin, TrendingDown, ArrowRight, Star } from "lucide-react";

import { getAssetUrl } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#0b1f3a] text-white pt-[72px]"
    >
      {/* Photo overlay */}
      <div
        className="absolute inset-0 opacity-[0.15] bg-cover bg-center"
        style={{ backgroundImage: `url('${getAssetUrl("/images/hero-property.png")}')` }}
        aria-hidden
      />
      {/* Navy gradient to keep contrast */}
      <div className="absolute inset-0 bg-hero-overlay" aria-hidden />
      {/* Faint radial teal glow top-right */}
      <div
        className="absolute -top-32 -right-24 h-[480px] w-[480px] teal-glow animate-pulse-glow"
        aria-hidden
      />
      {/* Bottom 1px teal hairline */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-[#0ea5a4]/60" aria-hidden />

      <div className="container-max relative">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-10 items-center py-16 md:py-24">
          {/* Left: copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
            }}
            className="max-w-xl"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
              }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#ccfbf1] px-3.5 py-1.5 text-[13px] font-bold text-[#0b1f3a]">
                <Flame className="h-3.5 w-3.5 text-[#0ea5a4]" strokeWidth={2} />
                Off-Market Deals · Up to 70% Below Market
              </span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
              }}
              className="heading-xl mt-5 text-white"
            >
              Off-Market Properties.{" "}
              <span className="text-[#0ea5a4]">Below-Market Prices.</span> Delivered
              to You.
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
              }}
              className="mt-5 text-[17px] leading-[1.7] text-[#cbd5e1] max-w-lg"
            >
              We find deeply discounted distressed properties in your area — so you
              save countless hours and thousands in marketing costs.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
              }}
              className="mt-7 flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="#join"
                className="inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-[10px] bg-[#0ea5a4] text-white font-bold text-[15px] hover:bg-[#0d9488] hover:-translate-y-0.5 transition-all shadow-card focus-ring"
              >
                Join the VIP Buyer&rsquo;s List
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
              <a
                href="tel:+15713270741"
                className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-[10px] border-[1.5px] border-white/30 text-white font-semibold text-[15px] hover:border-white transition-colors focus-ring"
              >
                <Phone className="h-4 w-4 text-[#0ea5a4]" strokeWidth={1.5} />
                (571) 327-0741
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
              }}
              className="mt-7 flex items-center gap-3"
            >
              <div className="flex -space-x-2.5">
                {["avatar-1", "avatar-2", "avatar-3"].map((a) => (
                  <span
                    key={a}
                    className="h-9 w-9 rounded-full ring-2 ring-[#0b1f3a] overflow-hidden bg-white/10"
                  >
                    <img
                      src={getAssetUrl(`/images/${a}.png`)}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-[13px] text-[#cbd5e1]">
                <span className="flex text-[#f5b942]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                  ))}
                </span>
                <span className="ml-1">
                  Trusted by investors across DC, MD, VA &amp; beyond
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Deal Alert card stack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="relative mx-auto w-full max-w-[420px] lg:max-w-none"
          >
            {/* Back card (rotated, floats) */}
            <div className="absolute -top-5 -right-3 w-[88%] h-[88%] rounded-[16px] bg-white/95 shadow-card-hover rotate-[4deg] animate-float-slow hidden sm:block">
              <div className="h-3 rounded-t-[16px] bg-[#0ea5a4]" />
              <div className="p-5">
                <div className="h-28 rounded-[10px] bg-[#f5f8fb] mb-3" />
                <div className="h-3 w-2/3 rounded-full bg-[#e2e8f0] mb-2" />
                <div className="h-3 w-1/2 rounded-full bg-[#e2e8f0]" />
              </div>
            </div>

            {/* Front card */}
            <div className="relative rounded-[16px] bg-white text-[#0b1f3a] shadow-card-hover overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 bg-[#0ea5a4]">
                <span className="inline-flex items-center gap-2 text-white text-[13px] font-bold">
                  <Flame className="h-4 w-4" strokeWidth={2} />
                  New Off-Market Deal
                </span>
                <span className="text-white/80 text-[11px] font-semibold uppercase tracking-wider">
                  Just Listed
                </span>
              </div>

              <div className="relative h-44 bg-[#f5f8fb] overflow-hidden">
                <img
                  src={getAssetUrl("/images/deal-home.png")}
                  alt="Sample off-market deal property"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-[#0b1f3a] shadow-card">
                  <MapPin className="h-3 w-3 text-[#0ea5a4]" strokeWidth={2} />
                  Baltimore, MD
                </span>
              </div>

              <div className="p-5">
                <p className="text-[15px] font-bold text-[#0b1f3a]">
                  123 Maple St, Baltimore, MD
                </p>
                <p className="text-[13px] text-[#64748b] mt-0.5">
                  3 bed · 2 bath · 1,480 sqft · Single family
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-[10px] border border-[#e2e8f0] p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#64748b]">
                      ARV
                    </p>
                    <p className="text-[20px] font-extrabold text-[#0b1f3a]">$310K</p>
                  </div>
                  <div className="rounded-[10px] bg-[#f5b942]/15 p-3 flex flex-col justify-center">
                    <p className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#b07d12]">
                      <TrendingDown className="h-3 w-3" strokeWidth={2} />
                      Below Market
                    </p>
                    <p className="text-[20px] font-extrabold text-[#b07d12]">70%</p>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 h-11 rounded-[10px] bg-[#0ea5a4] text-white font-bold text-[14px] hover:bg-[#0d9488] transition-colors focus-ring"
                >
                  View Deal
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </button>
                <p className="mt-2 text-center text-[11px] text-[#64748b]">
                  Sample deal shown — join the list to see live inventory.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
