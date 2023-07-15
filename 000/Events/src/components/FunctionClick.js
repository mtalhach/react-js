import React from "react";
import "./FunctionClick.css";

function FunctionClick() {
  const clickHandler = () => {
    console.log("Function clicked");
  };
  return (
    <div className="msg">
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
