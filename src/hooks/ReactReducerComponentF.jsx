import React, { useContext } from "react";
import { CountContext } from "./ReactHookUseReducer4";

function ReactReducerComponentF() {
  const countContext = useContext(CountContext);

  return (
    <div>
      <h4>Component F {countContext.countState}</h4>
      <button onClick={() => countContext.countDispatch({ type: "INCREMENT" })}>
        F Increment
      </button>
      <button onClick={() => countContext.countDispatch({ type: "DECREMENT" })}>
        F Decrement
      </button>
      <button onClick={() => countContext.countDispatch({ type: "RESET" })}>
        F Reset
      </button>
    </div>
  );
}

export default ReactReducerComponentF;
