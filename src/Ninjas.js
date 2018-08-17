import React from "react"

export const Ninjas = ({ ninjas }) => {
	const ninjaList = ninjas.map(ninja => {
		if (ninja.age <= 20) {
			return null
		}

		return (
			<div className="ninja" key={ninja.id}>
				<div>Name: {ninja.name}</div>
				<div>Age: {ninja.age}</div>
				<div>Belt: {ninja.belt}</div>
			</div>
		)
	})

	return <div className="ninja-list">{ninjaList}</div>
}
