"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MoveDirection_1 = require("tsparticles/dist/Enums/MoveDirection");
const OutMode_1 = require("tsparticles/dist/Enums/OutMode");
const InteractivityDetect_1 = require("tsparticles/dist/Enums/InteractivityDetect");
const HoverMode_1 = require("tsparticles/dist/Enums/Modes/HoverMode");
const ClickMode_1 = require("tsparticles/dist/Enums/Modes/ClickMode");
const defaultOptions = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: MoveDirection_1.MoveDirection.none,
            random: false,
            straight: false,
            out_mode: OutMode_1.OutMode.out,
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: InteractivityDetect_1.InteractivityDetect.canvas,
        events: {
            onhover: {
                enable: true,
                mode: HoverMode_1.HoverMode.repulse
            },
            onclick: {
                enable: true,
                mode: ClickMode_1.ClickMode.push
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
};
exports.default = defaultOptions;
//# sourceMappingURL=default.js.map