import Story from "../Story";
import HP_001 from "../../assests/images/hp_001.jpg";
import Wrap from "../Wrapper";
import StoryForm from "../StoryForm";

const Books = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    year: "1997",
    src: { HP_001 },
  },
];

export default function Stories() {
  return (
    <Wrap>
      <StoryForm />
      <Story
        title={Books[0].title}
        author={Books[0].author}
        year={Books[0].year}
        src={Books[0].src}
      />
    </Wrap>
  );
}
