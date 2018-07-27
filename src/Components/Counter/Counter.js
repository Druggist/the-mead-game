import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Waves from "../Waves/Waves";

class Player extends React.Component {
	render() {
		let height = this.props.total > 0 ? this.props.current / this.props.total : 0;
		return (
			<Grid fluid>
				<Row bottom="xs">
					<Col xs={12}>
						<Waves/>
						<div style={{background: "#FFA000", padding: `calc(30% * ${height} + 10px) 0`, zIndex: "-9", textAlign: "center", transition: "all 1s cubic-bezier(.25,.8,.25,1)"}}>
							<h3>{this.props.current}/{this.props.total}</h3>
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default Player;
