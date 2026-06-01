import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../osh_study_guide.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
