import React from "react";
import {Link} from "react-router-dom";

class Card extends React.Component {
	render() {
	    let title = this.props.title ? <h4>{this.props.title}</h4> : "";
		let image = this.props.image ? <img src={this.props.image} alt={title}/> : null;
		return (
			<Link to={this.props.to}>
				{image}
				{title}
			</Link>
		);
	}
}

export default Card;
