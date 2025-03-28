import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./app/Layout";
import Top from "./app/top/TopPage";
import Login from "./app/Login";
import CanvasListPage from "./app/automerge/CanvasListPage";
import OthersPage from "./app/others/OthersPage";

function RouterConfig() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/top" element={<Layout />}>
          <Route index element={<Top />} />
        </Route>
        <Route path="/CanvasListPage" element={<Layout />}>
          <Route index element={<CanvasListPage />} />
        </Route>
        <Route path="/others" element={<Layout />}>
          <Route index element={<OthersPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default RouterConfig;