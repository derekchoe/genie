import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      password2: ''
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signupUser(newUser, this.props.history);
  }

  render() {
    const errors = this.props.errors.map(error => <li>{error}</li>);
    return (
      <form>
        <h1>Sign up</h1>
        <ul>{errors}</ul>
        email:
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleInput}
        />
        First Name:
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleInput}
        />
        Last Name:
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleInput}
        />
        password:
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInput}
        />
        password2:
        <input
          type="password"
          name="password2"
          value={this.state.password2}
          onChange={this.handleInput}
        />
        <button onClick={this.handleSubmit}>Sign Up</button>
      </form>
    );
  }
}

export default withRouter(Signup);
