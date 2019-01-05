import React, { Component } from 'react';
import NavbarContainer from '../layout/navbar_container';
import Sidebar from '../sidebar/sidebar';
import ChartDashboardContainer from '../graphs/chart_dashboard_container';
import RecentTransContainer from './recent_trans_container';
import Footer from "../layout/footer";

export default class DashBoard extends Component {
  componentDidMount() {
    this.props.fetchTransactions();
  }

  render() {
    return <div className="dashboard-box">
        <NavbarContainer />
        <div className="nav-container-placeholder" />
        <div className="body-box">
          <Sidebar />
          <ChartDashboardContainer />
          <RecentTransContainer transactions={this.props.transactions} />
        </div>
        <Footer/>
      </div>;
  }
}
