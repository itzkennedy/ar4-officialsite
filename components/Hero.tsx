"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { artistImages } from "@/lib/images";
import { siteConfig } from "@/lib/site";

const primaryStream = siteConfig.streaming.find((s) => s.primary);

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-[#08080a]">
      <div className="absolute inset-0">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.08 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <Image
            src={artistImages.hero.src}
            alt={artistImages.hero.alt}
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#08080a] via-[#08080a]/55 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#08080a]/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1480px] flex-col justify-end px-5 pb-24 sm:px-8 md:pb-32">
        <motion.p
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-[#8f8b82]"
        >
          one man soldier
        </motion.p>

        <motion.h1
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-display text-[clamp(5rem,22vw,16rem)] font-normal uppercase leading-[0.82] text-[#F2F0EA]"
        >
          AR<span className="text-[#a8342a]">4</span>
        </motion.h1>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <motion.p
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[34ch] font-serif text-xl italic leading-snug text-[#d8d4ca] sm:text-2xl"
          >
            Araoluwa Giwa-Osagie.
            <span className="block text-[#8f8b82]">The world of {siteConfig.era}.</span>
          </motion.p>

          <motion.a
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            href={primaryStream?.url ?? siteConfig.streaming[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 border-b border-[#F2F0EA]/30 pb-2 pt-1 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[#F2F0EA] transition-colors duration-300 hover:border-[#a8342a] hover:text-[#a8342a]"
          >
            Stream the era
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.a>
        </div>
      </div>

      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-0 left-0 z-10 hidden items-center gap-3 p-8 md:flex"
      >
        <motion.span
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-12 w-px bg-[#a8342a]"
        />
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[#6b6861]">
          Scroll
        </span>
      </motion.div>

      <Link
        href="#era"
        className="sr-only focus:not-sr-only focus:absolute focus:z-20 focus:top-20 focus:left-4 focus:bg-[#08080a] focus:px-3 focus:py-2"
      >
        Skip to the current era
      </Link>
    </section>
  );
}
