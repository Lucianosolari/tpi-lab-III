import { useContext, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

// import LoadingSpinner from '../components/UI/LoadingSpinner';
// import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from "../../hooks/use-http";
import { getAllEvents } from "../../lib/api";
import EventsList from "./EventsList";
import "./AllEvents.css";

const AllEvents = () => {
  const { contextTheme, setContextTheme } = useContext(ThemeContext);
  const { user } = useAuth();
  const {
    sendRequest,
    status,
    data: loadedEvents,
    error,
  } = useHttp(getAllEvents, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const { loading, name } = useAuth();

  if (status === "pending") {
    return <p>Cargando eventos...</p>;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedEvents || loadedEvents.length === 0)) {
    return <p>No hay eventos</p>;
  }

  if (loading) return <h1>Cargando...</h1>;

  return (
    <section id={contextTheme}>
      <h2 className={ThemeContext} id="welcome">
        Bienvenido {name}, disfruta la página!!
      </h2>
      <EventsList events={loadedEvents} />;
    </section>
  );
};

export default AllEvents;
