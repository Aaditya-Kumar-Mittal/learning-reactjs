import React from "react";

const ReactComponentRefForwarding = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default ReactComponentRefForwarding;
