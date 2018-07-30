import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Waves from "../Waves/Waves";
import "./Counter.css";

class Player extends React.Component {
	render() {
		let height = this.props.total > 0 ? this.props.current / this.props.total : 0;
		let opacity = this.props.total === this.props.current ? {opacity: "0.5", animation: "dim 1.5s linear 1"} : {opacity: ".95"};
		return (
			<Grid fluid>
				<Row bottom="xs">
					<Col xs={12} style={opacity}>
						<Waves/>
						<div style={{marginTop: "-5px",background: "#FFA000", padding: `calc(15% * ${height} + 10px) 0`, zIndex: "-9", textAlign: "center", transition: "all 1s cubic-bezier(.25,.8,.25,1)"}}>
							<h3 style={{margin: "0", color: "#FF6F00", fontSize: `calc(2vw + 8 * ${height}vw)`, fontWeight: "100"}}>{this.props.current}/{this.props.total}</h3>
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default Player;
