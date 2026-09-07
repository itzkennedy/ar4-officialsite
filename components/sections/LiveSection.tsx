import { getUpcomingEvents, emptyStateCopy } from "@/lib/events";
import { SectionHeader } from "@/components/SectionHeader";
import { EventRow } from "@/components/EventCard";
import { Reveal } from "@/components/animations";
import { ButtonLink } from "@/components/ui/Button";

export function LiveSection() {
  const upcoming = getUpcomingEvents().slice(0, 3);

  return (
    <section className="border-t border-[#1a1a1a] bg-[#0c0c0c]">
      <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeader eyebrow="On Stage" title="Upcoming Shows" />

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
            <div className="flex flex-col items-start gap-5">
              <p className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal uppercase leading-[0.9] text-[#F2F0EB]">
                {emptyStateCopy.heading}
              </p>
              <p className="font-serif text-xl italic text-[#D65A31]">
                {emptyStateCopy.subheading}
              </p>
              <p className="max-w-[46ch] text-sm leading-relaxed text-[#8a8a8a]">
                Get notified when new shows are announced.
              </p>
              <ButtonLink href="/contact" variant="primary" size="lg">
                Book Reeplay
              </ButtonLink>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}