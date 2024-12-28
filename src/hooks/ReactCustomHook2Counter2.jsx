import React from "react";
import useCounter from "./useCounter";

function ReactCustomHook2Counter2() {
  const [count, increment, decrement, reset] = useCounter(10);

  return (
    <div>
      <h2>Counter using Custom Hooks</h2>
      <h1>Count {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default ReactCustomHook2Counter2;
