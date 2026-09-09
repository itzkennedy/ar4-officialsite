import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/animations";

const entries = [
  {
    date: "Aug 2026",
    title: "IT'S NOT DAT DEEP is out now",
    text: "The debut album with denzl, released through rain. labs. Seven tracks in an unbothered calm.",
    href: "https://audiomack.com/ar4oluwa/album/its-not-dat-deep-6833340",
  },
  {
    date: "May 2026",
    title: "Pay No Mind",
    text: "The era's lead single, with denzl, SGaWD and Zamir.",
    href: "https://open.spotify.com/track/5NbA1oqf12C7GmnIMfQXUo",
  },
  {
    date: "Jan 2026",
    title: "10 TOES",
    text: "A low, grounded flex with denzl, malik bawa and Lexi.",
    href: "/music/10-toes",
  },
  {
    date: "2024",
    title: "Everything starts somewhere",
    text: "From the debut single Dedicated, produced by MOFO, to the world being built now.",
    href: "/music/dedicated",
  },
];

export function JournalSection() {
  return (
    <section className="border-t border-[#1a1a1a] bg-[#08080a]">
      <div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 md:py-32">
        <SectionHeader eyebrow="Notes" title="Field Notes" />

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {entries.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.06}>
              <Link
                href={e.href}
                target={e.href.startsWith("http") ? "_blank" : undefined}
                rel={e.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block border-t border-[#202024] pt-8"
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-[#a8342a]">
                  {e.date}
                </p>
                <h3 className="mt-4 font-display text-3xl font-normal uppercase leading-[0.95] text-[#F2F0EA] transition-colors duration-300 group-hover:text-[#a8342a] sm:text-4xl">
                  {e.title}
                </h3>
                <p className="mt-4 max-w-[48ch] text-sm leading-relaxed text-[#8a8a8a]">
                  {e.text}
                </p>
                <span aria-hidden="true" className="mt-5 inline-block text-[#a8342a] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
