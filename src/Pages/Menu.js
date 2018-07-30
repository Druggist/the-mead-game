import React from "react";
import {isMobile} from "react-device-detect";
import { Grid, Row, Col } from "react-flexbox-grid";
import Waves from "../Components/Waves/Waves";
import Card from "../Components/Card/Card";
import DefenderImg from "../Components/Card/images/defender.jpg";
import GodImg from "../Components/Card/images/god.jpg";
import BomImg from "../Components/Card/images/bom.jpg";

class Menu extends React.Component {
	render() {
		return (
			<div className="App">
				<Grid fluid>
					<Row center="xs">
						<Col xs>
							<h1>THE MEAD SONG GAME</h1>
						</Col>
					</Row>
					<Row center="xs">
						<Col xs>
							<h2>SEAL YOUR FATE</h2>
						</Col>
					</Row>
					<Row around="xs" center="xs">
						<Col xs={6} >
							<Card to="/play/defender_of_valhalla" title="Defender of Valhalla" image={DefenderImg}/>
						</Col>
						<Col xs={6}>
							<Card to="/play/god_of_war" title="God of war" image={GodImg}/>
						</Col>
					</Row>
					<Row bottom="xs" style={{minHeight: "100px"}}></Row>
				</Grid>
				{ isMobile ? "" :
					<div className="more-container">
						<Waves/>
						<div className="more">
							<Grid fluid>
								<Row center="xs" style={{flex: "0 1 auto"}}>
									<Col xs={12}>
										<h3 style={{
											animation: "attractor 3s linear infinite",
											fontSize: "24px",
											marginTop: "-15px",
											color: "#E65100"
										}}>Unveil the secrets of power</h3>
									</Col>
								</Row>
								<Row center="xs">
									<Col xs={6}>
										<h3>Ancient inscription</h3>
										<blockquote className="inscription">
											<span>It's not an ordinary song,</span>
											<span>It's a driiinking  gaaaame!</span>
											<span>Like all great games it is really easy to learn,</span>
											<span>When you hear this word: <strong>MEAD</strong>,</span>
											<span>It's time to <strong>DRINK</strong>!</span>
											<span>And when you hear this word: <strong>ANOTHER</strong>,</span>
											<span>It's also time to <strong>DRINK</strong>!</span>
											<cite>Tongue of the Gods</cite>
										</blockquote>
									</Col>
									<Col xs={6}>
										<h3>Become a patron</h3>
										<a className="patron" target="_blank" href="http://fb.com/brothersofmetalofficial">
											<div className="img-container">
												<img src={BomImg} alt="support"/>
											</div>
											<h4>Support the band</h4>
										</a>
										<a href='https://www.freepik.com/free-vector/cute-animal-doing-dabbing_2462530.htm' style={{color: "transparent", position: "absolute", bottom: "0"}}>Designed by Freepik</a>
									</Col>
								</Row>
							</Grid>
						</div>
					</div>
				}
			</div>
		);
	}
}

export default Menu;
