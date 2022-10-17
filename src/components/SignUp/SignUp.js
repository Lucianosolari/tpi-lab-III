import { useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import "./SignUp.css";

const SignUp = ({ onAddUser, value }) => {
  console.log(value);
  console.log(onAddUser);

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

  function handleSubmit(event) {
    event.preventDefault();
    //signUp(user.email, user.password);

    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    onAddUser({
      name: enteredName,
      surname: enteredSurname,
      emai: enteredEmail,
    });
  }

  return (
    <>
      <section class="vh-100 gradient-custom">
        <div
          class="px-4 py-5 px-md-5 text-center text-lg-start" /*style="background-color: hsl(0, 0%, 96%)"*/
        >
          <div class="container">
            <div class="row gx-lg-5 align-items-center">
              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="card bg-dark text-white">
                  <div class="card-body py-5 px-md-5">
                    <form onSubmit={handleSubmit}>
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              class="form-control"
                              //onChange={handleChange}
                              ref={nameInputRef}
                            />
                            <label
                              class="form-label"
                              for="form3Example1"
                              htmlFor="name"
                            >
                              Nombre
                            </label>
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="surname"
                              name="surname"
                              class="form-control"
                              //onChange={handleChange}
                              ref={surnameInputRef}
                            />
                            <label
                              class="form-label"
                              for="form3Example2"
                              htmlFor="surname"
                            >
                              Apellido
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="form-control"
                          //onChange={handleChange}
                          ref={emailInputRef}
                        />
                        <label
                          class="form-label"
                          for="form3Example3"
                          htmlFor="email"
                        >
                          Email
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          class="form-control"
                          //onChange={handleChange}
                        />
                        <label class="form-label" for="form3Example4">
                          Contraseña
                        </label>
                      </div>
                      <div class="form-check d-flex justify-content-center mb-4">
                        <button
                          type="submit"
                          class="btn btn-outline-light btn-lg px-5"
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
