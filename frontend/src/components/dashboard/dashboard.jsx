import React, { Component } from 'react'
import NavbarContainer from '../layout/navbar_container'
import SidebarContainer from '../sidebar/sidebar_container'

export default class DashBoard extends Component {
  render() {
    return (
      <div className="dashboard-box">
        <NavbarContainer/>
        <SidebarContainer/>
        This is the dashboard
      </div>
    )
  }
}
