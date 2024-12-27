import React, { useState, useMemo } from "react";

function ReactHookUseMemo1() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  // UseMemo to calculate if counterOne is even or odd
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++; // Simulate a slow calculation
    return counterOne % 2 === 0; // Return true if even, false if odd
  }, [counterOne]); // Only recompute when counterOne changes

  return (
    <div>
      <h1>Counter One - {counterOne}</h1>
      <h1>Counter Two - {counterTwo}</h1>
      <button onClick={incrementOne}>Increment One</button>
      {/* Directly display the result of isEven */}
      <h3>{isEven ? "Even" : "Odd"}</h3>
      <button onClick={incrementTwo}>Increment Two</button>
    </div>
  );
}

export default ReactHookUseMemo1;
