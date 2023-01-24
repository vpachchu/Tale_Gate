import { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { Heading02 } from "./Heading";

export default function StoryForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState(new Date());
  const [story, setStory] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const handleYear = (event) => {
    setYear(new Date(event.target.value));
  };
  const handleStory = (event) => {
    setStory(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title);
    console.log(author);
    console.log(year);
    console.log(story);
  };

  return (
    <Form className=" px-5 py-3" style={styles.form} onSubmit={handleSubmit}>
      <Heading02 text="Add new story" color="var(--theme-color-one)" />
      <Form.Group className="mb-3">
        <Form.Label style={styles.formText}>Story Title</Form.Label>
        <Form.Control placeholder="" onChange={handleTitle} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label style={styles.formText}>Author</Form.Label>
        <Form.Control placeholder="" onChange={handleAuthor} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label style={styles.formText}>Year</Form.Label>
        <Form.Control placeholder="" onChange={handleYear} />
      </Form.Group>
      <Form.Group className="my-3">
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Type the story here..."
        >
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            onChange={handleStory}
          />
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
