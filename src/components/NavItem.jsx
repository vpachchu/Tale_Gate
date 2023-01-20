import { Nav } from "react-bootstrap";

export default function NavItem(props) {
  return (
    <Nav.Item>
      <Nav.Link style={styles.nav} href={props.link}>
        {props.name}
      </Nav.Link>
    </Nav.Item>
  );
}

const styles = {
  nav: {
    color: "var(--theme-text-color)",
    marginRight: 15,
    marginLeft: 15,
  },
};
