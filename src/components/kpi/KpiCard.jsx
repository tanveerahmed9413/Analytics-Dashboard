// src/components/kpi/KpiCard.jsx
import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const KpiCard = ({ title, value, icon: Icon, trend = "+12.5%", color = "blue" }) => {
  // Dynamic color mapping for icon background
  const colorMap = {
    blue: "from-blue-500 to-blue-600",
    green: "from-emerald-500 to-teal-600",
    red: "from-rose-500 to-red-600",
    purple: "from-violet-500 to-purple-600",
  };

  const isPositive = trend.startsWith("+");

  return (
    <div className="group bg-white border border-gray-200/80 rounded-2xl p-6 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 tracking-wide uppercase">
            {title}
          </p>
          <h3 className="text-3xl font-extrabold text-gray-800 mt-1 tracking-tight">
            {typeof value === 'number' ? value.toLocaleString('en-IN') : value}
          </h3>
        </div>
        {/* Gradient Icon Box */}
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[color]} shadow-lg shadow-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={24} className="text-white" strokeWidth={2} />
        </div>
      </div>
      
      
    </div>
  );
};

export default KpiCard;