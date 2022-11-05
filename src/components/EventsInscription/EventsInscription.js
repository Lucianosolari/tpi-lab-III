import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { addEventToUser, removeEvent } from "../../lib/api";

import { useAuth } from "../../context/AuthContext";

import './EventsInscription.css'

const EventsInscription = ({ date, title, organizer, location, description }) => {

  const [deleteEventButton, setDeleteEventButton] = useState(false);

  const params = useParams();
  const { eventId } = params;
  const { role, idFromDatabase } = useAuth();

  const { sendRequest, status, error } = useHttp(addEventToUser);

  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed" && !error) {
      alert("Se ha inscripto en el evento exitosamente!");
      navigate(`/events`);
    }
    if (status === "completed" && error) {
      alert("Ha ocurrido un error.");
      navigate('/events');
    }
  }, [status, error, navigate, eventId]);

  const userEventData = {
    userEventDate: date,
    userEventTitle: title,
    userEventOrganizer: organizer,
    userEventLocation: location,
    userEventDescription : description
  }

  const submitInscriptionHandler = (event) => {
    event.preventDefault();
    if (role === 'user') {
      sendRequest({userEventData, userId: idFromDatabase, eventId: eventId });
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
        <div className="buttons">
          {role === 'user' && <button className="btn btn-primary ">Inscribirme</button>}
          {role === 'admin' && <button className="btn btn-primary" id="event-button" type="button" onClick={() => navigate(`/modify-event/${eventId}`)}>Modificar evento</button>}
          {role === 'admin' && <button className="btn btn-danger" id="event-button" onClick={() => setDeleteEventButton(true)} type='button'>Borrar evento</button>}
        </div>
        {deleteEventButton && 
            <div className="confirm">
              <p>¿Está seguro de que desea borrar el evento?</p>
              <button onClick={()=> setDeleteEventButton(false)} className="btn btn-primary">Cancelar</button>
              <button onClick={removeEventFromDatabase} type="button" className="btn btn-success">Confirmar</button>
            </div>
          }
      </form>
    </>
    
  );
};

export default EventsInscription;
