import React, { useState } from "react";

function ReactHookUseState2() {
  const initialCount = 0;

  const [count, setCount] = useState(initialCount);

  const increment5 = () => {
    for (let index = 0; index < 5; index++) {
      setCount((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Decrement
      </button>
      <button onClick={increment5}>Increment by 5</button>
    </div>
  );
}

export default ReactHookUseState2;
