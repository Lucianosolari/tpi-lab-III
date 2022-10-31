import React from "react";
import EventsCard from "../EventsCard/EventsCard";
import EventsInscription from "../EventsInscription/EventsInscription";

const SingleEvent = ({ eventSingle }) => {
  return (
    <>
      <EventsCard>
        <p>{eventSingle.date}</p>
        <p>{eventSingle.title}</p>
        <p>{eventSingle.organizer}</p>
        <p>{eventSingle.location}</p>
        <p>{eventSingle.description}</p>
      </EventsCard>
      <EventsInscription></EventsInscription>
    </>
  );
};

export default SingleEvent;
