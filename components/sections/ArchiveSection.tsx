import Link from "next/link";
import Image from "next/image";
import { galleryImages } from "@/lib/gallery";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/animations";

const pick = [
  { id: "frame-04", span: "lead" },
  { id: "frame-01", span: "standard" },
  { id: "frame-02", span: "standard" },
];

export function ArchiveSection() {
  const items = pick
    .map((p) => ({ ...galleryImages.find((g) => g.id === p.id)!, span: p.span }))
    .filter((i) => i.src);

  return (
    <section className="border-t border-[#1a1a1a] bg-[#0c0c0c]">
      <div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Archive" title="Visual Record" />
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.25em] text-[#F2F0EA] transition-colors hover:text-[#a8342a]"
          >
            View the archive
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {items.map((image, i) => (
            <Reveal
              key={image.id}
              delay={i * 0.08}
              className={image.span === "lead" ? "col-span-2 lg:col-span-1" : ""}
            >
              <Link href="/gallery" className="group relative block overflow-hidden bg-[#111]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={1200}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={`w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05] ${
                    image.span === "lead" ? "aspect-[4/3] lg:aspect-square" : "aspect-square"
                  }`}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#08080a]/70 via-transparent to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-5">
                  <span className="block font-serif text-base italic text-[#F2F0EA]">
                    {image.caption}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
