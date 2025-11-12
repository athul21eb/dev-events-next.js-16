import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { IEvent } from "@/database";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const page = async () => {


   const response = await fetch(`${BASE_URL}/api/event`);
    const { events } = await response.json();
   
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can&apos;t Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, and Conferences, All in One Place
      </p>
      <ExploreBtn />
      <div className="mt-5 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((eventDetails:IEvent) => (
            <li key={eventDetails.slug} className="list-none">
              <EventCard {...eventDetails} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
