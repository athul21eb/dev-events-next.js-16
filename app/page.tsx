import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { IEvent } from "@/database";
import { events } from "@/lib/constants";
import { cacheLife } from "next/cache";
import { Suspense } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const page = async () => {

  // "use cache"
  // cacheLife("hours");

  // const response = await fetch(`${BASE_URL}/api/event`);
  // const { events } = await response.json();

  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can&apos;t Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, and Conferences, All in One Place
      </p>
      <Suspense fallback={<div>Loading....</div>}>
        <ExploreBtn />
      </Suspense>

      <div className="mt-5 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          <Suspense fallback={<div>Loading....</div>}>
            {events.map((eventDetails: IEvent) => (
              <li key={eventDetails.slug} className="list-none">
                <EventCard {...eventDetails} />
              </li>
            ))}
          </Suspense>
        </ul>
      </div>
    </section>
  );
};

export default page;
