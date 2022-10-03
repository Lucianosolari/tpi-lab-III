import "./SignUp.css";
import React from "react";

export const SignUp = () => {
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
                    <form>
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form3Example1"
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example1">
                              Nombre
                            </label>
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form3Example2"
                              class="form-control"
                            />
                            <label class="form-label" for="form3Example2">
                              Apellido
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example3">
                          Email
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4"
                          class="form-control"
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
