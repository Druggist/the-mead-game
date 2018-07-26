import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particles";

class Bubbles extends React.Component {
	render() {
		return (
			<Particles params={particlesConfig} style={{width: "100%", height: "100%", position: "absolute", zIndex: "0"}}/>
		);
	}
}

export default Bubbles;
