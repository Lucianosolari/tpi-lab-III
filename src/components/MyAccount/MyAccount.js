import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext'

import './MyAccount.css'

const MyAccount = () => {
    const { name, surname, user } = useAuth();
    const [modifyName, setModifyName] = useState(false);
    const [modifySurname, setModifySurname] = useState(false);
  return (
    <>
        <span>
            <h1>Mi cuenta</h1>
        </span>
        <div className='user-name'>
            <h4>Nombre: {name}</h4>
            <button className='btn btn-secondary' onClick={() => setModifyName(true)}>Modificar</button>
        </div>
        <div className='user-surname'>
            <h4>Apellido: {surname}</h4>
            <button className='btn btn-secondary' onClick={() => setModifySurname(true)}>Modificar</button>
        </div>
        <div>
        <h4>Correo: {user.email}</h4>
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