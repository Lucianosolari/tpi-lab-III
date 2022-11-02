import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import EventsCard from "../EventsCard/EventsCard";
import EventsInscription from "../EventsInscription/EventsInscription";

const SingleEvent = ({ eventSingle }) => {
  const { contextTheme, setContextTheme } = useContext(ThemeContext);
  return (
    <section id={contextTheme} className={ThemeContext}>
      <section className="container vh-100">
        <div className="px-4 py-5 px-md-5 text-center ">
          <EventsCard>
            <p>{eventSingle.date}</p>
            <p>{eventSingle.title}</p>
            <p>{eventSingle.organizer}</p>
            <p>{eventSingle.location}</p>
            <p>{eventSingle.description}</p>
            <EventsInscription></EventsInscription>
          </EventsCard>
        </div>
      </section>
    </section>
  );
};

export default SingleEvent;
