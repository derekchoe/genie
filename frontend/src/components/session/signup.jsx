import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Particles from "react-particles-js";
import SignupContainer from './signup_container';

class Signup extends Component {

  render() {
    // const particlesOpt = { particles: { number: { value: 15, density: { enable: true, value_area: 800 } }, color: { value: "#60b5c8" }, shape: { type: "circle", stroke: { width: 0, color: "#ffffff" }, polygon: { nb_sides: 12 }, image: { src: "", width: 100, height: 100 } }, opacity: { value: 0.49716301422833176, random: false, anim: { enable: false, speed: 0.8932849335314805, opacity_min: 0.1, sync: false } }, size: { value: 3, random: true, anim: { enable: false, speed: 258.94105894105894, size_min: 18.38161838161838, sync: false } }, line_linked: { enable: true, distance: 284.0931509876182, color: "#60b5c8", opacity: 0.3367165327817595, width: 1.5782952832645454 }, move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true }, modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } } }, retina_detect: true };
    const particlesOpt = {
      "particles": {
        "number": {
          "value": 20,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#fff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 4,
            "color": "#71a4de"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#fff",
          "opacity": 0.4,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }

    return <div className='login-page-wrapper'>
        <div className="particles-stuff">
          <Particles params={particlesOpt} />
        </div>
        <SignupContainer/>
      </div>;
    }
}

export default withRouter(Signup);
