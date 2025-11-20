import EventsLoading from "@/components/EventsLoading";
import ExploreBtn from "@/components/ExploreBtn";
import FeaturedEvents from "@/components/FeaturedEvents";

import { Suspense } from "react";

const page = async () => {
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

        <Suspense fallback={<EventsLoading />}>
          <FeaturedEvents />
        </Suspense>
      </div>
    </section>
  );
};

export default page;
