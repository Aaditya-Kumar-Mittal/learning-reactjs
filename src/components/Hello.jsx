import React from "react";

function Hello() {
  const name = "Aadtya";

  return (
    <div>
      <h1>Hello from the component.</h1>
      <h2>This is {name}.</h2>
      <br />
      {10 + 20}
      <h1>{displayMessage()}</h1>
    </div>
  );
}

function displayMessage() {
  return "Calling a function in React using JSX";
}

export default Hello;
