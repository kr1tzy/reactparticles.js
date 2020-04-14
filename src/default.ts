/*
 *   @desc Default configuration for particles if one isn't provided as a prop.
 */
import type { IOptions } from "tsparticles/dist/Interfaces/Options/IOptions";
import type { RecursivePartial } from "tsparticles/dist/Types/RecursivePartial";
import { MoveDirection } from "tsparticles/dist/Enums/MoveDirection";
import { OutMode } from "tsparticles/dist/Enums/OutMode";
import { InteractivityDetect } from "tsparticles/dist/Enums/InteractivityDetect";
import { HoverMode } from "tsparticles/dist/Enums/Modes/HoverMode";
import { ClickMode } from "tsparticles/dist/Enums/Modes/ClickMode";

const defaultOptions: RecursivePartial<IOptions> = {
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
			direction: MoveDirection.none,
			random: false,
			straight: false,
			out_mode: OutMode.out,
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
		detect_on: InteractivityDetect.canvas,
		events: {
			onhover: {
				enable: true,
				mode: HoverMode.repulse
			},
			onclick: {
				enable: true,
				mode: ClickMode.push
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

export default defaultOptions;
