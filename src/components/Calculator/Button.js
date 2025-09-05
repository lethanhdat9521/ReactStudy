import styles from "./Button.module.css";
import { useSharedService } from "../../logics/calculateServices";

const CalButton = (props) => {
  const { sharedValue, setSharedValue, addNumber, result } = useSharedService();

  function onClick(value) {
    if (value === "=") {
      result();
    } else if (value === "Bột ngọt") {
      setSharedValue("");
    } else {
      addNumber(value);
    }
  }
  return (
    <div className={styles.calButton}>
      <button onClick={() => onClick(props.value)} className="button">
        {props.value}
      </button>
    </div>
  );
};
export default CalButton;
