import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppStateProvider } from "./context/AppContext";
import ScrollToTop from "./components/ScrollToTop";
import App from "./App";
import "./index.css";

// Disable browser auto scroll restoration globally
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppStateProvider>
      <BrowserRouter>
        <ScrollToTop />   {/* ✅ This must come BEFORE <App /> */}
        <App />
      </BrowserRouter>
    </AppStateProvider>
  </React.StrictMode>
);
