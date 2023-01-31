import Wrap from "../Wrapper";
import StoryForm from "../StoryForm";
import StoryItems from "../StoryItems";
import { useState } from "react";

export default function Stories(props) {
  const [newBook, setNewBook] = useState([]);
  const handleBookData = (enteredBookData) => {
    const bookData = {
      ...enteredBookData,
    };
    console.log("In my Stories.jsx");
    console.log(bookData);
    setNewBook(bookData);
  };

  return (
    <Wrap>
      <StoryForm onSaveBook={handleBookData} />
      <StoryItems newBook={newBook} />
    </Wrap>
  );
}
