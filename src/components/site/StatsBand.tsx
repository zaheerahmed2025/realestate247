import { Reveal } from "./Reveal";

const STATS = [
  { value: "70%+", label: "Below Market Value" },
  { value: "7", label: "Markets Covered" },
  { value: "24/7", label: "Deal Sourcing" },
  { value: "$0", label: "Marketing Cost for You" },
];

export function StatsBand() {
  return (
    <section className="relative bg-[#071527] text-white">
      <div className="container-max">
        <Reveal>
          <dl className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#1e3a5f]">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="py-7 md:py-9 px-4 text-center first:pl-0 md:first:pl-6 last:pr-0 md:last:pr-6"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-[34px] md:text-[40px] font-extrabold text-[#f5b942] leading-none tracking-tight">
                    {s.value}
                  </span>
                  <span className="mt-2 block text-[13px] md:text-[14px] font-medium text-[#cbd5e1]">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
