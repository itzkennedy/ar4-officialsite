"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { Release } from "@/lib/releases";


export function ReleaseCard({ release, index = 0, large = false }: { release: Release; index?: number; large?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/music/${release.slug}`} className="block" aria-label={`${release.title}, view release details`}>
        <div className={`relative overflow-hidden ${large ? "aspect-[4/5]" : "aspect-square"}`}>
          <Image
            src={release.artwork}
            alt={`${release.title}, cover artwork`}
            fill
            sizes={large ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
            quality={85}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/75 via-[#080808]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 translate-y-1 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="font-serif text-lg italic text-[#F2F0EB]">
              View release <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
        <div className="flex items-baseline justify-between gap-4 pt-4">
          <div>
            <h3 className={`font-display font-normal uppercase leading-none text-[#F2F0EB] ${large ? "text-2xl" : "text-lg"}`}>
              {release.title}
            </h3>
            {release.artist ? (
              <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-[#9b9b93]">
                {release.artist}
              </p>
            ) : null}
          </div>
          <span className="shrink-0 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-[#55554e]">
            {release.year}
          </span>
        </div>
        <p className="mt-2 font-mono text-[0.58rem] uppercase tracking-[0.15em] text-[#6b6b64]">
          {release.type} · {release.trackCount} {release.trackCount === 1 ? "Track" : "Tracks"}
        </p>
      </Link>
    </motion.article>
  );
}