import React from "react";
import DestructuringProps from "./DestructuringProps";

function SendingProps() {
  const courseList = ["PHP", "ReactJS"];
  const courseCode = ["INT220", "INT252"];
  const person = {
    firstName: "Aaditya",
    lastName: "Kumar Mittal",
    age: 19,
  };
  return (
    <div>
      <DestructuringProps
        courseCode={courseCode}
        courseList={courseList}
        person={person}
      />
    </div>
  );
}

export default SendingProps;
