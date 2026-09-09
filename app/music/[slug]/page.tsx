import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getReleaseBySlug, releases } from "@/lib/releases";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { ListenLinks } from "@/components/ListenLinks";
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
      release.description ?? `${release.title} by AR4. Listen now.`,
    openGraph: {
      title: `${release.title} | AR4`,
      description: release.description ?? "New music from AR4.",
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
        <section className="bg-[#08080a]">
          <div className="mx-auto max-w-[1480px] px-5 pb-16 pt-32 sm:px-8 md:pb-24 md:pt-44">
            <Reveal>
              <Link
                href="/music"
                className="group inline-flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[#9b9b93] transition-colors hover:text-[#F2F0EA]"
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
                  <p className="font-serif text-lg italic text-[#a8342a]">
                    {release.type} · {release.month} {release.year}
                  </p>
                  <h1 className="mt-4 font-display text-4xl font-normal uppercase leading-[0.9] text-[#F2F0EA] sm:text-7xl">
                    {release.title}
                  </h1>
                  <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#9b9b93]">
                    {release.artist ?? "AR4"}
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
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#6b6861]">
                      {release.type}
                    </span>
                    <span className="h-4 w-px bg-[#2a2a2a]" />
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#6b6861]">
                      {release.trackCount} {release.trackCount === 1 ? "Track" : "Tracks"}
                    </span>
                    <span className="h-4 w-px bg-[#2a2a2a]" />
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#6b6861]">
                      {release.year}
                    </span>
                  </div>
                </Reveal>

                {release.notes ? (
                  <Reveal delay={0.35}>
                    <p className="mt-6 max-w-[52ch] font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.15em] text-[#6b6861]">
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
            <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 md:py-24">
              <Reveal>
                <div className="border-b border-[#262626] pb-5">
                  <h2 className="font-display text-3xl font-normal uppercase text-[#F2F0EA] sm:text-5xl">
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
                    <span className="font-display text-lg font-normal uppercase text-[#F2F0EA] sm:text-2xl">
                      {track}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ) : null}

        <section className="border-t border-[#1a1a1a] bg-[#08080a]">
          <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 md:py-24">
            <Reveal>
              <div className="flex items-baseline justify-between border-b border-[#262626] pb-5">
                <h2 className="font-display text-3xl font-normal uppercase text-[#F2F0EA] sm:text-5xl">
                  More Music
                </h2>
                <Link
                  href="/music"
                  className="hidden font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[#9b9b93] transition-colors hover:text-[#F2F0EA] sm:block"
                >
                  View All →
                </Link>
              </div>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-3">
              {related.map((release) => (
                <Link
                  key={release.slug}
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
                  </div>
                  <div className="pt-4">
                    <h3 className="font-display text-xl font-normal uppercase leading-none text-[#F2F0EA]">
                      {release.title}
                    </h3>
                    <p className="mt-2 font-mono text-[0.58rem] uppercase tracking-[0.15em] text-[#6b6861]">
                      {release.type} · {release.year}
                    </p>
                  </div>
                </Link>
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
