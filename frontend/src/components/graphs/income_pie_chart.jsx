import React from 'react';
import { Pie, PieChart, Tooltip, Cell, Sector} from "recharts";

function formatBetter(data) {
  let result = []


  data.forEach(datum => {
    result.push({
      value: datum.totalExpense,
      name: datum.categoryName,
    })
  })
  return result
}

const PieChartDB = ({ transactionByCategory }) => {
  const data = formatBetter(transactionByCategory)
  return <div>
      <PieChart width={1100} height={300}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={80} outerRadius={110} fill="#82ca9d" />
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%"  outerRadius={60} fill="#8884d8" />
        <Tooltip />
      </PieChart>
    </div>
};

export default PieChartDB;
