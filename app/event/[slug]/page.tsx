import BookEvent from "@/components/BookEvent";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";
import { getSimilarEventsBySlug } from "@/lib/actions/event.actions";
import Image from "next/image";
import { notFound } from "next/navigation";

const EventDetailItem = ({
  icon,
  alt,
  label,
}: {
  icon: string;
  alt: string;
  label: string;
}) => {
  return (
    <div className="flex-row-gap-2 item-center">
      <Image src={icon} alt={alt} width={17} height={17} />
      <p>{label}</p>
    </div>
  );
};

const EventAgenda = ({ agendaItems }: { agendaItems: string[] }) => (
  <div className="agenda">
    <h2>Agenda</h2>
    <ul>
      {agendaItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const EventTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-row gap-1.5 flex-wrap">
    {tags.map((tag) => (
      <div className="pill" key={tag}>
        {tag}
      </div>
    ))}
  </div>
);
const bookings = 10;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const reponse = await fetch(`${BASE_URL}/api/event/${slug}`);

  const { event } = await reponse.json();

  const {
    description,
    image,
    overview,
    date,
    time,
    location,
    mode,
    agenda,
    audience,
    tags,
    organizer,
  } = event;

  if (!description) return notFound();

   const similarEvents: IEvent[] = await getSimilarEventsBySlug(slug) as unknown as IEvent[];

  return (
    <section id="event">
      <div className="header">
        <h1>Event Deatils</h1>
        <p>{description}</p>
      </div>
      <div className="details">
        <div className="content">
          <Image
            src={image}
            alt="banner"
            height={800}
            width={800}
            className="banner"
          />
          <section className="flex-col-gap-2">
            <h2>Overview</h2>
            <p>{overview}</p>
          </section>
          <section className="flex-col-gap-2">
            <h2>Event Deatils</h2>
            <EventDetailItem
              icon="/icons/calendar.svg"
              alt="calendar icon"
              label={date}
            />
            <EventDetailItem
              icon="/icons/clock.svg"
              alt="clock icon"
              label={time}
            />
            <EventDetailItem
              icon="/icons/pin.svg"
              alt="location icon"
              label={location}
            />
            <EventDetailItem
              icon="/icons/mode.svg"
              alt="mode icon"
              label={mode}
            />
            <EventDetailItem
              icon="/icons/audience.svg"
              alt="audience icon"
              label={audience}
            />
          </section>
          <EventAgenda agendaItems={agenda} />
          <section className="flex-col-gap-2">
            <h2>About the Organizer</h2>
            <p>{organizer}</p>
          </section>
          <EventTags tags={tags} />
        </div>
        <aside className="booking">
          <div className="signup-card">
            <h2>Book Your Spot</h2>
            {bookings > 0 ? (
              <p className="text-sm">
                Join {bookings} people who have already booked their spot!
              </p>
            ) : (
              <p className="text-sm">Be the first to book your spot!</p>
            )}
            <BookEvent />
          </div>
        </aside>
      </div>
      <div className="flex w-full flex-col gap-4 pt-20">
        <h2>Similar Events</h2>
        <div className="events">
          {similarEvents.length > 0 && similarEvents.map((similarEvent: IEvent) => (
                        <EventCard key={similarEvent.title} {...similarEvent} />
                    ))}
        </div>
      </div>
    </section>
  );
};

export default page;
