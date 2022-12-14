import React, { FC, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import PizzaBlock from './PizzaBlock'
import PizzaSkeleton from './PizzaSkeleton/PizzaSkeleton'
import Pagination from '../../Pagination/Pagination'
import {
	getPageNumberSelector,
	setPageNumber
} from '../../../redux/reducers/paginationSlice'
import { setCategoryId } from '../../../redux/reducers/filterSlice'
import { sortItems } from '../MainHeader/Sort/Sort'
import { setSortSelectedTab } from '../../../redux/reducers/sortReducer/sortSlice'
import ErrorBlock from '../../ErrorBlock/ErrorBlock'
import { getSearchValueSelector } from '../../../redux/reducers/searchSlice'
import { useAppDispatch } from '../../../hooks/appHooks'
import { EnumSortTypes } from '../../../redux/reducers/sortReducer/sortTypes'
import { getPizzasDataSelector } from '../../../redux/reducers/pizzasReducer/pizzasSelectors'
import { fetchPizzasData } from '../../../redux/reducers/pizzasReducer/pizzaAsyncActions'

type SortSelectedTabTypes = {
	id: number
	name: string
	type: EnumSortTypes
	orderName: string
	order: string
}

type PropsTypes = {
	categoryId: number
	sortSelectedTab: SortSelectedTabTypes
}

const MainItems: FC<PropsTypes> = ({ categoryId, sortSelectedTab }) => {
	const searchValue = useSelector(getSearchValueSelector)
	const { pizzasItems, status } = useSelector(getPizzasDataSelector)
	const pageNumber = useSelector(getPageNumberSelector)
	const isSearch = useRef(false)
	const isMounted = useRef(false) // que: why ref?
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const fakeArray = [...Array(10)]

	const fetchPizzasDatta = async () => {
		const sortByAll = `sortBy=${sortSelectedTab.type}`
		const order = `&order=${sortSelectedTab.order}`
		const searchByTitle = searchValue ? `&title=${searchValue}` : ''
		const page = `&page=${pageNumber + 1}&limit=5`
		const sortByCategories = `category=${categoryId}&${sortByAll}${order}${page}${searchByTitle}`

		dispatch(
			fetchPizzasData({
				categoryId: String(categoryId),
				sortByAll,
				order,
				searchByTitle,
				page,
				sortByCategories
			})
		)
	}

	useEffect(() => {
		// console.log(isSearch, "isSearch11111111111111111")
		if (window.location.search) {
			const parseQs = qs.parse(window.location.search.substring(1))
			const sortItem = sortItems.find(
				(item) =>
					item.type === parseQs.sortBy && item.order === parseQs.order
			)

			if (sortItem) {
				dispatch(setSortSelectedTab(sortItem))
			} else {
				dispatch(setSortSelectedTab(sortItems[0]))
			}
			dispatch(setPageNumber(Number(parseQs.page)))
			dispatch(setCategoryId(Number(parseQs.category)))

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
			{status === 'error' ? (
				<ErrorBlock />
			) : (
				<>
					<div className="content__items">
						{status === 'loading'
							? fakeArray.map((_, index) => (
									<PizzaSkeleton key={index} />
							  ))
							: pizzasItems.map((data) => {
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
			)}
		</>
	)
}

export default MainItems
