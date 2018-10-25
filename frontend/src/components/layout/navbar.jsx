import React, { Component } from "react";


class Navbar extends Component {
  render() {
    return (
      <nav>
        this is a navbar
        <button className="logout-button" onClick={this.props.logoutUser}>Log Out</button>
      </nav>
    );
  }
}

export default Navbar;
