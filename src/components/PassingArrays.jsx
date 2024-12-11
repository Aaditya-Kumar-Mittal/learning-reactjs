import React from "react";
import ReceivingArraysObjects from "./ReceivingArraysObjects";

function PassingArrays() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const obj1 = {
    name: "Aaditya",
    age: "20",
    message: "Hello, ",
    emoji: "👋",
  };
  const fruits = ["Apple", "Mango", "Orange"];
  return (
    <div>
        {fruits.map((fruit) =>{
          return <h1>{fruit}</h1>
        })}
      <ReceivingArraysObjects numbers={numbers} obj1={obj1} />
    </div>
  );
}

export default PassingArrays;
