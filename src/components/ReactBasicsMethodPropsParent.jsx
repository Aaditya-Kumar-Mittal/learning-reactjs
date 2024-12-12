import React from "react";
import ReactBasicsMethodPropsChild from "./ReactBasicsMethodPropsChild";

function ReactBasicsMethodPropsParent() {
  const parentName = "Parent";

  function greentParent() {
    alert(`Hello ${parentName}`);
  }

  return (
    <div>
      <ReactBasicsMethodPropsChild greetHandler={greentParent} />
    </div>
  );
}

export default ReactBasicsMethodPropsParent;
