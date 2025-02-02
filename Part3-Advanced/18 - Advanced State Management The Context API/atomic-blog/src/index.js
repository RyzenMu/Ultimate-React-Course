import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import AppMemo from "./App-memo";
import AppContext from "./App-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContext />
  </React.StrictMode>
);
