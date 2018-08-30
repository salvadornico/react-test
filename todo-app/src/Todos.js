import React from "react"

export const Todos = ({ todos, deleteTodo }) => {
	const todoList =
		todos.length > 0 ? (
			todos.map(todo => (
				<div className="collection-item" key={todo.id}>
					<span
						onClick={() => {
							deleteTodo(todo.id)
						}}
					>
						{todo.content}
					</span>
				</div>
			))
		) : (
			<p className="center">You have no todo's left.</p>
		)

	return <div className="todos collection">{todoList}</div>
}
