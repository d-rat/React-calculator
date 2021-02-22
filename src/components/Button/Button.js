import React from "react";
import "./Button.css";

function Button({ text, large, click }) {
  return (
    <div
      onClick={() => {
        click(text);
      }}
      style={{ width: large ? "160px" : "80px" }}
      className="btn"
    >
      {text || "error"}{" "}
    </div>
  );
}

export default Button;
