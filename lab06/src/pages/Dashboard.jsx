import { useEffect, useState } from "react";
import axios from "axios";
import * as LucideIcons from "lucide-react";
import { LayoutDashboard, FileDown, FileUp, Pencil } from "lucide-react";
import DataTable from "react-data-table-component";

export default function Dashboard() {
  const [cards, setCards] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://67f55317913986b16fa42b44.mockapi.io/overview")
      .then((res) => setCards(res.data))
      .catch((err) => console.error("API error:", err));

    axios
      .get("https://67f55317913986b16fa42b44.mockapi.io/details")
      .then((res) => setDetails(res.data))
      .catch((err) => console.error("Details API error:", err));
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

  const statusBadge = (status) => {
    const statusMap = {
      New: "bg-blue-100 text-blue-600",
      "In-progress": "bg-yellow-100 text-yellow-700",
      Completed: "bg-green-100 text-green-700",
    };
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          statusMap[status] || "bg-gray-100 text-gray-600"
        }`}
      >
        {status}
      </span>
    );
  };

  const columns = [
    {
      name: "",
      cell: () => (
        <input type="checkbox" className="form-checkbox h-4 w-4 text-pink-500" />
      ),
      width: "60px",
    },
    {
      name: "Customer Name",
      selector: (row) => row.name,
      sortable: true,
      cell: (row) => (
        <div className="flex items-center gap-3">
          <img
            src={`https://i.pravatar.cc/40?u=${row.id}`}
            alt={row.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{row.name}</span>
        </div>
      ),
    },
    { name: "Company", selector: (row) => row.company },
    { name: "Order Value", selector: (row) => row.value },
    { name: "Order Date", selector: (row) => row.date },
    {
      name: "Status",
      cell: (row) => statusBadge(row.status),
    },
    {
      name: "",
      cell: () => (
        <Pencil className="w-4 h-4 text-gray-500 hover:text-gray-700 cursor-pointer" />
      ),
      width: "60px",
    },
  ];

  return (
    <div className="p-6">
      {/* Overview Section */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-pink-100 p-2 rounded-lg">
          <LayoutDashboard className="text-pink-100 w-5 h-5" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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
      <div className="bg-white p-5 rounded-xl shadow border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-pink-100 p-2 rounded-lg">
            <LayoutDashboard className="text-pink-500 w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Detailed Report</h2>
          <div className="ml-auto flex gap-2">
            <button className="flex items-center gap-1 border border-pink-500 text-pink-500 hover:bg-pink-100 text-sm font-medium px-4 py-2 rounded-md">
              <FileDown className="w-4 h-4" /> Import
            </button>
            <button className="flex items-center gap-1 border border-pink-500 text-pink-500 hover:bg-pink-100 text-sm font-medium px-4 py-2 rounded-md">
              <FileUp className="w-4 h-4" /> Export
            </button>
          </div>
        </div>

        <DataTable
          columns={columns}
          data={details}
          pagination
          highlightOnHover
          responsive
          striped
          paginationComponentOptions={{ rowsPerPageText: '', rangeSeparatorText: '', selectAllRowsItem: false }}
          noRowsPerPage
        />

        <div className="mt-2 flex justify-between items-center text-sm text-gray-600">
          <span>Results: {details.length} users</span>
          <div className="flex items-center gap-2">
          </div>
        </div>
      </div>
    </div>
  );
}
