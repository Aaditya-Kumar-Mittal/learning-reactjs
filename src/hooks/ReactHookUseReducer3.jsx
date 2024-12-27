import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

function ReactHookUseReducer3() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h1>Counter 1 - {count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
      <br />
      <div>
        <h1>Counter 2 - {countTwo}</h1>
        <button onClick={() => dispatchTwo({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatchTwo({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatchTwo({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  );
}

export default ReactHookUseReducer3;
