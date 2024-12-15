import React from "react";
import ReactDOM from "react-dom";
import "../stylesheets/Modal.css";
function ReactPortalsModal1({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <h1 className="my-heading" >This is the Modal.</h1>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

export default ReactPortalsModal1;
