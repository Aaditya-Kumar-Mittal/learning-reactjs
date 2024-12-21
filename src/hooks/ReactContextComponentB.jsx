import React, { useContext } from "react";
import ReactContextComponentD from "./ReactContextComponentD";
import { UserContext, ChannelContext } from "./ReactHookUseContext2";

function ReactContextComponentB() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      <h1>Component B</h1>
      <h4>
        User - {user} | Channel - {channel}
      </h4>
      <ReactContextComponentD />
    </div>
  );
}

export default ReactContextComponentB;
