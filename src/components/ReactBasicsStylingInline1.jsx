import React from "react";

function ReactBasicsStylingInline1() {
  const heading = {
    fontSize: "72px",
    color: "blue",
    backgroundColor: "red",
  };

  return (
    <div>
      <h1 style={heading}>Inline Styling</h1>
    </div>
  );
}

export default ReactBasicsStylingInline1;
