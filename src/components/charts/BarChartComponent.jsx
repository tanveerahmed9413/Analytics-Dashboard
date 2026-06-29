import React from 'react'
import { BarChart,Bar, XAxis, YAxis, CartesianGrid, Cell,Tooltip, Legend, Label } from 'recharts'


const BarChartComponent = ({data}) => {
  
  const chartData = [
    {
        status: "Approved",
        total: data.filter(
            item => item.status === "Approved"
        ).length
    },
    {
        status: "Failed",
        total: data.filter(
            item => item.status === "Failed"
        ).length
    },
    {
        status: "Error",
        total: data.filter(
            item => item.status === "Error"
        ).length
    }
];

const COLORS = ["#22c55e", "#ef4444", "#f59e0b"];

  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <h3 className="text-gray-700 font-semibold mb-4">Users by Status</h3>
       <BarChart  width={"100%"} height={300} data={chartData} responsive  >
        <CartesianGrid strokeDasharray='3 3'/>
        <XAxis dataKey="status"/>
        <YAxis />

        <Bar dataKey="total" name="User Count">
            {chartData.map((entry, index) => (
                          <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
        </Bar>
      
        <Tooltip />
        <Legend />
       </BarChart>
    </div>
  )
}

export default BarChartComponent
