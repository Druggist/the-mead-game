import React from "react";
import Bubbles from "../Components/Bubbles/Bubbles";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Bubbles/>
				{this.props.children}
			</div>
		);
	}
}

export default App;
