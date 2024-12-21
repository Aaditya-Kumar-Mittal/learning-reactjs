import React from "react";
import ReactContextComponentC from "./ReactContextComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function ReactHookUseContext1() {
  return (
    <div>
      <h1>React Hook Use Context Demo</h1>
      <UserContext.Provider value={"React Context User"}>
        <ChannelContext.Provider value={"React Context Channel"}>
          <ReactContextComponentC />
        </ChannelContext.Provider>
        <ReactContextComponentC />
      </UserContext.Provider>
    </div>
  );
}

export default ReactHookUseContext1;
