import React, { Component } from 'react';
import NetIncomeBarChartContainer from './net_income_bar_chart_container';
import IncomeVsExpenseChart from './income_vs_expense_chart';
import TwoLevelPieChart from './two_level_pie_chart';

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
        <div className="chart-name">
         {/* <p>Free Cash</p>
         <p>Expenses Details</p> */}
        </div>
          <IncomeVsExpenseChart
            netIncome={this.props.netIncome}
            transactionByCategory={this.props.transactionByCategory}
          />
          <TwoLevelPieChart
            transactionByCategory={this.props.transactionByCategory}
          />
          
        </div>
        <div className="pie-chart-income-expense-wrapper">
          <div className="chart-handler">
            <div className='chart-container'>
              <NetIncomeBarChartContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartDashboard;
