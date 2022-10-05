import React, { useEffect, useState } from 'react'
import PizzaBlock from './PizzaBlock'
import PizzaSkeleton from './PizzaSkeleton/PizzaSkeleton'

const MainItems = ({ categoryId, sortSelectedTab, searchValue }) => {
	const [pizzasData, setPizzasData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const fakeArray = [...Array(10).keys()]

	useEffect(() => {
		setIsLoading(true)
		const sortByAll = `sortBy=${sortSelectedTab.type}`
		const order = `&order=${sortSelectedTab.order}`
		const sortByCategories = `category=${categoryId}&${sortByAll}${order}`

		fetch(
			'https://63356b088aa85b7c5d1ad1db.mockapi.io/items?' +
				(categoryId ? sortByCategories : sortByAll + order)
		)
			.then((response) => response.json())
			.then((data) => setPizzasData(data))
			.finally(() => setIsLoading(false))
		window.scrollTo(0, 0)
	}, [categoryId, sortSelectedTab])

	console.log(pizzasData, 'pizzasData')

	return (
		<div className="content__items">
			{isLoading
				? fakeArray.map((_, index) => <PizzaSkeleton key={index} />)
				: pizzasData
						.filter((data) =>
							data.title
								.toLowerCase()
								.includes(searchValue.toLowerCase())
						)
						.map((data) => {
							const { id, imageUrl, title, price, sizes, types } =
								data

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
