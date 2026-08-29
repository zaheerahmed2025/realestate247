import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "What does it cost to join the VIP Buyer's List?",
    a: "Nothing. Joining is free — we earn by connecting you with off-market inventory, so there are no membership fees and no marketing costs passed on to you.",
  },
  {
    q: "How far below market value are the deals?",
    a: "Our sourced properties are typically discounted up to 70% below market value. Every deal comes with ARV and discount context so you can underwrite confidently.",
  },
  {
    q: "Which markets do you cover?",
    a: "DC, Maryland, Northern Virginia, Baltimore, Tampa Bay, Atlanta, and Memphis, TN. We're actively expanding — tell us your target market and we'll flag if it's in our pipeline.",
  },
  {
    q: "What buyer types is this for?",
    a: "Cash buyers, wholesalers, realtors, and developers. When you join, tell us your buyer type and target areas so we match deals that fit your strategy and budget.",
  },
  {
    q: "How fast do deals come out?",
    a: "We source 24/7. New off-market opportunities are sent to VIP buyers the moment they're verified — often before any public listing exists.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-[#f5f8fb] section-pad scroll-anchor">
      <div className="container-max">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="text-[#0ea5a4]">Answered</span>
            </>
          }
          subtext="Everything you need to know before joining the VIP Buyer's List."
        />

        <Reveal className="mt-10 mx-auto max-w-[760px]">
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-0"
            className="rounded-[16px] border border-[#e2e8f0] bg-white shadow-card overflow-hidden"
          >
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                className={i === FAQS.length - 1 ? "border-b-0" : ""}
              >
                <AccordionTrigger className="px-5 sm:px-6 py-5 text-left text-[16px] font-bold text-[#0b1f3a] hover:no-underline hover:bg-[#f5f8fb] transition-colors">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 sm:px-6 pb-5 text-[15px] leading-[1.7] text-[#64748b]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
