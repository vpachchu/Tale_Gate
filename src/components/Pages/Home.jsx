import { Container } from "react-bootstrap";
import Paragraph from "../Paragraph";
import Heading01 from "../Heading01";
import Img from "../Image";

export default function Home() {
  return (
    <Container className="d-flex flex-column flex-lg-row flex-md-row">
      <div>
        <Heading01 text="The Tale Gate" />
        <Paragraph
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        quae distinctio minima vitae reprehenderit, nesciunt aliquid ipsum eaque
        tempore eos impedit molestias explicabo necessitatibus neque, officiis
        aperiam obcaecati ipsa illo."
        />
      </div>
      <div>
        <Img />
      </div>
    </Container>
  );
}
