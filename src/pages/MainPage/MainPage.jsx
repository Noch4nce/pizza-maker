import React, { useState } from 'react'
import Categories from '../../components/MainContent/MainHeader/Categories/Categories'
import Sort from '../../components/MainContent/MainHeader/Sort/Sort'
import MainItems from '../../components/MainContent/MainItems/MainItems'

const MainPage = () => {
	const [categoryId, setCategoryId] = useState(0)
	const [sortActiveIndex, setSortActiveIndex] = useState(0)

	return (
		<>
			<div className="content__top">
				<Categories
					categoryId={categoryId}
					onClickChangeId={(index) => setCategoryId(index)}
				/>
				<Sort sortActiveIndex={sortActiveIndex} onClickChangeSortIndex={(index) => setSortActiveIndex(index)} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<MainItems categoryId={categoryId} sortActiveIndex={sortActiveIndex} />
		</>
	)
}

export default MainPage
