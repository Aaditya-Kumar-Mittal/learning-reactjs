import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "DECREMENT":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "INCREMENT2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "DECREMENT2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

function ReactHookUseReducer2() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count1 - {count.firstCounter}</h1>
      <h1>Count2 - {count.secondCounter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 5 })}>
        Decrement by 5
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT2", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT2", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT2", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT2", value: 5 })}>
        Decrement by 5
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default ReactHookUseReducer2;
