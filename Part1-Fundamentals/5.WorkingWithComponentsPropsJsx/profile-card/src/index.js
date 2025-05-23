import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <img src="developer.jpg"></img>
      <h1>Shanmugam Sundar</h1>
      <p>I'am a web developer , having 2 years experience in web development</p>
      <ul>
        <li>html</li>
        <li>css</li>
        <li>js</li>
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
