import React from 'react';
import { Pie, PieChart, Tooltip } from "recharts";

const IncomeVsExpenseChart = ({ netIncome }) => {
  function formatBetter(data) {
    const result = []
    data.map(trans => {
      const income = trans.income || 0;
      const expense = trans.expense || 0;
      const netIn = income - expense;
      result.push({ Category: "Remaining Income", Amount: netIn });
      result.push({ Category: "Expense", Amount: trans.expense });
    });
    return result.slice(0,2)
  }

  console.log(formatBetter(netIncome))
  debugger;
  return <div>
      <PieChart width={500} height={300}>
        <Pie data={formatBetter(netIncome)} nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#82ca9d" />
        <Tooltip />
      </PieChart>
    </div>;
};

export default IncomeVsExpenseChart;  