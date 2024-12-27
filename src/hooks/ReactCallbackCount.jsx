import React from "react";

function ReactCallbackCount({ text, count }) {
  console.log(`ReactCallbackCount ${text}`);

  return (
    <div>
      <h1>
        {text} {count}
      </h1>
    </div>
  );
}

export default React.memo(ReactCallbackCount);
