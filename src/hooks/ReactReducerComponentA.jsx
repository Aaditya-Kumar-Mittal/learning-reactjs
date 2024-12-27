import React, { useContext } from "react";
import { CountContext } from "./ReactHookUseReducer4";

function ReactReducerComponentA() {
  const countContext = useContext(CountContext);

  return (
    <div>
      <h1>Component A {countContext.countState}</h1>
      <button onClick={() => countContext.countDispatch({ type: "INCREMENT" })}>
        A Increment
      </button>
      <button onClick={() => countContext.countDispatch({ type: "DECREMENT" })}>
        A Decrement
      </button>
      <button onClick={() => countContext.countDispatch({ type: "RESET" })}>
        A Reset
      </button>
    </div>
  );
}

export default ReactReducerComponentA;
