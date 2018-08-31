import React from "react"

export const Rainbow = WrappedComponent => {
	const colors = ["red", "orange", "pink", "blue", "green", "yellow"]
	const randomColor = colors[Math.floor(Math.random() * (colors.length - 1))]

	return props => (
		<div className={`${randomColor}-text`}>
			<WrappedComponent {...props} />
		</div>
	)
}
