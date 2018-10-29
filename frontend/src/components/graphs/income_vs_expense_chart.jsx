import React from 'react';
<<<<<<< HEAD
import { Pie, PieChart, Tooltip, Cell, Legend} from "recharts";

const IncomeVsExpenseChart = ({ netIncome, transactionByCategory }) => {
  function formatBetter(netIncomeData) {
    const result = [];
    netIncomeData.forEach(data => {
      const income = data.income || 0;
      let expense = data.expense || 0;
=======
import { Pie, PieChart, Tooltip, Cell } from "recharts";

const IncomeVsExpenseChart = ({ netIncome, transactionByCategory }) => {
  function formatBetter(data) {
    const result = [];
    data.forEach(trans => {
      const income = trans.income || 0;
      let expense = trans.expense || 0;
>>>>>>> master
      let netIn = income - expense;
      if (netIn < 0) {
        expense = (income - expense) * -1;
        netIn = 0;
      }
      result.push({ Name: "Remaining Income", Amount: netIn });
      result.push({ Name: "Expense", Amount: expense });
    });
    return result.slice(0, 2);
  }
  const COLORS = ["#00C49F", "#e60000"];
  const data = formatBetter(netIncome);

  function formatBetter1(data) {
    let result = [];

    data.forEach(datum => {
      result.push({
        value: datum.totalExpense,
        name: datum.categoryName
      });
    });
    return result;
  }
  const data1 = formatBetter1(transactionByCategory);

<<<<<<< HEAD
  function formatBetter1(categoryData) {
    let result = [];

    categoryData.forEach(datum => {
      result.push({ value: datum.totalExpense, name: datum.categoryName });
    });
    return result;
  }
  const COLORS = ["#00C49F", "#e60000"];
  const data = formatBetter(netIncome);
  const data1 = formatBetter1(transactionByCategory);

  return <div>
      <PieChart width={800} height={400} z-index={"1"}>
      <Pie data={data} dataKey="Amount" nameKey="Name" cx={120} cy={200} labelLine={false} innerRadius={80} outerRadius={110} fill="#8884d8">
=======
  return <div>
      <PieChart width={800} height={400} z-index={"1"}>
        <Pie data={data} dataKey="Amount" nameKey="Name" cx={120} cy={200} labelLine={false} innerRadius={80} outerRadius={110} fill="#8884d8">
>>>>>>> master
          {data.map((entry, index) => (
            <Cell fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

<<<<<<< HEAD
        <Pie data={data1} dataKey="value" nameKey="name" cx="500" cy="200" innerRadius={80} outerRadius={110} fill="#82ca9d"/>
        <Pie data={data1} dataKey="value" nameKey="name" cx="500" cy="200" outerRadius={60} fill="#8884d8" />
=======
        <Pie data={data1} dataKey="value" nameKey="name" cx="420" cy="200" innerRadius={80} outerRadius={110} fill="#82ca9d" />
      <Pie data={data1} dataKey="value" nameKey="name" cx="420" cy="200" outerRadius={60} fill="#8884d8" />
>>>>>>> master
        <Tooltip />
      </PieChart>
    </div>;
};

export default IncomeVsExpenseChart;  