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
    const errors = this.props.errors[0];

    return <div className='login-page-wrapper'>

      <div className="login-form-wrapper">
        <form className='login-form'>
            <div className="login-header-wrapper">
              <div className='picture-logo-stuff'>
              </div>
            <div className='stupid-errors'>
              {errors}
            </div>
            </div>

            <div className="email-password-wrapper">
              <input id="email-input" type="text" placeholder='Email' name="email" value={this.state.email} onChange={this.handleInput} />
              <div className='first-last-name'>
                <input id="input-option" type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleInput} />
                <input id="input-option" type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleInput} />
              </div>
              <div className='first-last-name'>
                <input id="input-option" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInput} />
                <input id="input-option" type="password" placeholder="Password" name="password2" value={this.state.password2} onChange={this.handleInput} />
              </div>
              <input value='Sign Up' type='submit' className='login-button' onClick={this.handleSubmit} />
            </div>
          </form>
        </div>
    </div>;
  }
}

export default withRouter(SignupForm);
