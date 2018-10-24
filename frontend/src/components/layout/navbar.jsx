import React, { Component } from 'react';

class Navbar extends Component {
  render() {
  
    if (this.props.history.location.pathname === "/login" || this.props.history.location.pathname === "/signup") {
      return <div></div>;
    } else {
      return <div>
          this is a navbar
          <button onClick={this.props.logoutUser}>Log out</button>
        </div>;
    }
  }
}

export default Navbar;
