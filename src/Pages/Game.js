import React from "react";
import Player from "../Components/Player/Player";

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.mode = props.match.params.mode ? props.match.params.mode : "";
	}
	render() {
		return (
			<Player mode={this.mode}/>
		);
	}
}

export default Game;
