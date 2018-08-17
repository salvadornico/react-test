import React, { Component } from "react"
import Ninjas from "./Ninjas"

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>My React App</h1>
				<p>Welcome 🙂</p>
				<Ninjas />
			</div>
		)
	}
}
