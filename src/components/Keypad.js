// Code Keypad Component Here
import React from "react";

function Keypad() {
  function handleChange() {
    console.log("Entering password...");
  }
  return (
    <input
      type="password"
      name="password"
      onChange={handleChange}
      placeholder="password"
    />
  );
}

export default Keypad;
