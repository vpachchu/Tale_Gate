import { Container, Row, Col } from "react-bootstrap";
import Story from "./Story";

export default function StoryItems(props) {
  const Books = [
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J. K. Rowling",
      year: "1997",
      src: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J. K. Rowling",
      year: "1997",
      src: "https://images.unsplash.com/photo-1609866138210-84bb689f3c61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFycnklMjBwb3R0ZXIlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J. K. Rowling",
      year: "1997",
      src: "https://images.unsplash.com/photo-1600189261762-905ef844cfc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGFycnklMjBwb3R0ZXIlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J. K. Rowling",
      year: "1997",
      src: "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J. K. Rowling",
      year: "1997",
      src: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J. K. Rowling",
      year: "1997",
      src: "https://images.unsplash.com/photo-1606760956235-b1c1819758a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J. K. Rowling",
      year: "1997",
      src: "https://images.unsplash.com/photo-1618166546971-79b09d64e08c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J. K. Rowling",
      year: "1997",
      src: "https://images.unsplash.com/photo-1628175806356-53c2b2734ca4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J. K. Rowling",
      year: "1997",
      src: "https://images.unsplash.com/photo-1600189261900-da2183219c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J. K. Rowling",
      year: "1997",
      src: "https://images.unsplash.com/photo-1608129141559-b27c2573e7e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=422&q=80",
    },
  ];
  return (
    <Container>
      <Row>
        {Books.map((book, index) => (
          <Col key={Books[index]}>
            <Story item={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
