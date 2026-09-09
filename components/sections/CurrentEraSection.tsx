import Image from "next/image";
import { latestRelease } from "@/lib/releases";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/animations";
import { ButtonLink } from "@/components/ui/Button";

export function CurrentEraSection() {
  const release = latestRelease;
  if (!release) return null;

  const streamUrl = siteConfig.streaming.find((s) => s.primary)?.url ?? siteConfig.streaming[0].url;

  return (
    <section id="era" className="border-t border-[#1a1a1a] bg-[#08080a]">
      <div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 md:py-36">
        <Reveal>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-[#a8342a]">
            {siteConfig.eraTag}
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5" y={40}>
            <div className="relative aspect-square overflow-hidden bg-[#111]">
              <Image
                src={release.artwork}
                alt={`${release.title}, cover artwork`}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                quality={92}
                priority
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="flex flex-col justify-center lg:col-span-7">
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(3rem,9vw,8rem)] font-normal uppercase leading-[0.85] text-[#F2F0EA]">
                It&apos;s not<br />
                dat deep
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-7 max-w-[50ch] text-base leading-relaxed text-[#9b9b93]">
                The debut album and the current era, seven tracks cut with an unbothered calm.
                {release.artist ? ` Built with ${release.artist.replace("AR4 & ", "")},` : " "}
                {" released through rain. labs in August 2026."}
              </p>
            </Reveal>

            <Reveal delay={0.18} className="mt-10">
              <ol className="max-w-[50ch]">
                {release.tracks?.map((track, i) => (
                  <li
                    key={track}
                    className="flex items-baseline gap-6 border-t border-[#202024] py-3 last:border-b"
                  >
                    <span className="font-mono text-xs tabular-nums text-[#55554e]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg font-normal uppercase tracking-[0.02em] text-[#F2F0EA]">
                      {track}
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center gap-6">
              <ButtonLink
                href={streamUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                Stream the album
              </ButtonLink>
              <ButtonLink href={`/music/${release.slug}`} variant="ghost" size="lg" showArrow>
                Explore the release
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
