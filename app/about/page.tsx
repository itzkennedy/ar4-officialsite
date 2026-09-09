import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Newsletter } from "@/components/Newsletter";
import { Reveal } from "@/components/animations";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "AR4 (Araoluwa Giwa-Osagie) is a Nigerian songstress. one man soldier. The story behind the music.",
};

const chapterData = [
  {
    num: "01",
    title: "The Name",
    body: "AR4, born Araoluwa Giwa-Osagie, A.R.4, four letters for a voice that carries her own story into song.",
  },
  {
    num: "02",
    title: "The Training",
    body: "She studied music formally and graduated with top honors in 2018, the discipline behind an effortless-sounding control.",
  },
  {
    num: "03",
    title: "The Debut",
    body: "Dedicated (2024), produced by MOFO, opened the catalogue as a melodious testament to the road travelled and the one ahead.",
  },
  {
    num: "04",
    title: "The Era",
    body: "IT'S NOT DAT DEEP (2026), built with denzl and released through rain. labs, is where she stands now, a world cut with an unbothered calm.",
  },
];

const timelineData = [
  { year: "2018", text: "Graduates with top honors after formal study in music." },
  { year: "2024", text: "Debut single Dedicated, produced by MOFO, arrives." },
  { year: "Dec 2024", text: "NIRV4N4 / J4DED, a two-part study in duality, with FADAH." },
  { year: "Nov 2025", text: "No Be Lie begins to turn heads." },
  { year: "Jan 2026", text: "10 TOES, grounded and quiet, lands with denzl, malik bawa and Lexi." },
  { year: "May 2026", text: "Pay No Mind, the era's lead single, with denzl, SGaWD and Zamir." },
  { year: "Aug 2026", text: "IT'S NOT DAT DEEP, the debut album, is released through rain. labs." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="The Artist"
          title={
            <>
              Araoluwa<span className="text-[#a8342a]">.</span>
            </>
          }
          description="AR4, one man soldier. A Nigerian songstress whose music turns her own journey into melody."
        />

        <section className="bg-[#08080a]">
          <div className="mx-auto max-w-[1480px] px-5 pb-16 pt-8 sm:px-8 md:pb-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-5" y={40}>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
                  <Image
                    src="/images/ar4/its-not-dat-deep-2.jpg"
                    alt="AR4"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    quality={92}
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#08080a]/90 to-transparent p-6">
                    <p className="font-serif text-lg italic text-[#9b9b93]">
                      {siteConfig.tagline}
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="flex flex-col justify-center lg:col-span-7">
                <Reveal delay={0.1}>
                  <p className="text-xl leading-relaxed text-[#F2F0EA] sm:text-2xl">
                    Araoluwa Giwa-Osagie, AR4, is a Nigerian songstress who studied the
                    craft, then built a world of her own.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="mt-6 text-base leading-relaxed text-[#9b9b93]">
                    Her most-played records{" "}
                    <span className="text-[#F2F0EA]">NEED YA</span>,{" "}
                    <span className="text-[#F2F0EA]">No Be Lie</span>,{" "}
                    <span className="text-[#F2F0EA]">10 TOES</span> move with the same
                    quiet confidence, carried by soul and an unbothered calm. In every
                    hook the personal is made universal, and in every breath the road ahead
                    feels closer than it was.
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <p className="mt-6 font-mono text-[0.68rem] uppercase leading-loose tracking-[0.2em] text-[#6b6861]">
                    Dedicated · NIRV4N4 / J4DED · No Be Lie · 10 TOES · Pay No Mind
                    <br />
                    IT&apos;S NOT DAT DEEP
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#1a1a1a] bg-[#0c0c0c]">
          <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 md:py-24">
            <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
              {chapterData.map((chapter, i) => (
                <Reveal key={chapter.num} delay={i * 0.05}>
                  <p className="font-serif text-xl italic text-[#a8342a]">
                    {chapter.num}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-normal uppercase text-[#F2F0EA] sm:text-3xl">
                    {chapter.title}
                  </h3>
                  <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-[#9b9b93]">
                    {chapter.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#1a1a1a] bg-[#08080a]">
          <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 md:py-24">
            <Reveal>
              <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal uppercase text-[#F2F0EA]">
                The Road So Far
              </h2>
            </Reveal>
            <div className="mt-12">
              {timelineData.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.04}>
                  <div className="grid grid-cols-12 items-baseline gap-4 border-t border-[#1a1a1a] py-6">
                    <span className="col-span-3 font-display text-3xl font-normal tabular-nums text-[#a8342a] sm:col-span-2 sm:text-4xl">
                      {item.year}
                    </span>
                    <span className="col-span-9 max-w-[58ch] text-sm leading-relaxed text-[#9b9b93] sm:col-span-7 sm:text-base">
                      {item.text}
                    </span>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-[#1a1a1a] py-8" />
            </div>
          </div>
        </section>

        <section className="border-t border-[#1a1a1a] bg-[#0c0c0c]">
          <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 md:py-24">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-8">
                <div className="max-w-xl">
                  <p className="font-serif text-xl italic text-[#a8342a]">Now</p>
                  <h2 className="mt-3 font-display text-3xl font-normal uppercase text-[#F2F0EA] sm:text-4xl">
                    IT&apos;S NOT DAT DEEP
                  </h2>
                  <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-[#9b9b93]">
                    The debut album, with denzl, through rain. labs, seven tracks cut with
                    an unbothered calm. Stream the era everywhere.
                  </p>
                </div>
                <ButtonLink
                  href={siteConfig.streaming[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                >
                  Stream the era
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
