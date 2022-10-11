import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	getCategoryIdSelector,
	setCategoryId
} from '../../redux/reducers/filterSlice'
import {
	getSortSelectedTabSelector,
	setSortSelectedTab
} from '../../redux/reducers/sortSlice'
import Categories from '../../components/MainContent/MainHeader/Categories/Categories'
import Sort from '../../components/MainContent/MainHeader/Sort/Sort'
import MainItems from '../../components/MainContent/MainItems/MainItems'

const MainPage = () => {
	const { categoryId, sortSelectedTab } = useSelector((state) => ({
		categoryId: getCategoryIdSelector(state),
		sortSelectedTab: getSortSelectedTabSelector(state)
	}))

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
					onClickSortTab={(item) =>
						dispatch(setSortSelectedTab(item))
					}
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
