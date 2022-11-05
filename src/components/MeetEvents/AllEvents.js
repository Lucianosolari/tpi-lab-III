import { useContext, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import useHttp from "../../hooks/use-http";
import { getAllEvents } from "../../lib/api";

import EventsList from "./EventsList";

import "./AllEvents.css";

const AllEvents = () => {
  const { contextTheme } = useContext(ThemeContext);
  const {
    sendRequest,
    status,
    data: loadedEvents,
    error,
  } = useHttp(getAllEvents, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const { loading, user, name } = useAuth();

  if (status === "pending") {
    return <p>Cargando eventos...</p>;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedEvents || loadedEvents.length === 0)) {
    return <p>No hay eventos</p>;
  }

  if (loading || !user) return <h1>Cargando...</h1>;
    
  return (
      <section id={contextTheme}>
        <section className="container vh-100">
          <div className="px-4 py-5 px-md-5 text-center ">
            <h2 className={ThemeContext} id="welcome">
              Bienvenido {user.email}, disfruta la página!!
            </h2>
            <EventsList events={loadedEvents} />
        </div>
        </section>
      </section>
  );
};

export default AllEvents;
