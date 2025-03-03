import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import App from "./App";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* 初期画面をログイン画面に設定 */}
        <Route path="/canvas" element={<App />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
