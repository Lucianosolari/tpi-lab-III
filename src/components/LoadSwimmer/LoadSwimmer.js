import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import "./LoadSwimmer.css";

export const LoadSwimmer = () => {
  const { contextTheme } = useContext(ThemeContext);
  return (
    <section id={contextTheme}>
      <section className=" vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white" /*style="border-radius: 1rem;"*/
              >
                <div className="card-body p-5 text-center">
                  <form>
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">
                        Cargar resultados
                      </h2>
                      <p className="text-white-50 mb-5">
                        Ingrese los datos del nadador
                      </p>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          id="swimmerName"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="swimmerName">
                          Nombre
                        </label>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          id="swimmerSurname"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="swimmerSurname">
                          Apellido
                        </label>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          id="swimmerCategory"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="swimmerCategory">
                          Categoría
                        </label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <select
                          className="form-select trial-select"
                          id="trialDistance"
                        >
                          <option disabled selected>
                            Distancia
                          </option>
                          <option value={50}>50 mt</option>
                          <option value={100}>100 mt</option>
                          <option value={200}>200 mt</option>
                        </select>
                        <select className="form-select" id="trialStyle">
                          <option disabled selected>
                            Estilo
                          </option>
                          <option value={"butterfly"}>Mariposa</option>
                          <option value={"backstroke"}>Espalda</option>
                          <option value={"breaststroke"}>Pecho</option>
                          <option value={"freestyle"}>Libre</option>
                        </select>
                        <label className="form-label" htmlFor="swimmerTrial">
                          Prueba
                        </label>
                      </div>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Cargar resultados del nadador
                      </button>

                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white">
                          <i className="fab fa-facebook-f fa-lg"></i>
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-google fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
