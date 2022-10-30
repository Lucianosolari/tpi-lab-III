import EventsCard from "../EventsCard/EventsCard";
import { useNavigate } from "react-router-dom";

const FutureEvents = ({ date, title, organizer, location }) => {

  const navigate = useNavigate();
  
  const accessToEventHandler = () => {
    navigate('/event-detail');
  };

  return (
      <EventsCard>
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{organizer}</p>
        <p>{location}</p>
        <button onClick={accessToEventHandler} type="button">Ingresar</button>
      </EventsCard>
  );
};

export default FutureEvents;
