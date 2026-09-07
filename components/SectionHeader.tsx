import { Reveal } from "@/components/animations";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  titleClassName?: string;
  className?: string;
  layout?: "left" | "center";
  id?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  titleClassName = "",
  className = "",
  layout = "left",
  id,
}: SectionHeaderProps) {
  return (
    <Reveal className={className}>
      <div
        id={id}
        className={layout === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      >
        {eyebrow ? (
          <p className="font-serif text-xl italic leading-snug text-[#D65A31]">
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={`mt-3 font-display text-[clamp(2.5rem,5vw,4.25rem)] font-normal leading-[0.92] tracking-[0.01em] text-[#F2F0EB] ${titleClassName}`}
        >
          {title}
        </h2>
      </div>
    </Reveal>
  );
}
