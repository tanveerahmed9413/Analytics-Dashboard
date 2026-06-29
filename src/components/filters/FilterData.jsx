import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterData = ({
  allData,
  status,
  fromDate,
  toDate,
  setStatus,
  setFromDate,
  setToDate,
  data,
  setData,
}) => {
  const applyFilter = () => {
  let filtered = [...allData];

  // Status Filter
  if (status !== "All Status") {
    filtered = filtered.filter((item) => item.status === status);
  }

  // From Date Filter
  if (fromDate) {
    filtered = filtered.filter((item) => {
      return new Date(item.date) >= fromDate;
    });
  }

  // To Date Filter
  if (toDate) {
    filtered = filtered.filter((item) => {
      return new Date(item.date) <= toDate;
    });
  }

  setData(filtered);
};

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white/50 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-4 shadow-sm">

  {/* Filters */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-center gap-3 w-full">

    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="w-full lg:w-44 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
    >
      <option value="All Status">🌐 All Status</option>
      <option value="Approved">✅ Approved</option>
      <option value="Failed">❌ Failed</option>
    </select>

    <DatePicker
      selected={fromDate}
      onChange={(date) => setFromDate(date)}
      dateFormat="dd/MM/yyyy"
      placeholderText="From Date"
      className="w-full lg:w-44 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
    />

    <DatePicker
      selected={toDate}
      onChange={(date) => setToDate(date)}
      dateFormat="dd/MM/yyyy"
      placeholderText="To Date"
      className="w-full lg:w-44 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
    />

  </div>

  {/* Button */}
  <button
    onClick={applyFilter}
    className="w-full cursor-pointer sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-6 py-2 rounded-lg shadow-md transition"
  >
    Apply Filters
  </button>

</div>
  );
};

export default FilterData;
