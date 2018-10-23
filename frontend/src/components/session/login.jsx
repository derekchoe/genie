import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Particles from "react-particles-js";

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
    const errors = this.props.errors.map(error => <p>{error}</p>);

    

    const particlesOpt = { particles: { number: { value: 15, density: { enable: true, value_area: 800 } }, color: { value: "#6980e8" }, shape: { type: "circle", stroke: { width: 0, color: "#6980e8" }, polygon: { nb_sides: 12 }, image: { src: "", width: 100, height: 100 } }, opacity: { value: 0.49716301422833176, random: false, anim: { enable: false, speed: 0.8932849335314805, opacity_min: 0.1, sync: false } }, size: { value: 3, random: true, anim: { enable: false, speed: 258.94105894105894, size_min: 18.38161838161838, sync: false } }, line_linked: { enable: true, distance: 284.0931509876182, color: "#6980e8", opacity: 0.3367165327817595, width: 1.5782952832645454 }, move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true }, modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } } }, retina_detect: true };

    return <div className="login-page-wrapper">
        <div className="particles-stuff">
          <Particles params={particlesOpt} />
        </div>

        <div className="login-form-wrapper">
          <form className="login-form">
            <div className="login-header-wrapper">
              <p className="login-word">Log in</p>
              <p>{errors}</p>
            </div>

            <div className="email-password-wrapper">
              <div className="email-wrapper">
                <input id="input-option" placeholder='Email' type="text" name="email" value={this.state.email} onChange={this.handleInput} />
              </div>

              <div className="email-wrapper">
                <input id="input-option" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleInput} />
              </div>
              <input value='Log In' type='submit' className='login-button' onClick={this.handleSubmit}/>
            </div>
          </form>
        </div>
      </div>;
  }
}

export default withRouter(Signup);
