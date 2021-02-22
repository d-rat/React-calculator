import React from "react";
import "./screen.css";

function Screen({ res, value }) {
  return (
    <>
      <div className="result">
        <h1>{res || 0}</h1>
      </div>
      <div className="equation">
        <h2>{value}</h2>
      </div>
    </>
  );
}

export default Screen;
