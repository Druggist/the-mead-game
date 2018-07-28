import React from "react";
import "./Label.css";

class Label extends React.Component {
	constructor(props) {
		super(props);
		this.triggerAnimation = this.triggerAnimation.bind(this);
	}

	triggerAnimation() {
		this.header.style.animation = "none";
		this.header.offsetHeight;
		this.header.style.animation = this.props.long ? "pop-long 2s linear 1" : "pop 1s linear 1";
		this.header.style.fontSize = `calc(7vw * ${this.props.strength})`;
	}

	render() {
		let rotation = [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10];
		return (
			<div className="label-container">
				<div style={{transform: `rotate(${rotation[Math.floor(Math.random() * rotation.length)]}deg)`}}>
					<h1 ref={header => {this.header = header;}}>{this.props.label}</h1>
				</div>
			</div>
		);
	}
}

export default Label;
