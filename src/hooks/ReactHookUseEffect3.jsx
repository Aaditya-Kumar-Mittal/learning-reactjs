import React, { useState, useEffect } from "react";

function ReactHookUseEffect3() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log(`Mouse event`);
    setX(e.clientX);
    setY(e.clientY);
  };

  // useEffect(() => {
  //   console.log(`useEffect Called!`);
  //   window.addEventListener("mousemove", logMousePosition);

  //   // The function passed to useEffect can return a function which will be executed when the component when the component will unmount.
  //   return () => {
  //     console.log(`useEffect Cleanup! Component unmounted`);
  //     window.removeEventListener("mousemove", logMousePosition);
  //   };
  // }); // This will be called after every render unless you specify the dependency array.

  useEffect(() => {
    console.log(`useEffect Called!`);
    window.addEventListener("mousemove", logMousePosition);

    // The function passed to useEffect can return a function which will be executed when the component when the component will unmount.
    return () => {
      console.log(`useEffect Cleanup! Component unmounted`);
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []); // Emtpy array tells react that this effect doesnot depend on any props or state, so no need to call this effect on every render.

  return (
    <div>
      <h1>
        Hooks - X -{x} Y-{y}
      </h1>
    </div>
  );
}

export default ReactHookUseEffect3;
