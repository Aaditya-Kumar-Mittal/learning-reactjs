import React, { useContext } from "react";
import { CountContext } from "./ReactHookUseReducer4";

function ReactReducerComponentD() {
  const countContext = useContext(CountContext);

  return (
    <div>
      <h2>Component D {countContext.countState}</h2>
      <button onClick={() => countContext.countDispatch({ type: "INCREMENT" })}>
        D Increment
      </button>
      <button onClick={() => countContext.countDispatch({ type: "DECREMENT" })}>
        D Decrement
      </button>
      <button onClick={() => countContext.countDispatch({ type: "RESET" })}>
        D Reset
      </button>
    </div>
  );
}

export default ReactReducerComponentD;
