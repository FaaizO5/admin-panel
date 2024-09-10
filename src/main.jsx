import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CssBaseline } from "@mui/material";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssBaseline />

    <App />
  </StrictMode>
);
