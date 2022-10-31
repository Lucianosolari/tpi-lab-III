import EventsCard from "../EventsCard/EventsCard";

import { Link } from "react-router-dom";

const FutureEvents = ({ date, title, organizer, location, id }) => {
  return (
    <EventsCard>
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{organizer}</p>
      <p>{location}</p>

      <Link className="btn" to={`/event/${id}`}>
        Ingresar
      </Link>
    </EventsCard>
  );
};

export default FutureEvents;
