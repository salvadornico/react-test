import React, { Component } from "react"
import { Todos } from "./Todos"
import { AddTodo } from "./AddTodo"

export class App extends Component {
	state = {
		todos: [
			{ id: 1, content: "Buy milk" },
			{ id: 2, content: "Play Mario" },
		],
	}

	addTodo = todo => {
		todo.id = Math.random()
		this.setState({
			todos: [...this.state.todos, todo],
		})
	}

	deleteTodo = id => {
		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id),
		})
	}

	render() {
		return (
			<div className="todo-app container">
				<h1 className="center blue-text">Todo's</h1>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
				<AddTodo addTodo={this.addTodo} />
			</div>
		)
	}
}
