import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Menu from "./Pages/Menu";
import "./index.css";
import App from "./Pages/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
	<Router>
		<App>
			<Route exact path="/" component={Menu}/>
		</App>
	</Router>,
	document.getElementById("root")
);
registerServiceWorker();
