import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
// import "./styles/custom.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
