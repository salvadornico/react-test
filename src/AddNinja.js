import React, { Component } from "react"

export default class AddNinja extends Component {
	state = {
		name: null,
		age: null,
		belt: null,
	}

	onInput = e => {
		this.setState({ [e.target.id]: e.target.value })
	}

	onSubmit = e => {
		e.preventDefault()
		this.props.addNinja(this.state)
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" onChange={this.onInput} />
					<label htmlFor="age">Age</label>
					<input type="text" id="age" onChange={this.onInput} />
					<label htmlFor="belt">Belt</label>
					<input type="text" id="belt" onChange={this.onInput} />
					<button>Submit</button>
				</form>
			</div>
		)
	}
}
