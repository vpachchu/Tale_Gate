import { Image } from "react-bootstrap";
import tgimg from "../assests/images/tg_book.jpg";
export default function Img(props) {
  return (
    <Image
      src={tgimg}
      width={450}
      style={styles.img}
      className="img-responsive p-5"
    />
  );
}
const styles = {
  img: {
    borderRadius: 70,
  },
};
