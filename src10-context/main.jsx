import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ViewContext } from "../src11-useeffect/contexts/ViewContext.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ViewContext.Provider value="front">
      <App />
    </ViewContext.Provider>
  </StrictMode>
);
