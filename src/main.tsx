import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import App from "./components/App/App.tsx";
import "modern-normalize";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <div>
      <Toaster />
    </div>
  </StrictMode>
);
