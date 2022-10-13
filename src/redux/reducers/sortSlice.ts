import { createSlice } from '@reduxjs/toolkit'
import { RootStateType } from '../store'

type SortItemTypes = {
	id: number
	name: string
	type: string
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
		type: 'rating',
		orderName: 'убв',
		order: 'desc'
	}
}

export const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		setSortSelectedTab(state, action) {
			state.sortSelectedTab = action.payload
		}
	}
})

export const getSortSelectedTabSelector = (state: RootStateType) =>
	state.sortReducer.sortSelectedTab

export const { setSortSelectedTab } = sortSlice.actions

export default sortSlice.reducer
