import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { releases } from "@/lib/releases";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { Newsletter } from "@/components/Newsletter";
import { ListenLinks } from "@/components/ListenLinks";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "Music",
  description:
    "The music of AR4: Dedicated, NIRV4N4 / J4DED, No Be Lie, 10 TOES, Pay No Mind and the album IT'S NOT DAT DEEP.",
};

export default function MusicPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Discography"
          title="Music."
          description="A catalogue built one body of work at a time, the road from Dedicated to IT'S NOT DAT DEEP."
        />

        <section className="bg-[#08080a]">
          <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 md:py-24">
            <Reveal className="mb-12">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <SectionHeader eyebrow="The Catalogue" title="Releases" />
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#6b6861]">
                  {releases.length} Projects
                </p>
              </div>
            </Reveal>

            <StaggerGroup className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-3">
              {releases.map((release) => (
                <StaggerItem key={release.slug}>
                  <Link
                    href={`/music/${release.slug}`}
                    className="group block"
                    aria-label={`${release.title}, view release details`}
                  >
                    <div className="relative aspect-square overflow-hidden bg-[#111]">
                      <Image
                        src={release.artwork}
                        alt={`${release.title}, cover artwork`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        quality={88}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <span className="absolute bottom-4 left-5 translate-y-1 font-serif text-lg italic text-[#F2F0EA] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        View release <span aria-hidden="true">→</span>
                      </span>
                    </div>
                    <div className="pt-4">
                      <h3 className="font-display text-xl font-normal uppercase leading-none text-[#F2F0EA]">
                        {release.title}
                      </h3>
                      {release.artist ? (
                        <p className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-[#9b9b93]">
                          {release.artist}
                        </p>
                      ) : null}
                      <p className="mt-2 font-mono text-[0.58rem] uppercase tracking-[0.15em] text-[#6b6861]">
                        {release.type} · {release.year}
                      </p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="border-t border-[#1a1a1a] bg-[#0c0c0c]">
          <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 md:py-24">
            <Reveal>
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="font-display text-3xl font-normal uppercase text-[#F2F0EA] sm:text-4xl">
                    Stream everything
                  </p>
                  <p className="mt-2 font-serif text-lg italic text-[#6b6861]">
                    AR4, wherever you listen
                  </p>
                </div>
                <ListenLinks
                  className="gap-x-8"
                  links={[
                    {
                      platform: "Audiomack",
                      url: "https://audiomack.com/ar4oluwa",
                    },
                    {
                      platform: "Spotify",
                      url: "https://open.spotify.com/track/5NbA1oqf12C7GmnIMfQXUo",
                    },
                    {
                      platform: "Apple Music",
                      url: "https://music.apple.com/us/album/pay-no-mind-single/1895593066",
                    },
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
