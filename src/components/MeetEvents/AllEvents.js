import { useEffect } from "react";

// import LoadingSpinner from '../components/UI/LoadingSpinner';
// import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from "../../hooks/use-http";
import { getAllEvents } from "../../lib/api";
import EventsList from "./EventsList";

const AllEvents = () => {
  const {
    sendRequest,
    status,
    data: loadedEvents,
    error,
  } = useHttp(getAllEvents, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  // if (status === 'pending') {
  //   return (
  //     <div className='centered'>
  //       <LoadingSpinner />
  //     </div>
  //   );
  // }

  if (status === "pending") {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedEvents || loadedEvents.length === 0)) {
    return <p>Página no encontrada</p>;
  }

  return <EventsList events={loadedEvents} />;
};

export default AllEvents;
