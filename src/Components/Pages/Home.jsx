import { Container } from "react-bootstrap";
import Paragraph from "../Paragraph";
import Heading01 from "../Heading01";

export default function Home() {
  return (
    <Container
      className="d-flex flex-column flex-lg-row flex-md-row"
      style={styles.container}
    >
      <div>
        <Heading01 text="The Tale Gate" />
        <Paragraph
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        quae distinctio minima vitae reprehenderit, nesciunt aliquid ipsum eaque
        tempore eos impedit molestias explicabo necessitatibus neque, officiis
        aperiam obcaecati ipsa illo."
        />
      </div>
      <p className="p-5 m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        quae distinctio minima vitae reprehenderit, nesciunt aliquid ipsum eaque
        tempore eos impedit molestias explicabo necessitatibus neque, officiis
        aperiam obcaecati ipsa illo.
      </p>
    </Container>
  );
}
const styles = {
  container: {
    backgroundColor: "var(--theme-color-one)",
  },
};
