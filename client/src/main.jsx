import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HouseProvider } from "./context/HouseContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HouseProvider>
      <App />
    </HouseProvider>
  </StrictMode>
);
