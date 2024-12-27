import React from "react";

function ReactCallbackButton({ handleClick, children }) {
  console.log(`ReactCallbackButton, ${children}`);

  return <button onClick={handleClick}>{children}</button>;
}

export default React.memo(ReactCallbackButton);
