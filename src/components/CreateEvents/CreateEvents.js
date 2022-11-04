import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EventsForm from "../EventsForm/EventsForm";

import useHttp from "../../hooks/use-http";
import { addEvent } from "../../lib/api";
import { useAuth } from "../../context/AuthContext";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const CreateEvents = () => {
  const { sendRequest, status } = useHttp(addEvent);
  const navigate = useNavigate();
  const {role} = useAuth();

  const { contextTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (status === "completed") {
      navigate("/events");
    }
  }, [status, navigate]);

  const addEventHandler = (eventData) => {
    sendRequest(eventData);
  };

  return (
    <section id={contextTheme}>
      <div className="container vh-100">
        {role === 'admin' && <EventsForm onAddEvent={addEventHandler} />}
        {role === 'user' && <h1>Los usuarios no pueden acceder a esta página!!</h1>}
      </div>
    </section>
  );
};

export default CreateEvents;
