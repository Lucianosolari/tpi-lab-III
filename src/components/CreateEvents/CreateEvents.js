import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EventsForm from "../EventsForm/EventsForm";

import useHttp from "../../hooks/use-http";
import { addEvent } from "../../lib/api";

const CreateEvents = () => {
  const { sendRequest, status } = useHttp(addEvent);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/events");
    }
  }, [status, navigate]);

  const addEventHandler = (eventData) => {
    sendRequest(eventData);
  };

  return <EventsForm onAddEvent={addEventHandler} />;
};

export default CreateEvents;
