import { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ReactSwitch from "react-switch";
import { useState } from "react";

import "./NavBar.css";
import { ThemeContext } from "../context/ThemeContext";

const NavBar = () => {
  const { contextTheme, setContextTheme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);
  const { user, logout, loading, role } = useAuth();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await logout();
    navigate("/login");
  };
  const loginHandler = async () => {
    navigate("/login");
  };

  const adminHandler = async () => {
    navigate("/add-event");
  };

  if (loading) return <h1>Cargando página principal...</h1>;

  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === "Light" ? "Dark" : "Light"));
    setChecked(nextChecked);
  };
  return (
    <>
      <Navbar
        className="border-bottom"
        bg={contextTheme}
        expand="lg"
        id={contextTheme}
      >
        <Container fluid>
          <NavLink to="/events">Futuros eventos</NavLink>
          <NavLink to="/table">Resultados</NavLink>
          {user && role === "admin" && (
            <Button onClick={adminHandler}>Agregar evento</Button>
          )}
          {!user && <Button onClick={loginHandler}>Iniciar sesión</Button>}
          {user && <Button onClick={logoutHandler}>Cerrar sesión</Button>}
          <ReactSwitch
            onChange={handleSwitch}
            checked={checked}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
