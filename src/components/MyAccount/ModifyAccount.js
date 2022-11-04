import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ThemeContext } from '../../context/ThemeContext'
import useHttp from '../../hooks/use-http';
import { modifyUser } from '../../lib/api';

const ModifyAccount = () => {
    const { contextTheme } = useContext(ThemeContext);

    const { name, surname, user } = useAuth();

    const [inputNewNameValue, setInputNewNameValue] = useState(name);
    const [inputNewSurnameValue, setInputNewSurnameValue] = useState(surname);

    const onChangeNewNameInput = (event) => {
        setInputNewNameValue(event.target.value);
    }

    const onChangeNewSurnameInput = (event) => {
        setInputNewSurnameValue(event.target.value);
    }

    const navigate = useNavigate();

    const { sendRequest, status } = useHttp(modifyUser);

    const submitModifiedUserHandler = async (event) => {
        event.preventDefault();

        const userData = {
            email: user.email,
            password: user.password,
            name: inputNewNameValue,
            surname: inputNewSurnameValue,
        }

        await sendRequest({ userData, userId: '-NG2oBHTG4oy9a7v0D6S' }); //ID pendiente
        if (status === 'pending') {
            return <h1>Cargando cambio de usuario</h1>
        }
        navigate('/my-account');
    }

  return (
    <section id={contextTheme}>
        <div className='container vh-100'>
        <div
            className="px-4 py-5 px-md-5 text-center text-lg-start"
          >
            <div className="container">
              <div className="row gx-lg-5 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="card bg-dark text-white">
                    <div className="card-body py-5 px-md-5">
                      <form onSubmit={submitModifiedUserHandler}>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                value={inputNewNameValue}
                                onChange={onChangeNewNameInput}
                                type="text"
                                id="new-name"
                                name="new-name"
                                className="form-control"
                                placeholder={name}
                              />
                              <label className="form-label" htmlFor="new-name">
                                Nuevo nombre
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                value={inputNewSurnameValue}
                                onChange={onChangeNewSurnameInput}
                                type="text"
                                id="new-surname"
                                name="new-surname"
                                className="form-control"
                                placeholder={surname}
                              />
                              <label className="form-label" htmlFor="new-surname">
                                Nuevo apellido
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-4">
                          <button
                            type="submit"
                            className="btn btn-outline-light btn-lg px-5"
                          >
                            Modificar usuario
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ModifyAccount