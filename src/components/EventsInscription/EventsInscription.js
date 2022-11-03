import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { addUserToEvent, removeEvent } from "../../lib/api";

import { useAuth } from "../../context/AuthContext";

import './EventsInscription.css'

const EventsInscription = (props) => {
  const { user, role } = useAuth();

  const params = useParams();

  const { eventId } = params;

  const { sendRequest, status, error } = useHttp(addUserToEvent);

  const { onAddedComment } = props;

  useEffect(() => {
    if (status === "completed" && !error) {
      //onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (role === 'user') {
      sendRequest({ userData: { email: user.email }, eventId: eventId });
    }
    if (role === 'admin') {
      alert("Borrando/modificando evento")
    }
  };

  const removeEventFromDatabase = async (eventId) => {
  }

  return (
    <form onSubmit={submitFormHandler}>
      {status === "pending" && <div className="centered">Cargando</div>}

      <div>
        {role === 'user' && <button className="btn btn-primary ">Inscribirme</button>}
        {role === 'admin' && <button className="btn btn-primary" id="event-button">Modificar evento</button>}
        {role === 'admin' && <button className="btn btn-primary" id="event-button" onClick={ () => {removeEventFromDatabase(eventId)}} >Borrar evento</button>}
      </div>
    </form>
  );
};

export default EventsInscription;
