import React from "react";

function ReactCallbackTitle() {
  console.log("ReactCallbackTitle");

  return (
    <div>
      <h1>useCallback Hook Demo</h1>
    </div>
  );
}

export default React.memo(ReactCallbackTitle);
