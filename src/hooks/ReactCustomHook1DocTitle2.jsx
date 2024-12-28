import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle.js";

function ReactCustomHook1DocTitle2() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div>
      <h1>React using Custom Hooks</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count {count}
      </button>
    </div>
  );
}

export default ReactCustomHook1DocTitle2;
