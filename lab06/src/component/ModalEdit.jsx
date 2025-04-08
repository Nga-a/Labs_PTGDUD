import { useState, useEffect } from "react";
import axios from "axios";

export default function ModalEdit({ isOpen, onClose, data, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    value: "",
  });

  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name || "",
        company: data.company || "",
        value: data.value || "",
      });
    }
  }, [data]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    axios
      .put(`https://67f55317913986b16fa42b44.mockapi.io/details/${data.id}`, {
        ...data,
        ...formData,
      })
      .then((res) => {
        onSave(res.data);
      })
      .catch((err) => console.error("Update error:", err));
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[400px]">
        <h2 className="text-xl font-semibold mb-4">Edit User</h2>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium">Customer Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Order Value</label>
            <input
              type="text"
              name="value"
              value={formData.value}
              onChange={handleChange}
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
              onClick={handleSave}
              className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
