"use client";

import { useState } from "react";
import { videos, type Video } from "@/lib/videos";
import { SectionHeader } from "@/components/SectionHeader";
import { VideoCard } from "@/components/VideoCard";
import { VideoModal } from "@/components/VideoModal";
import { StaggerGroup, StaggerItem } from "@/components/animations";
import { ButtonLink } from "@/components/ui/Button";

export function VideosSection() {
  const [active, setActive] = useState<Video | null>(null);
  const top = videos.slice(0, 3);

  return (
    <section className="border-t border-[#1a1a1a] bg-[#080808]">
      <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeader eyebrow="Visuals" title="Videos" />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {top.map((video, i) => (
            <StaggerItem key={video.id}>
              <VideoCard video={video} onPlay={setActive} index={i} featured={video.featured} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-14 flex justify-center">
          <ButtonLink href="/videos" variant="ghost" size="md" showArrow>
            All videos
          </ButtonLink>
        </div>
      </div>

      <VideoModal video={active} onClose={() => setActive(null)} />
    </section>
  );
}