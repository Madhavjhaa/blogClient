import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import { ContextProvider } from "./src/context/Context";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
