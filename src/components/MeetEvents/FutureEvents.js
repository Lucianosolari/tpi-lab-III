import EventsCard from "../EventsCard/EventsCard";

import { Link, useParams } from "react-router-dom";

const FutureEvents = ({ date, title, organizer, location, id }) => {

  const params = useParams();
  const {userId} = params;
  
  return (
      <EventsCard>
        <p>Fecha: {date}</p>
        <h2>{title}</h2>
        <p>Organiza: {organizer}</p>
        <p>Ubicación: {location}</p>

        <Link className="btn btn-primary" to={`/event/${userId}/${id}`}>
          Ingresar
        </Link>
      </EventsCard>
  );
};

export default FutureEvents;
