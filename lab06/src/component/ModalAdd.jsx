import { useState } from "react";
import axios from "axios";
import CurrencyInput from "react-currency-input-field";

export default function ModalAdd({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    value: "",
    date: new Date().toISOString().split("T")[0],
    status: "New",
  });

  if (!isOpen) return null;

  const handleAdd = () => {
    const newUser = {
      ...formData,
      value: formData.value.startsWith("$") ? formData.value : `$${formData.value}`,
    };

    axios
      .post("https://67f55317913986b16fa42b44.mockapi.io/details", newUser)
      .then((res) => {
        onAdd && onAdd(res.data);
        onClose && onClose();
      })
      .catch(() => {
        alert("Thêm người dùng thất bại!");
      });
  };

  return (
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[400px]">
        <h2 className="text-xl font-semibold mb-4">Add User</h2>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium">Customer Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Company</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Order Value</label>
            <CurrencyInput
              prefix="$"
              decimalsLimit={2}
              value={formData.value}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, value }))}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleAdd}
              className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
