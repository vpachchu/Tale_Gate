import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {
  return (
    <Navbar style={styles.navbar} expand="lg">
      <Container>
        <Navbar.Brand style={styles.logo} href="#home">
          TG
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={styles.nav} href="#home">
              Home
            </Nav.Link>
            <Nav.Link style={styles.nav} href="#link">
              About
            </Nav.Link>
            <NavDropdown
              style={styles.nav}
              title="Stories"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Read Stories
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Create New</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const styles = {
  navbar: {
    backgroundColor: "var(--theme-color-two)",
    color: "var(--theme-text-color)",
  },
  logo: {
    color: "var(--theme-text-color)",
  },
  nav: {
    color: "var(--theme-text-color)",
  },
  navdrop: {
    color: "var(--theme-text-color)",
    backgroundColor: "var(--theme-color-two)",
  },
};
