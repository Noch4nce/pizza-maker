import React, { useContext, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import PizzaBlock from './PizzaBlock'
import PizzaSkeleton from './PizzaSkeleton/PizzaSkeleton'
import Pagination from '../../Pagination/Pagination'
import { SearchContext } from '../../../App'
import { setPageNumber } from '../../../redux/reducers/paginationSlice'
import { setCategoryId } from '../../../redux/reducers/filterSlice'
import { sortItems } from '../MainHeader/Sort/Sort'
import { setSortSelectedTab } from '../../../redux/reducers/sortSlice'

const MainItems = ({ categoryId, sortSelectedTab }) => {
	const { searchValue } = useContext(SearchContext)
	const [pizzasData, setPizzasData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const pageNumber = useSelector(
		(state) => state.paginationReducer.pageNumber
	)
	const isSearch = useRef(false)
	const isMounted = useRef(false) // que: why ref?
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const fakeArray = [...Array(10).keys()]

	const fetchPizzasDatta = () => {
		setIsLoading(true)
		const sortByAll = `sortBy=${sortSelectedTab.type}`
		const order = `&order=${sortSelectedTab.order}`
		const searchByTitle = searchValue ? `&title=${searchValue}` : ''
		const page = `&page=${pageNumber + 1}&limit=5`
		const sortByCategories = `category=${categoryId}&${sortByAll}${order}${page}${searchByTitle}`

		axios
			.get(
				'https://63356b088aa85b7c5d1ad1db.mockapi.io/items?' +
					(categoryId
						? sortByCategories
						: sortByAll + order + page + searchByTitle)
			)
			.then((res) => setPizzasData(res.data))
			.finally(() => setIsLoading(false))
	}

	useEffect(() => {
		// console.log(isSearch, "isSearch11111111111111111")
		if (window.location.search) {
			const parseQs = qs.parse(window.location.search.substring(1))
			const sortItem = sortItems.find(
				(item) =>
					item.type === parseQs.sortBy && item.order === parseQs.order
			)

			dispatch(setPageNumber(Number(parseQs.page)))
			dispatch(setCategoryId(Number(parseQs.category)))
			dispatch(setSortSelectedTab(sortItem))

			isSearch.current = true
		}
		// debugger
		// console.log(isSearch, "isSearch22222222222222")
	}, [])

	useEffect(() => {
		// que: render-rerender, taski - excess fetch??
		// console.log(isSearch, "isSearch3333333333333333333")
		// console.log(categoryId, "categoryId!!!!!!!!!!!!")
		if (!isSearch.current) {
			// console.log('FEEEEEEEEEEETCH')
			fetchPizzasDatta()
		}
		isSearch.current = false
		// debugger
		// console.log(isSearch, "isSearch4444444444444444444444")

		window.scrollTo(0, 0)
	}, [categoryId, sortSelectedTab, searchValue, pageNumber])

	useEffect(() => {
		if (isMounted.current) {
			const patch = qs.stringify({
				category: categoryId,
				sortBy: sortSelectedTab.type,
				order: sortSelectedTab.order,
				page: pageNumber
			})

			navigate(`?${patch}`)
		}
		isMounted.current = true
	}, [categoryId, sortSelectedTab, pageNumber])

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
									<PizzaBlock //que: short form {..data} ?
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

			<Pagination
				onChangePageNumber={(pageNumber) =>
					dispatch(setPageNumber(pageNumber))
				}
			/>
		</>
	)
}

export default MainItems
