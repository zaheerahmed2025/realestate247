import * as React from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

/**
 * Shared section skeleton for cohesion:
 * centered eyebrow label → H2 → one-line subtext.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtext,
  align = "center",
  dark = false,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtext?: React.ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={cn(
          "heading-lg mt-4",
          dark ? "text-white" : "text-[#0b1f3a]"
        )}
      >
        {title}
      </h2>
      {subtext && (
        <p
          className={cn(
            "mt-4 text-[17px] leading-[1.7]",
            dark ? "text-[#cbd5e1]" : "text-[#64748b]"
          )}
        >
          {subtext}
        </p>
      )}
    </Reveal>
  );
}
