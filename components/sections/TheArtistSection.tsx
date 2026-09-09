import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/animations";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

const facts = [
  { num: "01", label: "The name", text: "AR4, born Araoluwa Giwa-Osagie, a Nigerian songstress whose music turns her own journey into melody." },
  { num: "02", label: "The training", text: "Formally studied music and graduated with top honors in 2018, before stepping out on her own terms." },
  { num: "03", label: "The debut", text: "Dedicated (2024), produced by MOFO, opened the catalogue, a melodious testament to the road ahead." },
  { num: "04", label: "The era", text: "IT'S NOT DAT DEEP (2026) with denzl, released through rain. labs, the record that defines where she stands now." },
];

export function TheArtistSection() {
  return (
    <section className="border-t border-[#1a1a1a] bg-[#0c0c0c]">
      <div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 md:py-32">
        <SectionHeader eyebrow="The Artist" title="Araoluwa" />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" y={40}>
            <div className="relative aspect-[4/5] max-w-lg overflow-hidden bg-[#111]">
              <Image
                src="/images/ar4/its-not-dat-deep-1.jpg"
                alt="AR4"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                quality={90}
                className="object-cover object-center"
              />
            </div>
          </Reveal>

          <div className="flex flex-col justify-center lg:col-span-5">
            <Reveal>
              <p className="text-xl leading-relaxed text-[#F2F0EA] sm:text-2xl">
                A Nigerian songstress who studied the craft, then built a world of her own.
              </p>
              <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-[#9b9b93]">
                {siteConfig.tagline}. Her most-played records{" "}
                <span className="text-[#F2F0EA]">NEED YA</span>,{" "}
                <span className="text-[#F2F0EA]">No Be Lie</span>,{" "}
                <span className="text-[#F2F0EA]">10 TOES</span> move with the same quiet
                confidence, carried by soul and an unbothered calm.
              </p>
            </Reveal>

            <div className="mt-12 border-t border-[#202024]">
              {facts.map((f, i) => (
                <Reveal key={f.num} delay={i * 0.06}>
                  <div className="grid grid-cols-12 items-baseline gap-4 border-b border-[#202024] py-5">
                    <span className="col-span-2 font-mono text-xs text-[#a8342a]">
                      {f.num}
                    </span>
                    <span className="col-span-10">
                      <span className="block font-display text-lg font-normal uppercase text-[#F2F0EA]">
                        {f.label}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-[#9b9b93]">
                        {f.text}
                      </span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-10">
              <ButtonLink href="/about" variant="ghost" size="lg" showArrow>
                The full story
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
