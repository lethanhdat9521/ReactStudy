import { createContext, useState, useContext } from "react";

const calculateService = createContext();
// export default calculateService;
export const SharedProvider = ({ children }) => {
  const [sharedValue, setSharedValue] = useState("0");

  // The value provided to components that use this context
  const value = {
    sharedValue,
    setSharedValue,
    addNumber,
    result,
  };
  function addNumber(number) {
    if (sharedValue === "0") {
      setSharedValue(number.toString());
      return;
    }
    setSharedValue(sharedValue + number);
  }
  function result() {
    const parts = sharedValue.split("+");

    let total = 0;

    // Loop through each part, convert to a number, and add to the total
    for (const part of parts) {
      const number = parseInt(part.trim(), 10);

      // Check if the part is a valid number
      if (!isNaN(number)) {
        total += number;
      } else {
        // Handle invalid input
        console.error(`Invalid number in expression: ${part}`);
        return null;
      }
    }
    setSharedValue(total.toString());
  }
  return (
    <calculateService.Provider value={value}>
      {children}
    </calculateService.Provider>
  );
};
export const useSharedService = () => {
  const context = useContext(calculateService);
  if (context === undefined) {
    throw new Error("useSharedService must be used within a SharedProvider");
  }
  return context;
};
