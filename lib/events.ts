export type TicketStatus = "available" | "soldout" | "onsale";

export interface LiveEvent {
  id: string;
  date: string;
  city: string;
  country: string;
  venue?: string;
  eventName?: string;
  ticketUrl?: string;
  ticketStatus?: TicketStatus;
  featured?: boolean;
  image?: string;
  note?: string;
}

export interface EventSummary {
  label: string;
  value: string;
}

export function getUpcomingEvents(): LiveEvent[] {
  const now = new Date();
  return liveEvents
    .filter((e) => {
      const d = new Date(`${e.date}T00:00:00`);
      return d.getTime() >= now.setHours(0, 0, 0, 0);
    })
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getFeaturedEvent(): LiveEvent | null {
  return getUpcomingEvents().find((e) => e.featured) ?? null;
}

export const eventTypes = [
  "Concert",
  "Festival",
  "Club Appearance",
  "University Event",
  "Corporate Event",
  "Brand Event",
  "Private Event",
  "Other",
] as const;

export const budgetRanges = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
  "Confidential",
] as const;

export const liveEvents: LiveEvent[] = [];

export const emptyStateCopy = {
  heading: "No Upcoming Shows",
  subheading: "Check back soon.",
  body:
    "There are no confirmed live dates announced right now. New shows, festivals and appearances will appear here the moment they are confirmed.",
} as const;