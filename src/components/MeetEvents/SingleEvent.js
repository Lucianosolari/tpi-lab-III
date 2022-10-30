import React from "react";
import EventsCard from "../EventsCard/EventsCard";

const SingleEvent = ({ eventSingle }) => {
  console.log(eventSingle);
  return (
    <EventsCard>
      <p>{eventSingle.date}</p>
      <p>{eventSingle.title}</p>
      <p>{eventSingle.organizer}</p>
      <p>{eventSingle.location}</p>
      <p>{eventSingle.description}</p>
    </EventsCard>
  );
};

export default SingleEvent;
