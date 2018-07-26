import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Counter from "../Counter/Counter";
import YouTube from "react-youtube";
import gameData from "./gameData";

class Player extends React.Component {
	constructor(props) {
		super(props);
		this.reqTime = 10;
		this.onTimeChange = this.onTimeChange.bind(this);
		this.data = {};
		this.state = {currentMead: 0, currentAnother: 0};
		if (props.mode === "warrior") this.data = gameData.warrior ? gameData.warrior : {};
		else if (props.mode === "poser") this.data = gameData.poser ? gameData.poser : {};
	}



	onTimeChange(event) {
		setTimeout(() => {
			let videoTime = event.target.getCurrentTime();
			if(this.reqTime <= videoTime) {
				//TODO: get next reqTime
				//TODO: popup
			} else {
				this.onTimeChange(event);
			}
		}, 100);
	}

	render() {
		const opts = {
			height: "100%",
			width: "100%",
			playerVars: {
				autoplay: 1,
				cc_load_policy: 0,
				controls: 0,
				disablekb: 1,
				enablejsapi: 1,
				fs: 0,
				iv_load_policy: 3,
				rel: 0,
				showinfo: 0
			}
		};

		return (
			<div className="App">
				<div style={{position: "absolute", width: "100%", height: "100%", zIndex: "-9"}}>
					<YouTube videoId={this.data.videoId ? this.data.videoId : "dQw4w9WgXcQ"} opts={opts} onReady={this.onTimeChange}/>
				</div>
				<Grid fluid>
					<Row>
						<Col xs={6}>
							<Counter current={this.state.currentMead} total={this.data.mead ? this.data.mead.length : 0}/>
						</Col>
						<Col xs={6}>
							<Counter current={this.state.currentAnother} total={this.data.another ? this.data.another.length : 0}/>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Player;
