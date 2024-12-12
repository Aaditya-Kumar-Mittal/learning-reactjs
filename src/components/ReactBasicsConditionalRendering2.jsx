// Using element variables

import React from "react";

function ReactBasicsConditionalRendering2() {
  const isLoggedin = false;

  let message;

  if (isLoggedin) {
    messgage = "Welcome Aaditya";
  } else {
    message = "Welcome User";
  }

  return <div><h1>{message}</h1></div>;
}

export default ReactBasicsConditionalRendering2;
