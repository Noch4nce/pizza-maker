import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	pageNumber: 0
}

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setPageNumber(state, action) {
			state.pageNumber = action.payload
		}
	}
})

export const getPageNumberSelector = (state) =>
	state.paginationReducer.pageNumber

export const { setPageNumber } = paginationSlice.actions

export default paginationSlice.reducer
