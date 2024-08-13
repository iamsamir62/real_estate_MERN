import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HouseProvider } from "./context/HouseContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HouseProvider>
      <App />
      <ToastContainer />
    </HouseProvider>
  </StrictMode>
);
