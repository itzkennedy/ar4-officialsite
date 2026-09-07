import type { Metadata } from "next";
import Image from "next/image";
import { artistImages } from "@/lib/images";
import { youtubeChannel } from "@/lib/videos";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Newsletter } from "@/components/Newsletter";
import { Reveal } from "@/components/animations";
import { ButtonLink } from "@/components/ui/Button";
import { YouTubeIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who is Reeplay? Nigerian rapper and songwriter. Member of the Anti World Gangstars collective.",
};

const chapterData = [
  {
    num: "01",
    title: "The Name",
    body: "REEPLAY stands for Raw Evolved Energy, Playing Loud All Year. It is the idea that runs through the music and the name.",
  },
  {
    num: "02",
    title: "The Craft",
    body: "The work moves through rap, storytelling and wordplay, with a direct voice that holds its own across records and live sets.",
  },
  {
    num: "03",
    title: "The Music",
    body: "The catalogue includes Gang Business (2019), Abnormal Normality (2021), R18 and Out On Bail (2022), The Jig Is Up (2023), Charge It to the Game (2024), and later releases including Pick 2.",
  },
  {
    num: "04",
    title: "The Crew",
    body: "Reeplay is a member of the Anti World Gangstars collective. His work with the collective includes Gang Business, Nothing Changed and Out On Bail.",
  },
];

const timelineData = [
  { year: "2019", text: "Gang Business, the collective's debut project, arrives." },
  { year: "2021", text: "Abnormal Normality, Reeplay's debut solo album: 15 tracks." },
  { year: "2022", text: "R18 EP and the Out On Bail single with Odumodublvck." },
  { year: "2023", text: "The Jig Is Up album and the Who Is Reeplay single." },
  { year: "2024", text: "Charge It to the Game album; Nothing Changed with Anti World Gangstars." },
  { year: "2026", text: "Pick 2, Pompous and Country Dey Hot are among the later releases." },
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
              Who Is <span className="text-[#D65A31]">Ree</span>play?
            </>
          }
          description="Reeplay is a Nigerian rapper and songwriter, and a member of the Anti World Gangstars collective."
        />

        <section className="bg-[#080808]">
          <div className="mx-auto max-w-[1480px] px-5 pb-20 pt-8 sm:px-8 md:pb-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-5" y={40}>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
                  <Image
                    src={artistImages.hero.square}
                    alt="Reeplay"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    quality={92}
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080808]/90 to-transparent p-6">
                    <p className="font-serif text-lg italic text-[#9b9b93]">
                      Raw evolved energy, playing loud all year.
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="flex flex-col justify-center lg:col-span-7">
                <Reveal delay={0.1}>
                  <p className="text-xl leading-relaxed text-[#F2F0EB] sm:text-2xl">
                    Reeplay is a Nigerian rapper and songwriter whose work brings together
                    storytelling, wordplay and a direct delivery.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="mt-6 text-base leading-relaxed text-[#9b9b93]">
                    His catalogue spans singles, EPs, mixtapes and albums. As part of the{" "}
                    <span className="text-[#F2F0EB]">Anti World Gangstars</span> collective, he
                    appears on <span className="text-[#F2F0EB]">Gang Business</span> (2019),{" "}
                    <span className="text-[#F2F0EB]">Nothing Changed</span> and{" "}
                    <span className="text-[#F2F0EB]">Out On Bail</span>.
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <p className="mt-6 font-mono text-[0.68rem] uppercase leading-loose tracking-[0.2em] text-[#6b6b64]">
                    Abnormal Normality · R18 · The Jig Is Up · Who Is Reeplay · Charge It to the Game
                    <br />
                    Pick 2 · Out On Bail
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#1a1a1a] bg-[#0c0c0c]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-28">
            <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
              {chapterData.map((chapter, i) => (
                <Reveal key={chapter.num} delay={i * 0.05}>
                  <p className="font-serif text-xl italic text-[#D65A31]">
                    {chapter.num}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-normal uppercase text-[#F2F0EB] sm:text-3xl">
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

        <section className="border-t border-[#1a1a1a] bg-[#080808]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-28">
            <Reveal>
              <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal uppercase text-[#F2F0EB]">
                The Road So Far
              </h2>
            </Reveal>
            <div className="mt-12">
              {timelineData.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.04}>
                  <div className="grid grid-cols-12 items-baseline gap-4 border-t border-[#1a1a1a] py-6">
                    <span className="col-span-3 font-display text-3xl font-normal tabular-nums text-[#D65A31] sm:col-span-2 sm:text-4xl">
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
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-28">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-8">
                <div className="max-w-xl">
                  <p className="font-serif text-xl italic text-[#D65A31]">Watch</p>
                  <h2 className="mt-3 font-display text-3xl font-normal uppercase text-[#F2F0EB] sm:text-4xl">
                    See Reeplay on YouTube
                  </h2>
                  <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-[#9b9b93]">
                    Official videos, freestyles and behind the scenes on the channel{" "}
                    {youtubeChannel.handle}.
                  </p>
                </div>
                <ButtonLink
                  href={youtubeChannel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                >
                  <YouTubeIcon className="h-5 w-5" />
                  Visit the channel
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
