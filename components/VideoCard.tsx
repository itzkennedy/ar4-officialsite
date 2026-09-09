"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { Video } from "@/lib/videos";
import { getThumbnailUrl, channel } from "@/lib/videos";
import { PlayIcon } from "@/components/icons";

export function VideoCard({
  video,
  index = 0,
  className = "",
}: {
  video: Video;
  index?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`group ${className}`}
    >
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${video.title} on YouTube`}
        className="block"
      >
        <div className="relative aspect-video overflow-hidden bg-[#111]">
          <Image
            src={getThumbnailUrl(video.youtubeId)}
            alt={`${video.title}, on YouTube`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            quality={85}
            priority={Boolean(video.featured)}
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-[#08080a]/10 transition-colors duration-500 group-hover:bg-[#08080a]/40" />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#F2F0EA]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F2F0EA]/40 text-[#F2F0EA] backdrop-blur-sm">
              <PlayIcon className="h-3 w-3" />
            </span>
            Watch on YouTube
          </span>
        </div>

        <div className="pt-5">
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-[#a8342a]">
            {video.subtitle}
          </p>
          <h3 className="mt-2 font-display text-2xl font-normal uppercase leading-tight text-[#F2F0EA]">
            {video.title}
          </h3>
          <p className="mt-1.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[#6b6861]">
            {video.date} · {channel.name}
          </p>
        </div>
      </a>
    </motion.article>
  );
}
