import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FutureEvents from "./FutureEvents";

const EventList = ({ events }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const changeSortingHandler = () => {
    navigate(location.pathname, {
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };

  return (
    <Fragment>
      <div>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
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
    </Fragment>
  );
};
export default EventList;
