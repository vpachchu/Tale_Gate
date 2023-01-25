import { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { Heading02 } from "./Heading";

export default function StoryForm(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [src, setsrc] = useState("");
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNT0xwyLstvC7wH8jYIKur3GTcSq-g6fj2EbL4wk-qaONHYjBswa3rpFsZJeEjuXcG-lw&usqp=CAU"
  const [story, setStory] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const handleYear = (event) => {
    setYear(event.target.value);
  };
  const handlesrc = (event) => {
    setsrc(event.target.value);
  };
  const handleStory = (event) => {
    setStory(event.target.value);
  };
  const handleSubmit = (event) => {
    const bookData = {
      title,
      author,
      year,
      src,
      story,
    };
    event.preventDefault();
    // console.log(bookData);
    props.onSaveBook(bookData);

    setTitle("");
    setAuthor("");
    setYear("");
    setsrc("");
    setStory("");
  };

  return (
    <Form className=" px-5 py-3" style={styles.form} onSubmit={handleSubmit}>
      <Heading02 text="Add new story" color="var(--theme-color-one)" />
      <Form.Group className="mb-3">
        <Form.Label style={styles.formText}>Story Title</Form.Label>
        <Form.Control placeholder="" value={title} onChange={handleTitle} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label style={styles.formText}>Author</Form.Label>
        <Form.Control placeholder="" value={author} onChange={handleAuthor} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label style={styles.formText}>Year</Form.Label>
        <Form.Control placeholder="" value={year} onChange={handleYear} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label style={styles.formText}>Image Link</Form.Label>
        <Form.Control placeholder="" value={src} onChange={handlesrc} />
      </Form.Group>
      <Form.Group>{/* drop down for genre */}</Form.Group>
      <Form.Group className="my-3">
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Type the story here..."
        >
          <Form.Control
            as="textarea"
            value={story}
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
