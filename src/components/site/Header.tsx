"use client";

import * as React from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Building2, Menu, Phone, X, ArrowRight } from "lucide-react";

const NAV = [
  { label: "How It Works", href: "#how-it-works", id: "how-it-works" },
  { label: "Who It's For", href: "#who-its-for", id: "who-its-for" },
  { label: "Areas", href: "#areas", id: "areas" },
  { label: "FAQ", href: "#faq", id: "faq" },
];

/** Tracks which section is currently in view to highlight the active nav link. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = React.useState<string>("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        // Trigger when a section's top crosses ~30% from the top of the viewport,
        // accounting for the 72px sticky header.
        rootMargin: "-72px 0px -65% 0px",
        threshold: 0,
      }
    );

    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const menuBtnRef = React.useRef<HTMLButtonElement>(null);
  const closeBtnRef = React.useRef<HTMLButtonElement>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const navIds = React.useMemo(() => NAV.map((n) => n.id), []);
  const active = useActiveSection(navIds);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape + return focus to the trigger for keyboard users.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    // Focus the close button when the menu opens.
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 60);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [open]);

  function go(e: React.MouseEvent, href: string) {
    // Smooth-scroll with header offset for in-page anchors.
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const top =
          el.getBoundingClientRect().top + window.scrollY - 72; /* header */
        window.scrollTo({ top, behavior: "smooth" });
      }
      setOpen(false);
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-[72px] bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled
          ? "shadow-card border-b border-[#e2e8f0]"
          : "border-b border-transparent"
      }`}
    >
      {/* Scroll progress bar (thin teal, pinned to top edge) */}
      <motion.div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[3px] origin-left bg-[#0ea5a4]"
        style={{ scaleX: progress }}
      />

      <div className="container-max flex h-full items-center justify-between gap-4">
        {/* Logo → smooth scroll to top */}
        <a
          href="#top"
          onClick={(e) => go(e, "#top")}
          className="group flex items-center gap-2.5 focus-ring rounded-[10px] px-1"
          aria-label="Real Estate 24/7 — back to top"
        >
          <span className="grid place-items-center h-9 w-9 rounded-[10px] bg-[#0b1f3a] transition-transform group-hover:scale-105">
            <Building2 className="h-5 w-5 text-[#0ea5a4]" strokeWidth={1.5} />
          </span>
          <span className="text-[19px] font-extrabold tracking-tight text-[#0b1f3a]">
            Real Estate <span className="text-[#0ea5a4]">24/7</span>
          </span>
        </a>

        {/* Desktop nav with animated underline + active state */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => go(e, item.href)}
                aria-current={isActive ? "true" : undefined}
                className={`group relative px-3.5 py-2 text-[15px] font-medium rounded-[10px] transition-colors focus-ring ${
                  isActive
                    ? "text-[#0ea5a4]"
                    : "text-[#1e293b] hover:text-[#0b1f3a] hover:bg-[#f5f8fb]"
                }`}
              >
                {item.label}
                {/* Animated underline: grows from left on hover; full when active */}
                <span
                  className={`pointer-events-none absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] rounded-full bg-[#0ea5a4] origin-left transition-transform duration-300 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href="tel:+15713270741"
            className="inline-flex items-center gap-2 h-11 px-4 rounded-[10px] border-[1.5px] border-[#e2e8f0] text-[#0b1f3a] font-semibold text-[15px] hover:border-[#0b1f3a] transition-colors focus-ring"
          >
            <Phone className="h-4 w-4 text-[#0ea5a4]" strokeWidth={1.5} />
            (571) 327-0741
          </a>
          <a
            href="#join"
            onClick={(e) => go(e, "#join")}
            className="group inline-flex items-center h-11 px-5 rounded-[10px] bg-[#0ea5a4] text-white font-bold text-[15px] hover:bg-[#0d9488] hover:-translate-y-0.5 transition-all focus-ring shadow-card"
          >
            Join VIP List
            <ArrowRight
              className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex lg:hidden items-center gap-1.5">
          <a
            href="tel:+15713270741"
            aria-label="Call (571) 327-0741"
            className="grid place-items-center h-11 w-11 rounded-[10px] border-[1.5px] border-[#e2e8f0] text-[#0b1f3a] hover:border-[#0b1f3a] transition-colors focus-ring"
          >
            <Phone className="h-5 w-5 text-[#0ea5a4]" strokeWidth={1.5} />
          </a>
          <button
            ref={menuBtnRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className="grid place-items-center h-11 w-11 rounded-[10px] text-[#0b1f3a] hover:bg-[#f5f8fb] transition-colors focus-ring"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed top-0 left-0 right-0 z-[60] h-[100dvh] bg-[#0b1f3a] flex flex-col"
          >
            {/* Top bar: logo + close */}
            <div className="container-max shrink-0 flex h-[72px] items-center justify-between">
              <a
                href="#top"
                onClick={(e) => go(e, "#top")}
                className="flex items-center gap-2.5"
                aria-label="Real Estate 24/7 — back to top"
              >
                <span className="grid place-items-center h-9 w-9 rounded-[10px] bg-white/10">
                  <Building2 className="h-5 w-5 text-[#0ea5a4]" strokeWidth={1.5} />
                </span>
                <span className="text-[19px] font-extrabold tracking-tight text-white">
                  Real Estate <span className="text-[#0ea5a4]">24/7</span>
                </span>
              </a>
              <button
                ref={closeBtnRef}
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid place-items-center h-11 w-11 rounded-[10px] text-white hover:bg-white/10 transition-colors focus-ring"
              >
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>

            {/* Scrollable nav area — flex-1 so it grows and scrolls if needed */}
            <nav
              className="container-max flex-1 min-h-0 overflow-y-auto scroll-soft flex flex-col pt-2 pb-8"
              aria-label="Main"
            >
              {NAV.map((item, i) => {
                const isActive = active === item.id;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => go(e, item.href)}
                      aria-current={isActive ? "true" : undefined}
                      className="group flex items-center justify-between py-4 border-b border-white/10"
                    >
                      <span
                        className={`text-2xl font-bold transition-colors ${
                          isActive ? "text-[#0ea5a4]" : "text-white"
                        }`}
                      >
                        {item.label}
                      </span>
                      <ArrowRight
                        className={`h-5 w-5 transition-all ${
                          isActive
                            ? "text-[#0ea5a4] opacity-100"
                            : "text-white/40 opacity-0 group-hover:opacity-100"
                        }`}
                        strokeWidth={2}
                      />
                    </a>
                  </motion.div>
                );
              })}
            </nav>

            {/* Pinned CTA bar — NOT fixed (avoids transform-ancestor bug), part of flex column */}
            <div className="container-max shrink-0 pt-5 pb-[max(24px,env(safe-area-inset-bottom))] flex flex-col gap-3 bg-[#0b1f3a] border-t border-white/10">
              <a
                href="tel:+15713270741"
                className="inline-flex items-center justify-center gap-2 h-14 rounded-[10px] border-[1.5px] border-white/30 text-white font-semibold text-lg"
              >
                <Phone className="h-5 w-5 text-[#0ea5a4]" strokeWidth={1.5} />
                (571) 327-0741
              </a>
              <a
                href="#join"
                onClick={(e) => go(e, "#join")}
                className="inline-flex items-center justify-center gap-2 h-14 rounded-[10px] bg-[#0ea5a4] text-white font-bold text-lg hover:bg-[#0d9488] transition-colors"
              >
                Join the VIP Buyer&rsquo;s List
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
