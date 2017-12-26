import React, { Component } from 'react';
import 'particles.js/particles';  
const particlesJS = window.particlesJS; 

const particlesStyle = {
  position: 'absolute',
  display: 'block',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%'
}

export default class Particles extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  async componentDidMount() {
    
    let id;
    if(this.props.id){
      id = "particles-js-" + this.props.id 
    } else {
      console.error("[ERROR] No 'id' prop found in <Particles/> component.\n\n"
                  + "\tExamples:\n"
                  + "\t-> <Particles id=\"42\"/>\n"
                  + "\t-> <Particles id=\"bacon\"/>\n\n");
    }

    let response, config;
    if (this.props.config) {
      try {
        response = await fetch(this.props.config);
        config = await response.json();
      } catch (e) {
        alert("[ERROR] Couldn't load the assigned config file for your <Particles/> component.\n\n"
            + "Check your console or the README for examples.");

        console.error("[ERROR] Couldn't load assigned config file.\n\n"
                    + "\tExamples:\n"
                    + "\t-> <Particles id=\"bacon\" config=\"bacon-particles-config.json\"/>\n"
                    + "\t-> <Particles id=\"bacon\" config=\"particles/bacon-particles-config.json\"/>\n\n"
                    + "\t* Path to config file is relative to your index.html *\n\n");
      }  

      await this.setStateAsync({configuration: config});

    } else {
      
      // Default value of particles.
      config =
      {
        "particles": {
          "number": {
            "value": 50,
            "density": {
              "enable": false
            }
          },
          "shape": {
            "type": "image",
            "image": {
              "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",
              "width": 600,
              "height": 400
            }
          },
          "size": {
            "value": 60,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 4,
              "size_min": 0.3,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#fff",
            "opacity": 0.5,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 600
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 0,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 0,
              "size": 48.72463273808071,
              "duration": 10,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 1
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
    }
    particlesJS(id, config);
  }

  render () {
    const id = "particles-js-" + this.props.id;

    return (
      <div id={id} style={particlesStyle}></div>
    );
  }
}