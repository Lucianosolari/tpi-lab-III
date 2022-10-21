import React from "react";
import EventList from "../MeetEvents/EventsList";
import "./EventsCard.css";

const EventsCard = ({ children }) => {
  return <div className="future-events-container">{children}</div>;
};

export default EventsCard;
