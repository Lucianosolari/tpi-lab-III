import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";

import "./Login.css";
import { useAuth } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

const Login = () => {
  const { contextTheme, setContextTheme } = useContext(ThemeContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  const { login, isAuthenticated, idFromDataBase } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  if (isAuthenticated) {
    return <Navigate to={`/events`} replace />
  }

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (!user.email) {
      setError("Ingrese un mail.");
      return;
    }
    if (!user.password) {
      setError("Ingrese la contraseña.");
      return;
    }
    try {
      await login(user.email, user.password);
      navigate('/events');
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("Correo no registrado.");
      }
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta.");
      }
    }
  }

  return (
    <section id={contextTheme}>
      <div className='container vh-100'>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white" /*style="border-radius: 1rem;"*/
              >
                <div className="card-body p-5 text-center">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">
                        Iniciar sesión
                      </h2>
                      <p className="text-white-50 mb-5">
                        Ingrese su mail y contraseña
                      </p>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control form-control-lg"
                          ref={loginEmailRef}
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control form-control-lg"
                          ref={loginPasswordRef}
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="password">
                          Contraseña
                        </label>
                      </div>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Ingresar
                      </button>
                      <div>{error && <p>{error}</p>}</div>
                    </div>

                    <div>
                      <p className="mb-0">
                        ¿No tiene una cuenta?{" "}
                        <Link className="text-white-50 fw-bold" to="newuser">
                          Crear cuenta
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
