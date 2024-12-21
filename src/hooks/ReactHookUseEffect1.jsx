import React, { useState, useEffect } from "react";

function ReactHookUseEffect1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //We pass a parameter function to the useEffect Hook which gets executed after every render of the component
    document.title = `Clicked ${count} times`;
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default ReactHookUseEffect1;
