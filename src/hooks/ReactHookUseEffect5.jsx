import React, { useEffect, useState } from "react";

function ReactHookUseEffect5() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);
  // Leaving dependency array empty means react will ignore changes in the count variable and will only re-render the component when the component mounts

  return (
    <div>
      <h1>Interval Counter</h1>
      <h1>{count}</h1>
    </div>
  );
}

export default ReactHookUseEffect5;
