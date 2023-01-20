import { Card, Button } from "react-bootstrap";

export default function Story(props) {
  return (
    <Card style={{ width: "12rem" }} className="m-4">
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title style={styles.title}>{props.title}</Card.Title>
        <Card.Text style={styles.author}>Novel by {props.author}</Card.Text>
        <Card.Text style={styles.year}>- {props.year}</Card.Text>
        <Button className="px-2" variant="primary" style={styles.button}>
          Stat Reading...
        </Button>
      </Card.Body>
    </Card>
  );
}
const styles = {
  button: {
    backgroundColor: "var(--theme-color-two)",
    border: "var(--theme-color-two)",
    marging: 1,
  },
  title: {
    fontSize: 18,
    margin: 1,
  },
  author: {
    fontSize: 14,
    margin: 0,
  },
  year: {
    margin: 0,
    fontSize: 14,
    textAlign: "right",
    color: "grey",
  },
};
