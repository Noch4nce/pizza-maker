import React from 'react'
import Categories from './MainHeader/Categories/Categories'
import Sort from './MainHeader/Sort/Sort'
import MainItems from './MainItems/MainItems'

const MainContent = () => {
	return (
		<div className="content">
			<div className="container">
				<div className="content__top">
					<Categories />
					<Sort />
				</div>
				<h2 className="content__title">Все пиццы</h2>
				<MainItems />
			</div>
		</div>
	)
}

export default MainContent
