import React, { Component } from "react"
import { Ninjas } from "./Ninjas"

export default class App extends Component {
	state = {
		ninjas: [
			{ id: 1, name: "Ryu", age: 25, belt: "Black" },
			{ id: 2, name: "Ken", age: 20, belt: "Green" },
			{ id: 3, name: "Hayabusa", age: 35, belt: "Black" },
		],
	}

	render() {
		return (
			<div className="App">
				<h1>My React App</h1>
				<p>
					Welcome{" "}
					<span role="img" aria-label="smiley">
						🙂
					</span>
				</p>
				<Ninjas ninjas={this.state.ninjas} />
			</div>
		)
	}
}
