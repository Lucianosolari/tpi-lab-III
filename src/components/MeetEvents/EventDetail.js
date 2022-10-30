import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getSingleEvent } from '../../lib/api';
import EventInfo from './EventInfo';

const EventDetail = () => {
    // const params = useParams();

    // const { eventId } = params;

    // const { sendRequest, status, data: loadedEvent, error } = useHttp(
    // getSingleEvent,
    // true
    // );
  
    // useEffect(() => {
    //     sendRequest(eventId);
    // }, [sendRequest, eventId]);

    // if (status === 'pending') {
    //     <p>Cargando...</p>
    // }

    // if (error) {
    //     return <p className='centered'>{error}</p>;
    // }

  return (
    <>
        <EventInfo />
    </>
  )
}
export default EventDetail;