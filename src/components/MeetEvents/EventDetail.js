import { Fragment, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";

import useHttp from "../../hooks/use-http";
import { getSingleEvent } from "../../lib/api";
import SingleEvent from "./SingleEvent";

const EventDetail = () => {
  const params = useParams();

  const { eventId } = params;

  const {
    sendRequest,
    status,
    data: loadedEvent,
    error,
  } = useHttp(getSingleEvent, true);

  useEffect(() => {
    sendRequest(eventId);
  }, [sendRequest, eventId]);

  if (status === "pending") {
    return <div className="centered">Cargando</div>;
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedEvent.date) {
    return <p>No hay evento</p>;
  }

  return (
    <>
      <SingleEvent eventSingle={loadedEvent} />
      <Outlet />
    </>
  );
};

export default EventDetail;
