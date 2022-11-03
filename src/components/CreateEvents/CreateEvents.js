import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EventsForm from "../EventsForm/EventsForm";

import useHttp from "../../hooks/use-http";
import { addEvent } from "../../lib/api";
import { useAuth } from "../../context/AuthContext";

const CreateEvents = () => {
  const { sendRequest, status } = useHttp(addEvent);
  const navigate = useNavigate();
  const {role} = useAuth();

  useEffect(() => {
    if (status === "completed") {
      navigate("/events");
    }
  }, [status, navigate]);

  const addEventHandler = (eventData) => {
    sendRequest(eventData);
  };

  return (
    <>
      {role === 'admin' && <EventsForm onAddEvent={addEventHandler} />}
      {role === 'user' && <h1>Los usuarios no pueden acceder a esta página!!</h1>}
    </>
  );
};

export default CreateEvents;
