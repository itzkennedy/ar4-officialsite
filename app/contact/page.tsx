"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Newsletter } from "@/components/Newsletter";
import { Reveal } from "@/components/animations";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/SocialLinks";
import { ArrowIcon, ChevronRightIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";
import { eventTypes, budgetRanges } from "@/lib/events";

type FormStatus = "idle" | "error" | "success";

const contactChannels = [
  {
    label: "Management",
    email: "management@reeplay.ng",
    note: "Business, partnerships",
  },
  {
    label: "Press",
    email: "press@reeplay.ng",
    note: "Interviews, features, media",
  },
  {
    label: "Collaborations",
    email: "collab@reeplay.ng",
    note: "Features, production, remixes",
  },
];

interface BookingForm {
  name: string;
  email: string;
  phone: string;
  organization: string;
  eventName: string;
  eventDate: string;
  eventLocation: string;
  venue: string;
  attendance: string;
  eventType: string;
  budgetRange: string;
  message: string;
}

const emptyForm: BookingForm = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  eventName: "",
  eventDate: "",
  eventLocation: "",
  venue: "",
  attendance: "",
  eventType: "",
  budgetRange: "",
  message: "",
};

function FieldLabel({
  htmlFor,
  children,
  required = false,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.25em] text-[#9b9b93]">
      {children}
      {required ? <span className="text-[#D65A31]"> *</span> : null}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-[#D65A31]">
      {message}
    </p>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<BookingForm>(emptyForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submittedEmail, setSubmittedEmail] = useState("");

  const set = (key: keyof BookingForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [key]: e.target.value });
    if (fieldErrors[key]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (form.name.trim().length < 2) errors.name = "Enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email";
    if (form.eventName.trim().length < 2) errors.eventName = "Name of the event";
    if (!form.eventDate) errors.eventDate = "Pick a date";
    else if (Number.isNaN(new Date(form.eventDate).getTime()))
      errors.eventDate = "Enter a valid date";
    if (form.eventLocation.trim().length < 2) errors.eventLocation = "City and country";
    if (!form.eventType) errors.eventType = "Select an event type";
    if (!form.budgetRange) errors.budgetRange = "Select a budget range";
    return errors;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setSubmittedEmail(form.email);
    setForm(emptyForm);
  };

  const inputClass =
    "w-full border border-[#2a2a2a] bg-[#111] px-4 py-3.5 text-sm text-[#F2F0EB] placeholder:text-[#55554e] focus:border-[#D65A31] focus:outline-none";

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Book Reeplay"
          title="Contact."
          description="Bring the energy to your city. Booking enquiries and everything else."
        />

        <section className="bg-[#080808]">
          <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-28">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Reveal>
                  <p className="font-serif text-xl italic text-[#D65A31]">
                    Book Reeplay
                  </p>
                  <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal uppercase leading-[0.9] text-[#F2F0EB]">
                    Bring the energy.
                  </h2>
                  <p className="mt-6 max-w-[40ch] text-sm leading-relaxed text-[#8a8a8a]">
                    Concerts, festivals, club appearances, university and corporate events. Tell
                    us about your event and the team will come back with availability.
                  </p>
                </Reveal>

                <Reveal delay={0.1} className="mt-10">
                  <p className="font-serif text-lg italic text-[#8a8a8a]">
                    Prefer email?
                  </p>
                  <a
                    href={`mailto:${siteConfig.email.booking}`}
                    className="group mt-4 inline-flex items-center gap-3 font-mono text-sm text-[#F2F0EB] transition-colors hover:text-[#D65A31]"
                  >
                    {siteConfig.email.booking}
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[#6b6b64]">
                    Shows, festivals, appearances
                  </p>
                </Reveal>

                <Reveal delay={0.15} className="mt-12 border-t border-[#1a1a1a] pt-10">
                  <p className="font-serif text-lg italic text-[#8a8a8a]">
                    Other Enquiries
                  </p>
                  <div className="mt-4">
                    {contactChannels.map((channel, i) => (
                      <Reveal key={channel.label} delay={i * 0.05}>
                        <a
                          href={`mailto:${channel.email}`}
                          className="group flex items-baseline justify-between gap-4 border-t border-[#1a1a1a] py-5 transition-colors duration-300 hover:border-[#D65A31]"
                        >
                          <div>
                            <p className="font-display text-xl font-normal uppercase leading-none text-[#F2F0EB]">
                              {channel.label}
                            </p>
                            <p className="mt-1.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[#6b6b64]">
                              {channel.note}
                            </p>
                          </div>
                          <span className="flex items-center gap-3 font-mono text-[0.58rem] uppercase tracking-[0.15em] text-[#8a8a8a] transition-colors group-hover:text-[#D65A31]">
                            {channel.email.replace("@reeplay.ng", "")}
                            <ChevronRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </a>
                      </Reveal>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.2} className="mt-12">
                  <p className="font-serif text-lg italic text-[#8a8a8a]">
                    Follow
                  </p>
                  <SocialLinks className="mt-6 flex items-center gap-5" iconClassName="h-6 w-6" />
                  <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.25em] text-[#6b6b64]">
                    @reeplaysumtin, all platforms
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal delay={0.1}>
                  {status === "success" ? (
                    <div className="flex min-h-[560px] flex-col items-center justify-center px-8 text-center">
                      <p className="font-display text-3xl font-normal uppercase leading-none text-[#F2F0EB] sm:text-5xl">
                        Enquiry received.
                      </p>
                      <p className="mt-6 max-w-[36ch] font-serif text-lg italic leading-relaxed text-[#8a8a8a]">
                        The team will review your booking request and reply to
                        {` ${submittedEmail || siteConfig.email.booking}`} as soon as possible.
                      </p>
                      <div className="mt-10">
                        <Button variant="ghost" size="md" onClick={() => setStatus("idle")}>
                          Send Another
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={onSubmit} noValidate>
                      <p className="font-serif text-lg italic text-[#D65A31]">
                        About you
                      </p>
                      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <div>
                            <FieldLabel htmlFor="booking-name" required>
                              Name
                            </FieldLabel>
                            <input
                              id="booking-name"
                              type="text"
                              value={form.name}
                              onChange={set("name")}
                              className={inputClass}
                              placeholder="Your name"
                              autoComplete="name"
                            />
                            <FieldError message={fieldErrors.name} />
                          </div>
                          <div>
                            <FieldLabel htmlFor="booking-email" required>
                              Email
                            </FieldLabel>
                            <input
                              id="booking-email"
                              type="email"
                              value={form.email}
                              onChange={set("email")}
                              className={inputClass}
                              placeholder="you@email.com"
                              autoComplete="email"
                            />
                            <FieldError message={fieldErrors.email} />
                          </div>
                          <div>
                            <FieldLabel htmlFor="booking-phone">Phone</FieldLabel>
                            <input
                              id="booking-phone"
                              type="tel"
                              value={form.phone}
                              onChange={set("phone")}
                              className={inputClass}
                              placeholder="+234 ..."
                              autoComplete="tel"
                            />
                          </div>
                          <div>
                            <FieldLabel htmlFor="booking-org">Company / Org</FieldLabel>
                            <input
                              id="booking-org"
                              type="text"
                              value={form.organization}
                              onChange={set("organization")}
                              className={inputClass}
                              placeholder="Promoter, label, brand"
                              autoComplete="organization"
                            />
                          </div>
                        </div>

                        <p className="mt-12 font-serif text-lg italic text-[#D65A31]">
                          The event
                        </p>
                        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <div>
                            <FieldLabel htmlFor="booking-event" required>
                              Event Name
                            </FieldLabel>
                            <input
                              id="booking-event"
                              type="text"
                              value={form.eventName}
                              onChange={set("eventName")}
                              className={inputClass}
                              placeholder="Name of the event"
                            />
                            <FieldError message={fieldErrors.eventName} />
                          </div>
                          <div>
                            <FieldLabel htmlFor="booking-type" required>
                              Event Type
                            </FieldLabel>
                            <select
                              id="booking-type"
                              value={form.eventType}
                              onChange={set("eventType")}
                              className={inputClass}
                            >
                              <option value="" disabled>
                                Select a type
                              </option>
                              {eventTypes.map((t) => (
                                <option key={t} value={t}>
                                  {t}
                                </option>
                              ))}
                            </select>
                            <FieldError message={fieldErrors.eventType} />
                          </div>
                          <div>
                            <FieldLabel htmlFor="booking-date" required>
                              Event Date
                            </FieldLabel>
                            <input
                              id="booking-date"
                              type="date"
                              value={form.eventDate}
                              onChange={set("eventDate")}
                              className={inputClass}
                            />
                            <FieldError message={fieldErrors.eventDate} />
                          </div>
                          <div>
                            <FieldLabel htmlFor="booking-location" required>
                              Event Location
                            </FieldLabel>
                            <input
                              id="booking-location"
                              type="text"
                              value={form.eventLocation}
                              onChange={set("eventLocation")}
                              className={inputClass}
                              placeholder="City, Country"
                            />
                            <FieldError message={fieldErrors.eventLocation} />
                          </div>
                          <div>
                            <FieldLabel htmlFor="booking-venue">Venue</FieldLabel>
                            <input
                              id="booking-venue"
                              type="text"
                              value={form.venue}
                              onChange={set("venue")}
                              className={inputClass}
                              placeholder="Venue name"
                            />
                          </div>
                          <div>
                            <FieldLabel htmlFor="booking-attendance">Expected Attendance</FieldLabel>
                            <input
                              id="booking-attendance"
                              type="text"
                              value={form.attendance}
                              onChange={set("attendance")}
                              className={inputClass}
                              placeholder="Approx. crowd size"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <FieldLabel htmlFor="booking-budget" required>
                              Budget Range
                            </FieldLabel>
                            <select
                              id="booking-budget"
                              value={form.budgetRange}
                              onChange={set("budgetRange")}
                              className={inputClass}
                            >
                              <option value="" disabled>
                                Select a range
                              </option>
                              {budgetRanges.map((b) => (
                                <option key={b} value={b}>
                                  {b}
                                </option>
                              ))}
                            </select>
                            <FieldError message={fieldErrors.budgetRange} />
                          </div>
                        </div>

                        <div className="mt-10">
                          <FieldLabel htmlFor="booking-message">Details</FieldLabel>
                          <textarea
                            id="booking-message"
                            rows={5}
                            value={form.message}
                            onChange={set("message")}
                            className={`${inputClass} resize-none`}
                            placeholder="Tell us about the event, set length, riders, anything we should know."
                          />
                        </div>

                        <div className="hidden" aria-hidden="true">
                          <label htmlFor="booking-website">Website</label>
                          <input
                            id="booking-website"
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            onChange={() => {}}
                          />
                        </div>

                        {status === "error" ? (
                          <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[#D65A31]">
                            Check the highlighted fields and try again.
                          </p>
                        ) : null}

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <Button type="submit" variant="primary" size="lg">
                            Send Enquiry
                            <ArrowIcon className="h-3.5 w-3.5" />
                          </Button>
                          <p className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-[#55554e]">
                            Protected from spam
                          </p>
                        </div>
                    </form>
                  )}
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}