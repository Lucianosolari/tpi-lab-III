import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FutureEvents from "./FutureEvents";

const EventList = ({ events }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  return (
    <Fragment>
      <section className="gradient-custom row d-flex justify-content-center align-items-center h-100">
        <ul>
          {events.map((meet) => (
            <FutureEvents
              key={meet.id}
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
