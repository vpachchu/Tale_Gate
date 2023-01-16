export default function Paragraph(props) {
  return (
    <p className="p-5 pt-1" style={styles.para}>
      {props.text}
    </p>
  );
}
const styles = {
  para: {
    color: "white",
    // fontFamily: "var(--font-englebrt)",
    textAlign: "justify",
  },
};
