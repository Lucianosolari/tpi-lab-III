import React from "react";

import EventsCard from "../EventsCard/EventsCard";

const FutureEvents = ({ date, title, organizer, location }) => {
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
