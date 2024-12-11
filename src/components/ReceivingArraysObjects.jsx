import React from "react";

function ReceivingArraysObjects({ numbers, obj1 }) {
  return (
    <div>
      <h1>Display Array : {numbers}</h1>
      <h1>
        {obj1.message} {obj1.emoji}. My name is {obj1.name}. I am {obj1.age}{" "}years old.
      </h1>
    </div>
  );
}

export default ReceivingArraysObjects;
