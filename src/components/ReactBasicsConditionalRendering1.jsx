import React from "react";

function ReactBasicsConditionalRendering1() {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcom New USer</h1>
        {/* Using If else */}
      </div>
    );
  } else {
    return (
      <div>
        <h1>User Not Logged In!</h1>
      </div>
    );
  }
}

export default ReactBasicsConditionalRendering1;
