export default function Wrap(props) {
  const classes = "m-5" + props.className;
  return (
    <div className={classes} style={styles.wrap}>
      {props.children}
    </div>
  );
}
const styles = {
  wrap: {
    borderStyle: "solid",
    borderColor: "var(--theme-color-one)",
    borderRadius: 30,
    borderWidth: 1,
    margin: 50,
    padding: 30,
  },
};
