import React from 'react'
import PizzaBlock from './PizzaBlock'
import pizzasData from '../../../assets/pizzas.json'

const MainItems = () => {
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
