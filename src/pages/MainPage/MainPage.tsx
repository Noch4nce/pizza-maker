import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../redux/store'
import { useAppDispatch } from '../../hooks/appHooks'

import {
	getCategoryIdSelector,
	setCategoryId
} from '../../redux/reducers/filterSlice'
import {
	EnumSortTypes,
	getSortSelectedTabSelector,
	setSortSelectedTab
} from '../../redux/reducers/sortSlice'
import Categories from '../../components/MainContent/MainHeader/Categories/Categories'
import Sort from '../../components/MainContent/MainHeader/Sort/Sort'
import MainItems from '../../components/MainContent/MainItems/MainItems'

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
					onClickChangeId={(index: number) =>
						dispatch(setCategoryId(index))
					}
				/>
				<Sort
					sortSelectedTab={sortSelectedTab}
					onClickSortTab={(item: SortItemTypes) =>
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
