import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getReleaseBySlug, releases } from "@/lib/releases";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { ListenLinks } from "@/components/ListenLinks";
import { ReleaseCard } from "@/components/ReleaseCard";
import { Reveal } from "@/components/animations";
import { ArrowIcon } from "@/components/icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return releases.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const release = getReleaseBySlug(slug);
  if (!release) return {};
  return {
    title: `${release.title}, ${release.year}`,
    description:
      release.description ?? `${release.title} by Reeplay. Listen now.`,
    openGraph: {
      title: `${release.title} | REEPLAY`,
      description: release.description ?? "New music from Reeplay.",
      images: [{ url: release.artwork, alt: `${release.title} cover artwork` }],
    },
  };
}

export default async function ReleasePage({ params }: PageProps) {
  const { slug } = await params;
  const release = getReleaseBySlug(slug);
  if (!release) notFound();

  const related = releases
    .filter((r) => r.slug !== release.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#080808]">
          <div className="mx-auto max-w-[1480px] px-5 pb-16 pt-32 sm:px-8 md:pb-24 md:pt-44">
            <Reveal>
              <Link
                href="/music"
                className="group inline-flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[#9b9b93] transition-colors hover:text-[#F2F0EB]"
              >
                <ArrowIcon className="h-3.5 w-3.5 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
                All Music
              </Link>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5" y={40}>
                <div className="relative aspect-square overflow-hidden bg-[#111]">
                  <Image
                    src={release.artwork}
                    alt={`${release.title}, cover artwork`}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    quality={92}
                    priority
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <div className="flex flex-col justify-center lg:col-span-7">
                <Reveal delay={0.1}>
                  <p className="font-serif text-lg italic text-[#D65A31]">
                    {release.type} · {release.month} {release.year}
                  </p>
                  <h1 className="mt-4 font-display text-4xl font-normal uppercase leading-[0.9] text-[#F2F0EB] sm:text-7xl">
                    {release.title}
                  </h1>
                  <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#9b9b93]">
                    {release.artist ?? "Reeplay"}
                  </p>
                </Reveal>

                {release.description ? (
                  <Reveal delay={0.2}>
                    <p className="mt-7 max-w-[54ch] text-base leading-relaxed text-[#9b9b93]">
                      {release.description}
                    </p>
                  </Reveal>
                ) : null}

                <Reveal delay={0.3} className="mt-8">
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#6b6b64]">
                      {release.type}
                    </span>
                    <span className="h-4 w-px bg-[#2a2a2a]" />
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#6b6b64]">
                      {release.trackCount} {release.trackCount === 1 ? "Track" : "Tracks"}
                    </span>
                    <span className="h-4 w-px bg-[#2a2a2a]" />
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#6b6b64]">
                      {release.year}
                    </span>
                  </div>
                </Reveal>

                {release.notes ? (
                  <Reveal delay={0.35}>
                    <p className="mt-6 max-w-[52ch] font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.15em] text-[#6b6b64]">
                      {release.notes}
                    </p>
                  </Reveal>
                ) : null}

                <Reveal delay={0.4} className="mt-9">
                  <ListenLinks links={release.links} />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {release.tracks && release.tracks.length > 0 ? (
          <section className="border-t border-[#1a1a1a] bg-[#0c0c0c]">
            <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-28">
              <Reveal>
                <div className="border-b border-[#262626] pb-5">
                  <h2 className="font-display text-3xl font-normal uppercase text-[#F2F0EB] sm:text-5xl">
                    Tracks
                  </h2>
                </div>
              </Reveal>
              <ol className="mt-8">
                {release.tracks.map((track, i) => (
                  <li
                    key={`${track}-${i}`}
                    className="flex items-baseline gap-6 border-b border-[#1a1a1a] py-5"
                  >
                    <span className="font-mono text-xs tabular-nums text-[#55554e]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg font-normal uppercase text-[#F2F0EB] sm:text-2xl">
                      {track}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ) : null}

        <section className="border-t border-[#1a1a1a] bg-[#080808]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-28">
            <Reveal>
              <div className="flex items-baseline justify-between border-b border-[#262626] pb-5">
                <h2 className="font-display text-3xl font-normal uppercase text-[#F2F0EB] sm:text-5xl">
                  More Music
                </h2>
                <Link
                  href="/music"
                  className="hidden font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[#9b9b93] transition-colors hover:text-[#F2F0EB] sm:block"
                >
                  View All →
                </Link>
              </div>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-3">
              {related.map((release, i) => (
                <ReleaseCard key={release.slug} release={release} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}