import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import '../styles/Navbar.css'

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" id="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src="../public/images/logo.svg" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Features" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> Todo list</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Calendar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Reminiders</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Planning</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Company" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home">Careers</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            
          </Nav>

          <Nav>
            <Button className="btn-light mb-2 mb-md-0 me-md-3 rounded-4" id="btn-login">Login</Button>
            <Button className="btn-light rounded-4" id="btn-register">Register</Button>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
