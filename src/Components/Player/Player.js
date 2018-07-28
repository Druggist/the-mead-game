import React from "react";
import { withRouter } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import Counter from "../Counter/Counter";
import Label from "../Label/Label";
import YouTube from "react-youtube";
import gameData from "./gameData";
import "./Player.css";

class Player extends React.Component {
	constructor(props) {
		super(props);
		this.onTimeChange = this.onTimeChange.bind(this);
		this.onReady = this.onReady.bind(this);
		this.onEnd = this.onEnd.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.mead = React.createRef();
		this.another = React.createRef();
		this.status = "start";

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
			another: another,
			popupText: "Are you ready?",
			popupHelperText: "Press any key to start"
		};
	}

	componentDidMount(){
		document.addEventListener("keydown", this.handleInput, false);
	}
	componentWillUnmount(){
		document.removeEventListener("keydown", this.handleInput, false);
	}

	handleInput(event) {
		switch (this.status) {
		case "start":
			this.startGame();
			break;
		case "running":
			if(event.keyCode === 80 || event.keyCode === 32 || event.keyCode === 27) this.pauseGame();
			else if(event.keyCode === 82) this.restartGame();
			break;
		case "paused":
			this.resumeGame();
			break;
		case "end":
			this.endGame();
			break;
		default:
		}
	}

	startGame() {
		if(this.youtube) {
			document.getElementById("popup").style.animation = "hide .5s linear 1";
			document.getElementById("popup").style.opacity = "0";
			this.youtube.playVideo();
			this.status = "running";
			setTimeout(() => {
				this.setState({popupText: "PAUSED", popupHelperText: "Press any key to resume"});
			}, 500);
		}
	}

	pauseGame() {
		document.getElementById("popup").style.animation = "show .5s linear 1";
		document.getElementById("popup").style.opacity = "1";
		this.youtube.pauseVideo();
		this.status = "paused";
	}

	resumeGame() {
		document.getElementById("popup").style.animation = "hide .5s linear 1";
		document.getElementById("popup").style.opacity = "0";
		this.youtube.playVideo();
		this.status = "running";
	}

	restartGame() {
		this.props.history.replace("/");
		this.props.history.replace("/play/" + this.props.mode);
	}

	endGame() {
		this.props.history.push("/");
	}

	triggerTimestamp() {
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
		this.onTimeChange();
	}

	onTimeChange() {
		setTimeout(() => {
			let videoTime = this.youtube.getCurrentTime();
			if (this.reqTime > 0) if (this.reqTime <= videoTime) {
				this.triggerTimestamp();
			} else {
				if(this.status === "running") this.onTimeChange();
			}
		}, 100);
	}

	onReady(event) {
		this.youtube = event.target;
	}

	onEnd() {
		this.setState({popupText: "YOU MADE IT", popupHelperText: "Press any key to go back"});
		document.getElementById("popup").style.animation = "show .5s linear 1";
		document.getElementById("popup").style.opacity = "1";
		this.status = "end";
	}

	render() {
		const opts = {
			height: "100%",
			width: "100%",
			playerVars: {
				autoplay: 0,
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
				<div id="popup">
					<div className="bg"></div>
					<Grid fluid className="content">
						<Row center="xs" middle="xs">
							<Col xs={12}>
								<h1>{this.state.popupText}</h1>
							</Col>
						</Row>
						<Row center="xs" middle="xs">
							<Col xs={12}>
								<h2 style={{animation: "attractor 5s linear infinite"}}>{this.state.popupHelperText}</h2>
							</Col>
						</Row>
					</Grid>
				</div>
				<div style={{position: "absolute", width: "100%", height: "100%", zIndex: "-9"}}>
					<YouTube videoId={this.data.videoId ? this.data.videoId : "dQw4w9WgXcQ"} opts={opts}
							 onEnd={this.onEnd} onReady={this.onReady} onPlay={this.onTimeChange}/>
				</div>
				<Grid fluid>
					<Row>
						<Col xs={6}>
							<Grid fluid>
								<Row bottom="xs">
									<Col xs={12}>
										<Label ref={this.mead} label="mead" strength={this.state.mead.strength} long={this.state.mead.long}/>
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
										<Label ref={this.another} label="another" strength={this.state.another.strength} long={this.state.another.long}/>
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


export default withRouter(Player);
