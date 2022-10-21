import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FutureEvents from "./FutureEvents";

const EventList = ({ quotes }) => {
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
        {quotes.map((quote) => (
          <FutureEvents
            key={quote.id}
            date={quote.date}
            title={quote.title}
            organizer={quote.organizer}
            location={quote.location}
          />
        ))}
      </ul>
    </Fragment>
  );
};
export default EventList;
