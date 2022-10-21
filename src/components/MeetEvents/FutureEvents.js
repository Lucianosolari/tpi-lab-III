import React from "react";
import { Link } from "react-router-dom";
import EventsCard from "../EventsCard/EventsCard";

const FutureEvents = ({ id, date, title, organizer, location }) => {
  return (
    <>
      <EventsCard>
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{organizer}</p>
        <p>{location}</p>

        <button type="button">Inscribirme</button>
      </EventsCard>
    </>
  );
};

export default FutureEvents;
