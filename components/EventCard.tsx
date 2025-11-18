import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, location, date, slug, time }: Props) => {
  return (
    <Link href={`/event/${slug}`} id="event-card">
      <Image
        src={image}
        alt={title}
        width={410}
        height={600}
        className="poster"
      />

      <div className="flex flex-row gap-2 ">
        <Image
          src="/icons/pin.svg"
          alt="location icon"
          width={14}
          height={14}
        />
        <p className="location-text">{location}</p>
      </div>

      <p className="title">{title}</p>

      <div className="datetime">
        <div>
          <Image
            src="/icons/calendar.svg"
            alt="calendar icon"
            width={14}
            height={14}
          />
          <p>{date}</p>
        </div>
        <div>
          <Image
            src="/icons/clock.svg"
            alt="clock icon"
            width={14}
            height={14}
          />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
