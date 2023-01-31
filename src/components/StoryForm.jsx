import { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { Heading02 } from "./Heading";

export default function StoryForm(props) {
  //const [bookDatalist, setBookdatalist] = useState([]);
  const [bookData, setBookdata] = useState({
    title: "",
    author: "",
    year: "",
    src: "",
    genre: "",
    story: "",
  });

  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNT0xwyLstvC7wH8jYIKur3GTcSq-g6fj2EbL4wk-qaONHYjBswa3rpFsZJeEjuXcG-lw&usqp=CAU"

  const handleBookdata = (event) => {
    const newBook = { ...bookData };
    newBook[event.target.id] = event.target.value;
    setBookdata(newBook);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(bookData);
    props.onSaveBook(bookData);
    //bookDatalist.push(bookData);
    //console.log(bookDatalist);
    //setBookdata([]);
  };

  return (
    <Form className=" px-5 py-3" style={styles.form} onSubmit={handleSubmit}>
      <Heading02 text="Add new story" color="var(--theme-color-one)" />
      <Form.Group className="mb-3">
        <Form.Label style={styles.formText}>Story Title</Form.Label>
        <Form.Control
          placeholder=""
          value={bookData.title}
          id="title"
          onChange={handleBookdata}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label style={styles.formText}>Author</Form.Label>
        <Form.Control
          placeholder=""
          value={bookData.author}
          id="author"
          onChange={handleBookdata}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label style={styles.formText}>Year</Form.Label>

        <Form.Control
          placeholder=""
          value={bookData.year}
          id="year"
          onChange={handleBookdata}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label style={styles.formText}>Image Link</Form.Label>
        <Form.Control
          placeholder=""
          value={bookData.src}
          id="src"
          onChange={handleBookdata}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label style={styles.formText}>Genre</Form.Label>
        <Form.Select
          onChange={handleBookdata}
          value={bookData.genre}
          id="genre"
        >
          <option value="0"></option>
          <option value="1">Fantasy</option>
          <option value="2">Sci-fi</option>
          <option value="3">Drama</option>
          <option value="4">Romantic</option>
          <option value="5">Thriller</option>
          <option value="6">Mystry</option>
          <option value="6">Historical</option>
        </Form.Select>
      </Form.Group>
      <Form.Group>{/* drop down for genre */}</Form.Group>
      <Form.Group className="my-3">
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Type the story here..."
        >
          <Form.Control
            as="textarea"
            value={bookData.story}
            id="story"
            style={{ height: "100px" }}
            onChange={handleBookdata}
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
