import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends Component {
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
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  demoLogin() {
    const demo = {email: 'demo@gmail.com', password: '123456'}
    this.props.loginUser(demo)
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
    const errors = this.props.errors[0]

    return <div className='login-page-wrapper'>

      <div className="login-form-wrapper">
        <form className='login-form'>
            <div className="login-header-wrapper">
              <div className='picture-logo-stuff'>
              </div>
            <div>
              {errors}
            </div>
            </div>

            <div className="email-password-wrapper">
              <input id="email-input" type="text" placeholder='Email' name="email" value={this.state.email} onChange={this.handleInput} />
              <div className='first-last-name'>
                <input className="name-input" type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleInput} />
                <input className="name-input" type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleInput} />
              </div>
              <div className='password-wrapper'>
                <input id="email-input" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInput} />
                <input id="email-input" type="password" placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.handleInput} />
              </div>
            </div>
            <div className='login-demo-wrapper'>
              <input value='Sign Up' type='submit' className='login-button' onClick={this.handleSubmit} />

            </div>
          </form>
        <div className="demo-and-redirect">
          <button className='demo-user' onClick={this.demoLogin}>Demo</button>
          <p>Already signed up? <a href='/login'>Log In</a></p>
        </div>
        </div>
    </div>;
  }
}

export default withRouter(SignupForm);
