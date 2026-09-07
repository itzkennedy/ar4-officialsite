"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { getVideoThumbnail, watchOnYouTube, type Video } from "@/lib/videos";
import { PlayIcon } from "@/components/icons";

export function VideoCard({
  video,
  onPlay,
  index = 0,
  featured = false,
}: {
  video: Video;
  onPlay: (video: Video) => void;
  index?: number;
  featured?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="relative overflow-hidden bg-[#111]">
        <button
          type="button"
          onClick={() => onPlay(video)}
          className="block w-full text-left"
          aria-label={`Play ${video.title} on this site`}
        >
          <div className={featured ? "aspect-[16/9]" : "aspect-video"}>
            <Image
              src={getVideoThumbnail(video.youtubeId, featured ? "maxresdefault" : "sddefault")}
              alt={`${video.title}, video thumbnail`}
              fill
              sizes={
                featured
                  ? "(min-width: 1024px) 60vw, (min-width: 640px) 50vw, 100vw"
                  : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              }
              quality={90}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
          <div className="absolute inset-0 bg-[#080808]/15 transition-colors duration-500 group-hover:bg-[#080808]/40" />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-3 opacity-100 transition-all duration-500 md:opacity-0 md:group-hover:opacity-100">
            <span className="flex h-11 w-11 items-center justify-center bg-[#D65A31] text-[#F2F0EB]">
              <PlayIcon className="h-4 w-4" />
            </span>
            <span className="font-serif text-lg italic text-[#F2F0EB]">
              {featured ? "Play video" : "Play now"}
            </span>
          </span>
        </button>
      </div>

      <div className="pt-5">
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-[#D65A31]">
            {video.tag}
          </p>
          <a
            href={watchOnYouTube(video.youtubeId)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch ${video.title} on YouTube`}
            className="inline-flex items-center gap-1.5 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-[#55554e] transition-colors hover:text-[#D65A31]"
          >
            YouTube ↗
          </a>
        </div>
        <h3 className="mt-2 font-display text-xl font-normal uppercase leading-tight text-[#F2F0EB] sm:text-2xl">
          {video.title}
        </h3>
        <p className="mt-1.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[#6b6b64]">
          {video.subtitle}
        </p>
      </div>
    </motion.article>
  );
}
