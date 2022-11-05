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

  const {name, surname, role} = useAuth();

  const {
    sendRequest,
    data: loadedEvents,
  } = useHttp(getEventsWithParticipants, true);

  useEffect(() => {
    sendRequest({userId: userId});
  }, [sendRequest, userId]);
  
  const loadedUserEvents = loadedEvents;

  return (
    <>
      {role === 'user' &&
      <section id={contextTheme}>
        <div className='container vh-100'>
          <h3>Eventos en los que {name} {surname} está inscripto:</h3>
          <UserEventsList loadedUserEvents={loadedUserEvents} />
        </div>
      </section>
      }
      {role === 'admin' && 
        <h3>No puede estar inscripto a eventos, sólo usuarios.</h3>
      }
      
    </>
  )
}

export default UserEvents