import EventsCard from "../EventsCard/EventsCard";

import { Link } from "react-router-dom";

const FutureEvents = ({ date, title, organizer, location, id }) => {
  
  return (
      <EventsCard>
        <p>Fecha: {date}</p>
        <h2>{title}</h2>
        <p>Organiza: {organizer}</p>
        <p>Ubicación: {location}</p>

        <Link className="btn btn-primary" to={`/event/${id}`}>
          Ingresar
        </Link>
      </EventsCard>
  );
};

export default FutureEvents;
