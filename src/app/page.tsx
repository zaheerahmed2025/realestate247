import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { StatsBand } from "@/components/site/StatsBand";
import { WhoItsFor } from "@/components/site/WhoItsFor";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ValueProposition } from "@/components/site/ValueProposition";
import { AreasWeServe } from "@/components/site/AreasWeServe";
import { LeadForm } from "@/components/site/LeadForm";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsBand />
        <WhoItsFor />
        <HowItWorks />
        <ValueProposition />
        <AreasWeServe />
        <LeadForm />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
