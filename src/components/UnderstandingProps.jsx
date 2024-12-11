import React from "react";

function UnderstandingProps(props) {
  return (
    <div>
      <h1>
        Props are values passed from components to components for dynamic data
        passing!
      </h1>
      <h3>Hello, {props.fullname}!</h3>
    </div>
  );
}

export default UnderstandingProps;
