import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ContextApi from "./AuthenticationContext";

ReactDOM.render(
  <ContextApi>
    <App />
  </ContextApi>,
  document.getElementById("root")
);
