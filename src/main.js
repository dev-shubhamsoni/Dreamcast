import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import StoreProvider from "./providers/StoreProvider";
import { BrowserRouter, Route, Routes } from "react-router";
import User from "./container/User";
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsx(StoreProvider, { children: _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(App, {}) }), _jsx(Route, { path: "/user", element: _jsx(User, {}) })] }) }) }) }));
