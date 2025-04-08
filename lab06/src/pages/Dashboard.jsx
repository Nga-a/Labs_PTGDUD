import { useEffect, useState } from "react";
import axios from "axios";
import * as LucideIcons from "lucide-react";
import { LayoutDashboard } from "lucide-react";

export default function Dashboard() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://67f55317913986b16fa42b44.mockapi.io/overview")
      .then((res) => setCards(res.data))
      .catch((err) => console.error("API error:", err));
  }, []);

  const toPascalCase = (str) =>
    str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

  const renderIcon = (name, colorClass) => {
    const iconName = toPascalCase(name);
    const IconComponent = LucideIcons[iconName];
    if (!IconComponent) return null;
    return <IconComponent className={`${colorClass} w-5 h-5`} />;
  };

  const bgColorMap = ["bg-pink-100", "bg-blue-100", "bg-green-100"];
  const iconColorMap = ["text-pink-500", "text-blue-500", "text-green-500"];

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-pink-100 p-2 rounded-lg">
          <LayoutDashboard className="text-pink-100 w-5 h-5" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-xl p-5 ${bgColorMap[index % 3]} border border-gray-200 shadow-sm hover:shadow-md transition`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-800 font-semibold">{card.title}</h3>
              <div className="p-2 rounded-lg bg-white border border-gray-300">
                {renderIcon(card.icon, iconColorMap[index % 3])}
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{card.value}</div>
            <div className="text-sm">
              <span className="text-green-800 font-semibold">{card.change}</span>{" "}
              <span className="text-gray-500">period of change</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
