import React, { Component } from 'react';
import IncomePieChart from './income_pie_chart';
import NetIncomeBarChartContainer from './net_income_bar_chart_container';
import { Pie, PieChart, Tooltip, Sector, Cell, Label } from "recharts";

class ChartDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
    this.formatBetter = this.formatBetter.bind(this)
  }
  
  componentDidMount() {
    this.props.fetchTransactionMonthly();
    this.props.fetchCategoriesByExpenses();
  }
  
  formatBetter(data) {
  const result = []
  data.forEach(trans => {
    const income = trans.income || 0;
    let expense = trans.expense || 0;
    let netIn = income - expense;
    if (netIn < 0) {
      expense = (income - expense) * -1
      netIn = 0
      
    }
    result.push({ Name: "Remaining Income", Amount: netIn });
    result.push({ Name: "Expense", Amount: expense });
  });
  return result.slice(0, 2)
}


  render() {
    const COLORS = ["#00C49F", "#e60000"];
    const data = this.formatBetter(this.props.netIncome);
        
    return <div className="chart-dashboard-box">

        <p>Chart Dashboard</p>
        <div>
          <IncomePieChart transactionByCategory={this.props.transactionByCategory} />
        </div>

        <div>
          <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
            <Pie data={data} dataKey="Amount" nameKey="Name" cx={300} cy={200} labelLine={false} innerRadius={80} outerRadius={110} fill="#8884d8">
              {data.map((entry, index) => (
                <Cell fill={COLORS[index % COLORS.length]} />
              ))}
            <Label width={30} position="center" color="white">
            </Label>
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div>
          <NetIncomeBarChartContainer />
        </div>
      </div>
   }
 };

export default ChartDashboard;
