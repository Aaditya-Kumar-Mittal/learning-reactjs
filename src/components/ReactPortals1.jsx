import React, { useState } from "react";
import ReactPortalsModal1 from "./ReactPortalsModal1";

function ReactPortals1() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>React Portals Example</h1>
      <button onClick={openModal}>Open Modal</button>
      <ReactPortalsModal1 isOpen={isModalOpen} onClose={closeModal}>
        <h2>This is a modal rendered using React Portals!</h2>
      </ReactPortalsModal1>
    </div>
  );
}

export default ReactPortals1;
