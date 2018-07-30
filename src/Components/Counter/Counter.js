import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Waves from "../Waves/Waves";
import SwordImg from "../Counter/images/sword.png";
import "./Counter.css";

class Counter extends React.Component {
	render() {
		let height = this.props.total > 0 ? this.props.current / this.props.total : 0;
		let opacity = this.props.total === this.props.current ? {opacity: "0.5", animation: "dim 1.5s linear 1"} : {opacity: ".95"};
		return (
			<Grid fluid className="counter">
				<Row bottom="xs">
					<Col xs={12} style={opacity}>
						<div className="img-container">
							<img src={SwordImg} alt="sword" style={{marginTop: `calc(100vh - 170px - 2vw - 8 * ${this.props.swordPos}vw - 40vh * ${this.props.swordPos})`}}/>
						</div>
						<Waves/>
						<div style={{marginTop: "-5px",background: "#FFA000", padding: `calc(15vh * ${height} + 10px) 0`, zIndex: "-9", textAlign: "center", transition: "all 1s cubic-bezier(.25,.8,.25,1)"}}>
							<h3 style={{margin: "0", color: "#FF6F00", fontSize: `calc(2vw + 8 * ${height}vw)`, fontWeight: "100"}}>{this.props.current}/{this.props.total}</h3>
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default Counter;
