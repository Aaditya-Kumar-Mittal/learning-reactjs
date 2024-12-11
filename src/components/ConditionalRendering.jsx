import React from "react";

function ConditionalRendering() {
  const display = false;

  if (display) {
    return (
      <div>
        <h1>This is a conditional Component.</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Code every fucking day!</h1>
        <h1>Here We can return Components Also</h1>
      </div>
    );
  }
}

export default ConditionalRendering;
