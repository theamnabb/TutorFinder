import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; //dom
import { ToastContainer } from "react-toastify"; //reacttify
import "react-toastify/dist/ReactToastify.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <ToastContainer position="bottom-right" />
  </BrowserRouter>
);
