import React, { useState } from "react";

function Counter() {
  //Create a state variable
  //const [variable, funcionState]
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Using State and State Variables in React</h1>
      <h2>
        State is the data that a particular component can hold over a period of
        time. It is the data that a component needs to remember throughout the
        apps life cycle. State is like the components memory.
      </h2>
      <h2>
        State variable is a piece of state combined together to form a component
        state. A single component can hold mulitple pieces of data and mulitple
        pieces of state and these small pieces of state are called state
        variables. When the state changes, the entire component is re-rendered.
      </h2>

      <h1>Counter value is: {count} </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <span></span>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
