import React, { useEffect, useRef, useState } from "react";

function ReactHookUseRef2() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <h1>Class Timer using useRef </h1>
      <h1>Class Timer {timer}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Timer
      </button>
    </div>
  );
}

export default ReactHookUseRef2;
