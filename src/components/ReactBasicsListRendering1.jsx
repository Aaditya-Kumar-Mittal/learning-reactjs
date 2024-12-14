import React from "react";

function ReactBasicsListRendering1() {
  const names = [
    "Aaditya",
    "Aanav",
    "Aaina",
    "Uphar",
    "Tapasya",
    "Srijan",
    "Malhar",
    "Chirayu",
  ];

  return (
    <div>
       <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReactBasicsListRendering1;
