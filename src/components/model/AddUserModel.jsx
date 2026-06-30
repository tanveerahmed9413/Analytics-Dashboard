import React, { useState } from "react";

const AddUserModal = ({
  openModel,
  setOpenModel,
  allData,
  setAllData,
  setData,
}) => {
  const [formData, setFormData] = useState({
    projectname: "",
    status: "Approved",
    date: "",
    quantity: "",
    balance: "",
    gender: "Male",
    country: "",
    username: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const lastId = allData.length
      ? Math.max(...allData.map((user) => Number(user.id.replace("#", ""))))
      : 1000;

    const newUser = {
      id: `#${lastId + 1}`,
      ...formData,
      quantity: Number(formData.quantity),
      balance: Number(formData.balance),
    };

    const updatedData = [...allData, newUser];

    setAllData(updatedData);
    setData(updatedData);

    setFormData({
      projectname: "",
      status: "Approved",
      date: "",
      quantity: "",
      balance: "",
      gender: "Male",
      country: "",
      username: "",
      role: "",
    });

    setOpenModel(false);
  };

  if (!openModel) return null;

  return (
    <div
      className="fixed  inset-0 z-50 bg-black/50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
      onClick={() => setOpenModel(false)}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-5 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Add New User
          </h2>

          <button
            onClick={() => setOpenModel(false)}
            className="text-3xl font-bold text-gray-500 hover:text-red-500 cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="projectname"
            placeholder="Project Name"
            value={formData.projectname}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="number"
            name="balance"
            placeholder="Balance"
            value={formData.balance}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option>Approved</option>
            <option>Failed</option>
            <option>Error</option>
          </select>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option>Male</option>
            <option>Female</option>
          </select>

          {/* Buttons */}
          <div className="md:col-span-2 flex flex-col-reverse sm:flex-row justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={() => setOpenModel(false)}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gray-300 hover:bg-gray-400 transition cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition cursor-pointer"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
