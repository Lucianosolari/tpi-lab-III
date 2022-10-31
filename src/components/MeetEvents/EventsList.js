import { Fragment } from "react";

import "./EventsList.css";

import FutureEvents from "./FutureEvents";

const EventList = ({ events }) => {
  return (
    <Fragment>
      <section className="gradient-custom row d-flex justify-content-center align-items-center h-100">
        <ul className="events-list">
          {events.map((meet) => (
            <FutureEvents
              key={meet.id}
              id={meet.id}
              date={meet.date}
              title={meet.title}
              organizer={meet.organizer}
              location={meet.location}
            />
          ))}
        </ul>
      </section>
    </Fragment>
  );
};
export default EventList;
