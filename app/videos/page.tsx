"use client";

import { useState } from "react";
import Image from "next/image";
import { videos, youtubeChannel, watchOnYouTube, getFeaturedVideo, getVideoThumbnail, type Video } from "@/lib/videos";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { Newsletter } from "@/components/Newsletter";
import { VideoCard } from "@/components/VideoCard";
import { VideoModal } from "@/components/VideoModal";
import { StaggerGroup, StaggerItem } from "@/components/animations";
import { Button, ButtonLink } from "@/components/ui/Button";
import { PlayIcon, YouTubeIcon } from "@/components/icons";

function FeaturedVideo({
  video,
  onPlay,
}: {
  video: Video;
  onPlay: (video: Video) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-7">
        <div className="group relative overflow-hidden bg-[#111]">
          <button
            type="button"
            onClick={() => onPlay(video)}
            className="block w-full text-left"
            aria-label={`Play ${video.title} on this site`}
          >
            <div className="aspect-[16/9]">
              <Image
                src={getVideoThumbnail(video.youtubeId)}
                alt={`${video.title}, video thumbnail`}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                quality={92}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="absolute inset-0 bg-[#080808]/15 transition-colors duration-500 group-hover:bg-[#080808]/40" />
            <span className="absolute bottom-5 left-5 inline-flex items-center gap-3 opacity-90 transition-all duration-500 group-hover:opacity-100">
              <span className="flex h-12 w-12 items-center justify-center bg-[#D65A31] text-[#F2F0EB]">
                <PlayIcon className="h-4.5 w-4.5" />
              </span>
              <span className="font-serif text-xl italic text-[#F2F0EB]">
                Play video
              </span>
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-end lg:col-span-5">
        <p className="font-serif text-lg italic text-[#D65A31]">Featured</p>
        <h2 className="mt-3 font-display text-3xl font-normal uppercase leading-[0.95] text-[#F2F0EB] sm:text-5xl">
          {video.title}
        </h2>
        <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[#8a8a8a]">
          {video.subtitle} · {video.date}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button variant="accent" size="lg" onClick={() => onPlay(video)}>
            <PlayIcon className="h-3.5 w-3.5" />
            Play Video
          </Button>
          <ButtonLink
            href={watchOnYouTube(video.youtubeId)}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="lg"
          >
            <YouTubeIcon className="h-3.5 w-3.5" />
            Watch on YouTube
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

export default function VideosPage() {
  const [active, setActive] = useState<Video | null>(null);
  const featured = getFeaturedVideo();
  const rest = videos.filter((v) => v.id !== featured.id);

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Visuals"
          title="Videos."
          description="Official videos, collabs and freestyles from the channel."
        />

        <section className="bg-[#080808]">
          <div className="mx-auto max-w-[1480px] px-5 pb-20 sm:px-8 md:pb-28">
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#1a1a1a] pb-6">
              <div className="flex items-center gap-3">
                <YouTubeIcon className="h-5 w-5 text-[#D65A31]" />
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#9b9b93]">
                  Official channel
                  <span className="ml-3 text-[#F2F0EB]">{youtubeChannel.handle}</span>
                </p>
              </div>
              <a
                href={youtubeChannel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#F2F0EB] underline decoration-[#D65A31] decoration-2 underline-offset-4 transition-colors hover:text-[#D65A31]"
              >
                Visit the channel ↗
              </a>
            </div>

            <StaggerGroup>
              <StaggerItem>
                <FeaturedVideo video={featured} onPlay={setActive} />
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>

        <section className="border-t border-[#1a1a1a] bg-[#0c0c0c]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeader eyebrow="The Archive" title="Top Videos" />
              <ButtonLink
                href={youtubeChannel.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="md"
                showArrow
              >
                All videos on YouTube
              </ButtonLink>
            </div>

            <StaggerGroup className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((video, i) => (
                <StaggerItem key={video.id}>
                  <VideoCard video={video} onPlay={setActive} index={i} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="border-t border-[#1a1a1a] bg-[#0c0c0c]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div className="max-w-xl">
                <p className="font-serif text-xl italic text-[#D65A31]">More on YouTube</p>
                <h2 className="mt-3 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal uppercase leading-[0.9] text-[#F2F0EB]">
                  Watch the latest videos from Reeplay
                </h2>
                <p className="mt-6 max-w-[46ch] text-sm leading-relaxed text-[#8a8a8a]">
                  Official videos, singles, freestyles and behind the scenes. New drops land on
                  the channel first. Join {youtubeChannel.handle}.
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
                Visit YouTube
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
      <VideoModal video={active} onClose={() => setActive(null)} />
    </>
  );
}