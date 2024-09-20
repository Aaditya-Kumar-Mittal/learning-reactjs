import React from "react";

function FruitComponent({ emoji, name, price }) {
  return (
    <div>
      <tr>
        <td><h1>{emoji}</h1></td>
        <td><h1>{name}</h1></td>
        <td><h1>{price}</h1></td>
      </tr>
    </div>
  );
}

export default FruitComponent;
