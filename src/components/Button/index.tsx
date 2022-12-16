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
      <label htmlFor="target-checkbox">Disable Button</label>
      <input
        type="checkbox"
        id="target-checkbox"
        defaultChecked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <input type="checkbox" />
      <input type="checkbox" />
    </>
  );
}

export default Button;
