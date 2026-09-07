import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { releases, albumsOnly } from "@/lib/releases";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { Newsletter } from "@/components/Newsletter";
import { ReleaseCard } from "@/components/ReleaseCard";
import { ListenLinks } from "@/components/ListenLinks";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/animations";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Explore the discography of Nigerian rapper Reeplay: Abnormal Normality, The Jig Is Up, Charge It to the Game, Out On Bail and more.",
};

export default function MusicPage() {
  const projects = albumsOnly;
  const rest = releases.filter((r) => !r.featured && r.type !== "Album");
  const singlesFromRest = releases.filter((r) => r.type === "Single");

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Discography"
          title="Music."
          description="A catalogue built one body of work at a time: albums, EPs, projects and the records that led here."
        />

        <section className="bg-[#080808]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-28">
            <Reveal className="mb-14">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <SectionHeader eyebrow="The Catalogue" title="Albums & EPs" />
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#6b6b64]">
                  {projects.length + rest.filter((r) => r.type === "EP" || r.type === "Joint EP").length} Projects
                </p>
              </div>
            </Reveal>

            <StaggerGroup className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-3">
              {[...projects, ...rest.filter((r) => r.type === "EP" || r.type === "Joint EP")].map((release, i) => (
                <StaggerItem key={release.slug}>
                  <ReleaseCard release={release} index={i} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="border-t border-[#1a1a1a] bg-[#0c0c0c]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-28">
            <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeader eyebrow="The Road" title="Singles & Features" />
              <Reveal delay={0.1}>
                <p className="max-w-[40ch] text-sm leading-relaxed text-[#6b6b64]">
                  The records that mark the road.
                </p>
              </Reveal>
            </div>

            <div>
              {singlesFromRest.map((release, i) => (
                <Reveal key={release.slug} delay={i * 0.04}>
                  <Link
                    href={`/music/${release.slug}`}
                    className="group grid grid-cols-12 items-center gap-4 border-b border-[#1a1a1a] py-5 transition-colors duration-300 hover:bg-[#111] sm:gap-6"
                  >
                    <span className="col-span-1 font-mono text-xs text-[#55554e]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="col-span-3 sm:col-span-2">
                      <span className="block aspect-square w-full max-w-[76px] overflow-hidden">
                        <Image
                          src={release.artwork}
                          alt={`${release.title} artwork`}
                          width={76}
                          height={76}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="76px"
                        />
                      </span>
                    </span>
                    <span className="col-span-7 sm:col-span-6">
                      <span className="block font-display text-lg font-normal uppercase text-[#F2F0EB] sm:text-2xl">
                        {release.title}
                      </span>
                      {release.artist ? (
                        <span className="mt-1 block font-mono text-[0.6rem] uppercase tracking-[0.15em] text-[#9b9b93]">
                          {release.artist}
                        </span>
                      ) : null}
                    </span>
                    <span className="col-span-6 col-start-4 flex items-center gap-3 sm:col-span-2 sm:col-start-auto">
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-[#6b6b64]">
                        {release.type} · {release.year}
                      </span>
                    </span>
                    <span className="col-span-4 col-start-8 flex justify-end sm:col-span-1 sm:col-start-auto">
                      <ArrowIcon className="h-4 w-4 text-[#55554e] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D65A31]" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#1a1a1a] bg-[#080808]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-24">
            <Reveal>
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="font-display text-3xl font-normal uppercase text-[#F2F0EB] sm:text-4xl">
                    Stream Everything
                  </p>
                  <p className="mt-2 font-serif text-lg italic text-[#6b6b64]">
                    Reeplay on every platform
                  </p>
                </div>
                <ListenLinks
                  className="gap-x-8"
                  links={[
                    { platform: "Spotify", url: "https://open.spotify.com/artist/2UausQcu26M23zEr5rUODB" },
                    { platform: "Apple Music", url: "https://music.apple.com/ng/artist/reeplay/283620716" },
                    { platform: "Audiomack", url: "https://audiomack.com/reeplay-007" },
                    { platform: "Deezer", url: "https://www.deezer.com/artist/300549" },
                  ]}
                />
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