import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	EnumSortTypes,
	initialStateInterface,
	SortItemTypes
} from './sortTypes'

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

export const { setSortSelectedTab } = sortSlice.actions

export default sortSlice.reducer
