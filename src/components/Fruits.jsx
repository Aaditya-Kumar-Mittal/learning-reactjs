import React from "react";

function Fruits() {
  const fruits = ["Apple", "Mango", "Orange"];

  return (
    <div>
      <h1>Displaying fruits without array rendering : {fruits}</h1>
      <br />
      <h1>Use Map Function</h1>
      <div>
        <ul>
          {fruits.map((fruit) => {
            return <li key={fruit}>{fruit}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Fruits;
