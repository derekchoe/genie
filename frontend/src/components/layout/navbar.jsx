import React, { Component } from "react";


class Navbar extends Component {
  render() {
    return (
      <nav className="nav-box">
      <div className="logo-logout-wrapper">
        <div className="logo"></div>
        <button className="logout-button" onClick={this.props.logoutUser}>Log Out</button>

      </div>
      </nav>
    );
  }
}

export default Navbar;
