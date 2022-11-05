import EventsCard from "../EventsCard/EventsCard"

const UserFutureEvents = ({ date, title, organizer, location }) => {
  return (
    <EventsCard>
        <p>Fecha: {date}</p>
        <h2>Title: {title}</h2>
        <p>Organiza {organizer}</p>
        <p>Ubicación {location}</p>
    </EventsCard>
  );
};

export default UserFutureEvents