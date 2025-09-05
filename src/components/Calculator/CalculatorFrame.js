import CalButton from "./Button";
import CalScreen from "./CalScreen";
import styles from "./CalculatorFrame.module.css";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { useSharedService } from "../../logics/calculateServices";

const CalculatorFrame = () => {
  const { sharedValue, setSharedValue, addNumber, result } = useSharedService();

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "="];
  const rows = [];
  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3));
  }
  function clearSharedValue() {
    setSharedValue("0");
  }
  return (
    <div className={styles["calculator-frame"]}>
      <CalScreen></CalScreen>
      {rows.map((row, rowIndex) => (
        <div className={styles.calButtonRow} key={rowIndex}>
          {row.map((item) => (
            <CalButton value={item} key={item} />
          ))}
        </div>
      ))}
      {/* <CalButton className={styles.botngot} value={"Bột ngọt"}></CalButton> */}
      <button onClick={clearSharedValue} className={styles.botngot}>
        Bột ngọt
      </button>
    </div>
  );
};
export default CalculatorFrame;
