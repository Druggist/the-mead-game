import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Menu from "./Pages/Menu";
import Game from "./Pages/Game";
import "./index.css";
import App from "./Pages/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
	<Router basename={process.env.PUBLIC_URL}>
		<App>
			<Route exact path="/" component={Menu}/>
			<Route path="/play/:mode" component={Game}/>
		</App>
	</Router>,
	document.getElementById("root")
);
registerServiceWorker();
