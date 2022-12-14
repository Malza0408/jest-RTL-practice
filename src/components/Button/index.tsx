import React, { useState } from "react";

function Button() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  return (
    <button
      style={{ backgroundColor: buttonColor }}
      onClick={() => setButtonColor(newButtonColor)}
    >
      Click!
    </button>
  );
}

export default Button;
