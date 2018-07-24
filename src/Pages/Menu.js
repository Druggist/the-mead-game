import React from "react";
import Background from "../Components/Background/Background";
import Card from "../Components/Card/Card";

class Menu extends React.Component {
	render() {
		return (
			<Background>
                <h1>THE MEAD SONG GAME</h1>
                <h2>Choose your fate:</h2>
                <Card to="/" title="Poser & wimp"/>
                <Card to="/" title="True metal warrior"/>
                <Card to="/" title="Rules"/>
			</Background>
		);
	}
}

export default Menu;
