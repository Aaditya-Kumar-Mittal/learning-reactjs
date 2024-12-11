import React from "react";

function DestructuringProps2({ aboutMe }) {
  //Destructuring 'em props

  const { firstname, lastname, age, gender } = aboutMe;

  return (
    <div>
      <h1>{aboutMe.firstname}</h1>
      <h1>{aboutMe.lastname}</h1>
      <h1>{aboutMe.age}</h1>
      <h1>{aboutMe.gender}</h1>
      <br />
      <h1>
        {firstname} | {lastname} | {age} | {gender}
      </h1>
      <h1>
        Props passed from one component to another component are actually
        immutable.
      </h1>
      <h1>Can't use props.var = something something just to change its value. Like it could be done with the javascript object</h1>
    </div>
  );
}

export default DestructuringProps2;
