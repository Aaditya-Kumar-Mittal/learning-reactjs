import React from "react";

function ReactPropsChild(props) {
  // console.log(props);

  return (
    <div>
      {/* //The props that we received using {props} is a React Object and cannot be directly rendered inside the React Component */}
      <h1>Data passed from using props in React - {props.message} {props.name}!</h1>
    </div>
  );
}

export default ReactPropsChild;
