import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Ensure this file contains your global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Ensure there's an element with id 'root' in your public/index.html
);
