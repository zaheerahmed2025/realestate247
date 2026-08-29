"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ArrowRight, Check, Loader2, AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AREAS = [
  "DC",
  "Maryland",
  "Northern Virginia",
  "Baltimore",
  "Tampa Bay",
  "Atlanta",
  "Memphis, TN",
];

type Status = "idle" | "loading" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMsg, setErrorMsg] = React.useState("");
  const [selectedAreas, setSelectedAreas] = React.useState<string[]>([]);

  function toggleArea(area: string) {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim().toLowerCase();
    const phone = String(data.get("phone") ?? "").trim();
    const buyerType = String(data.get("buyerType") ?? "").trim();

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMsg("Please provide a valid name and email address.");
      return;
    }

    const lead = {
      name,
      email,
      phone,
      buyerType,
      areas: selectedAreas,
      createdAt: new Date().toISOString(),
    };

    try {
      if (typeof window !== "undefined") {
        const existing = JSON.parse(localStorage.getItem("vip_leads") || "[]");
        existing.push(lead);
        localStorage.setItem("vip_leads", JSON.stringify(existing));
      }
    } catch {
      // Ignore storage errors
    }

    setTimeout(() => {
      setStatus("success");
    }, 600);
  }

  return (
    <section id="join" className="relative bg-[#0b1f3a] section-pad overflow-hidden scroll-anchor">
      {/* Faint teal radial glow */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[620px] teal-glow opacity-80"
        aria-hidden
      />
      <div className="container-max relative">
        <div className="mx-auto max-w-[640px] rounded-[16px] bg-white shadow-card-hover p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="text-center py-8"
              >
                <span className="mx-auto grid place-items-center h-16 w-16 rounded-full bg-[#0ea5a4]">
                  <Check className="h-8 w-8 text-white" strokeWidth={3} />
                </span>
                <h3 className="mt-5 text-[26px] font-extrabold text-[#0b1f3a]">
                  You&rsquo;re on the list!
                </h3>
                <p className="mt-2 text-[16px] text-[#64748b] max-w-sm mx-auto">
                  We&rsquo;ll be in touch with the next deal. Check your inbox —
                  the first off-market opportunity could land any day.
                </p>
                <a
                  href="tel:+15713270741"
                  className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-[10px] border-[1.5px] border-[#e2e8f0] text-[#0b1f3a] font-semibold text-[14px] hover:border-[#0b1f3a] transition-colors"
                >
                  Need to talk now? (571) 327-0741
                </a>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center">
                  <span className="eyebrow">VIP BUYER&rsquo;S LIST</span>
                  <h2 className="heading-lg mt-4 text-[#0b1f3a]">
                    Join the{" "}
                    <span className="text-[#0ea5a4]">VIP Buyer&rsquo;s List</span>
                  </h2>
                  <p className="mt-3 text-[16px] text-[#64748b]">
                    Get off-market deals in your inbox before anyone else. Free.
                  </p>
                </div>

                <form onSubmit={onSubmit} className="mt-7 space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name" required htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Jordan Rivera"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Email" required htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@email.com"
                        className={inputCls}
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Phone" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(571) 327-0741"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="I am a:" htmlFor="buyerType">
                      <Select name="buyerType">
                        <SelectTrigger
                          id="buyerType"
                          className="h-12 rounded-[10px] border-[#e2e8f0] bg-white text-[15px] text-[#0b1f3a] font-medium focus-ring"
                        >
                          <SelectValue placeholder="Select buyer type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Cash Buyer">Cash Buyer</SelectItem>
                          <SelectItem value="Wholesaler">Wholesaler</SelectItem>
                          <SelectItem value="Realtor">Realtor</SelectItem>
                          <SelectItem value="Developer">Developer</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <div>
                    <span className="block text-[13px] font-semibold text-[#0b1f3a] mb-2.5">
                      Areas of Interest
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {AREAS.map((a) => {
                        const active = selectedAreas.includes(a);
                        return (
                          <button
                            key={a}
                            type="button"
                            onClick={() => toggleArea(a)}
                            aria-pressed={active}
                            className={`inline-flex items-center rounded-full px-3.5 py-2 text-[13px] font-semibold border-[1.5px] transition-all duration-150 active:scale-95 focus-ring ${
                              active
                                ? "bg-[#0ea5a4] border-[#0ea5a4] text-white"
                                : "bg-white border-[#e2e8f0] text-[#0b1f3a] hover:border-[#0b1f3a]"
                            }`}
                          >
                            {active && <Check className="h-3.5 w-3.5 mr-1" strokeWidth={3} />}
                            {a}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {status === "error" && (
                    <div className="flex items-start gap-2 rounded-[10px] bg-red-50 border border-red-200 p-3 text-[13px] text-red-700">
                      <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-[10px] bg-[#0ea5a4] text-white font-bold text-[15px] hover:bg-[#0d9488] hover:-translate-y-0.5 transition-all shadow-card disabled:opacity-70 disabled:hover:translate-y-0 focus-ring"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Adding you to the list…
                      </>
                    ) : (
                      <>
                        Get Access to Deals
                        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                      </>
                    )}
                  </button>

                  <p className="flex items-center justify-center gap-1.5 text-center text-[13px] text-[#64748b]">
                    <ShieldCheck className="h-4 w-4 text-[#0ea5a4]" strokeWidth={1.75} />
                    Your information is 100% safe. No spam, ever.
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "h-12 w-full rounded-[10px] border-[1.5px] border-[#e2e8f0] bg-white px-3.5 text-[15px] text-[#0b1f3a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0ea5a4] focus:ring-2 focus:ring-[#0ea5a4]/30 transition-colors";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="block text-[13px] font-semibold text-[#0b1f3a] mb-1.5">
        {label}
        {required && <span className="text-[#0ea5a4]"> *</span>}
      </span>
      {children}
    </label>
  );
}
