import React, { useState } from 'react'
import Categories from '../../components/MainContent/MainHeader/Categories/Categories'
import Sort from '../../components/MainContent/MainHeader/Sort/Sort'
import MainItems from '../../components/MainContent/MainItems/MainItems'

const MainPage = ({ searchValue }) => {
	const [categoryId, setCategoryId] = useState(0)
	const [sortSelectedTab, setSortSelectedTab] = useState({
		id: 1,
		name: 'популярности',
		type: 'rating',
		orderName: 'убв',
		order: 'desc'
	})

	return (
		<>
			<div className="content__top">
				<Categories
					categoryId={categoryId}
					onClickChangeId={(index) => setCategoryId(index)}
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
				searchValue={searchValue}
			/>
		</>
	)
}

export default MainPage
