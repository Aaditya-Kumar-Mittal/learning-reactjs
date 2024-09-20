import React from "react";

function DestructuringProps(props) {
  // Destructuring Props
  const { courseList, courseCode, person } = props;

  return (
    <div>
      <h1>Course List</h1>
      <ul>
        {courseList.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>{" "}
      <h2>Course Code: {courseCode}</h2>
      <ul>
        {courseCode.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <h1>Myself</h1>
      <h1>
        {person.firstName} {person.lastName}
      </h1>
      <h1>{person.age}</h1>
    </div>
  );
}

export default DestructuringProps;
