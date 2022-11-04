import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ThemeContext } from '../../context/ThemeContext';
import useHttp from '../../hooks/use-http';
import { getEventsWithParticipants } from '../../lib/api';

const UserEvents = () => {
  const { contextTheme } = useContext(ThemeContext);
 
  const params = useParams();
  const {userId} = params;

  const {
    sendRequest,
    status,
    data: loadedEvents,
    error,
  } = useHttp(getEventsWithParticipants, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  
  const eventsWithParticipants = "";

  return (
    <section id={contextTheme}>
      <div className='container vh-100'>

      </div>
    </section>
  )
}

export default UserEvents