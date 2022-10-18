import { useEffect } from 'react';

import EventsList from '../components/quotes/QuoteList';
// import LoadingSpinner from '../components/UI/LoadingSpinner';
// import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getAllEvents } from '../lib/api';

const AllEvents = () => {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(
    getAllEvents,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  // if (status === 'pending') {
  //   return (
  //     <div className='centered'>
  //       <LoadingSpinner />
  //     </div>
  //   );
  // }

  if (status === 'pending') {
    return (
      <p>Cargando...</p>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <p>Página no encontrada</p>;
  }

  return <EventsList quotes={loadedQuotes} />;
};

export default AllEvents;