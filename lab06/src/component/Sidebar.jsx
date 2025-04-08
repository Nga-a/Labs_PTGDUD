import { NavLink } from "react-router-dom";
import { Home, Folder, Users, BarChart2, MessageSquare, Zap } from "lucide-react";

export default function Sidebar() {
  const links = [
    { name: "Dashboard", icon: <Home size={18} />, to: "/" },
    { name: "Projects", icon: <Folder size={18} />, to: "/projects" },
    { name: "Teams", icon: <Users size={18} />, to: "/teams" },
    { name: "Analytics", icon: <BarChart2 size={18} />, to: "/analytics" },
    { name: "Messages", icon: <MessageSquare size={18} />, to: "/messages" },
    { name: "Integrations", icon: <Zap size={18} />, to: "/integrations" },
  ];

  return (
    <aside className="w-64 bg-white border-r h-full flex flex-col justify-between p-4">
      <div>
        <div className="text-2xl font-bold mb-8">📊 Logo</div>
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md ${
                  isActive ? "bg-pink-500 text-white" : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mt-8">
        <p className="text-sm font-medium mb-2">V2.0 is available</p>
        <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">Try now</button>
      </div>
    </aside>
  );
}
