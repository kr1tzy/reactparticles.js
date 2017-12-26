'use strict';

var _typeof3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof3(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof3(obj);
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);var value = info.value;
        } catch (error) {
          reject(error);return;
        }if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }return step("next");
    });
  };
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('particles.js/particles');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var particlesJS = window.particlesJS;

var particlesStyle = {
  position: 'absolute',
  display: 'block',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%'
};

var Particles = function (_Component) {
  _inherits(Particles, _Component);

  function Particles(props) {
    _classCallCheck(this, Particles);

    var _this = _possibleConstructorReturn(this, (Particles.__proto__ || Object.getPrototypeOf(Particles)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Particles, [{
    key: 'setStateAsync',
    value: function setStateAsync(state) {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.setState(state, resolve);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var id, response, config;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = void 0;

                if (this.props.id) {
                  id = "particles-js-" + this.props.id;
                } else {
                  console.error("[ERROR] No 'id' prop found in <Particles/> component.\n\n" + "\tExamples:\n" + "\t-> <Particles id=\"42\"/>\n" + "\t-> <Particles id=\"bacon\"/>\n\n");
                }

                response = void 0, config = void 0;

                if (!this.props.config) {
                  _context.next = 21;
                  break;
                }

                _context.prev = 4;
                _context.next = 7;
                return fetch(this.props.config);

              case 7:
                response = _context.sent;
                _context.next = 10;
                return response.json();

              case 10:
                config = _context.sent;
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](4);

                alert("[ERROR] Couldn't load the assigned config file for your <Particles/> component.\n\n" + "Check your console or the README for examples.");

                console.error("[ERROR] Couldn't load assigned config file.\n\n" + "\tExamples:\n" + "\t-> <Particles id=\"bacon\" config=\"bacon-particles-config.json\"/>\n" + "\t-> <Particles id=\"bacon\" config=\"particles/bacon-particles-config.json\"/>\n\n" + "\t* Path to config file is relative to your index.html *\n\n");

              case 17:
                _context.next = 19;
                return this.setStateAsync({ configuration: config });

              case 19:
                _context.next = 22;
                break;

              case 21:

                // Default value of particles.
                config = {
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
                };

              case 22:
                particlesJS(id, config);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 13]]);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var id = "particles-js-" + this.props.id;

      return _react2.default.createElement('div', { id: id, style: particlesStyle });
    }
  }]);

  return Particles;
}(_react.Component);

exports.default = Particles;