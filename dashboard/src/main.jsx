import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/_global.scss";
import { BrowserRouter } from "react-router-dom";
import { ToggleSidebar } from "./context/ToggleSidebar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
        <ToggleSidebar>
          
          <App />
        </ToggleSidebar>
    </BrowserRouter>
  </React.StrictMode>
);
