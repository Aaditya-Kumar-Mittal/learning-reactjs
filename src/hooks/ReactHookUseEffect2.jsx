import React, { useEffect, useState } from "react";

function ReactHookUseEffect2() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("🔵 useEffect: Component mounted");
    document.title = `Clicked ${count} times`;

    //The second parameter is the dependency array. Here, we specify the state or prop that we need to check on. only if the state or prop changes, the effect will be re-executed.
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default ReactHookUseEffect2;
