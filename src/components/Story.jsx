import { Card, Button } from "react-bootstrap";

export default function Story(props) {
  return (
    <Card style={{ width: "12rem" }} className="mt-4 col-6">
      <Card.Img
        variant="top"
        src={props.item.src}
        style={{ height: "15rem" }}
      />
      <Card.Body>
        <Card.Title style={styles.title}>{props.item.title}</Card.Title>
        <Card.Text style={styles.author}>
          Novel by {props.item.author}
        </Card.Text>
        <Card.Text style={styles.year}>- {props.item.year}</Card.Text>
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
