export function Heading01(props) {
  return (
    <h2 className="p-5 pb-3" style={styles.h1Blue}>
      {props.text}
    </h2>
  );
}

export function Heading02(props) {
  return (
    <h2 className="p-3" style={styles.default}>
      {props.text}
    </h2>
  );
}

const styles = {
  h1Blue: {
    fontFamily: "var(--font-englebrt)",
    color: "var(--theme-text-color)",
  },
  default: {
    fontFamily: "var(--font-englebrt)",
    color: "var(--theme-color-one)",
  },
};
