import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import "materialize-css/dist/css/materialize.min.css";

import "./index.css";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

// During an update, there is no need to pass the container again
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
