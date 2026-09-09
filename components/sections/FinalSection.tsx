import { Reveal } from "@/components/animations";
import { siteConfig } from "@/lib/site";

const streamUrl = siteConfig.streaming.find((s) => s.primary)?.url ?? siteConfig.streaming[0].url;

export function FinalSection() {
  return (
    <section className="relative border-t border-[#1a1a1a] bg-[#08080a]">
      <div className="mx-auto max-w-[1480px] px-5 py-28 text-center sm:px-8 md:py-40">
        <Reveal>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-[#6b6861]">
            one man soldier
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 font-display text-[clamp(5rem,24vw,20rem)] font-normal uppercase leading-none text-[#F2F0EA]">
            AR<span className="text-[#a8342a]">4</span>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={streamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-4 border-b border-[#F2F0EA]/30 pb-2 pt-1 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[#F2F0EA] transition-colors duration-300 hover:border-[#a8342a] hover:text-[#a8342a]"
          >
            Listen everywhere
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
