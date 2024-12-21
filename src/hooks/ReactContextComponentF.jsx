import React from "react";
import { UserContext, ChannelContext } from "./ReactHookUseContext1";

function ReactContextComponentF() {
  return (
    <div>
      <h1>Component F</h1>
      <br />
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    Hello, {user}! Welcome to {channel}!
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ReactContextComponentF;
