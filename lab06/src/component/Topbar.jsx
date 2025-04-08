import { Bell, Search, HelpCircle, User } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-pink-600">Dashboard</h1>

      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-3 py-1 text-sm"
          />
        </div>
        <Bell className="text-gray-600" />
        <HelpCircle className="text-gray-600" />
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <User className="text-white" size={16} />
        </div>
      </div>
    </header>
  );
}
