import React, { Component } from 'react';
import NetIncomeBarChartContainer from './net_income_bar_chart_container';
import IncomeVsExpenseChart from './income_vs_expense_chart';

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
        <div className="chart-wrapper">
          <p>Chart Dashboard</p>
          <IncomeVsExpenseChart
            netIncome={this.props.netIncome}
            transactionByCategory={this.props.transactionByCategory}
          />
        </div>
        <div>
          <NetIncomeBarChartContainer />
        </div>
      </div>
    );
  }
}

export default ChartDashboard;
