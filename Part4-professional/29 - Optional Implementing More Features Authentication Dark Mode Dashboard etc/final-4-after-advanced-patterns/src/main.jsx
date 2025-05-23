import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {ErrorBoundry} from 'react-error-boundry';
import ErrorFallback from "./ui/ErrorFallback";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundry FallbackComponent={ErrorFallback}>
    <App />
    </ErrorBoundry>
  </React.StrictMode>
);
