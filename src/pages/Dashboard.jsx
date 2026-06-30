import { useState, React, useEffect } from "react";
import KpiGrid from "../components/kpi/KpiGrid";
import PieChartComponent from "../components/charts/PieChartComponent";
import BarChartComponent from "../components/charts/BarChartComponent";
import TableData from "../components/tables/TableData";
import { tableData } from "../data/tableData";
import { Filter } from "lucide-react";

import FilterData from "../components/filters/FilterData";
import LineChartComponent from "../components/charts/LineChartComponent";
import AddUserModal from "../components/model/AddUserModel";

const Dashboard = ({
  openModel,
  setOpenModel,
  data,
  setData,
  allData,
  setAllData,
}) => {
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(allData));
  }, [allData]);

  const [status, setStatus] = useState("All Status");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  return (
    <div className="space-y-6">
      <div>
        <FilterData
          allData={allData}
          setAllData={setAllData}
          status={status}
          fromDate={fromDate}
          toDate={toDate}
          setStatus={setStatus}
          setFromDate={setFromDate}
          setToDate={setToDate}
          data={data}
          setData={setData}
        />
      </div>

      {/* KPI Cards */}
      <KpiGrid data={data} />
      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-4 overflow-hidden">
          <PieChartComponent data={data} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 overflow-hidden">
          <BarChartComponent data={data} />
        </div>
      </div>
      <div className="bg-white w-full rounded-2xl shadow-sm p-4 overflow-hidden">
        <LineChartComponent data={data} />
      </div>
      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm p-4 overflow-x-auto">
        <TableData
          data={data}
          setData={setData}
          allData={allData}
          setAllData={setAllData}
        />
      </div>
    </div>
  );
};

export default Dashboard;
