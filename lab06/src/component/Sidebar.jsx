import { NavLink } from "react-router-dom";
import { Home, Folder, Users, BarChart2, MessageSquare, Zap } from "lucide-react";
import logo from "../../img/logo.png";
import group from "../../img/Group.png";
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
        <div className="mb-8">
          <img src={logo} alt="Logo" className="w-32 h-auto mx-auto" />
        </div>
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <NavLink
            key={link.name}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-md no-underline ${
                isActive
                  ? "bg-pink-500 text-white font-semibold"
                  : "text-gray-800 hover:bg-pink-100 hover:text-pink-600"
              }`
            }
          >
            <span className="text-inherit">{link.icon}</span>
            <span className="text-inherit">{link.name}</span>
          </NavLink>
          
          ))}
        </nav>
      </div>
      <div className="bg-blue-100 p-4 rounded-lg mt-8">
        <div className="mb-8">
          <img src={group} alt="Logo" className="w-32 h-auto mx-auto" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm font-medium mb-2">V2.0 is available</p>
          <button className="border border-blue-500 text-blue-500 px-3 py-1 rounded text-sm hover:bg-blue-200">
            Try now
          </button>
        </div>
      </div>


    </aside>
  );
}
