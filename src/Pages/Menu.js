import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Waves from "../Components/Waves/Waves";
import Card from "../Components/Card/Card";
import PoserImg from "../Components/Card/images/poser.jpg";
import WarriorImg from "../Components/Card/images/warrior.jpg";

class Menu extends React.Component {
	render() {
		return (
			<Grid fluid>
				<Row center="xs">
					<Col xs>
						<h1>THE MEAD SONG GAME</h1>
					</Col>
				</Row>
				<Row center="xs">
					<Col xs>
						<h2>CHOOSE YOUR FATE</h2>
					</Col>
				</Row>
				<Row around="xs" center="xs">
					<Col xs={6} >
						<Card to="/play/poser" title="Wimp & poser" image={PoserImg}/>
					</Col>
					<Col xs={6}>
						<Card to="/play/warrior" title="True metal warrior" image={WarriorImg}/>
					</Col>
				</Row>
				<Row bottom="xs">
					<Col xs={12}>
						<Waves/>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default Menu;
