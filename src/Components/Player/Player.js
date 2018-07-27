import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Counter from "../Counter/Counter";
import Label from "../Label/Label";
import YouTube from "react-youtube";
import gameData from "./gameData";

class Player extends React.Component {
	constructor(props) {
		super(props);
		this.onTimeChange = this.onTimeChange.bind(this);
		this.mead = React.createRef();
		this.another = React.createRef();

		this.data = {};
		if (props.mode === "warrior") this.data = gameData.warrior ? gameData.warrior : {};
		else if (props.mode === "poser") this.data = gameData.poser ? gameData.poser : {};

		let mead = {};
		let another = {};
		this.reqTime = -1;
		if(this.data.mead && this.data.mead[0]) {
			mead = this.data.mead[0];
			this.reqTime = mead.timestamp;
		}
		if(this.data.another && this.data.another[0]) {
			another = this.data.another[0];
			if(this.reqTime < 0 || this.reqTime > another.timestamp) this.reqTime = another.timestamp;
		}
		this.state = {
			meadCounter: 0,
			anotherCounter: 0,
			mead: mead,
			another: another
		};
		console.log("reqTime", this.reqTime);
		console.log("state", this.state);
	}

	triggerTimestamp(event) {
		if(this.reqTime === this.state.mead.timestamp) {
			this.mead.current.triggerAnimation();
			if(this.data.mead[this.state.meadCounter + 1]) {
				this.setState({mead: this.data.mead[this.state.meadCounter + 1], meadCounter: this.state.meadCounter + 1});
				if(this.state.another.timestamp)
					this.reqTime = this.state.mead.timestamp < this.state.another.timestamp ? this.state.mead.timestamp : this.state.another.timestamp;
				else this.reqTime = this.state.mead.timestamp;
			} else {
				this.setState({mead: {}, meadCounter: this.state.meadCounter + 1});
				this.reqTime = this.state.another.timestamp ? this.state.another.timestamp : -1;
			}
		} else {
			this.another.current.triggerAnimation();
			if(this.data.another[this.state.anotherCounter + 1]) {
				this.setState({another: this.data.another[this.state.anotherCounter + 1], anotherCounter: this.state.anotherCounter + 1});
				if(this.state.mead.timestamp)
					this.reqTime = this.state.mead.timestamp < this.state.another.timestamp ? this.state.mead.timestamp : this.state.another.timestamp;
				else this.reqTime = this.state.another.timestamp;
			} else {
				this.setState({another: {}, anotherCounter: this.state.anotherCounter + 1});
				this.reqTime = this.state.another.timestamp ? this.state.another.timestamp : -1;
			}
		}
		this.onTimeChange(event);
	}

	onTimeChange(event) {
		setTimeout(() => {
			let videoTime = event.target.getCurrentTime();
			if (this.reqTime > 0) if (this.reqTime <= videoTime) {
				this.triggerTimestamp(event);
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
							<Grid fluid>
								<Row bottom="xs">
									<Col xs={12}>
										<Label ref={this.mead} label="mead"/>
									</Col>
								</Row>
								<Row>
									<Col xs={12}>
										<Counter current={this.state.meadCounter} total={this.data.mead ? this.data.mead.length : 0}/>
									</Col>
								</Row>
							</Grid>
						</Col>
						<Col xs={6}>
							<Grid fluid>
								<Row bottom="xs">
									<Col xs={12}>
										<Label ref={this.another} label="another"/>
									</Col>
								</Row>
								<Row>
									<Col xs={12}>
										<Counter current={this.state.anotherCounter} total={this.data.another ? this.data.another.length : 0}/>
									</Col>
								</Row>
							</Grid>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Player;
