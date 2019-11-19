"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_1 = require("./default");
require("particles.js/particles");
class Particles extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            style: {
                position: "absolute",
                display: "block",
                top: "0",
                left: "0",
                height: "100%",
                width: "100%"
            }
        };
        this.particlesStyle = {
            position: "absolute",
            display: "block",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%"
        };
    }
    setStateAsync(state) {
        return new Promise(resolve => {
            this.setState(state, resolve);
        });
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            let id;
            if (this.props.id) {
                id = "particles-js-" + this.props.id;
            }
            else {
                console.error("[ERROR] No 'id' prop found in <Particles/> component.");
            }
            let jsonConfigFile, particlesConfig;
            if (this.props.config) {
                try {
                    jsonConfigFile = yield fetch(this.props.config);
                    particlesConfig = yield jsonConfigFile.json();
                }
                catch (e) {
                    console.error("[ERROR] Couldn't load assigned config file; loading default.");
                    particlesConfig = default_1.default;
                }
                yield this.setStateAsync({ configuration: particlesConfig });
            }
            else {
                particlesConfig = default_1.default;
            }
            if (this.props.style) {
                yield this.setStateAsync({
                    style: Object.assign(Object.assign({}, this.particlesStyle), this.props.style)
                });
            }
            window.particlesJS(id, particlesConfig);
        });
    }
    render() {
        return (React.createElement("div", { id: "particles-js-" + this.props.id, style: this.state.style, className: this.props.className ? this.props.className : "" }));
    }
}
exports.default = Particles;
//# sourceMappingURL=Particles.js.map