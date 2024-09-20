import React from "react";
import FruitComponent from "./FruitComponent";

function RenderingArrayObjects() {
  const fruitArr = [
    {
      name: "Apple",
      price: "Rs 10",
      emoji: "🍎",
    },
    {
      name: "Pear",
      price: "Rs 8",
      emoji: "🍐",
    },
    {
      name: "Mango",
      price: "Rs 30",
      emoji: "🥭",
    },
    {
      name: "PineApple",
      price: "Rs 10",
      emoji: "🍍",
    },
    {
      name: "Kiwi",
      price: "Rs 40",
      emoji: "🥝",
    },
    {
      name: "Grapes",
      price: "Rs 60",
      emoji: "🍇",
    },
    {
      name: "Watermelon",
      price: "Rs 80",
      emoji: "🍉",
    },
  ];
  return (
    <div>
      {fruitArr.map((fruit) => {
        return (
          <table>
            <FruitComponent
              emoji={fruit.emoji}
              name={fruit.name}
              price={fruit.price}
            />
          </table>
        );
      })}
    </div>
  );
}

export default RenderingArrayObjects;
