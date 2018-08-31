import React, { Component } from "react"

export class AddTodo extends Component {
	state = {
		content: "",
	}

	onInput = e => {
		this.setState({ content: e.target.value })
	}

	onSubmit = e => {
		e.preventDefault()
		this.props.addTodo(this.state)
		this.setState({ content: "" })
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<label htmlFor="todo">Add new todo:</label>
					<input
						type="text"
						name="todo"
						value={this.state.content}
						onChange={this.onInput}
					/>
				</form>
			</div>
		)
	}
}
