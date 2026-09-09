"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { galleryImages, type GalleryImage } from "@/lib/gallery";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Newsletter } from "@/components/Newsletter";
import { StaggerGroup, StaggerItem } from "@/components/animations";
import { CloseIcon, ChevronRightIcon } from "@/components/icons";

function GalleryGrid({ onOpen }: { onOpen: (image: GalleryImage) => void }) {
  return (
    <StaggerGroup className="columns-2 gap-3 sm:gap-4 lg:columns-3 [&>*]:mb-3 sm:[&>*]:mb-4">
      {galleryImages.map((image) => (
        <StaggerItem key={image.id} className="break-inside-avoid">
          <button
            type="button"
            onClick={() => onOpen(image)}
            className="group relative block w-full overflow-hidden bg-[#111] text-left"
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1400}
              height={image.span === "tall" ? 1750 : image.span === "wide" ? 1050 : 1400}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className={`h-auto w-full object-cover ${image.span === "tall" ? "aspect-[4/5]" : "aspect-square"} transition-transform duration-700 ease-out group-hover:scale-[1.04]`}
            />
            <span className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="block font-serif text-base italic text-[#F2F0EB]">
                {image.caption}
              </span>
            </span>
          </button>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

export default function GalleryPage() {
  const [active, setActive] = useState<GalleryImage | null>(null);
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const close = () => setActive(null);
  const navigate = useCallback((dir: 1 | -1) => {
    if (!active) return;
    const idx = galleryImages.findIndex((g) => g.id === active.id);
    const next = galleryImages[(idx + dir + galleryImages.length) % galleryImages.length];
    setActive(next);
  }, [active]);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowLeft") {
        navigate(-1);
      } else if (e.key === "ArrowRight") {
        navigate(1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, navigate]);

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Archive"
          title="Gallery."
          description="Portraits and fragments from the visual archive of AR4."
        />

        <section className="bg-[#080808]">
          <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 md:py-24">
            <GalleryGrid onOpen={setActive} />
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex flex-col bg-[#080808]/97"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            onClick={close}
          >
            <div className="flex items-center justify-between p-5 sm:p-8">
              <p className="font-serif text-lg italic text-[#9b9b93]">
                {active.caption}
              </p>
              <button
                type="button"
                ref={closeRef}
                onClick={close}
                className="p-2 text-[#F2F0EB] transition-colors hover:text-[#a8342a]"
                aria-label="Close"
              >
                <CloseIcon className="h-7 w-7" />
              </button>
            </div>

            <div
              className="relative flex flex-1 items-center justify-center px-4"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(e) => {
                if (touchStartX.current === null) return;
                const endX = e.changedTouches[0]?.clientX;
                if (endX === undefined) return;
                const delta = endX - touchStartX.current;
                touchStartX.current = null;
                if (Math.abs(delta) > 48) navigate(delta > 0 ? -1 : 1);
              }}
            >
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="group absolute left-2 z-10 p-3 sm:left-6"
                aria-label="Previous image"
              >
                <ChevronRightIcon className="h-8 w-8 rotate-180 text-[#55554e] transition-colors group-hover:text-[#F2F0EB]" />
              </button>

              <motion.div
                key={active.id}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="max-h-[80vh] max-w-4xl"
              >
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={1200}
                  height={1200}
                  className="max-h-[80vh] w-auto object-contain"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                />
              </motion.div>

              <button
                type="button"
                onClick={() => navigate(1)}
                className="group absolute right-2 z-10 p-3 sm:right-6"
                aria-label="Next image"
              >
                <ChevronRightIcon className="h-8 w-8 text-[#55554e] transition-colors group-hover:text-[#F2F0EB]" />
              </button>
            </div>

            <div className="p-5 text-center sm:p-8">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[#55554e]">
                {String(galleryImages.findIndex((g) => g.id === active.id) + 1).padStart(2, "0")} /{" "}
                {String(galleryImages.length).padStart(2, "0")}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
