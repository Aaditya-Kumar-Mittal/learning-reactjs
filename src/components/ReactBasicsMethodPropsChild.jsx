import React from "react";

function ReactBasicsMethodPropsChild({ greetHandler }) {
  return (
    <div>
      <button onClick={greetHandler}>
        This is Child Component. Greet Parent
      </button>
    </div>
  );
}

export default ReactBasicsMethodPropsChild;
