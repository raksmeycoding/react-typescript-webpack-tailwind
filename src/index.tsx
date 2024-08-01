import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import App from "./App";
import "./index.css"; // Ensure this path matches your CSS file location

// Get the root element from the HTML
const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container!);

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
