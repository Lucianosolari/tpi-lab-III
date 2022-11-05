import { stringify } from '@firebase/util';
import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ThemeContext } from '../../context/ThemeContext';
import useHttp from '../../hooks/use-http';
import { getEventsWithParticipants } from '../../lib/api';
import UserEventsList from './UserEventsList';

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
    sendRequest({userId: userId});
  }, [sendRequest, userId]);
  
  const loadedUserEvents = loadedEvents;

  return (
    <section id={contextTheme}>
      <div className='container vh-100'>
        <UserEventsList loadedUserEvents={loadedUserEvents} />
      </div>
    </section>
  )
}

export default UserEvents