import styles from "./Button.module.css";

function Button({ step, dispatch, isCapsule }) {
  const { button, id, isActive } = step;

  return (
    <button
      disabled={button === "Grind option" && isCapsule}
      onClick={() => dispatch({ type: "OPEN_ACCORDION", id })}
      className={
        isActive ? `${styles.active} ${styles.btnStep}` : `${styles.btnStep}`
      }
    >
      <span>{`0${id}`}</span>
      {button}
    </button>
  );
}

export default Button;
