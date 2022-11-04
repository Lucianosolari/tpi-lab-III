import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'
import { removeUser } from '../../lib/api';

import './MyAccount.css'

const MyAccount = (props) => {
    const { name, surname, user } = useAuth();
    const [modifyName, setModifyName] = useState(false);
    const [modifySurname, setModifySurname] = useState(false);

    const params = useParams();

    const { userId } = params;

    const removeUserFromDatabase = async () => {
        await removeUser(userId); // traer userId con params, como en EventsInscription
      }
  return (
    <>
        <span>
            <h1>Mi cuenta</h1>
        </span>
        <div className='user.email'>
            <h4>{user.email}</h4>
        </div>
        <div className='user-name'>
            <h5>Nombre: {name}</h5>
            <button className='btn btn-secondary' onClick={() => setModifyName(true)}>Modificar</button>
        </div>
        <div className='user-surname'>
            <h5>Apellido: {surname}</h5>
            <button className='btn btn-secondary' onClick={() => setModifySurname(true)}>Modificar</button>
        </div>
        <div>
            <button>BORRAR CUENTA</button>
        </div>
        <div className='forms'>
            {modifyName && 
            <form>
                <label>Nuevo nombre:</label>
                <input type='text'></input>
                <button onClick={() => setModifyName(false)}>Cancelar</button>
                <button>Aceptar</button>
            </form>
            }
            {modifySurname && 
            <form>
                <label>Nuevo apellido:</label>
                <input type='text'></input>
                <button onClick={() => setModifySurname(false)}>Cancelar</button>
                <button>Aceptar</button>
            </form>
            }
        </div>
    </>
  )
}

export default MyAccount