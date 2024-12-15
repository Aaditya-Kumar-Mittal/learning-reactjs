import React from "react";
import ReactDOM from "react-dom";
function ReactPortalDemo1() {
  return ReactDOM.createPortal(
    <h1>Portals Demo</h1>,
    document.getElementById("portal-root")
  );
}

export default ReactPortalDemo1;
