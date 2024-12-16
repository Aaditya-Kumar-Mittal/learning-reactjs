import React from "react";
import "./App.css";
import ReactComponentsRefsClassParent from "./components/ReactComponentsRefsClassParent";
import ReactComponentRefForwardingParent from "./components/ReactComponentRefForwardingParent";
import ReactPortalDemo1 from "./components/ReactPortalDemo1";
import ReactPortals1 from "./components/ReactPortals1";
import ReactErrorHero from "./components/ReactErrorHero";
import ReactErrorBoundary from "./components/ReactErrorBoundary";
import ReactHOCClickCounter from "./components/ReactHOCClickCounter";
import ReactHOCHoverCounter from "./components/ReactHOCHoverCounter";
import ReactHOClickCounterNew from "./components/ReactHOClickCounterNew";
import ReactHOCHoverCounterNew from "./components/ReactHOCHoverCounterNew";
import ReactRenderPropsClickCounter from "./components/ReactRenderPropsClickCounter";
import ReactRenderPropsHoverCounter from "./components/ReactRenderPropsHoverCounter";
import ReactRenderUser from "./components/ReactRenderUser";
import ReactRenderCounter from "./components/ReactRenderCounter";
import ReactContextComponentC from "./components/ReactContextComponentC";
import { UserProvider } from "./components/ReactContextUserContext";

function App() {
  return (
    <div className="App">
      {/* <ReactComponentsRefsClassParent /> */}
      {/* <ReactComponentRefForwardingParent/> */}
      {/* <ReactPortalDemo1/> */}
      {/* <ReactPortals1/> */}
      {/* <ReactErrorBoundary>
        <ReactErrorHero heroName="Batman" />
        <ReactErrorHero heroName="Superman" />
        <ReactErrorHero heroName="Joker" />   
      </ReactErrorBoundary> */}

      {/* <ReactHOCClickCounter />
      <ReactHOCHoverCounter /> */}
      {/* <ReactHOClickCounterNew />
      <ReactHOCHoverCounterNew /> */}
      {/* <ReactRenderUser
        render={(isLoggedIn) =>
          isLoggedIn ? "Aaditya Kumar Mittal" : "Guest User"
        }
      /> */}
      {/* <ReactRenderPropsClickCounter />
      <ReactRenderPropsHoverCounter /> */}
      {/* <ReactRenderCounter
        render={(count, incrementCount) => (
          <ReactRenderPropsClickCounter
            count={count}
            incrementCount={incrementCount}
          />
        )}
      />
      <ReactRenderCounter
        render={(count, incrementCount) => (
          <ReactRenderPropsHoverCounter
            count={count}
            incrementCount={incrementCount}
          />
        )}
      /> */}
      <UserProvider value="Aaditya Kumar Mittal">
        <ReactContextComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
