import React from "react";
import Bubbles from "../Components/Bubbles/Bubbles";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div style={{zIndex: "0"}}>
					<Bubbles/>
				</div>
				{this.props.children}
			</div>
		);
	}
}

export default App;
