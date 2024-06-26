import styles from "./Button.module.css";
function Button({ children, onClick, type }) {
  return (
    <button
      className={`${styles.btn} ${styles[type]}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
