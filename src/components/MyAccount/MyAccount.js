import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'
import { ThemeContext } from '../../context/ThemeContext';
import { removeUser } from '../../lib/api';

import './MyAccount.css'

const MyAccount = () => {

    const [deleteAccount, setDeleteAccount] = useState(false);

    const { deleteFirebaseAccount, user, role, name, surname, idFromDatabase } = useAuth();

    const { contextTheme } = useContext(ThemeContext);

    const navigate = useNavigate();

    const removeUserFromDatabase = async () => {
        await removeUser(idFromDatabase);
        await deleteFirebaseAccount(user);
        navigate('/login');
      }
  return (
    <section id={contextTheme}>
        <div className='container vh-100 account '>
            <span>
                <h1>Mi cuenta</h1>
            </span>
            <div className='user.email'>
                <h4>{user.email}</h4>
            </div>
            <div className='user-name'>
                <h5>Nombre: {name}</h5>
            </div>
            <div className='user-surname'>
                <h5>Apellido: {surname}</h5>
            </div>
            <div className='user-role'>
                <h5>Rol: {role}</h5>
            </div>
            <div>
                <button onClick={() => navigate('/my-account/modify')} className="btn btn-success">Modificar cuenta</button>
                <button className='btn btn-danger'  onClick={() => setDeleteAccount(true)} >BORRAR CUENTA</button>
            </div>
            {deleteAccount && 
            <div className='confirm-delete'>
                <h2>¿Está seguro de que desea eliminar su cuenta? Esta acción es irreversible.</h2>
                <button className='btn btn-danger' onClick={removeUserFromDatabase} id="confirm-delete-button">BORRAR</button>
            </div>
            }
        </div>
    </section>
  )
}

export default MyAccount