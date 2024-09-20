import React from "react";
import ReactPropsChild from "./ReactPropsChild";

function ReactPropsParent() {
  return (
    <div>
      <ReactPropsChild name="Aaditya" message="Hello, there" />
      <ReactPropsChild name="Tom" message="Hello...." />
    </div>
  );
}

export default ReactPropsParent;
