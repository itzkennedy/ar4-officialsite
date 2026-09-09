import { getUpcomingEvents, emptyStateCopy } from "@/lib/events";
import { SectionHeader } from "@/components/SectionHeader";
import { EventRow } from "@/components/EventCard";
import { Reveal } from "@/components/animations";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function LiveSection() {
  const upcoming = getUpcomingEvents().slice(0, 3);

  return (
    <section className="border-t border-[#1a1a1a] bg-[#08080a]">
      <div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 md:py-32">
        <SectionHeader eyebrow="On Stage" title="Live" />

        <Reveal className="mt-14">
          {upcoming.length > 0 ? (
            <div>
              {upcoming.map((event) => (
                <EventRow key={event.id} event={event} />
              ))}
              <div className="flex justify-end border-t border-[#1a1a1a] pt-6">
                <ButtonLink href="/live" variant="ghost" size="md" showArrow>
                  View All Shows
                </ButtonLink>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="font-serif text-xl italic text-[#a8342a]">
                  {emptyStateCopy.subheading}
                </p>
                <p className="mt-5 max-w-[34ch] font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal uppercase leading-[0.9] text-[#F2F0EA]">
                  Right now, the room is the world.
                </p>
                <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-[#8a8a8a]">
                  When AR4 steps out, shows and appearances will be listed here. Until then,
                  the era lives online, and the books are open.
                </p>
              </div>
              <div className="lg:col-span-4">
                <ButtonLink href="/contact" variant="primary" size="lg" showArrow>
                  Book AR4
                </ButtonLink>
                <p className="mt-5 border-l border-[#a8342a] pl-5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#6b6861]">
                  {siteConfig.emailDisplay}
                </p>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
