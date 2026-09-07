"use client";

import Image from "next/image";
import { latestRelease } from "@/lib/releases";
import { SectionHeader } from "@/components/SectionHeader";
import { ListenLinks } from "@/components/ListenLinks";
import { Reveal } from "@/components/animations";
import { PlayIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";

export function LatestReleaseSection() {
  if (!latestRelease) return null;
  const release = latestRelease;

  return (
    <section className="border-t border-[#1a1a1a] bg-[#080808]">
      <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeader eyebrow="Latest Release" title={release.title} />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5" y={40}>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={release.artwork}
                alt={`${release.title}, cover artwork`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                quality={90}
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="flex flex-col justify-center lg:col-span-7">
            <Reveal delay={0.1}>
              <p className="font-serif text-lg italic text-[#D65A31]">
                {release.type === "Single" ? "Now Playing" : release.type} · {release.month} {release.year}
              </p>
              <h3 className="mt-4 font-display text-4xl font-normal uppercase leading-none text-[#F2F0EB] sm:text-6xl">
                {release.title}
              </h3>
              {release.artist ? (
                <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#9b9b93]">
                  {release.artist}
                </p>
              ) : (
                <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#9b9b93]">
                  Reeplay
                </p>
              )}
            </Reveal>

            {release.description ? (
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-[#9b9b93]">
                  {release.description}
                </p>
              </Reveal>
            ) : null}

            <Reveal delay={0.3} className="mt-8">
              <ListenLinks links={release.links} />
            </Reveal>

            <Reveal delay={0.4} className="mt-10 flex flex-wrap items-center gap-6">
              <ButtonLink href={`/music/${release.slug}`} variant="primary" size="lg">
                <PlayIcon className="h-3.5 w-3.5" />
                Explore Release
              </ButtonLink>
              <ButtonLink href="/music" variant="ghost" size="lg" showArrow>
                All Music
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
