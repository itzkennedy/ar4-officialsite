import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/animations";
import { ButtonLink } from "@/components/ui/Button";

export function AntiWorldSection() {
  return (
    <section className="border-t border-[#1a1a1a] bg-[#0c0c0c]">
      <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeader
          eyebrow="The Collective"
          title={
            <>
              Anti<span className="text-[#D65A31]">World</span>
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="max-w-[52ch] text-xl leading-relaxed text-[#9b9b93]">
              Reeplay is a member of <span className="text-[#F2F0EB]">Anti World Gangstars</span>.
              His work with the collective includes <span className="text-[#F2F0EB]">Gang Business</span>{" "}
              (2019), <span className="text-[#F2F0EB]">Nothing Changed</span> and{" "}
              <span className="text-[#F2F0EB]">Out On Bail</span>.
            </p>
            <p className="mt-6 max-w-[52ch] text-xl leading-relaxed text-[#6b6b64]">
              Gang Business · Nothing Changed · Out On Bail. Produced by Cross.
            </p>

            <div className="mt-12">
              <ButtonLink href="/about" variant="ghost" size="lg" showArrow>
                The Story
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal className="flex items-end lg:col-span-5" delay={0.15}>
            <p className="max-w-[22ch] border-l border-[#D65A31] pl-6 font-serif text-2xl italic leading-snug text-[#F2F0EB]">
              A collective connection, presented through the music.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
