import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EventsForm from "../components/EventsForm/EventsForm";

import useHttp from "../hooks/use-http";
import { addEvent } from "../lib/api";

const CreateEvents = () => {
  const { sendRequest, status } = useHttp(addEvent);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/future-events");
    }
  }, [status, navigate]);

  const addEventHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return <EventsForm onAddEvent={addEventHandler} />;
};

export default CreateEvents;