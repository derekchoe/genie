import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

function formatBetter(data) {
  let result = [];

  data.forEach(datum => {
    result.push({
      name: datum.categoryName,
      value: datum.totalExpense
    });
  });
  return result;
}

const PieChartDB = ({ transactionByCategory }) => {
  return (
    <div>
      <PieChart width={730} height={300}>
        <Pie
          data={formatBetter(transactionByCategory)}
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
        />
        <Pie
          data={formatBetter(transactionByCategory)}
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieChartDB;
