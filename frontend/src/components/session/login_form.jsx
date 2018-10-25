import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.otherFrom = this.otherFrom.bind(this);
  }

  componentDidMount() {
    if (this.props.session.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  demoLogin() {
    const user = {email:'demo@gmail.com', password: '123456'};
    this.props.loginUser(user);
  }
  otherFrom() {
    this.props.history.push('/signup')
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
    const errors = this.props.errors.map(error => <p>{error}</p>);

    return (
      <div className="session-wrapper">
        <div className="login-form-wrapper">
          <form className="login-form">
            <div className="login-header-wrapper">
              <div className="picture-logo-stuff" />
              <p>{errors}</p>
            </div>

            <div className="email-password-wrapper">
              <div className="email-wrapper">
                <input
                  className="input-option"
                  placeholder="Email"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInput}
                />
              </div>

              <div className="email-wrapper">
                <input
                  className="input-option"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInput}
                />
              </div>
            </div>
            <div className='login-demo-wrapper'>
              <input
                value="Log In"
                type="submit"
                className="login-button1"
                onClick={this.handleSubmit}
              />
            </div>
          </form>
          <div>
          <button className ='demo-user' onClick={this.demoLogin}>Demo</button>
            <p>First time? <a href='/signup'>Sign Up</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
