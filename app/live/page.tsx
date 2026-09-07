import type { Metadata } from "next";
import { getUpcomingEvents, emptyStateCopy } from "@/lib/events";
import { siteConfig } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Newsletter } from "@/components/Newsletter";
import { EventRow } from "@/components/EventCard";
import { Reveal } from "@/components/animations";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Live",
  description:
    "Reeplay live: upcoming shows, festivals and appearances. Bookings for Reeplay and Anti World Gangstars.",
};

export default function LivePage() {
  const upcoming = getUpcomingEvents();

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="On Stage"
          title="Live."
          description="Where the energy comes off the record. Shows, festivals and appearances."
        />

        <section className="bg-[#080808]">
          <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 md:py-24">
            <Reveal>
              <div className="flex items-baseline justify-between border-b border-[#1a1a1a] pb-5">
                <span className="font-serif text-lg italic text-[#D65A31]">
                  Upcoming Shows
                </span>
              </div>
            </Reveal>

            {upcoming.length > 0 ? (
              <div className="pt-2">
                {upcoming.map((event) => (
                  <EventRow key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <Reveal>
                <div className="grid grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-12">
                  <div className="lg:col-span-8">
                    <p className="font-serif text-xl italic text-[#D65A31]">
                      {emptyStateCopy.subheading}
                    </p>
                    <h2 className="mt-4 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-normal uppercase leading-[0.9] text-[#F2F0EB]">
                      {emptyStateCopy.heading}
                    </h2>
                    <p className="mt-7 max-w-[52ch] text-base leading-relaxed text-[#8a8a8a]">
                      {emptyStateCopy.body}
                    </p>
                    <div className="mt-10">
                      <ButtonLink href="/contact" variant="primary" size="lg" showArrow>
                        Book Reeplay
                      </ButtonLink>
                    </div>
                  </div>
                  <div className="flex items-end lg:col-span-4 lg:justify-end">
                    <div className="border-l border-[#2a2a2a] pl-8">
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-[#6b6b64]">
                        Booking
                      </p>
                      <a
                        href={`mailto:${siteConfig.email.booking}`}
                        className="mt-3 block font-mono text-sm text-[#F2F0EB] transition-colors hover:text-[#D65A31]"
                      >
                        {siteConfig.email.booking}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}

            <Reveal delay={0.2} className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
              <div>
                <p className="font-display text-2xl font-normal uppercase text-[#F2F0EB]">
                  Book Reeplay
                </p>
                <p className="mt-2 font-serif text-base italic text-[#8a8a8a]">
                  Live performances and appearances
                </p>
                <div className="mt-5">
                  <ButtonLink href="/contact" variant="ghost" size="md" showArrow>
                    Contact
                  </ButtonLink>
                </div>
              </div>
              <div>
                <p className="font-display text-2xl font-normal uppercase text-[#F2F0EB]">
                  Watch Live
                </p>
                <p className="mt-2 font-serif text-base italic text-[#8a8a8a]">
                  Official videos and freestyles
                </p>
                <div className="mt-5">
                  <ButtonLink href="/videos" variant="ghost" size="md" showArrow>
                    Videos
                  </ButtonLink>
                </div>
              </div>
              <div>
                <p className="font-display text-2xl font-normal uppercase text-[#F2F0EB]">
                  Stay Notified
                </p>
                <p className="mt-2 font-serif text-base italic text-[#8a8a8a]">
                  First to hear about new shows
                </p>
                <div className="mt-5">
                  <a
                    href="#newsletter"
                    className="group inline-flex items-center gap-3 font-mono text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#F2F0EB] transition-colors hover:text-[#D65A31]"
                  >
                    Join the newsletter
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}