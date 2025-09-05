import React, { useState, useEffect } from "react";
import { useSharedService } from "../../logics/calculateServices";
import styles from "./CalScreen.module.css";
const CalScreen = () => {
  const { sharedValue, setSharedValue } = useSharedService();
  const [calValue, setCalValue] = useState("");
  return (
    <div className={styles.calScreen}>
      <p>{sharedValue}</p>
    </div>
  );
};
export default CalScreen;
