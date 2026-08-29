import { MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const AREAS = [
  "DC",
  "Maryland",
  "Northern Virginia",
  "Baltimore",
  "Tampa Bay",
  "Atlanta",
  "Memphis, TN",
];

export function AreasWeServe() {
  return (
    <section id="areas" className="bg-[#f5f8fb] section-pad scroll-anchor">
      <div className="container-max">
        <SectionHeading
          eyebrow="COVERAGE"
          title={
            <>
              Markets We <span className="text-[#0ea5a4]">Serve</span>
            </>
          }
          subtext="Active sourcing across seven high-velocity markets — and expanding."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
          {AREAS.map((a) => (
            <span
              key={a}
              className="group inline-flex items-center gap-2 rounded-full bg-white border-[1.5px] border-[#0b1f3a] px-5 py-2.5 text-[15px] font-semibold text-[#0b1f3a] cursor-default transition-colors duration-200 hover:bg-[#0b1f3a] hover:text-white"
            >
              <MapPin
                className="h-4 w-4 text-[#0ea5a4] group-hover:text-[#ccfbf1] transition-colors"
                strokeWidth={1.75}
              />
              {a}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-7 text-center text-[14px] text-[#64748b]">
            Looking for another market?{" "}
            <a
              href="mailto:iamrealestate247@gmail.com"
              className="font-semibold text-[#0ea5a4] hover:underline underline-offset-2"
            >
              Ask us
            </a>{" "}
            — we&rsquo;re expanding.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
