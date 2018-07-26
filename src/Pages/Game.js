import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Bubbles from "../Components/Bubbles/Bubbles";
import Waves from "../Components/Waves/Waves";

class Menu extends React.Component {
	render() {
		return (
			<Grid fluid>
				<Row>
					<Col xs={6}>
						<Waves />
					</Col>
					<Col xs={6}>
						<Waves/>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default Menu;
