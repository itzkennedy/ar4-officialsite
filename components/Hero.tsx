"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { artistImages } from "@/lib/images";
import { siteConfig } from "@/lib/site";
import { SocialLinks } from "@/components/SocialLinks";
import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-[#080808]">
      <div className="absolute inset-0">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.06 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <Image
            src={artistImages.hero.square}
            alt="Reeplay"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/72 to-[#080808]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/40" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1480px] flex-col justify-end px-5 pb-36 sm:px-8 md:pb-40">
        <div className="max-w-3xl">
          <motion.h1
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3.5rem,12vw,8.5rem)] font-normal uppercase leading-[0.86] text-[#F2F0EB]"
          >
            Ree<span className="text-[#D65A31]">play</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-serif text-2xl italic leading-snug text-[#9b9b93] sm:text-3xl"
          >
            Raw evolved energy, playing loud all year.
          </motion.p>

          <motion.div
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <ButtonLink
              href={siteConfig.streaming[0].url}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              Listen Now
            </ButtonLink>
            <ButtonLink href="/videos" variant="ghost" size="lg" showArrow>
              Watch Videos
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex items-center gap-4"
          >
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[#6b6b64]">
              Follow
            </span>
            <SocialLinks iconClassName="h-[18px] w-[18px]" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 right-0 z-10 hidden items-center gap-3 p-8 md:flex"
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[#6b6b64]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-12 w-px bg-[#D65A31]"
        />
      </motion.div>
    </section>
  );
}
