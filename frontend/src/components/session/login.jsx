import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.session.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(newUser, this.props.history);
  }

  render() {
    const errors = this.props.errors.map(error => <li>{error}</li>);
    return (
      <form>
        <h1>Log in</h1>
        <ul>{errors}</ul>
        email:
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleInput}
        />
        password:
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInput}
        />
        <button onClick={this.handleSubmit}>Sign Up</button>
      </form>
    );
  }
}

export default withRouter(Signup);
