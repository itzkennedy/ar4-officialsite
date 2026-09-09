import Image from "next/image";
import Link from "next/link";
import { releases } from "@/lib/releases";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/animations";
import { ButtonLink } from "@/components/ui/Button";

export function MusicSection() {
  const list = releases;

  return (
    <section className="border-t border-[#1a1a1a] bg-[#0c0c0c]">
      <div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Discography" title="The Music" />
          <ButtonLink href="/music" variant="ghost" size="md" showArrow>
            All music
          </ButtonLink>
        </div>

        <div className="mt-14">
          {list.map((release, i) => (
            <Reveal key={release.slug} delay={i * 0.04}>
              <Link
                href={`/music/${release.slug}`}
                className="group grid grid-cols-12 items-center gap-4 border-t border-[#202024] py-6 transition-colors duration-300 last:border-b hover:bg-[#111] sm:gap-6"
              >
                <span className="col-span-1 font-mono text-xs text-[#55554e]">
                  {String(releases.length - i).padStart(2, "0")}
                </span>
                <span className="col-span-3 sm:col-span-2">
                  <span className="block aspect-square w-full max-w-[84px] overflow-hidden">
                    <Image
                      src={release.artwork}
                      alt={`${release.title} cover artwork`}
                      width={84}
                      height={84}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="84px"
                    />
                  </span>
                </span>
                <span className="col-span-6 sm:col-span-6">
                  <span className="block font-display text-xl font-normal uppercase leading-none text-[#F2F0EA] sm:text-3xl">
                    {release.title}
                  </span>
                  {release.artist ? (
                    <span className="mt-2 block font-mono text-[0.6rem] uppercase tracking-[0.15em] text-[#9b9b93]">
                      {release.artist}
                    </span>
                  ) : null}
                </span>
                <span className="col-span-2 flex justify-end sm:col-span-3">
                  <span className="text-right font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.15em] text-[#6b6861] sm:leading-normal">
                    <span>{release.type}</span>
                    <span className="hidden sm:inline"> · </span>
                    <span className="block sm:inline">{release.year}</span>
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
