import React, { useState } from "react";

function ReactHookUseState1() {
  const [count, setCount] = useState(0);

  const incrmentCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incrmentCount}>Increment</button>
    </div>
  );
}

export default ReactHookUseState1;
