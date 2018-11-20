import React from 'react';
import { Pie, PieChart, Tooltip, Cell, Legend } from 'recharts';

const IncomeVsExpenseChart = ({ netIncome}) => {
  function formatBetter(netIncomeData) {
    const result = [];
    netIncomeData.forEach(data => {
      const income = data.income || 0;
      let expense = data.expense || 0;
      let netIn = income - expense;
      if (netIn < 0) {
        expense = (income - expense) * -1;
        netIn = 0;
      }
      result.push({ Name: 'Remaining Income', Amount: netIn });
      result.push({ Name: 'Expense', Amount: expense });
    });
    return result.slice(0, 2);
  }
  const data = formatBetter(netIncome);

  const neededData = Object.values(data).map(i => {
    const remaining = []
    remaining.push(i['Amount'])
    return remaining
  })
  const COLORS = ["rgb(119,188,171)", "rgb(230,109,150)"];



  return <div className="chart-handler">
        <div className="chart-container">
          <p className="chart-labels">Free Cash</p>
          <PieChart width={350} height={270} z-index={"1"}>
            <Pie data={data} dataKey="Amount" nameKey="Name" cx={170} cy={120} labelLine={false} outerRadius={110} fill="#8884d8">
              {data.map((_, index) => (
                <Cell fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <div className="chart-labels-wrapper">
            <div className="chart-labels-inside">
              <p className="chart-labels-inner">Remaining Income: </p>
              <p className="chart-labels-inner1">{neededData[0]} </p>
            </div>
            <div className="chart-labels-inside">
              <p className="chart-labels-inner">Total Expenses: </p>
          <p className="chart-labels-inner1">{neededData[1]} </p>
            </div>
          </div>
        </div>
    </div>;
};

export default IncomeVsExpenseChart;
