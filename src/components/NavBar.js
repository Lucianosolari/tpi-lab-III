import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./NavBar.css";

const NavBar = () => {
  const {user, logout, loading} = useAuth();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await logout();
    navigate('/login');
  }

  if (loading) return <h1>Cargando...</h1>
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <NavLink to="/events">Futuros eventos</NavLink>
          {!user && <NavLink to="/login">Iniciar sesión</NavLink>}
          <NavLink to="/table">Resultados</NavLink>
          <Button onClick={logoutHandler}>Cerrar sesión</Button>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
