// Code Keypad Component Here
import React from "react";

function Keypad() {
  function handleChange(event) {
    console.log(event);
    console.log("Entering password...");
  }
  return (
    <input
      type="text"
      name="password"
      onChange={handleChange}
      placeholder="password"
    />
  );
}

export default Keypad;
