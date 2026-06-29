import React, { useState } from "react";
import { ArrowUpDown, Search, SkipForward, SkipBack } from "lucide-react";

const TableData = ({ data }) => {
  const [searchInput, setSearchInput] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState("id");

  const itemsPerPage = 5;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const filteredData = data.filter((item) => {
    return (
      item.username.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.status.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  const sortedData = [...filteredData].sort((a, b) => {
    let valueA = a[sortField];
    let valueB = b[sortField];

    const parseDate = (dateString) => {
      const [day, month, year] = dateString.split(/[/-]/);
      return new Date(year, month - 1, day);
    };

    // Date sorting
    if (sortField === "date") {
      valueA = parseDate(valueA);
      valueB = parseDate(valueB);
    }

    // Balance sorting
    if (sortField === "balance") {
      valueA = Number(valueA);
      valueB = Number(valueB);
    }

    // Quantity sorting
    if (sortField === "quantity") {
      valueA = Number(valueA);
      valueB = Number(valueB);
    }

    // String sorting
    if (typeof valueA === "string") {
      return sortOrder === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    // Number sorting
    return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
  });

  const currentItems = sortedData.slice(firstIndex, lastIndex);
  const totalPage = Math.ceil(sortedData.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSorting = (field) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";

    setSortField(field);
    setSortOrder(order);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "text-green-600 bg-green-100";

      case "Failed":
        return "text-red-600 bg-red-100";

      case "Error":
        return "text-yellow-600 bg-yellow-100";

      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Complex Table
        </h2>

        <div className="relative w-full md:max-w-sm">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search by username or status..."
            className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto min-h-[300px] ">
        <table className="w-full min-w-[800px] lg:min-w-full">
          <thead>
            <tr className="bg-gray-50 border-b text-gray-600 text-sm uppercase">
              <th
                className="py-4 px-3 text-left cursor-pointer"
                onClick={() => {
                  handleSorting("id");
                }}
              >
                ID
              </th>

              <th
                onClick={() => {
                  handleSorting("username");
                }}
                className="py-4 px-3 text-left cursor-pointer select-none"
              >
                <div className="flex items-center gap-2">
                  Name
                  <ArrowUpDown size={16} />
                </div>
              </th>

              <th
                className="py-4 px-3 text-left cursor-pointer"
                onClick={() => {
                  handleSorting("status");
                }}
              >
                Status
              </th>
              <th
                className="py-4 px-3 text-left cursor-pointer"
                onClick={() => {
                  handleSorting("date");
                }}
              >
                Date
              </th>
              <th
                className="py-4 px-3 text-left cursor-pointer"
                onClick={() => {
                  handleSorting("progress");
                }}
              >
                Progress
              </th>
              <th
                className="py-4 px-3 text-left cursor-pointer"
                onClick={() => {
                  handleSorting("quantity");
                }}
              >
                Quality
              </th>
              <th
                className="py-4 px-3 text-left cursor-pointer"
                onClick={() => {
                  handleSorting("balance");
                }}
              >
                Balance
              </th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-indigo-50 transition-all duration-200"
              >
                <td className="py-3 px-2 sm:px-3 text-xs sm:text-sm text-gray-700">
                  {item.id}
                </td>

                <td className="py-3 px-2 sm:px-3 font-semibold text-gray-800">
                  {item.username}
                </td>

                <td className="py-3 px-2 sm:px-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      item.status,
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="py-3 px-2 sm:px-3 text-gray-600">{item.date}</td>

                <td className="py-3 px-2 sm:px-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-xs sm:text-sm text-gray-700 min-w-[40px]">
                      {item.progress}%
                    </span>

                    <div className="w-28  sm:w-28 bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"
                        style={{
                          width: `${item.progress}%`,
                        }}
                      />
                    </div>
                  </div>
                </td>

                <td className="py-3 px-2 sm:px-3 text-xs sm:text-sm text-gray-700">
                  {item.quantity}
                </td>

                <td className="py-3 px-2 sm:px-3 font-semibold text-gray-800">
                  {item.balance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* bottom */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Left side: range info */}
        <div className="px-3 py-1 rounded-lg bg-indigo-100 text-indigo-600">
          Showing {filteredData.length === 0 ? 0 : firstIndex + 1} –{" "}
          {Math.min(lastIndex, filteredData.length)} of {filteredData.length}
        </div>
        <div>
          <span className="px-3 py-1 rounded-lg bg-indigo-100 text-indigo-600">
            Page {currentPage} of {totalPage}
          </span>
        </div>

        {/* Right side: navigation buttons */}
        <div className="flex items-center gap-2">
          <button
            className="p-2 cursor-pointer rounded-lg border border-gray-300 bg-indigo-100 text-indigo-600 transition"
            onClick={handlePrevious}
          >
            <SkipBack size={18} />
          </button>
          <button
            className="p-2 cursor-pointer rounded-lg border border-gray-300 bg-indigo-100 text-indigo-600 transition"
            onClick={handleNext}
          >
            <SkipForward size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableData;
