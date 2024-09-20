import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* What Strict mode does is, that it renders the React app twice for safety reasons.
    In Dev mode we run it twice.
    When we will launch it, we will remove StrictMode */}
    <App />
  </React.StrictMode>
);
