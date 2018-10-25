import React, { Component } from 'react'
import NavbarContainer from '../layout/navbar_container'
import SidebarContainer from '../sidebar/sidebar_container'
import ChartDashboardContainer from '../graphs/chart_dashboard_container';

export default class DashBoard extends Component {
  render() {
    return (
      <div>
        <NavbarContainer/>
        <SidebarContainer/>
        This is the dashboard
        <ChartDashboardContainer />
      </div>
    )
  }
}
