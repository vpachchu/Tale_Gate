export default function Heading01(props) {
  return (
    <h2 className="p-5 pb-3" style={styles.h2}>
      {props.text}
    </h2>
  );
}

const styles = {
  h2: {
    fontFamily: "var(--font-englebrt)",
    color: "var(--theme-text-color)",
  },
};
