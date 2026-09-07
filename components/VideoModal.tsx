"use client";

import { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { watchOnYouTube, type Video } from "@/lib/videos";
import { CloseIcon } from "@/components/icons";

export function VideoModal({
  video,
  onClose,
}: {
  video: Video | null;
  onClose: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [video, handleClose]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#080808]/95 p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Video: ${video.title}`}
          onClick={handleClose}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={handleClose}
            className="absolute right-5 top-5 z-10 p-2 text-[#F2F0EB] transition-colors hover:text-[#D65A31]"
            aria-label="Close video"
          >
            <CloseIcon className="h-7 w-7" />
          </button>

          <motion.div
            className="w-full max-w-5xl"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 16 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video w-full bg-[#111]">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&playsinline=1&rel=0`}
                title={video.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-5 flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-normal uppercase text-[#F2F0EB]">
                  {video.title}
                </h3>
                <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[#9b9b93]">
                  {video.subtitle} · {video.date}
                </p>
              </div>
              <a
                href={watchOnYouTube(video.youtubeId)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 border border-[#262626] px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[#F2F0EB] transition-colors hover:border-[#D65A31] hover:text-[#D65A31]"
              >
                Watch on YouTube ↗
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}