import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx"; 
import LandingPage from "./LandingPage.jsx";
import Graduate from "./Graduate.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define the routes */}
        <Route path="/" element={<App />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/graduate" element={<Graduate />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
