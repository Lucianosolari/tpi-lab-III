import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { addUserToEvent, modifyEvent, removeEvent } from "../../lib/api";

import { useAuth } from "../../context/AuthContext";

import './EventsInscription.css'
import { useState } from "react";

const EventsInscription = (props) => {
  const { user, role } = useAuth();

  const [editEvent, setEditEvent] = useState(false);

  const params = useParams();
  const { eventId } = params;

  const { sendRequest, status, error } = useHttp(addUserToEvent);

  const { onAddedComment } = props;

  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed" && !error) {
      alert("Se ha inscripto en el evento exitosamente!");
      navigate('/events');
    }
    if (status === "completed" && error) {
      alert("Ha ocurrido un error.");
      navigate('/events');
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (role === 'user') {
      sendRequest({ userData: { email: user.email }, eventId: eventId });
    }
  };

  const removeEventFromDatabase = async () => {
    await removeEvent(eventId);
    navigate('/events');
  }

  const onEditEvent = async () => {
    await modifyEvent(eventId)
  }

  return (
    <>
      <form onSubmit={submitFormHandler}>
        {status === "pending" && <div className="centered">Cargando</div>}

        <div>
          {role === 'user' && <button className="btn btn-primary ">Inscribirme</button>}
          {role === 'admin' && <button className="btn btn-primary" id="event-button" type="button" onClick={() => setEditEvent(true)}>Modificar evento</button>}
          {role === 'admin' && <button className="btn btn-primary" id="event-button" onClick={removeEventFromDatabase} type='button'>Borrar evento</button>}
        </div>
      </form>
      {editEvent && 
      <>
        <div>
          <label>Fecha</label>
          <input type="date"></input>
        </div>
        <div>
          <button onClick={onEditEvent}>Modificar fecha</button>
          <button onClick={() => setEditEvent(false)}>Cancelar</button>
        </div>
      </>}
    </>
    
  );
};

export default EventsInscription;
