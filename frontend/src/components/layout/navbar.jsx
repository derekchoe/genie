import React, { Component } from "react";


class Navbar extends Component {
  render() {
    return (
      <div>
        this is a navbar
        <button onClick={this.props.logoutUser}>Log Out</button>
      </div>
    );
  }
}

export default Navbar;
