import { Form, Button, FloatingLabel } from "react-bootstrap";
import { Heading02 } from "./Heading";

export default function StoryForm() {
  return (
    <Form className="m-5 px-5 py-3" style={styles.form}>
      <Heading02 text="Add new story" color="var(--theme-color-one)" />
      <Form.Group className="mb-3">
        <Form.Label style={styles.formText}>Story Title</Form.Label>
        <Form.Control placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label style={styles.formText}>Author</Form.Label>
        <Form.Control placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label style={styles.formText}>Year</Form.Label>
        <Form.Control placeholder="" />
      </Form.Group>
      <Form.Group className="my-3">
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Type your story here..."
        >
          <Form.Control as="textarea" style={{ height: "100px" }} />
        </FloatingLabel>
      </Form.Group>
      <Button variant="primary" type="submit" style={styles.button}>
        Submit
      </Button>
    </Form>
  );
}
const styles = {
  h01: {
    margin: 0,
  },
  button: {
    backgroundColor: "var(--theme-color-two)",
    border: "var(--theme-color-two)",
    marging: 1,
  },
  form: {
    backgroundColor: "var(--theme-text-color)",
    borderRadius: 40,
  },
  formText: {
    color: "var(--theme-color-two)",
  },
};
