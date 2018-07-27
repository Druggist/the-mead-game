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
		this.header.style.animation = "pop 1s linear 1";
	}

	render() {
		return (
			<div className="label-container">
				<h1 ref={header => {this.header = header;}} style={{fontSize: `calc(7vw * ${this.props.strength})`}}>{this.props.label}</h1>
			</div>
		);
	}
}

export default Label;
