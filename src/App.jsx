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

      <ReactHOCClickCounter />
      <ReactHOCHoverCounter />
    </div>
  );
}

export default App;
