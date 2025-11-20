import { IEvent } from "@/database";
import { events as EVENTS_FALLBACK } from "@/lib/constants";
import { getEvents } from "@/lib/events";
import EventCard from "./EventCard";

export default async function FeaturedEvents() {
  let events: IEvent[] = [];

  try {
    events = await getEvents();
  } catch (err) {
    console.error("Error loading events from DB:", err);
    events = EVENTS_FALLBACK as IEvent[];
  }

  return (
    <>
      {events && events.length > 0 ? (
        <ul className="events">
          {events.map((eventDetails: IEvent) => (
            <li key={eventDetails.slug} className="list-none">
              <EventCard {...eventDetails} />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
