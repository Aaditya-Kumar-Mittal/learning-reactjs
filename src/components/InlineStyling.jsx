import React from "react";
import "../stylesheets/CustomStyle1.css";
import OutlineComponent from "./OutlineComponent";

function InlineStyling() {
  return (
    <div>
      <h1 style={{ color: "salmon", fontSize: "100px" }}>
        Inline Styling in REACT
      </h1>
      <h2 className="myH2">External Styling Importing style from stylesheets different from CSS Modules</h2>

      <OutlineComponent />
    </div>
  );
}

export default InlineStyling;
