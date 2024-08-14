import { useState } from "react";
import styles from "./App.module.css";
import ButtonContaner from "./component/ButtonContainer";
import Input from "./component/Input";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    {
      if (buttonText === "C") {
        setCalVal("");
      } else if (buttonText === "=") {
        const res = eval(calVal);
        setCalVal(res);
      } else {
        const newDisplayValue = calVal + buttonText;
        setCalVal(newDisplayValue);
      }
    }
  };

  return (
    <div className={styles.calculator}>
      <Input displayValue={calVal} />
      <ButtonContaner onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
