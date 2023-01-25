import Wrap from "../Wrapper";
import StoryForm from "../StoryForm";
import StoryItems from "../StoryItems";
import { useState } from "react";

export default function Stories(props) {
  const [newBook, setNewBook] = useState([]);
  const saveBookDataHandler = (enteredBookData) => {
    const bookData = {
      ...enteredBookData,
    };
    // console.log(bookData);
    setNewBook(bookData);
  };

  return (
    <Wrap>
      <StoryForm onSaveBook={saveBookDataHandler} />
      <StoryItems books={newBook} />
    </Wrap>
  );
}
