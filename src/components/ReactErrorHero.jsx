import React from "react";

function ReactErrorHero({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("Not a hero!");
  }

  return (
    <div>
      <h1>{heroName}</h1>
    </div>
  );
}

export default ReactErrorHero;
