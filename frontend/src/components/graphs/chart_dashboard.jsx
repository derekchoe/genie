import React, { Component } from 'react';
import PieChart from './income_pie_chart';
import NetIncomeBarChartContainer from './net_income_bar_chart_container';

class ChartDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    this.props.fetchCategoriesByExpenses();
  }

  render() {
    return (
      <div className="chart-dashboard-box">
        <p>Chart Dashboard</p>
        <div>
          <PieChart transactionByCategory={this.props.transactionByCategory} />
        </div>

        <div>
          <NetIncomeBarChartContainer />
        </div>
      </div>
    );
  }
}

export default ChartDashboard;
