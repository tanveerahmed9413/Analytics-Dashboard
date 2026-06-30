import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PieChartComponent = ({ data }) => {
  const COLORS = ["#f59e0b", "#ef4444", "#f59e0b"];

  const pieData = [
    {
      name: "Male",
      value: data.filter((item) => item.gender === "Male").length,
    },
    {
      name: "Female",
      value: data.filter((item) => item.gender === "Female").length,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 h-[350px]">
      <h3 className="text-gray-700 font-semibold mb-4">Gender Breakdown</h3>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
