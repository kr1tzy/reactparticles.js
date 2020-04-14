import * as React from "react";
import { Props, State } from "../index";
import defaultConfig from "./default";
import { tsParticles } from "tsparticles/dist/index";

/*
 * @desc ReactParticles.js class
 */
export default class Particles extends React.Component<Props, State> {
	// Initial state is the default style; style can be overridden
	state = {
		style: {
			position: "absolute" as "absolute",
			display: "block",
			top: "0",
			left: "0",
			height: "100%",
			width: "100%"
		}
	};

	// Asynchronously saves the configuration to the state after it's retrieved
	setStateAsync(state: any) {
		return new Promise(resolve => {
			this.setState(state, resolve);
		});
	}

	// Set up the class on mount
	async componentDidMount() {
		// Grab the id; log error if it's not passed
		let id: any;
		if (this.props.id) {
			id = "particles-js-" + this.props.id;
		} else {
			console.error("[ERROR] No 'id' prop found in <Particles/> component.");
		}

		// Set up the particles configuration; default if not passed; log error if not fetched
		let jsonConfigFile: any, particlesConfig: any;
		if (this.props.config) {
			try {
				jsonConfigFile = await fetch(this.props.config);
				particlesConfig = await jsonConfigFile.json();
			} catch (e) {
				console.error(
					"[ERROR] Couldn't load assigned config file; loading default."
				);
				particlesConfig = defaultConfig;
			}

			// Save the configuration to the component state
			await this.setStateAsync({ configuration: particlesConfig });
		} else {
			// None passed; default
			particlesConfig = defaultConfig;
		}

		// Set up the particles style; merges default with what's passed; overrides if a default value is passed
		if (this.props.style) {
			await this.setStateAsync({
				style: { ...this.state.style, ...this.props.style }
			});
		}

		// Set up the particles via particles.js
		tsParticles.load(id, particlesConfig);
	}

	render() {
		return (
			<div
				id={ "particles-js-" + this.props.id }
				style={ this.state.style }
				className={ this.props.className ? this.props.className : "" }
			></div>
		);
	}
}
