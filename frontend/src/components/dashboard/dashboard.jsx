
import React, { Component } from 'react';
import NavbarContainer from '../layout/navbar_container';
import SidebarContainer from '../sidebar/sidebar_container';
import ChartDashboardContainer from '../graphs/chart_dashboard_container';

export default class DashBoard extends Component {
  render() {
    return (

      <div className="dashboard-box">
        <NavbarContainer />
        <div className="body-box">
          <SidebarContainer />
          <ChartDashboardContainer />
        </div>
      </div>
    );
  }
}
