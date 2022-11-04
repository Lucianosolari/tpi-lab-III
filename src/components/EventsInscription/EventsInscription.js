import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { addEventToUser, removeEvent } from "../../lib/api";

import { useAuth } from "../../context/AuthContext";

import './EventsInscription.css'

const EventsInscription = () => {

  const params = useParams();
  const { userId, eventId } = params;
  const { role } = useAuth();

  const { sendRequest, status, error } = useHttp(addEventToUser);

  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed" && !error) {
      alert("Se ha inscripto en el evento exitosamente!");
      navigate(`/events/${eventId}`);
    }
    if (status === "completed" && error) {
      alert("Ha ocurrido un error.");
      navigate('/events');
    }
  }, [status, error, navigate]);

  const submitInscriptionHandler = (event) => {
    event.preventDefault();
    if (role === 'user') {
      sendRequest({ userId: userId, eventId: eventId });
    }
  };

  const removeEventFromDatabase = async () => {
    await removeEvent(eventId);
    navigate('/events');
  }

  return (
    <>
      <form onSubmit={submitInscriptionHandler}>
        {status === "pending" && <div className="centered">Cargando</div>}

        <div>
          {role === 'user' && <button className="btn btn-primary ">Inscribirme</button>}
          {role === 'admin' && <button className="btn btn-primary" id="event-button" type="button" onClick={() => navigate(`/modify-event/${eventId}`)}>Modificar evento</button>}
          {role === 'admin' && <button className="btn btn-primary" id="event-button" onClick={removeEventFromDatabase} type='button'>Borrar evento</button>}
        </div>
      </form>
    </>
    
  );
};

export default EventsInscription;
