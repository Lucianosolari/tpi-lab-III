import React, { useRef } from 'react'

const EventsForm = ({onAddEvent}) => {
    const dateInputRef = useRef();
    const titleInputRef = useRef();
    const organizerInputRef = useRef();
    const locationInputRef = useRef();
    const descriptionInputRef = useRef();

    function handleEventSubmit (event) {
        event.preventDefault();

        const enteredDate = dateInputRef.current.value;
        const enteredTitle = titleInputRef.current.value;
        const enteredOrganizer = organizerInputRef.current.value;
        const enteredLocation = locationInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        onAddEvent({
            date: enteredDate,
            title: enteredTitle,
            organizer: enteredOrganizer,
            location: enteredLocation,
            description : enteredDescription,
            participants: "",
        })
    }
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start" /*style="background-color: hsl(0, 0%, 96%)"*/
        >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card bg-dark text-white">
                  <div className="card-body py-5 px-md-5">
                    <form onSubmit={handleEventSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="date"
                              id="date"
                              name="date"
                              className="form-control"
                              //onChange={handleChange}
                              ref={dateInputRef}
                            />
                            <label className="form-label" htmlFor="date">
                              Fecha
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
                              //onChange={handleChange}
                              ref={titleInputRef}
                            />
                            <label className="form-label" htmlFor="title">
                              Título
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
                          //onChange={handleChange}
                          ref={organizerInputRef}
                        />
                        <label className="form-label" htmlFor="organizer">
                          Organizador
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="location"
                          name="location"
                          className="form-control"
                          ref={locationInputRef}
                          //onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="location">
                          Ubicación
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <textarea
                          type="text"
                          id="description"
                          name="description"
                          className="form-control"
                          ref={descriptionInputRef}
                          //onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="description">
                          Descripción
                        </label>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-4">
                        <button
                          type="submit"
                          className="btn btn-outline-light btn-lg px-5"
                        >
                          Crear evento
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EventsForm