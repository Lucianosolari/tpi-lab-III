import { useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import "./SignUp.css";

const SignUp = ({ onAddUser }) => {
  /*const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });*/

  //const { signUp } = useAuth();

  /* const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };*/
  const [isEntering, setIsEntering] = useState(false);
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    //signUp(user.email, user.password);

    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    onAddUser({
      name: enteredName,
      surname: enteredSurname,
      email: enteredEmail,
      password: enteredPassword,
    });
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
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              //onChange={handleChange}
                              ref={nameInputRef}
                            />
                            <label className="form-label" htmlFor="name">
                              Nombre
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="surname"
                              name="surname"
                              className="form-control"
                              //onChange={handleChange}
                              ref={surnameInputRef}
                            />
                            <label className="form-label" htmlFor="surname">
                              Apellido
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          //onChange={handleChange}
                          ref={emailInputRef}
                        />
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control"
                          ref={passwordInputRef}
                          //onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="password">
                          Contraseña
                        </label>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-4">
                        <button
                          type="submit"
                          className="btn btn-outline-light btn-lg px-5"
                        >
                          Crear cuenta
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
  );
};

export default SignUp;
