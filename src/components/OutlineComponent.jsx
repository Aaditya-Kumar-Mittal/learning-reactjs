import React from "react";
import styles from "../stylesheets/outlinecomponent.module.css";

function OutlineComponent() {
  return (
    <div>
      <h1>This is an Outline Component</h1>
      <h2 className={styles.myH2}>We're using CSS Modules for Styling.</h2>
    </div>
  );
}

export default OutlineComponent;
