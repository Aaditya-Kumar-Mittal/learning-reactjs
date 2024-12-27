import React, { useState, useCallback } from "react";
import ReactCallbackTitle from "./ReactCallbackTitle";
import ReactCallbackCount from "./ReactCallbackCount";
import ReactCallbackButton from "./ReactCallbackButton";

function ReactHookUseCallback1() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(5000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]); 

  return (
    <div>
      <ReactCallbackTitle />
      <ReactCallbackCount text="Age" count={age} />
      <ReactCallbackButton handleClick={incrementAge}>
        Increment Age
      </ReactCallbackButton>
      <ReactCallbackCount text="Salary" count={salary} />
      <ReactCallbackButton handleClick={incrementSalary}>
        Increment Salary
      </ReactCallbackButton>
    </div>
  );
}

export default ReactHookUseCallback1;
