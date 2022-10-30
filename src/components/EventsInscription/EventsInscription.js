import { Fragment, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleEvent } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const EventsInscription = () => {
  const params = useParams();

  const { eventId } = params;

  const { sendRequest, status, data: loadedEvent, error } = useHttp(
    getSingleEvent,
    true
  );

  useEffect(() => {
    sendRequest(eventId);
  }, [sendRequest, eventId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }

  if (!loadedEvent.text) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Outlet />
    </Fragment>
  );
};

export default EventsInscription;