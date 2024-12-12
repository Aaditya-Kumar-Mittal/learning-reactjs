import React from "react";

function ReactBasicsConditionalRendering3() {
  const isLoggedin = false;

  return (
    <div>{isLoggedin ? <h1>Welcome Aaditya</h1> : <h1>Welcome User</h1>}</div>
  );
}

export default ReactBasicsConditionalRendering3;
