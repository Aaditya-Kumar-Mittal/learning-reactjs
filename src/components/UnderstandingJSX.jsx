import React from "react";

function UnderstandingJSX() {
  const name = "Aaditya Kumar Mittal";
  return (
    <div>
      <ul>
        <li>JSX - JavaScript Extension</li>
        <li>JSX function always return a single element!</li>
        <li>{name}</li>
        <li>{10 + 20}</li>
        <li>{displayMessage()}</li>
      </ul>
    </div>
  );
}

function displayMessage() {
  return "Wow";
}
export default UnderstandingJSX;
