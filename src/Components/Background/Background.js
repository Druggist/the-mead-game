import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particles";

class Background extends React.Component {
	render() {
		return (
			<div>
				<Particles params={particlesConfig} style={{width: "100%", height: "100%", position: "absolute"}}/>
				{this.props.children}
			</div>
		);
	}
}

export default Background;
