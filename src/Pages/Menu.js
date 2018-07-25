import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Bubbles from "../Components/Bubbles/Bubbles";
import Waves from "../Components/Waves/Waves";
import Card from "../Components/Card/Card";
import PoserImg from "../Components/Card/images/poser.jpg";
import WarriorImg from "../Components/Card/images/warrior.jpg";

class Menu extends React.Component {
	render() {
		return (
			<div>
				<Bubbles/>
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
							<Card to="/" title="Poser & wimp" image={PoserImg} style={{maxWidth: "400px!important"}}/>
						</Col>
						<Col xs={6}>
							<Card to="/" title="True metal warrior" image={WarriorImg}/>
						</Col>
					</Row>
				</Grid>
				<Waves/>
			</div>
		);
	}
}

export default Menu;
