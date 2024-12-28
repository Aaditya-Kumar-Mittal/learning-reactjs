import React from "react";
import useInput from "./useInput";

function ReactCustomHook3UserForm1() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <h1>User Form using Custom Hooks</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input type="text" id="firstName" {...bindFirstName} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" id="lastName" {...bindLastName} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReactCustomHook3UserForm1;
