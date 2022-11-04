import React from 'react'
import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { modifyEvent } from "../../lib/api";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from 'react';
import { useAuth } from '../../context/AuthContext';

const ModifyEventsForm = () => {
  const { contextTheme } = useContext(ThemeContext);

  const newDateRef = useRef();
  const newTitleRef = useRef();
  const newOrganizerRef= useRef();
  const newLocationRef = useRef();
  const newDescriptionRef = useRef();

  const params = useParams();
  const { eventId } = params;

  const { role } = useAuth();

  const navigate = useNavigate();

  const { sendRequest, status } = useHttp(modifyEvent);

  const submitModifiedEventHandler = async (event) => {
    event.preventDefault();

    const enteredNewDate = newDateRef.current.value;
    const enteredNewTitle = newTitleRef.current.value;
    const enteredNewOrganizer = newOrganizerRef.current.value;
    const enteredNewLocation = newLocationRef.current.value;
    const enteredNewDescription = newDescriptionRef.current.value;

    const eventData = {
      date: enteredNewDate,
      title: enteredNewTitle,
      organizer: enteredNewOrganizer,
      location: enteredNewLocation,
      participants: "",
      description: enteredNewDescription
    }

    await sendRequest({ eventData, eventId: eventId });
    navigate('/events');
  } 

  return (
    <>
    {role === 'user' && <h1>Los usuarios no pueden acceder a esta página!!</h1>}
      {role === 'admin' && 
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
                      <form onSubmit={submitModifiedEventHandler}>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="date"
                                id="date"
                                name="date"
                                className="form-control"
                                ref={newDateRef}
                              />
                              <label className="form-label" htmlFor="date">
                                Nueva fecha
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="title"
                                name="title"
                                className="form-control"
                                ref={newTitleRef}
                              />
                              <label className="form-label" htmlFor="title">
                                Nuevo título
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            name="organizer"
                            id="organizer"
                            className="form-control"
                            ref={newOrganizerRef}
                          />
                          <label className="form-label" htmlFor="organizer">
                            Nuevo organizador
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="location"
                            name="location"
                            className="form-control"
                            ref={newLocationRef}
                          />
                          <label className="form-label" htmlFor="location">
                            Nueva ubicación
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <textarea
                            type="text"
                            id="description"
                            name="description"
                            className="form-control"
                            ref={newDescriptionRef}
                          />
                          <label className="form-label" htmlFor="description">
                            Nueva descripción
                          </label>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-4">
                          <button
                            type="submit"
                            className="btn btn-outline-light btn-lg px-5"
                          >
                            Modificar evento
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
      </section>}
    </>
  )
}

export default ModifyEventsForm