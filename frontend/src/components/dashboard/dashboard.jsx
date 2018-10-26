import React, { Component } from 'react';
import NavbarContainer from '../layout/navbar_container';
import SidebarContainer from '../sidebar/sidebar_container';
import ChartDashboardContainer from '../graphs/chart_dashboard_container';
import RecentTrans from './recent_trans';

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
          <RecentTrans transactions={this.props.transactions} />
        </div>
      </div>
    );
  }
}
