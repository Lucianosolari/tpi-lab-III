import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'
import { ThemeContext } from '../../context/ThemeContext';
import useHttp from '../../hooks/use-http';
import { getSingleUser, removeUser } from '../../lib/api';

import './MyAccount.css'

const MyAccount = () => {

    const { sendRequest, status, data: loadedUser, error } = useHttp(getSingleUser, true);

    useEffect(() => {
        sendRequest('-NG2oBHTG4oy9a7v0D6S');
      }, [sendRequest]);

    console.log(loadedUser);


    const { user } = useAuth();

    const { contextTheme } = useContext(ThemeContext);

    const navigate = useNavigate();

    const params = useParams();
    const { userId } = params;

    const onRemoveUser= async () => {
        await removeUser(userId); // traer userId con params, como en EventsInscription
      }

      if (error) {
        console.log(error);
      }

      if (status === "pending") {
        return <p>Cargando usuario...</p>;
      }
  return (
    <section id={contextTheme}>
        <div className='container vh-100'>
            <span>
                <h1>Mi cuenta</h1>
            </span>
            <div className='user.email'>
                <h4>{user.email}</h4>
            </div>
            <div className='user-name'>
                <h5>Nombre: {loadedUser.name}</h5>
            </div>
            <div className='user-surname'>
                <h5>Apellido: {loadedUser.surname}</h5>
            </div>
            <div>
                <button onClick={() => navigate('/my-account/modify')} >Modificar cuenta</button>
                <button>BORRAR CUENTA</button>
            </div>
        </div>
    </section>
  )
}

export default MyAccount