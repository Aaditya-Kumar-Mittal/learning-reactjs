import React from "react";
import ReactContextComponentB from "./ReactContextComponentB";

function ReactContextComponentA() {
  return (
    <div>
      <h1>Component A</h1>
      <ReactContextComponentB/>
    </div>
  );
}

export default ReactContextComponentA;
