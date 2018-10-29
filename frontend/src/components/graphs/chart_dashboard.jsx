import React, { Component } from 'react';
import NetIncomeBarChartContainer from './net_income_bar_chart_container';
import IncomeVsExpenseChart from './income_vs_expense_chart'
<<<<<<< HEAD
=======
import { Pie, PieChart, Tooltip, Sector, Cell, Label } from 'recharts';
>>>>>>> master

class ChartDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.props.fetchTransactionMonthly();
    this.props.fetchCategoriesByExpenses();
  }

  render() {
    return (
      <div className="chart-dashboard-box">
<<<<<<< HEAD
        <div className='chart-wrapper'>
          <p>Chart Dashboard</p>
=======
        <p>Chart Dashboard</p>
        <div className='chart-wrapper'>
          {/* <PieChart width={800} height={400} onMouseEnter={this.onPieEnter} z-index={'1'} >
            <Pie data={data} dataKey="Amount" nameKey="Name" cx={200} cy={200} labelLine={false} innerRadius={80} outerRadius={110} fill="#8884d8">
              {data.map((entry, index) => (<Cell fill={COLORS[index % COLORS.length]} />))}
            </Pie>
            <Tooltip />
          </PieChart> */}
>>>>>>> master
          <IncomeVsExpenseChart 
          netIncome={this.props.netIncome}
          transactionByCategory={this.props.transactionByCategory}
          />
          {/* <IncomePieChart
            transactionByCategory={this.props.transactionByCategory}
            netIncome={this.props.netIncome}
          /> */}
        </div>
<<<<<<< HEAD
=======

        {/* <div>
          <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
            <Pie
              data={data}
              dataKey="Amount"
              nameKey="Name"
              cx={200}
              cy={100}
              labelLine={false}
              innerRadius={80}
              outerRadius={110}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell fill={COLORS[index % COLORS.length]} />
              ))}
              <Label width={30} position="center" color="white" />
            </Pie>
            <Tooltip />
          </PieChart>
        </div> */}
>>>>>>> master
        <div>
          <NetIncomeBarChartContainer />
        </div>
      </div>
    );
  }
}

export default ChartDashboard;
