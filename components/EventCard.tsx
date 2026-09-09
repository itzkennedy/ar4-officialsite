import type { LiveEvent } from "@/lib/events";

export function formatEventDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-NG", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function formatEventDay(iso: string) {
  return new Date(`${iso}T00:00:00`).getDate().toString().padStart(2, "0");
}

export function formatEventMonth(iso: string) {
  return new Date(`${iso}T00:00:00`)
    .toLocaleDateString("en-NG", { month: "short" })
    .toUpperCase();
}

export function EventRow({ event }: { event: LiveEvent }) {
  const ticketsAvailable = event.ticketUrl && event.ticketStatus !== "soldout";

  return (
    <div
      className="group grid grid-cols-1 items-end gap-6 border-t border-[#1a1a1a] py-8 transition-colors duration-300 hover:border-[#a8342a] sm:grid-cols-12 sm:gap-4 lg:py-10"
    >
      <div className="flex items-center gap-6 sm:col-span-3">
        <p className="font-display text-5xl font-normal leading-none text-[#a8342a] tabular-nums sm:text-6xl">
          {formatEventDay(event.date)}
        </p>
        <p className="font-display text-2xl font-normal uppercase leading-none text-[#F2F0EB]">
          {formatEventMonth(event.date)}
        </p>
      </div>

      <div className="sm:col-span-5">
        <p className="font-display text-2xl font-normal uppercase leading-tight text-[#F2F0EB] sm:text-3xl">
          {event.city}
        </p>
        <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.25em] text-[#6b6b64]">
          {event.country}
        </p>
        {event.venue ? (
          <p className="mt-3 text-sm text-[#8a8a8a]">{event.venue}</p>
        ) : (
          <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[#55554e]">
            Venue TBA
          </p>
        )}
      </div>

      <div className="flex items-center gap-4 sm:col-span-4 sm:justify-end">
        {event.ticketStatus === "soldout" ? (
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#6b6b64]">
            Sold Out
          </span>
        ) : ticketsAvailable ? (
          <a
            href={event.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#F2F0EB] px-7 py-3 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[#080808] transition-colors duration-300 hover:bg-[#a8342a] hover:text-[#F2F0EB]"
          >
            Get Tickets
            <span aria-hidden="true" className="text-base leading-none">→</span>
          </a>
        ) : (
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[#6b6b64]">
            Tickets Soon
          </span>
        )}
      </div>
    </div>
  );
}