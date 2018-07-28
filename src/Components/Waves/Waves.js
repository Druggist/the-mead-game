import React from "react";
import WavesImg1 from "./images/wave1.png";
import WavesImg2 from "./images/wave2.png";
import "./Waves.css";

class Waves extends React.Component {
	render() {
		return (
			<div className="waves">
				<div className="wave" style={{backgroundImage: `url(${WavesImg1})`, backgroundSize: "50% 75px", animation: "wave 5s linear infinite"}}></div>
				<div className="wave" style={{backgroundImage: `url(${WavesImg2})`, backgroundSize: "50% 75px", animation: "wave 8s linear infinite"}}></div>
			</div>
		);
	}
}

export default Waves;
