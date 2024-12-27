import React, { useContext, useReducer } from "react";
import ReactReducerComponentA from "./ReactReducerComponentA";
import ReactReducerComponentB from "./ReactReducerComponentB";
import ReactReducerComponentC from "./ReactReducerComponentC";

export const CountContext = React.createContext();

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

function ReactHookUseReducer4() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div>
        <h1>Count - {count} </h1>
        <ReactReducerComponentA />
        <ReactReducerComponentB />
        <ReactReducerComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default ReactHookUseReducer4;
