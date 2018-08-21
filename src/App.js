import React, { Component } from "react"
import AddNinja from "./AddNinja"
import { Ninjas } from "./Ninjas"

export default class App extends Component {
	state = {
		ninjas: [
			{ id: 1, name: "Ryu", age: 25, belt: "Black" },
			{ id: 2, name: "Ken", age: 20, belt: "Green" },
			{ id: 3, name: "Hayabusa", age: 35, belt: "Black" },
		],
	}

	addNinja = ninja => {
		ninja.id = this.state.ninjas.length + 1
		this.setState({
			ninjas: [...this.state.ninjas, ninja],
		})
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
				<br />
				<Ninjas ninjas={this.state.ninjas} />
				<br />
				<AddNinja addNinja={this.addNinja} />
			</div>
		)
	}
}
