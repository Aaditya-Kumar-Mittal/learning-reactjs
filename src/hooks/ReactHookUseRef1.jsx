import React, { useRef, useEffect } from "react";

function ReactHookUseRef1() {
  const inputRef = useRef(null);

  useEffect(() => {
    //focus the input field
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Use Ref Hook Demo</h1>
      <h2>Using it to focus input</h2>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default ReactHookUseRef1;
