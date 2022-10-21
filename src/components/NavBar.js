import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Outlet } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <NavLink to="/events">Futuros eventos</NavLink>
          <NavLink to="/login">Mi cuenta</NavLink>
          <NavLink to="/table">Resultados</NavLink>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
