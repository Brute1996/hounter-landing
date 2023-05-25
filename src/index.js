import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import "basiclightbox/dist/basicLightbox.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);