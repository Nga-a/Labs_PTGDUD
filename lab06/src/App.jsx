import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Teams from "./pages/Teams";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Integrations from "./pages/Integrations";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="teams" element={<Teams />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="messages" element={<Messages />} />
        <Route path="integrations" element={<Integrations />} />
      </Route>
    </Routes>
  );
}

export default App;
