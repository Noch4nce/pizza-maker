import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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

export const { setSortSelectedTab } = sortSlice.actions

export default sortSlice.reducer
