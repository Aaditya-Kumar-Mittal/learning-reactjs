import React from "react";
import ReactContextComponentA from "./ReactContextComponentA";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function ReactHookUseContext2() {
  return (
    <div>
      <h1>React Hook Use Context Demo</h1>
      <UserContext.Provider value={"React Context User"}>
        <ChannelContext.Provider value={"React Context Channel"}>
          <ReactContextComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
export default ReactHookUseContext2;
