import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SignUpForm extends Component {
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
    const errors = this.props.errors.map(error => <p>{error}</p>);

    return <div className='session-wrapper'>

      <div className="login-form-wrapper">
        <form className="login-form">
            <div className='picture-logo-stuff'>
            </div>
          <div className="login-header-wrapper">


            <p>{errors}</p>
          </div>

          <div className="email-password-wrapper">
            <div className="email-wrapper">
              <input id="input-option" placeholder='Email' type="text" name="email" value={this.state.email} onChange={this.handleInput} />
            </div>

            <div className="email-wrapper">
              <input id="input-option" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleInput} />
            </div>
            <input value='Log In' type='submit' className='login-button' onClick={this.handleSubmit} />
          </div>
        </form>
      </div>
    </div>;
  }
}

export default withRouter(SignUpForm);
