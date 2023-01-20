import Nav from "react-bootstrap/Nav";
import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <Nav className="justify-content-center" style={styles.navbar}>
      <NavItem name="Home" />
      <NavItem name="About" />
      <NavItem name="Stories" />
    </Nav>
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
  navdrop: {
    color: "var(--theme-text-color)",
    backgroundColor: "var(--theme-color-two)",
  },
};
