import React from "react";
import DestructuringProps2 from "./DestructuringProps2";

function SendProps() {
  const aboutMe = {
    firstname: "Aaditya",
    lastname: "Mittal",
    age: "20",
    gender: "Male",
  };

  return (
    <div>
      <DestructuringProps2 aboutMe={aboutMe} />
    </div>
  );
}

export default SendProps;
