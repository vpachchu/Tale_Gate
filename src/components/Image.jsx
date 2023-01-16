import { Image } from "react-bootstrap";
import tgimg from "../assests/images/tg_book.jpg";
export default function Img(props) {
  return (
    <Image
      rounded
      src={tgimg}
      width={500}
      height={350}
      className="p-5 col-15 col-xs-12"
    />
  );
}
