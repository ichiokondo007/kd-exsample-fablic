import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
import "./styles.css"; // Tailwind CSS を適用
import "./global.css"; // ✅ Tailwind を適用する

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);