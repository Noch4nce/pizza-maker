import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStateType } from '../store'

export enum EnumSortTypes {
	RATING = 'rating',
	PRICE = 'price',
	TITLE = 'title'
}

type SortItemTypes = {
	id: number
	name: string
	type: EnumSortTypes
	orderName: string
	order: string
}

interface initialStateInterface {
	sortSelectedTab: SortItemTypes
}

const initialState: initialStateInterface = {
	sortSelectedTab: {
		id: 1,
		name: 'популярности',
		type: EnumSortTypes.RATING,
		orderName: 'убв',
		order: 'desc'
	}
}

export const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		setSortSelectedTab(state, action: PayloadAction<SortItemTypes>) {
			state.sortSelectedTab = action.payload
		}
	}
})

export const getSortSelectedTabSelector = (state: RootStateType) =>
	state.sortReducer.sortSelectedTab

export const { setSortSelectedTab } = sortSlice.actions

export default sortSlice.reducer
