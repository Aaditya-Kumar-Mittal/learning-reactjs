import React, { useState } from "react";
import ReactHookUseEffect3 from "./ReactHookUseEffect3";

function ReactHookUseEffect4() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <h1>Mouse Container</h1>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <ReactHookUseEffect3 />}
    </div>
  );
}

export default ReactHookUseEffect4;
