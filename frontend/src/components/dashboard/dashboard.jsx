import React, { Component } from 'react';
import NavbarContainer from '../layout/navbar_container';
import SidebarContainer from '../sidebar/sidebar_container';
import ChartDashboardContainer from '../graphs/chart_dashboard_container';
import RecentTransContainer from './recent_trans_container';

export default class DashBoard extends Component {
  componentDidMount() {
    this.props.fetchTransactions();
  }

  render() {
    return (
      <div className="dashboard-box">
        <NavbarContainer />
        <div className="body-box">
          <SidebarContainer />
          <ChartDashboardContainer />
      <RecentTransContainer transactions={this.props.transactions} /> 
        </div>
      </div>
    );
  }
}
