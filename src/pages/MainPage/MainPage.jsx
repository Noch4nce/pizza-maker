import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../../redux/reducers/filterSlice'

import Categories from '../../components/MainContent/MainHeader/Categories/Categories'
import Sort from '../../components/MainContent/MainHeader/Sort/Sort'
import MainItems from '../../components/MainContent/MainItems/MainItems'

const MainPage = () => {
	const [sortSelectedTab, setSortSelectedTab] = useState({
		id: 1,
		name: 'популярности',
		type: 'rating',
		orderName: 'убв',
		order: 'desc'
	})
	const { categoryId } = useSelector((state) => state.filterReducer)
	const dispatch = useDispatch()

	return (
		<>
			<div className="content__top">
				<Categories
					categoryId={categoryId}
					onClickChangeId={(index) => dispatch(setCategoryId(index))}
				/>
				<Sort
					sortSelectedTab={sortSelectedTab}
					onClickSortTab={(index) => setSortSelectedTab(index)}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<MainItems
				categoryId={categoryId}
				sortSelectedTab={sortSelectedTab}
			/>
		</>
	)
}

export default MainPage
