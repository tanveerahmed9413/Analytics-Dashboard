import React from "react";

import KpiCard from "./KpiCard";
import { CheckCircle, Users, XCircle,  IndianRupee, } from "lucide-react";

const KpiGrid = ({data}) => {
  const totalUsers = data.length;

  const approved = data.filter((item) => item.status === "Approved").length;

  const failed = data.filter((item) => item.status === "Failed").length;

 const revenue = data.reduce((sum, item) => {
  return sum + Number(item.balance);
}, 0);

  const cards = [
    {
      title: "Total Users",
      value: totalUsers,
      icon: Users,
    },
    {
      title: "Approved",
      value: approved,
      icon: CheckCircle,
    },
    {
      title: "Failed",
      value: failed,
      icon: XCircle,
    },
    {
      title: "Revenue",
      value: revenue,
      icon:   IndianRupee,

    },
  ];

  return (
    <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {cards.map((item, i) => {
        return (
          <KpiCard
            key={i}
            value={item.value}
            title={item.title}
            icon={item.icon}
          />
        );
      })}
    </div>
  );
};

export default KpiGrid;
