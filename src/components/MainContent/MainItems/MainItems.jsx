import React, { useEffect, useState } from 'react'
import PizzaBlock from './PizzaBlock'
import PizzaSkeleton from './PizzaSkeleton/PizzaSkeleton'
import Pagination from '../../Pagination/Pagination'

const MainItems = ({ categoryId, sortSelectedTab, searchValue }) => {
	const [pizzasData, setPizzasData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [pageNumber, setPageNumber] = useState(0)
	const [pageCount, setPageCount] = useState(0);
	const fakeArray = [...Array(10).keys()]

	useEffect(() => {
		setIsLoading(true)
		const sortByAll = `sortBy=${sortSelectedTab.type}`
		const order = `&order=${sortSelectedTab.order}`
		const searchByTitle = searchValue ? `&title=${searchValue}` : ''
		const page = `&page=${pageNumber + 1}&limit=8`
		const sortByCategories = `category=${categoryId}&${sortByAll}${order}${page}${searchByTitle}`
		console.log(page, 'page')
		fetch(
			'https://63356b088aa85b7c5d1ad1db.mockapi.io/items?' +
				(categoryId
					? sortByCategories
					: sortByAll + order + page + searchByTitle)
		)
			.then((response) => response.json())
			.then((data) => setPizzasData(data))
			.finally(() => setIsLoading(false))
		window.scrollTo(0, 0)
	}, [categoryId, sortSelectedTab, searchValue, pageNumber])

	useEffect(() => {
		setPageCount(Math.ceil(pizzasData.length / 8));
	}, [pizzasData])
	console.log(pageCount, "pageCountpageCount")

	console.log(pizzasData, 'pizzasData')

	return (
		<>
			<div className="content__items">
				{isLoading
					? fakeArray.map((_, index) => <PizzaSkeleton key={index} />)
					: pizzasData
							// .filter((data) =>
							// 	data.title
							// 		.toLowerCase()
							// 		.includes(searchValue.toLowerCase())
							// )
							.map((data) => {
								const {
									id,
									imageUrl,
									title,
									price,
									sizes,
									types
								} = data

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

			<Pagination pageCount={pageCount} setPageNumber={setPageNumber} />
		</>
	)
}

export default MainItems
