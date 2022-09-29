import React, { useEffect, useState } from 'react'
import PizzaBlock from './PizzaBlock'

const MainItems = () => {
	const [pizzasData, setPizzasData] = useState([])

	useEffect(() => {
		fetch('https://63356b088aa85b7c5d1ad1db.mockapi.io/items')
			.then((response) => response.json())
			.then((data) => setPizzasData(data))
	}, [])

	console.log(pizzasData, "pizzasData")

	return (
		<div className="content__items">
			{pizzasData.map((data) => {
				const { id, imageUrl, title, price, sizes, types } = data

				return (
					<PizzaBlock // short form {..data} ?
						key={id}
						id={id}
						title={title}
						imageUrl={imageUrl}
						price={price}
						sizes={sizes}
						types={types}
					/>
				)
			})}
		</div>
	)
}

export default MainItems
