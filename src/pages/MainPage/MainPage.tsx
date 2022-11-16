import React, { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../redux/store'
import { useAppDispatch } from '../../hooks/appHooks'

import {
	getCategoryIdSelector,
	setCategoryId
} from '../../redux/reducers/filterSlice'
import { setSortSelectedTab } from '../../redux/reducers/sortReducer/sortSlice'
import Categories from '../../components/MainContent/MainHeader/Categories/Categories'
import Sort from '../../components/MainContent/MainHeader/Sort/Sort'
import MainItems from '../../components/MainContent/MainItems/MainItems'
import { EnumSortTypes } from '../../redux/reducers/sortReducer/sortTypes'
import { getSortSelectedTabSelector } from '../../redux/reducers/sortReducer/sortSelectors'
import StoriesList from '../../components/MainContent/MainItems/StoriesList/StoriesList'
import RecommendedItems from '../../components/MainContent/MainItems/RecommendedItems/RecommendedItems'

type SortItemTypes = {
	id: number
	name: string
	type: EnumSortTypes
	orderName: string
	order: string
}

const MainPage: FC = () => {
	const { categoryId, sortSelectedTab } = useSelector(
		(state: RootStateType) => ({
			categoryId: getCategoryIdSelector(state),
			sortSelectedTab: getSortSelectedTabSelector(state)
		})
	)
	const dispatch = useAppDispatch()

	return (
		<>
			<div className="content__top">
				<Categories
					categoryId={categoryId}
					onClickChangeId={useCallback((index: number) => {
						dispatch(setCategoryId(index))
					}, [])}
				/>
				<Sort
					sortSelectedTab={sortSelectedTab}
					onClickSortTab={useCallback((item: SortItemTypes) => {
						dispatch(setSortSelectedTab(item))
					}, [])}
				/>
			</div>
			<StoriesList />
			<RecommendedItems />
			<h2 className="content__title">Пицца</h2>
			<MainItems
				categoryId={categoryId}
				sortSelectedTab={sortSelectedTab}
			/>
		</>
	)
}

export default MainPage
