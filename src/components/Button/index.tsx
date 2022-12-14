import React, { useState } from "react";

function Button() {
  const [buttonColor, setButtonColor] = useState("red");
  const [isChecked, setIsChecked] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isChecked}
      >
        Click!
      </button>
      <input
        type="checkbox"
        defaultChecked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
    </>
  );
}

export default Button;
