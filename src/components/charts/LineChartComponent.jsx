import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const LineChartComponent = ({ data }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-5">
      <h3 className="text-gray-700 dark:text-gray-100 font-semibold mb-4">
        Sales Trend
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* 👇 Multiple lines can be added */}
          <Line
            type="monotone"
            dataKey="quantity"
            stroke="#22c55e"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
