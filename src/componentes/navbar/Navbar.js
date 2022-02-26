import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import "./Navbar.css";

const Navbars = ({user, category, difficulty, score}) => {
  return (
    <Navbar className="navbar">
    <Container className="containerNavbar">
      <Navbar.Collapse >
          <Nav.Link href="#home" className="itemNavbar">Jugador: {user.toUpperCase()}</Nav.Link>
          <Nav.Link href="#link" className="itemNavbar">Nivel: {difficulty.toUpperCase()}</Nav.Link>
          <Nav.Link href="#link" className="itemNavbar">Ganancia: ${score}</Nav.Link>
          <Nav.Link href="#link" className="itemNavbar"><Link to={"/"}>Volver</Link></Nav.Link>
          
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Navbars;
