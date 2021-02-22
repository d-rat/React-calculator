import React, { useState } from "react";
import "./Calculator.css";
import Button from "./components/Button/Button";

import Screen from "./components/screen/screen";

function Calculator() {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("0");

  const handleClick = (e) => {
    if (e === "C") {
      setOperation("");
      setResult("0");
    } else if (e === "X") {
      setOperation((prev) => prev.slice(0, -1));
    } else if (e === "=") {
      setResult(eval(operation) || "0");
    } else {
      setOperation((pre) => pre + e);
    }
  };

  return (
    <div className="calculator">
      <Screen res={result} value={operation} />

      <div className="row">
        <Button text="=" large click={handleClick} />
        <Button text="C" click={handleClick} />
        <Button text="X" click={handleClick} />
      </div>

      <div className="row">
        <Button text="1" click={handleClick} />
        <Button text="2" click={handleClick} />
        <Button text="3" click={handleClick} />
        <Button text="+" click={handleClick} />
      </div>
      <div className="row">
        <Button text="4" click={handleClick} />
        <Button text="5" click={handleClick} />
        <Button text="6" click={handleClick} />
        <Button text="-" click={handleClick} />
      </div>
      <div className="row">
        <Button text="7" click={handleClick} />
        <Button text="8" click={handleClick} />
        <Button text="9" click={handleClick} />
        <Button text="*" click={handleClick} />
      </div>
      <div className="row">
        <Button text="00" click={handleClick} />
        <Button text="0" click={handleClick} />
        <Button text="%" click={handleClick} />
        <Button text="/" click={handleClick} />
      </div>
    </div>
  );
}

export default Calculator;
