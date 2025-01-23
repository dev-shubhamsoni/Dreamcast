import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import StoreProvider from "./providers/StoreProvider";
import { BrowserRouter, Route, Routes } from "react-router";
import User from "./container/User";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>
);
