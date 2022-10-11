import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const DetailInfoPage = () => {
	const params = useParams()
	const [pizzaItem, setPizzaItem] = useState({})

	useEffect(() => {
		async function fetchPizzaById() {
			const resp = await axios.get(
				'https://63356b088aa85b7c5d1ad1db.mockapi.io/items/' + params.id
			)

			setPizzaItem(resp.data)
		}

		fetchPizzaById()
	}, [])
	console.log(pizzaItem, 'pizzaItem')

	return (
		<div className="pizza-block__wrapper">
			<div className="pizza-block">
				<img
					className="pizza-block__image"
					src={pizzaItem.imageUrl}
					alt={pizzaItem.title}
				/>
				<h4 className="pizza-block__title">{pizzaItem.title}</h4>

				<span className="pizza-block__price">
					от {pizzaItem.price} ₽
				</span>
			</div>
		</div>
	)
}

export default DetailInfoPage
