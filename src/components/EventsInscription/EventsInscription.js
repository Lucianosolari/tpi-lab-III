import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { addUserToEvent } from "../../lib/api";

import { useAuth } from "../../context/AuthContext";

const EventsInscription = (props) => {
  const { user } = useAuth();
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

    // optional: Could validate here

    sendRequest({ userData: { email: user.email }, eventId: eventId });
  };

  return (
    <form onSubmit={submitFormHandler}>
      {status === "pending" && <div className="centered">Cargando</div>}

      <div>
        <button className="btn">Inscribirme</button>
      </div>
    </form>
  );
};

export default EventsInscription;
