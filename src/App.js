import React, { Component } from "react"
import { AddNinja } from "./AddNinja"
import { Ninjas } from "./Ninjas"

export class App extends Component {
	state = {
		ninjas: [
			{ id: 1, name: "Ryu", age: 25, belt: "Black" },
			{ id: 2, name: "Ken", age: 20, belt: "Green" },
			{ id: 3, name: "Hayabusa", age: 35, belt: "Black" },
			{ id: 4, name: "Ayumi", age: 25, belt: "Purple" },
		],
	}

	addNinja = ninja => {
		ninja.id = Math.random()
		this.setState({
			ninjas: [...this.state.ninjas, ninja],
		})
	}

	deleteNinja = id => {
		this.setState({
			ninjas: this.state.ninjas.filter(ninja => ninja.id !== id),
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
				<Ninjas
					ninjas={this.state.ninjas}
					deleteNinja={this.deleteNinja}
				/>
				<br />
				<AddNinja addNinja={this.addNinja} />
			</div>
		)
	}
}
