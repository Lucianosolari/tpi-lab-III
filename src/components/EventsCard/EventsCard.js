import React from "react";
import "./EventsCard.css";

const EventsCard = ({ children }) => {
  return <li className="future-events-container">{children}</li>;
};

export default EventsCard;
